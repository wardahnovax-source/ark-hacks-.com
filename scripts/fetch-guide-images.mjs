#!/usr/bin/env node
/**
 * Downloads game-specific hero images from IGN for the guides hub.
 * Sources images from IGN game pages (assets-prd.ignimgs.com / sm.ign.com).
 * Run: node scripts/fetch-guide-images.mjs
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';
import { GAME_CATALOG } from './guide-games.mjs';

const outDir = path.resolve('public/images/guides');

/** Hand-picked sm.ign.com URLs where verified. */
const VERIFIED_SM = {
	fortnite:
		'https://sm.ign.com/t/ign_pk/gallery/f/fortnite-g/fortnite-gameplay-screenshots-2024_s2qs.1400.jpg',
	valorant:
		'https://sm.ign.com/t/ign_ap/gallery/v/valorant-s/valorant-screenshots_ax71.1400.jpg',
	palworld:
		'https://sm.ign.com/t/ign_sea/gallery/p/palworld-d/palworld-december-2024-update-screenshots_486c.1400.jpg',
	tarkov:
		'https://assets-prd.ignimgs.com/2021/12/07/escapefromtarkov-1638898094839.jpg',
};

/** IGN game page slugs. */
const IGN_SLUGS = {
	'ark-ascended': 'ark-survival-ascended',
	deadside: 'deadside',
	'arc-raiders': 'arc-raiders',
	genshin: 'genshin-impact',
	dbd: 'dead-by-daylight',
	tarkov: 'escape-from-tarkov',
	unturned: 'unturned',
	'war-thunder': 'war-thunder',
	fortnite: 'fortnite',
	marathon: 'marathon',
	battlefield: 'battlefield-2042',
	lol: 'league-of-legends',
	warzone: 'call-of-duty-warzone',
	valorant: 'valorant',
	'gray-zone': 'gray-zone-warfare',
	overwatch: 'overwatch-2',
	'the-isle': 'the-isle',
	rust: 'rust',
	palworld: 'palworld',
	'r6-siege': 'rainbow-six-siege',
	caliber: 'caliber',
	cod: 'call-of-duty-modern-warfare-3',
	hunt: 'hunt-showdown',
	destiny2: 'destiny-2',
	'sand-raiders': 'sand-raiders-of-sophie',
	squad: 'squad',
	abi: 'arena-breakout-infinite',
	bodycam: 'bodycam',
	'once-human': 'once-human',
	reforger: 'arma-reforger',
	'marvel-rivals': 'marvel-rivals',
	'mecha-break': 'mecha-break',
	backrooms: 'backrooms-escape-together',
	'the-finals': 'the-finals',
	dayz: 'dayz',
	'the-front': 'the-front',
	'lost-ark': 'lost-ark',
	warframe: 'warframe',
	naraka: 'naraka-bladepoint',
	minecraft: 'minecraft',
	poe: 'path-of-exile',
	raft: 'raft',
	'sea-of-thieves': 'sea-of-thieves',
	'delta-force': 'delta-force-hawk-ops',
	dune: 'dune-awakening',
	'wuthering-waves': 'wuthering-waves',
	'combat-master': 'combat-master',
	foxhole: 'foxhole',
	exoborne: 'exoborne',
	nba2k26: 'nba-2k26',
	tf2: 'team-fortress-2',
	enlisted: 'enlisted',
	scum: 'scum',
	grounded: 'grounded',
};

const scrapeCache = new Map();

async function scrapeIgnGameImage(slug) {
	if (scrapeCache.has(slug)) return scrapeCache.get(slug);

	try {
		const res = await fetch(`https://www.ign.com/games/${slug}`, {
			headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ARKHacksGuideBot/1.0)' },
			redirect: 'follow',
		});
		if (res.ok) {
			const html = await res.text();
			const og = html.match(/property="og:image" content="([^"]+)"/);
			if (og?.[1] && og[1].includes('ign')) {
				const url = og[1];
				scrapeCache.set(slug, url);
				return url;
			}
			const sm = [...html.matchAll(/https:\/\/sm\.ign\.com\/[^"'\s]+\.1400\.jpg/g)];
			if (sm.length > 0) {
				const url = sm[0][0];
				scrapeCache.set(slug, url);
				return url;
			}
			const assets = [
				...html.matchAll(
					/https:\/\/assets-prd\.ignimgs\.com\/[^"'\s]+\.(jpg|jpeg|png|webp)/gi,
				),
			]
				.map((m) => m[0])
				.filter((u) => !u.includes('/registration/') && !u.includes('favicon'));
			if (assets.length > 0) {
				const url = assets[0];
				scrapeCache.set(slug, url);
				return url;
			}
			const legacy = [...html.matchAll(/https:\/\/ps3media\.ign\.com\/[^"'\s]+\.(jpg|jpeg|png)/gi)];
			if (legacy.length > 0) {
				const url = legacy[0][0];
				scrapeCache.set(slug, url);
				return url;
			}
		}
	} catch {
		/* fall through */
	}

	scrapeCache.set(slug, null);
	return null;
}

async function downloadImage(url) {
	const res = await fetch(url, {
		headers: { 'User-Agent': 'Mozilla/5.0 (compatible; ARKHacksGuideBot/1.0)' },
		redirect: 'follow',
	});
	if (!res.ok) throw new Error(`HTTP ${res.status}`);
	return Buffer.from(await res.arrayBuffer());
}

async function saveWebp(gameId, url) {
	const dest = path.join(outDir, `${gameId}.webp`);
	const buf = await downloadImage(url);
	const webp = await sharp(buf).resize(1200, 675, { fit: 'cover' }).webp({ quality: 82 }).toBuffer();
	await writeFile(dest, webp);
	console.log(`✓ ${gameId}`);
}

async function resolveUrl(gameId) {
	if (VERIFIED_SM[gameId]) return VERIFIED_SM[gameId];
	const slug = IGN_SLUGS[gameId];
	if (slug) {
		const scraped = await scrapeIgnGameImage(slug);
		if (scraped) return scraped;
	}
	return null;
}

await mkdir(outDir, { recursive: true });

const gameIds = Object.keys(GAME_CATALOG);
let ok = 0;
let fail = 0;

for (const gameId of gameIds) {
	try {
		const url = await resolveUrl(gameId);
		if (!url) throw new Error('No IGN image found');
		await saveWebp(gameId, url);
		ok++;
	} catch (err) {
		console.warn(`✗ ${gameId}: ${err.message}`);
		fail++;
	}
}

console.log(`\nDone: ${ok} saved, ${fail} failed (${gameIds.length} games)`);
