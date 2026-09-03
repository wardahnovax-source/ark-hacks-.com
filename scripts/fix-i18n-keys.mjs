#!/usr/bin/env node
/** Fix remaining i18n key mismatches and ui-strings. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const UI_REPLACEMENTS = [
	['ARK Hacks', 'ARK Hacks'],
	['ARK hacks', 'ARK hacks'],
	['ARK Hacks', 'ARK Hacks'],
	['ARK: Survival Ascended', 'ARK: Survival Ascended'],
	['ARK: Survival Ascended', 'ARK: Survival Ascended'],
	['Call of Duty', 'ARK: Survival Ascended'],
	['ARK PC', 'ARK: Survival Ascended PC'],
	['for ARK', 'for ARK: Survival Ascended'],
	['ARK ', 'ARK: Survival Ascended '],
	['ark ', 'ark '],
	['EAC maintenance', 'EAC maintenance'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['operatorEsp', 'playerEsp'],
	['base raidFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
	['players', 'players'],
	['operator', 'player'],
	['players', 'Players'],
	['Operator', 'Player'],
	['Al Mazrah', 'Verdansk'],
	['Verdansk', 'Verdansk'],
	['scav-run', 'scav-run'],
	['base raid', 'base raid'],
	['arkhacks.com', 'arkhacks.com'],
	['Trucos ARK', 'Trucos ARK: Survival Ascended'],
	['Triches ARK', 'Triches ARK: Survival Ascended'],
	['Cheats ARK', 'Cheats ARK: Survival Ascended'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of UI_REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

// Rebuild ui-strings from clean source
for (const file of ['ui-strings-part1.mjs', 'ui-strings-part2.mjs']) {
	let content = await readFile(path.join(SRC, 'scripts/i18n-data', file), 'utf8');
	content = apply(content);
	await writeFile(path.join(ROOT, 'scripts/i18n-data', file), content);
	console.log('Fixed', file);
}

// Fix pages-en eac key
let pagesEn = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), 'utf8');
pagesEn = pagesEn.replace(/\teac: \{/, "\t'eac': {");
pagesEn = pagesEn.replace(/ARK: Survival Ascended ARK/g, 'ARK: Survival Ascended');
pagesEn = pagesEn.replace(/for ARK: Survival Ascended ARK/g, 'for ARK: Survival Ascended');
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-en.mjs'), pagesEn);

// Fix pages-i18n
let pagesI18n = await readFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), 'utf8');
pagesI18n = apply(pagesI18n);
pagesI18n = pagesI18n.replace(/'eac'/g, "'eac'");
pagesI18n = pagesI18n.replace(/eac:/g, "'eac':");
await writeFile(path.join(ROOT, 'scripts/i18n-data/pages-i18n.mjs'), pagesI18n);

// Fix generate-i18n pages count
let gen = await readFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), 'utf8');
gen = gen.replace('Pages per locale: 25', 'Pages per locale: 17');
await writeFile(path.join(ROOT, 'scripts/generate-i18n-content.mjs'), gen);

console.log('Fixed i18n keys.');
