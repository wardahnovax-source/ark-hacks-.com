#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from ARK source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['ark-esp', 'ark-esp'],
	['ark-aimbot', 'ark-aimbot'],
	["'eac'", "'eac'"],
	['eac-bypass', 'eac-bypass'],
	['undetected-ark-hacks', 'undetected-ark-hacks'],
	['ark-wallhack', 'ark-wallhack'],
	['ark-radar-hack', 'ark-radar-hack'],
	['ark-hacks-2026', 'ark-hacks-2026'],
	['escape-from-ark-hacks', 'escape-from-ark-hacks'],
	['escape-from-ark', 'ark'],
	['ARK: Survival Ascended', 'ARK: Survival Ascended'],
	['ARK: Survival Ascended', 'ARK: Survival Ascended'],
	['ARK Hacks', 'ARK Hacks'],
	['ARK hacks', 'ARK hacks'],
	['ARK cheat', 'ARK cheat'],
	['ARK ESP', 'ARK: Survival Ascended ESP'],
	['ARK Aimbot', 'ARK: Survival Ascended Aimbot'],
	['ARK wallhack', 'ARK: Survival Ascended wallhack'],
	['ARK radar', 'ARK: Survival Ascended radar'],
	['ARK firefights', 'ARK: Survival Ascended firefights'],
	['ARK combat', 'ARK: Survival Ascended combat'],
	['ARK patches', 'ARK: Survival Ascended patches'],
	['ARK updates', 'ARK: Survival Ascended updates'],
	['ARK setup', 'ARK: Survival Ascended setup'],
	['ARK license', 'ARK: Survival Ascended license'],
	['ARK licenses', 'ARK: Survival Ascended licenses'],
	['ARK sessions', 'ARK: Survival Ascended sessions'],
	['in ARK', 'in ARK: Survival Ascended'],
	['for ARK', 'for ARK: Survival Ascended'],
	['ARK on', 'ARK: Survival Ascended on'],
	['ARK or', 'ARK: Survival Ascended or'],
	['ARK\'s', 'ARK: Survival Ascended\'s'],
	['ARK ', 'ARK: Survival Ascended '],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['EAC maintenance', 'EAC maintenance'],
	['EAC bypass', 'EAC bypass'],
	['EAC Bypass', 'EAC Bypass'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['support@arkhacks.com', 'support@arkhacks.com'],
	['The Island, Scorched Earth, and Aberration', 'The Island, Scorched Earth, and Aberration'],
	['The Island, Scorched Earth and Aberration', 'The Island, Scorched Earth and Aberration'],
	['PvP encounters', 'PvP encounters'],
	['PvP encounter', 'PvP encounter'],
	['server sessions', 'server sessions'],
	['base raid', 'base raid'],
	['players', 'players'],
	['operator', 'player'],
	['players', 'Players'],
	['Operator', 'Player'],
	['base raid timer', 'base raid timer'],
	['PvP servers and tribe raids', 'PvP servers and tribe raids'],
	['PvP servers and tribe raids', 'PvP servers and tribe raids'],
	['PvP & PvE', 'PvP & PvE'],
	['rare resources', 'rare resources'],
	['rare resources', 'rare resources'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'ARK: Survival Ascended combat pace'],
	['COD', 'ARK: Survival Ascended'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'ARK Hacks',
	game: 'ARK: Survival Ascended',
	checkout: 'Zadeyo',
	eac: 'Easy Anti-Cheat',
};`,
);
phrases = phrases.replace(/KW\.eac/g, 'KW.eac');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'The Island, Scorched Earth, and Aberration'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
