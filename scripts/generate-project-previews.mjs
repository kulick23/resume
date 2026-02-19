import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium, devices } from 'playwright';

const outputDir = path.resolve('public/previews');
const storePath = path.resolve('src/Stores/projectsStore.ts');

const profiles = {
  desktop: {
    contextOptions: {
      viewport: { width: 1300, height: 900 },
      deviceScaleFactor: 1,
      isMobile: false,
      hasTouch: false,
    },
    screenshotOptions: { clip: { x: 0, y: 0, width: 1300, height: 900 } },
  },
  mobile: {
    contextOptions: {
      ...devices['iPhone 13 Pro'],
      viewport: { width: 390, height: 844 },
    },
    screenshotOptions: { clip: { x: 0, y: 0, width: 390, height: 844 } },
  },
};

const linkToPreviewKey = (link) => {
  try {
    const url = new URL(link);
    const host = url.hostname.replace(/^www\./, '');
    const pathname = url.pathname.replace(/\/+$/, '');
    const rawKey = `${host}${pathname}`;

    return rawKey
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  } catch {
    return encodeURIComponent(link).toLowerCase();
  }
};

const getProjectLinksFromStore = async () => {
  const source = await fs.readFile(storePath, 'utf8');
  const links = [...source.matchAll(/\blink:\s*'([^']+)'/g)]
    .map((match) => match[1])
    .filter((link) => /^https?:\/\//.test(link));

  return [...new Set(links)].map((link) => ({ key: linkToPreviewKey(link), url: link }));
};

const ensureDir = async () => {
  await fs.mkdir(outputDir, { recursive: true });
};

const waitForStablePage = async (page) => {
  try {
    await page.waitForLoadState('networkidle', { timeout: 12000 });
  } catch {
    // Some pages keep long-polling; capture anyway.
  }
  await page.waitForTimeout(1200);
};

const takeScreenshotsForProject = async (browser, project) => {
  for (const [size, profile] of Object.entries(profiles)) {
    const context = await browser.newContext(profile.contextOptions);
    const page = await context.newPage();

    try {
      await page.goto(project.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await waitForStablePage(page);

      const filePath = path.join(outputDir, `${project.key}-${size}.jpg`);
      await page.screenshot({
        path: filePath,
        type: 'jpeg',
        quality: 80,
        ...profile.screenshotOptions,
      });

      console.log(`Saved: ${filePath}`);
    } catch (error) {
      console.error(`Failed: ${project.key} (${size}) -> ${project.url}`);
      console.error(error instanceof Error ? error.message : String(error));
    } finally {
      await context.close();
    }
  }
};

const main = async () => {
  await ensureDir();

  const projects = await getProjectLinksFromStore();
  if (projects.length === 0) {
    console.error('No HTTP/HTTPS links found in projectsStore.');
    process.exitCode = 1;
    return;
  }

  const browser = await chromium.launch({ headless: true });

  try {
    for (const project of projects) {
      await takeScreenshotsForProject(browser, project);
    }
  } finally {
    await browser.close();
  }
};

await main();
