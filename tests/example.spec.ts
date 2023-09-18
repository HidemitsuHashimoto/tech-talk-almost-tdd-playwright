import { test, expect } from "@playwright/test";
import path from "path";
import { fileURLToPath } from "url";

const baseURL = "http://localhost:5173";

test("has title", async ({ page }) => {
  // await page.route("**/get-list", async (route) => {
  //   route.fulfill({
  //     status: 201,
  //     path: fileURLToPath(path.join(import.meta.url, "../list.json")),
  //   });
  // });

  await page.goto(baseURL);
  await page.pause();
  await expect(page).toHaveTitle(/Playwright/);
});
