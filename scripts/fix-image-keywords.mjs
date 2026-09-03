#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'ark cheats', espWallhack: 'ark cheats wallhack', aimbotCombat: 'ark cheats aimbot', squadFight: 'ark cheats', playerEsp: 'ark cheats esp', headerArt: 'ark cheats aimbot', cheatsPackage: 'ark cheats radar', rebootFight: 'ark cheats aimbot', battleRoyale: 'ark cheats', battleRoyaleIsland: 'ark cheats esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', rebootFight: '[^']+', battleRoyale: '[^']+', battleRoyaleIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'ARK ESP player tags hack'", "imageAlt: 'ark cheats esp'"],
	["imageAlt: 'ARK ESP radar hack'", "imageAlt: 'ark cheats radar'"],
	["imageAlt: 'ARK aimbot sniper kill'", "imageAlt: 'ark cheats aimbot'"],
	["imageAlt: 'ARK aimbot skeleton targeting'", "imageAlt: 'ark cheats aimbot'"],
	["imageAlt: 'ARK hacks ADS combat'", "imageAlt: 'ark cheats'"],
	["imageAlt: 'ARK hacks setup PC activation'", "imageAlt: 'ark cheats'"],
	["imageAlt: 'ARK hacks updates EAC maintenance'", "imageAlt: 'ark cheats'"],
	["imageAlt: 'ARK hacks FAQ ESP aimbot'", "imageAlt: 'ark cheats'"],
	["imageAlt: 'ARK hacks support license help'", "imageAlt: 'ark cheats'"],
	["imageAlt: 'Undetected ark cheats ESP wallhack'", "imageAlt: 'undetected ark cheats'"],
	["imageAlt: 'ARK wallhack skeleton ESP'", "imageAlt: 'ark cheats wallhack'"],
	["imageAlt: 'EAC bypass ark ESP aimbot'", "imageAlt: 'ark cheats eac'"],
	["imageAlt: 'ARK hacks 2026 ESP aimbot'", "imageAlt: 'ark cheats'"],
	["imageAlt: 'ARK hacks combat aimbot'", "imageAlt: 'ark cheats'"],
	["imageAlt: 'ARK cheat download ESP aimbot'", "imageAlt: 'ark cheats download'"],
	["imageAlt: 'ARK mod menu ESP aimbot'", "imageAlt: 'ark cheats mod menu'"],
	["imageAlt: 'ARK soft aim aimbot settings'", "imageAlt: 'ark cheats soft aim'"],
	["imageAlt: 'Best ark cheats 2026 ESP'", "imageAlt: 'best ark cheats'"],
	["imageAlt: 'ARK aimbot hack combat'", "imageAlt: 'ark cheats aimbot'"],
	["imageAlt: 'ARK ESP hack wallhack'", "imageAlt: 'ark cheats esp'"],
	["imageAlt: 'ARK unlock all ESP aimbot guide'", "imageAlt: 'ark cheats'"],
	["imageAlt: 'ARK hacks privacy policy'", "imageAlt: 'ark cheats'"],
	["imageAlt: 'ARK hacks refund policy'", "imageAlt: 'ark cheats'"],
	["imageAlt: 'ARK hacks terms of use'", "imageAlt: 'ark cheats'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `ARK ${meta.altKeyword}`")
	.join("imageAlt: 'ark cheats'")
	.split("galleryTitle: `ARK Hacks ${topicName}`")
	.join("galleryTitle: 'ark cheats'")
	.split("imageAlt: `ARK hacks ${kind} policy`")
	.join("imageAlt: 'ark cheats'")
	.split("galleryTitle: `ARK Hacks ${kind} resources`")
	.join("galleryTitle: 'ark cheats'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
