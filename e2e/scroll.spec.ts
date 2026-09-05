import { test, expect } from '@playwright/test';

test.describe('Scroll Animations E2E', () => {
  test('should animate opacity and scale of ScrollSection elements when scrolling', async ({ page, isMobile }) => {
    // Navigate to page
    await page.goto('/', { waitUntil: 'domcontentloaded' });

    // Get the first scroll section (Projetos)
    const scrollSections = page.getByTestId('scroll-section');
    
    if (isMobile) {
      // On mobile, scroll animations are disabled and use normal motion.section
      // Wait for it to be visible (initial animation)
      const section = scrollSections.first();
      await expect(section).toBeVisible();
      return;
    }

    // Wait for elements to appear
    await expect(scrollSections.first()).toBeAttached();
    
    // Pick the last section which should definitely be out of viewport on desktop at initial load
    // The last one is "Música & Passatempos" (index 3 out of 0-3 since section 1 is not a ScrollSection)
    const targetSection = scrollSections.nth(3);
    
    // Evaluate initial opacity from style attribute
    const styleAttr1 = await targetSection.getAttribute('style') || '';
    const opacityMatch1 = styleAttr1.match(/opacity:\s*([0-9.]+)/);
    const initialOpacity = opacityMatch1 ? parseFloat(opacityMatch1[1]) : 1;

    expect(initialOpacity).toBeLessThan(0.9);

    // Scroll down to the element
    await targetSection.scrollIntoViewIfNeeded();
    
    // Wait for framer-motion to apply changes
    await page.waitForTimeout(1000);

    // Evaluate final opacity
    const styleAttr2 = await targetSection.getAttribute('style') || '';
    const opacityMatch2 = styleAttr2.match(/opacity:\s*([0-9.]+)/);
    const finalOpacity = opacityMatch2 ? parseFloat(opacityMatch2[1]) : 1;

    expect(finalOpacity).toBeGreaterThan(initialOpacity);
  });
});
