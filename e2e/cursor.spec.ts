import { test, expect } from '@playwright/test';

test.describe('Custom Cursor E2E', () => {
  test('should display custom cursor and hide it on mobile', async ({ page, isMobile }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // Check if the custom cursor container is rendered
    const customCursor = page.locator('.fixed.top-0.left-0.pointer-events-none.z-\\[99999\\]');
    
    if (isMobile) {
      // Should not be visible on mobile
      await expect(customCursor).toHaveCount(0);
    } else {
      // Should be visible on desktop
      await expect(customCursor).toHaveCount(1);

      // Verify the SVG is the default Aero arrow (fill="white")
      const path = customCursor.locator('path');
      await expect(path).toHaveAttribute('fill', 'white');

      // Move mouse over a button (Toggle Theme in Taskbar)
      const themeBtn = page.getByRole('button', { name: 'Toggle Theme' }).first();
      // Wait for it to be visible
      if (await themeBtn.isVisible()) {
        await themeBtn.hover();
        
        // Wait a small moment for React state to update
        await page.waitForTimeout(100);

        // Verify the SVG changes to precision select crosshair (no fill, stroke="white")
        await expect(path).not.toHaveAttribute('fill', 'white');
        await expect(path).toHaveAttribute('stroke', 'white');
      }
    }
  });
});
