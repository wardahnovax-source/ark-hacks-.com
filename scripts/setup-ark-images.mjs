#!/usr/bin/env node
/**
 * Process ARK Hacks image assets — hero (4K source) + gallery screenshots.
 */
import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const imagesDir = path.resolve('public/images');

const HERO_WIDTHS = [640, 1024, 1536];
const CONTENT_WIDTHS = [480, 960];

async function processHero() {
	const source = path.join(imagesDir, 'ark-hacks-hero-source.jpg');
	const meta = await sharp(source).metadata();
	console.log(`Hero source: ${meta.width}x${meta.height}`);

	// Full PNG master for OG / schema
	const fullBuffer = await sharp(source)
		.resize({ width: 1920, withoutEnlargement: true })
		.webp({ quality: 82, effort: 6 })
		.toBuffer();
	await writeFile(path.join(imagesDir, 'ark-hacks-hero-full.webp'), fullBuffer);
	console.log(`Wrote ark-hacks-hero-full.webp (${fullBuffer.length} bytes)`);

	// Also write hero source as ark-hacks-hero.webp for srcset base
	const heroBase = await sharp(source)
		.resize({ width: 1400, withoutEnlargement: true })
		.webp({ quality: 78, effort: 6 })
		.toBuffer();
	await writeFile(path.join(imagesDir, 'ark-hacks-hero.webp'), heroBase);
	console.log(`Wrote ark-hacks-hero.webp (${heroBase.length} bytes)`);

	for (const width of HERO_WIDTHS) {
		if (meta.width && width > meta.width) continue;
		const file = `ark-hacks-hero-${width}w.webp`;
		const quality = width <= 640 ? 68 : width <= 1024 ? 76 : 80;
		const buffer = await sharp(source)
			.resize({ width, withoutEnlargement: true })
			.webp({ quality, effort: 6 })
			.toBuffer();
		await writeFile(path.join(imagesDir, file), buffer);
		console.log(`Wrote ${file} (${buffer.length} bytes)`);
	}
}

async function processGallery() {
	const mapping = [
		['ark-hacks-screenshot-1.webp', 'ark-hacks-esp.webp'],
		['ark-hacks-screenshot-2.webp', 'ark-hacks-aimbot.webp'],
		['ark-hacks-esp-source.jpg', 'ark-hacks-wallhack.webp'],
		['ark-hacks-screenshot-1.webp', 'ark-hacks-aimbot-view.webp'],
		['ark-hacks-screenshot-2.webp', 'ark-hacks-radar.webp'],
		['ark-hacks-esp-source.jpg', 'ark-hacks-combat.webp'],
	];

	for (const [src, dest] of mapping) {
		const sourcePath = path.join(imagesDir, src);
		const buffer = await sharp(sourcePath)
			.resize({ width: 1280, withoutEnlargement: true })
			.webp({ quality: 78, effort: 6 })
			.toBuffer();
		await writeFile(path.join(imagesDir, dest), buffer);
		console.log(`Wrote ${dest} (${buffer.length} bytes)`);

		const base = dest.replace(/\.webp$/i, '');
		for (const width of CONTENT_WIDTHS) {
			const variant = `${base}-${width}w.webp`;
			const variantBuffer = await sharp(sourcePath)
				.resize({ width, withoutEnlargement: true })
				.webp({ quality: 76, effort: 6 })
				.toBuffer();
			await writeFile(path.join(imagesDir, variant), variantBuffer);
			console.log(`Wrote ${variant}`);
		}
	}
}

async function processLogo() {
	const source = path.join(imagesDir, 'ark-hacks-hero-source.jpg');
	const buffer = await sharp(source)
		.resize(512, 512, { fit: 'cover', position: 'right' })
		.webp({ quality: 85, effort: 6 })
		.toBuffer();
	await writeFile(path.join(imagesDir, 'ark-hacks-logo.webp'), buffer);

	const pngBuffer = await sharp(source)
		.resize(512, 512, { fit: 'cover', position: 'right' })
		.png({ quality: 90 })
		.toBuffer();
	await writeFile(path.join(imagesDir, 'ark-hacks-logo.png'), pngBuffer);
	console.log('Wrote ark-hacks-logo.webp + .png');
}

await processHero();
await processGallery();
await processLogo();
console.log('ARK image setup complete.');
