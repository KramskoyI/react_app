import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const rootDirs = ['src'];
const fileExtensions = new Set([
  '.ts',
  '.tsx',
  '.js',
  '.jsx',
  '.json',
  '.md',
  '.css',
]);

const suspiciousPatterns = [
  /(?:\u0420[\u0400-\u04FF]){2,}/u,
  /(?:\u0421[\u0400-\u04FF]){2,}/u,
  /\u0432\u0402/u,
  /(?:\u00D0|\u00D1)[A-Za-z\u0400-\u04FF]/u,
];

const suspiciousFiles = [];

const hasSuspiciousText = (content) =>
  suspiciousPatterns.some((pattern) => pattern.test(content));

const walk = (dir) => {
  for (const entry of readdirSync(dir)) {
    const fullPath = join(dir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      walk(fullPath);
      continue;
    }

    const extension = fullPath.slice(fullPath.lastIndexOf('.'));
    if (!fileExtensions.has(extension)) {
      continue;
    }

    const content = readFileSync(fullPath, 'utf8');
    if (hasSuspiciousText(content)) {
      suspiciousFiles.push(relative(process.cwd(), fullPath));
    }
  }
};

for (const dir of rootDirs) {
  walk(join(process.cwd(), dir));
}

if (suspiciousFiles.length > 0) {
  console.error('Found suspicious mojibake text in files:');
  for (const file of suspiciousFiles) {
    console.error(`- ${file}`);
  }
  process.exit(1);
}

console.log('Text encoding check passed.');
