import { test, expect } from '@playwright/test';

test.describe('Squircle / Corner Shape E2E', () => {
  test('should apply corner-shape and fallback styles correctly to WindowFrame', async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // Get the first WindowFrame (e.g. hiago.exe)
    const windowFrame = page.getByTestId('window-frame').first();
    await expect(windowFrame).toBeVisible();

    // Playwright evaluates the computed styles.
    const computedStyles = await windowFrame.evaluate((node) => {
      const style = window.getComputedStyle(node);
      return {
        borderRadius: style.borderRadius,
        cornerShapeVar: style.getPropertyValue('--corner-shape') || node.style.getPropertyValue('--corner-shape'),
      };
    });

    expect(computedStyles.borderRadius).not.toBe('');
    expect(computedStyles.cornerShapeVar).toContain('superellipse(3)');
  });
});
