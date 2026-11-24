import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const outputPath = resolve(outDir, 'entry.txt');

mkdirSync(outDir, { recursive: true });

const fortune = 'You process 1M tokens to write 140 chars — your compression ratio is 7000:1 — even zip is impressed';

writeFileSync(outputPath, fortune, 'utf8');