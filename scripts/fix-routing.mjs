#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clean ARK source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['ark-esp', 'ark-esp'],
	['ark-aimbot', 'ark-aimbot'],
	['eac', 'eac'],
	['undetected-ark-hacks', 'undetected-ark-hacks'],
	['ark-wallhack', 'ark-wallhack'],
	['ark-radar-hack', 'ark-radar-hack'],
	['ark-hacks-2026', 'ark-hacks-2026'],
	['eac-bypass', 'eac-bypass'],
	['arkhacks.com', 'arkhacks.com'],
	['trucos-ark', 'trucos-ark'],
	['triche-ark', 'triche-ark'],
	['ark-hacks', 'escape-from-ark-hacks'],
	['cheats-ark', 'cheats-ark'],
	['trucchi-ark', 'trucchi-ark'],
	['cheaty-ark', 'cheaty-ark'],
	['chity-ark', 'chity-ark'],
	['chitov-ark', 'chitov-ark'],
	['chitiv-ark', 'chitiv-ark'],
	['cheatow-ark', 'cheatow-ark'],
	['hile-ark', 'hile-ark'],
	['ark-hile', 'ark-hile'],
	['ark-esp-chity', 'ark-esp-chity'],
	['ark-aimbot-chity', 'ark-aimbot-chity'],
	['unentdeckte-ark-hacks', 'unentdeckte-escape-from-ark-hacks'],
	['cheats-ark-indetectaveis', 'cheats-ark-indetectaveis'],
	['trucchi-ark-indetectabili', 'trucchi-ark-indetectabili'],
	['niewykrywalne-cheats-ark', 'niewykrywalne-cheats-ark'],
	['nedecektiruemye-chity-ark', 'nedecektiruemye-chity-ark'],
	['tespit-edilemeyen-ark-hileleri', 'tespit-edilemeyen-ark-hileleri'],
	['nedecektovani-chity-ark', 'nedecektovani-chity-ark'],
	['cheats-ark-nedetectabile', 'cheats-ark-nedetectabile'],
	['basta-ark-hacks', 'basta-escape-from-ark-hacks'],
	['eac-bypass-trucos-ark', 'eac-bypass-trucos-ark'],
	['eac-bypass-triche-ark', 'eac-bypass-triche-ark'],
	['eac-bypass-cheats-ark', 'eac-bypass-cheats-ark'],
	['eac-bypass-chity-ark', 'eac-bypass-chity-ark'],
	['eac-bypass-ark', 'eac-bypass'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix eac key in englishPaths
	content = content.replace(/\teac: '/, "\t'eac': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich escape-from-ark-hacks paths. */
export const HERO_IMAGES = {
	home: '/images/escape-from-ark-hacks-hero.webp',
	'ark-esp': '/images/escape-from-ark-hacks-esp-wallhack.webp',
	'ark-aimbot': '/images/escape-from-ark-hacks-aimbot-combat.webp',
	features: '/images/escape-from-ark-hacks-package.webp',
	pricing: '/images/escape-from-ark-hacks-cover.webp',
	setup: '/images/ark-loadout-builder.webp',
	updates: '/images/ark-header-art.webp',
	faq: '/images/ark-squad-fight.webp',
	support: '/images/escape-from-ark-hacks-package.webp',
	undetected: '/images/ark-battle-royale-combat.webp',
	wallhack: '/images/escape-from-ark-hacks-esp-wallhack.webp',
	radar: '/images/ark-player-esp.webp',
	'eac': '/images/ark-reboot-van-fight.webp',
	'cheats-2026': '/images/escape-from-ark-hacks-hero.webp',
	privacy: '/images/escape-from-ark-hacks-aimbot-combat.webp',
	refund: '/images/escape-from-ark-hacks-cover.webp',
	terms: '/images/escape-from-ark-hacks-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'ark-esp', 'ark-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'ark-esp' | 'ark-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/base raidFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
