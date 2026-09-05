import { test, expect } from '@playwright/test';

test.describe('Mobile Features E2E', () => {
  test.use({ isMobile: true, viewport: { width: 375, height: 667 } });

  test('should have horizontal snap scroll on mobile for projects', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // Get the projects grid container
    const projectsContainer = page.locator('.flex.snap-x').first();
    await expect(projectsContainer).toBeVisible();

    // Check if it has overflow-x-auto and snap-x
    await expect(projectsContainer).toHaveClass(/overflow-x-auto/);
    await expect(projectsContainer).toHaveClass(/snap-x/);
  });

  test('should have share button on FileCards', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // Auto-accept any dialogs (fallback alert on browsers without navigator.share)
    page.on('dialog', dialog => dialog.accept());

    const shareBtn = page.getByRole('button', { name: 'Compartilhar projeto' }).first();
    await expect(shareBtn).toBeVisible();

    // Verify click doesn't crash (navigator.share may throw in test env, caught by handleShare)
    await shareBtn.click();
    
    // Button should still be visible after click (no crash)
    await expect(shareBtn).toBeVisible();
  });

  test('should have a web manifest linked for PWA', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // Next.js automatically injects the manifest link when src/app/manifest.ts exists
    const manifestLink = page.locator('link[rel="manifest"]');
    await expect(manifestLink).toHaveAttribute('href', /manifest/);
  });
});
