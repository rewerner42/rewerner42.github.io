import { readFileSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, 'dist');
const ssrDir = resolve(distDir, 'ssr');
const templatePath = resolve(distDir, 'index.html');
const ssrEntryPath = resolve(ssrDir, 'entry-server.js');

if (!existsSync(templatePath)) {
  console.error('dist/index.html missing — run `vite build` before prerender.');
  process.exit(1);
}
if (!existsSync(ssrEntryPath)) {
  console.error('dist/ssr/entry-server.js missing — run the SSR build before prerender.');
  process.exit(1);
}

const { render } = await import(pathToFileURL(ssrEntryPath).href);
const appHtml = render();

const template = readFileSync(templatePath, 'utf-8');
const out = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
writeFileSync(templatePath, out, 'utf-8');

rmSync(ssrDir, { recursive: true, force: true });

console.log(`Prerendered dist/index.html (${appHtml.length} chars of app HTML)`);
