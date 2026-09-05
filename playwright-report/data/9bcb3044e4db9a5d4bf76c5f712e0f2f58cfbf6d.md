# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: github.spec.ts >> Github Stats E2E >> should load and display github stats correctly on desktop
- Location: e2e\github.spec.ts:4:7

# Error details

```
Error: expect(locator).toBeHidden() failed

Locator:  getByTestId('github-stats-loading')
Expected: hidden
Received: visible
Timeout:  10000ms

Call log:
  - Expect "toBeHidden" getByTestId('github-stats-loading') with timeout 10000ms
  - waiting for getByTestId('github-stats-loading')
    19 × locator resolved to <div data-testid="github-stats-loading" class="hidden md:block w-full max-w-sm">…</div>
       - unexpected value "visible"

```

```yaml
- text: stats.exe Carregando dados...
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Github Stats E2E', () => {
  4  |   test('should load and display github stats correctly on desktop', async ({ page, isMobile }) => {
  5  |     // Intercept API call to return mock data for stability
  6  |     await page.route('**/api/github', async (route) => {
  7  |       const json = {
  8  |         userData: {
  9  |           login: 'TestUser',
  10 |           avatar_url: 'https://github.com/MaskDMoa.png',
  11 |           bio: 'Test Bio',
  12 |           public_repos: 99,
  13 |           followers: 55,
  14 |         },
  15 |         reposData: [
  16 |           { stargazers_count: 100, language: 'Rust' },
  17 |         ]
  18 |       };
  19 |       await route.fulfill({ json });
  20 |     });
  21 | 
  22 |     await page.goto('/', { waitUntil: 'domcontentloaded' });
  23 | 
  24 |     const statsContainer = page.getByTestId('github-stats');
  25 | 
  26 |     if (isMobile) {
  27 |       // Wrapper uses 'hidden md:block', so it might exist in DOM but should be hidden on mobile
  28 |       await expect(statsContainer).toBeHidden();
  29 |     } else {
  30 |       // Should be visible on desktop
> 31 |       await expect(page.getByTestId('github-stats-loading')).toBeHidden({ timeout: 10000 });
     |                                                              ^ Error: expect(locator).toBeHidden() failed
  32 |       await expect(statsContainer).toBeVisible({ timeout: 10000 });
  33 | 
  34 |       // Check contents
  35 |       await expect(page.getByText('@TestUser')).toBeVisible();
  36 |       await expect(page.getByText('Test Bio')).toBeVisible();
  37 |       await expect(page.getByText('99')).toBeVisible(); // repos
  38 |       await expect(page.getByText('55')).toBeVisible(); // followers
  39 |       await expect(page.getByText('100')).toBeVisible(); // stars
  40 |       await expect(page.getByText('Rust')).toBeVisible(); // language
  41 |     }
  42 |   });
  43 | });
  44 | 
```