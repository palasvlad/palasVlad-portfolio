import { test, expect } from '@playwright/test';

test('homepage displays portfolio sections', async ({ page }) => {
  await page.goto('/');

  await expect(
    page.getByRole('heading', { name: 'About Me' })
  ).toBeVisible();

  await expect(
    page.getByRole('heading', { name: 'Projects' })
  ).toBeVisible();
});