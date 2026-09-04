#!/usr/bin/env node
/**
 * Generate ultra HD 4K hero ladder from the best available source.
 * Prefers native 3840px Steam library hero; falls back to multi-step upscale.
 */
import { copyFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const imagesDir = path.resolve('public/images');

/** Official ARK: Survival Ascended Steam library hero — native 3840×1240. */
const STEAM_HERO_4K =
	'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2399830/library_hero_2x.jpg';

const LOCAL_SOURCE_CANDIDATES = [
	path.join(imagesDir, 'ark-hacks-hero-source.jpg'),
	'/home/ubuntu/.cursor/projects/workspace/assets/56e0502d-a137-453f-80a4-98e5860e8266.jpg',
];

const HERO_WIDTHS = [640, 1024, 1536, 1920, 2560, 3840];
const TARGET_WIDTH = 3840;

function qualityForWidth(width) {
	if (width <= 640) return 78;
	if (width <= 1024) return 84;
	if (width <= 1536) return 88;
	if (width <= 1920) return 90;
	if (width <= 2560) return 93;
	return 95;
}

async function fetchSteamHero() {
	const res = await fetch(STEAM_HERO_4K, {
		headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ARKHacksSite/1.0)' },
	});
	if (!res.ok) throw new Error(`Steam hero HTTP ${res.status}`);
	return Buffer.from(await res.arrayBuffer());
}

async function resolveLocalSource() {
	for (const candidate of LOCAL_SOURCE_CANDIDATES) {
		try {
			await sharp(candidate).metadata();
			return candidate;
		} catch {
			// try next
		}
	}
	throw new Error('No local hero source found');
}

/** Multi-step upscale + sharpen — better than a single 4× jump from 1024px. */
async function upscaleTo4K(input) {
	const meta = await sharp(input).metadata();
	let pipeline = sharp(input);

	if ((meta.width ?? 0) >= TARGET_WIDTH) {
		return pipeline.resize(TARGET_WIDTH, null, { withoutEnlargement: true });
	}

	const steps = [1280, 1600, 1920, 2560, 3200, TARGET_WIDTH].filter(
		(w) => w > (meta.width ?? 0) && w <= TARGET_WIDTH,
	);

	let buffer = await sharp(input).toBuffer();
	for (const width of steps) {
		buffer = await sharp(buffer)
			.resize(width, null, {
				kernel: sharp.kernel.lanczos3,
				withoutEnlargement: false,
			})
			.sharpen({ sigma: 0.55, m1: 0.45, m2: 0.25 })
			.toBuffer();
	}

	return sharp(buffer);
}

async function writeLadder(masterPath) {
	const meta = await sharp(masterPath).metadata();
	console.log(`4K master: ${meta.width}x${meta.height}`);

	const fullWebp = await sharp(masterPath)
		.webp({ quality: 95, effort: 6, smartSubsample: false })
		.toBuffer();
	await writeFile(path.join(imagesDir, 'ark-hacks-hero-full.webp'), fullWebp);
	await writeFile(path.join(imagesDir, 'ark-hacks-hero.webp'), fullWebp);
	console.log(`Wrote ark-hacks-hero-full.webp (${fullWebp.length} bytes)`);

	for (const width of HERO_WIDTHS) {
		const file = `ark-hacks-hero-${width}w.webp`;
		const quality = qualityForWidth(width);
		const buffer = await sharp(masterPath)
			.resize({ width, withoutEnlargement: true })
			.webp({ quality, effort: 6, smartSubsample: false })
			.toBuffer();
		await writeFile(path.join(imagesDir, file), buffer);
		console.log(`Wrote ${file} (${buffer.length} bytes, q${quality})`);
	}

	return meta;
}

let masterBuffer;
let sourceLabel;

try {
	masterBuffer = await fetchSteamHero();
	sourceLabel = 'Steam library_hero_2x (native 3840px)';
	console.log(`Source: ${sourceLabel}`);
} catch (err) {
	console.warn(`Steam 4K unavailable (${err.message}), using local upscale fallback`);
	const local = await resolveLocalSource();
	console.log(`Source: ${local}`);
	masterBuffer = await upscaleTo4K(local).jpeg({ quality: 96, mozjpeg: true }).toBuffer();
	sourceLabel = 'local multi-step upscale';
}

const masterJpg = path.join(imagesDir, 'ark-hacks-hero-source-4k.jpg');
await writeFile(masterJpg, masterBuffer);
console.log('Wrote ark-hacks-hero-source-4k.jpg');

await copyFile(masterJpg, path.join(imagesDir, 'ark-hacks-hero-source.jpg'));

const meta = await writeLadder(masterJpg);
console.log(`Done — ${meta.width}x${meta.height} hero ladder from ${sourceLabel}.`);
