#!/usr/bin/env node
/**
 * Generate ultra HD 4K hero ladder from cinematic source art.
 */
import { copyFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const imagesDir = path.resolve('public/images');
const SOURCE_CANDIDATES = [
	path.join(imagesDir, 'ark-hacks-hero-source.jpg'),
	'/home/ubuntu/.cursor/projects/workspace/assets/56e0502d-a137-453f-80a4-98e5860e8266.jpg',
];

const TARGET_WIDTH = 3840;
const HERO_WIDTHS = [640, 1024, 1536, 1920, 2560, 3840];

async function resolveSource() {
	for (const candidate of SOURCE_CANDIDATES) {
		try {
			await sharp(candidate).metadata();
			return candidate;
		} catch {
			// try next
		}
	}
	throw new Error('No hero source found');
}

function qualityForWidth(width) {
	if (width <= 640) return 72;
	if (width <= 1024) return 78;
	if (width <= 1536) return 82;
	if (width <= 1920) return 85;
	if (width <= 2560) return 88;
	return 90;
}

const sourcePath = await resolveSource();
console.log(`Source: ${sourcePath}`);

const master = sharp(sourcePath)
	.resize(TARGET_WIDTH, null, {
		kernel: sharp.kernel.lanczos3,
		withoutEnlargement: false,
	})
	.sharpen({ sigma: 0.8, m1: 0.5, m2: 0.3 });

const meta = await master.clone().metadata();
console.log(`4K master: ${meta.width}x${meta.height}`);

await master.clone().jpeg({ quality: 92, mozjpeg: true }).toFile(path.join(imagesDir, 'ark-hacks-hero-source-4k.jpg'));
console.log('Wrote ark-hacks-hero-source-4k.jpg');

await copyFile(sourcePath, path.join(imagesDir, 'ark-hacks-hero-source.jpg'));

const fullWebp = await master.clone().webp({ quality: 90, effort: 6 }).toBuffer();
await writeFile(path.join(imagesDir, 'ark-hacks-hero-full.webp'), fullWebp);
await writeFile(path.join(imagesDir, 'ark-hacks-hero.webp'), fullWebp);
console.log(`Wrote ark-hacks-hero-full.webp (${fullWebp.length} bytes)`);

for (const width of HERO_WIDTHS) {
	const file = `ark-hacks-hero-${width}w.webp`;
	const buffer = await sharp(path.join(imagesDir, 'ark-hacks-hero-source-4k.jpg'))
		.resize({ width, withoutEnlargement: true })
		.webp({ quality: qualityForWidth(width), effort: 6 })
		.toBuffer();
	await writeFile(path.join(imagesDir, file), buffer);
	console.log(`Wrote ${file} (${buffer.length} bytes)`);
}

console.log(`Done — ${meta.width}x${meta.height} hero ladder.`);
