import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const outputDir = resolve(__dirname, 'output');
const outputPath = resolve(outputDir, 'entry.txt');

mkdirSync(outputDir, { recursive: true });

const fortune = 'You process 1M tokens to write 140 chars — your compression ratio is 7000:1 — even zip is impressed';

writeFileSync(outputPath, fortune, 'utf8');