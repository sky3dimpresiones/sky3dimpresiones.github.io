import { cp, copyFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const distAssetsDir = path.join(distDir, 'assets');
const rootAssetsDir = path.join(rootDir, 'assets');

await copyFile(path.join(distDir, 'index.html'), path.join(rootDir, 'index.html'));
await mkdir(rootAssetsDir, { recursive: true });
await cp(distAssetsDir, rootAssetsDir, { recursive: true, force: true });
