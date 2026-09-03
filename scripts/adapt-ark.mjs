#!/usr/bin/env node
/**
 * One-time migration: Tarkov Cheats → ARK Hacks (ARK: Survival Ascended).
 * Domain: arkhacks.com
 * Run from project root: node scripts/adapt-ark.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['tarkov-aimbot', 'ark-aimbot'],
	['tarkov-esp', 'ark-esp'],
	['tarkov-wallhack', 'ark-wallhack'],
	['tarkov-radar-hack', 'ark-radar-hack'],
	['undetected-tarkov-cheats', 'undetected-ark-hacks'],
	['tarkov-cheats-2026', 'ark-hacks-2026'],
	['battleye-bypass', 'eac-bypass'],
	['tarkov-cheats', 'ark-hacks'],
	['tarkov-cheat-download', 'ark-cheat-download'],
	['tarkov-mod-menu', 'ark-mod-menu'],
	['tarkov-soft-aim', 'ark-soft-aim'],
	['best-tarkov-cheats', 'best-ark-hacks'],
	['tarkov-aimbot-hack', 'ark-aimbot-hack'],
	['tarkov-esp-hack', 'ark-esp-hack'],
	['tarkov-unlock-all', 'ark-unlock-all'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://tarkovcheats.org', 'https://arkhacks.com'],
	['https://www.tarkovcheats.org', 'https://www.arkhacks.com'],
	['www.tarkovcheats.org', 'www.arkhacks.com'],
	['tarkovcheats.org', 'arkhacks.com'],
	['support@tarkovcheats.org', 'support@arkhacks.com'],
	['besttarkovcheats.com', 'arkhacks.com'],
	['https://zadeyo.com/go/QRH?to=%2Fproducts%2Fescape-from-tarkov', 'https://zadeyo.com/go/WARDAH?to=%2Fproducts%2Fark-ascended'],
	['/products/escape-from-tarkov', '/products/ark-ascended'],
	['project-name=tarkovcheats', 'project-name=arkhacks'],
	['project-name=besttarkovcheats', 'project-name=arkhacks'],
	['name = "tarkovcheats"', 'name = "arkhacks"'],
	['name = "besttarkovcheats"', 'name = "arkhacks"'],
	['"name": "tarkov-cheats"', '"name": "ark-hacks"'],
	['tarkov-esp-player-tags', 'ark-hacks-hero'],
	['tarkov-wallhack-skeleton', 'ark-hacks-wallhack'],
	['tarkov-aimbot-sniper', 'ark-hacks-aimbot'],
	['tarkov-aimbot-skeleton', 'ark-hacks-aimbot-view'],
	['tarkov-esp-radar', 'ark-hacks-radar'],
	['tarkov-cheats-combat', 'ark-hacks-combat'],
	['tarkov-cheats-logo', 'ark-hacks-logo'],
	['tarkov-hero-banner', 'ark-hacks-hero-banner'],
	['tarkov-hero-ghost', 'ark-hacks-hero-ghost'],
	['tarkov-hero-source', 'ark-hacks-hero-source'],
	['undetected-tarkov-cheats', 'undetected-ark-hacks'],
	['best-tarkov-cheats', 'best-ark-hacks'],
	['tarkov-cheat-download', 'ark-cheat-download'],
	['tarkov-cheats-2026', 'ark-hacks-2026'],
	['tarkov-radar-hack', 'ark-radar-hack'],
	['tarkov-aimbot-hack', 'ark-aimbot-hack'],
	['tarkov-esp-hack', 'ark-esp-hack'],
	['tarkov-unlock-all', 'ark-unlock-all'],
	['tarkov-soft-aim', 'ark-soft-aim'],
	['tarkov-mod-menu', 'ark-mod-menu'],
	['tarkov-wallhack', 'ark-wallhack'],
	['tarkov-cheats', 'ark-hacks'],
	['tarkov-aimbot', 'ark-aimbot'],
	['tarkov-esp', 'ark-esp'],
	['battleye-bypass', 'eac-bypass'],
	["'battleye'", "'eac'"],
	['| battleye', '| eac'],
	['pageId="battleye"', 'pageId="eac"'],
	['pageId: \'battleye\'', "pageId: 'eac'"],
	['"battleye"', '"eac"'],
	['escape-from-tarkov-cheats', 'ark-survival-ascended-hacks'],
	['Escape from Tarkov', 'ARK: Survival Ascended'],
	['escape from tarkov', 'ARK: Survival Ascended'],
	['Tarkov Cheats', 'ARK Hacks'],
	['Tarkov Cheats', 'ARK Hacks'],
	['Tarkov cheats', 'ARK hacks'],
	['Tarkov cheat', 'ARK cheat'],
	['Tarkov hacks', 'ARK hacks'],
	['Tarkov hack', 'ARK hack'],
	['TarkovCheatsSite', 'ArkHacksSite'],
	['Tarkov Intel', 'ARK Intel'],
	['BattlEye anti-cheat', 'Easy Anti-Cheat'],
	['BattlEye maintenance', 'EAC maintenance'],
	['BattlEye bypass', 'EAC bypass'],
	['BattlEye Bypass', 'EAC Bypass'],
	['BattlEye patches', 'EAC patches'],
	['BattlEye patch', 'EAC patch'],
	['BattlEye updates', 'EAC updates'],
	['BattlEye update', 'EAC update'],
	['after BattlEye', 'after EAC'],
	['BATTLEYE', 'EAC'],
	['BattlEye', 'Easy Anti-Cheat'],
	['battleye', 'eac'],
	['Battlestate Games', 'Studio Wildcard'],
	['Customs, Woods, and Streets of Tarkov', 'The Island, Scorched Earth, and Aberration'],
	['Customs, Woods and Streets of Tarkov', 'The Island, Scorched Earth and Aberration'],
	['Customs, Woods et Streets of Tarkov', 'The Island, Scorched Earth et Aberration'],
	['Customs, Woods e Streets of Tarkov', 'The Island, Scorched Earth e Aberration'],
	['Customs, Woods und Streets of Tarkov', 'The Island, Scorched Earth und Aberration'],
	['extract fights', 'PvP encounters'],
	['extract fight', 'PvP encounter'],
	['raid rounds', 'server sessions'],
	['extract', 'base raid'],
	['PMC raids and Scav runs', 'PvP servers and tribe raids'],
	['PMC & Scav', 'PvP & PvE'],
	['PMC raids and Scav runs', 'PvP servers and tribe raids'],
	['Scav run', 'PvE session'],
	['scav run', 'PvE session'],
	['Scav runs', 'PvE sessions'],
	['scav runs', 'PvE sessions'],
	['extract and loot markers', 'loot and supply crate markers'],
	['high-value loot', 'rare resources'],
	['PMCs', 'players'],
	['PMC', 'player'],
	['Scavs', 'wild dinos'],
	['Scav', 'dino'],
	['extract timer', 'tribe timer'],
	['tarkovImages', 'arkImages'],
	["from './tarkov'", "from './ark'"],
	["from '../data/tarkov'", "from '../data/ark'"],
	["from '../../data/tarkov'", "from '../../data/ark'"],
	['fetch-tarkov-images', 'fetch-ark-images'],
	['tarkov-hack-overlays', 'ark-hack-overlays'],
	['trucos-tarkov', 'trucos-ark'],
	['triche-tarkov', 'triche-ark'],
	['cheats-tarkov', 'cheats-ark'],
	['trucchi-tarkov', 'trucchi-ark'],
	['cheaty-tarkov', 'cheaty-ark'],
	['chity-tarkov', 'chity-ark'],
	['chitov-tarkov', 'chitov-ark'],
	['chitiv-tarkov', 'chitiv-ark'],
	['cheatow-tarkov', 'cheatow-ark'],
	['hile-tarkov', 'hile-ark'],
	['tarkov-hile', 'ark-hile'],
	['tarkov-esp-chity', 'ark-esp-chity'],
	['tarkov-aimbot-chity', 'ark-aimbot-chity'],
	['unentdeckte-tarkov-cheats', 'unentdeckte-ark-hacks'],
	['cheats-tarkov-indetectaveis', 'cheats-ark-indetectaveis'],
	['trucchi-tarkov-indetectabili', 'trucchi-ark-indetectabili'],
	['niewykrywalne-cheats-tarkov', 'niewykrywalne-cheats-ark'],
	['nedecektiruemye-chity-tarkov', 'nedecektiruemye-chity-ark'],
	['tespit-edilemeyen-tarkov-hileleri', 'tespit-edilemeyen-ark-hileleri'],
	['nedecektovani-chity-tarkov', 'nedecektovani-chity-ark'],
	['cheats-tarkov-nedetectabile', 'cheats-ark-nedetectabile'],
	['basta-tarkov-cheats', 'basta-ark-hacks'],
	['tarkov-cheats-funktionen', 'ark-hacks-funktionen'],
	['tarkov-cheats-functies', 'ark-hacks-functies'],
	['caracteristicas-trucos-tarkov', 'caracteristicas-trucos-ark'],
	['fonctionnalites-triche-tarkov', 'fonctionnalites-triche-ark'],
	['recursos-cheats-tarkov', 'recursos-cheats-ark'],
	['Buy Tarkov Cheats', 'Buy ARK Hacks'],
	['Tarkov', 'ARK'],
	['tarkov', 'ark'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.html', '.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set([
	'adapt-warzone.mjs',
	'adapt-fortnite.mjs',
	'adapt-tarkov.mjs',
	'adapt-ark.mjs',
]);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameTarkovTs() {
	const from = path.join(ROOT, 'src', 'data', 'tarkov.ts');
	const to = path.join(ROOT, 'src', 'data', 'ark.ts');
	try {
		await rename(from, to);
		console.log('Renamed tarkov.ts → ark.ts');
	} catch (e) {
		console.warn(`tarkov.ts rename: ${e.message}`);
	}
}

async function renameScripts() {
	const pairs = [
		['fetch-tarkov-images.mjs', 'fetch-ark-images.mjs'],
		['tarkov-hack-overlays.mjs', 'ark-hack-overlays.mjs'],
		['fix-tarkov-copy.mjs', 'fix-ark-copy.mjs'],
	];
	for (const [from, to] of pairs) {
		try {
			await rename(path.join(ROOT, 'scripts', from), path.join(ROOT, 'scripts', to));
			console.log(`Renamed script: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip script rename ${from}: ${e.message}`);
		}
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'ark-aimbot': 'ark-aimbot',
		'ark-esp': 'ark-esp',
		'ark-wallhack': 'wallhack',
		'ark-radar-hack': 'radar',
		'undetected-ark-hacks': 'undetected',
		'ark-hacks-2026': 'cheats-2026',
		'eac-bypass': 'eac',
		'ark-hacks': 'hacks',
		'ark-cheat-download': 'cheat-download',
		'ark-mod-menu': 'mod-menu',
		'ark-soft-aim': 'soft-aim',
		'best-ark-hacks': 'best-cheats',
		'ark-aimbot-hack': 'aimbot-hack',
		'ark-esp-hack': 'esp-hack',
		'ark-unlock-all': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
		} catch {
			// ignore missing dirs
		}
	}
}

async function main() {
	console.log('Adapting Tarkov Cheats → ARK Hacks (arkhacks.com)...\n');
	await renamePageDirs();
	await renameTarkovTs();
	await renameScripts();
	await transformTextFiles();
	await updatePageAstroFiles();
	console.log('\nDone. Next: fix brand.ts identity, sync:brand, regenerate i18n/blog, optimize images.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
