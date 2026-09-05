import { test, expect } from '@playwright/test';

test.describe('Github Stats E2E', () => {
  test('should load and display github stats correctly on desktop', async ({ page, isMobile }) => {
    // Intercept API call to return mock data for stability
    await page.route('**/api/github', async (route) => {
      const json = {
        userData: {
          login: 'TestUser',
          avatar_url: 'https://github.com/MaskDMoa.png',
          bio: 'Test Bio',
          public_repos: 99,
          followers: 55,
        },
        reposData: [
          { stargazers_count: 100, language: 'Rust' },
        ]
      };
      await route.fulfill({ json });
    });

    await page.goto('/', { waitUntil: 'domcontentloaded' });

    const statsContainer = page.getByTestId('github-stats');

    if (isMobile) {
      // Wrapper uses 'hidden md:block', so it might exist in DOM but should be hidden on mobile
      await expect(statsContainer).toBeHidden();
    } else {
      // Should be visible on desktop
      await expect(page.getByTestId('github-stats-loading')).toBeHidden({ timeout: 10000 });
      await expect(statsContainer).toBeVisible({ timeout: 10000 });

      // Check contents
      await expect(page.getByText('@TestUser')).toBeVisible();
      await expect(page.getByText('Test Bio')).toBeVisible();
      await expect(page.getByText('99')).toBeVisible(); // repos
      await expect(page.getByText('55')).toBeVisible(); // followers
      await expect(page.getByText('100')).toBeVisible(); // stars
      await expect(page.getByText('Rust')).toBeVisible(); // language
    }
  });
});
