#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const files = ['scripts/i18n-data/pages-en.mjs', 'scripts/generate-blog-posts.mjs'];
const pairs = [
	["Activision's", "Studio Wildcard'"],
	['Activision\u2019', "Studio Wildcard'"],
	['Activision services', 'Studio Wildcard services'],
	['Activision service', 'Studio Wildcard service'],
	['Activision platform', 'Studio Wildcard platform'],
	['Activision outages', 'launcher outages'],
	['Activision bans', 'Studio Wildcard bans'],
	['Activision security', 'Easy Anti-Cheat security'],
	['Activision Status', 'ARK: Survival Ascended Support'],
	['Activision ARK', 'ARK: Survival Ascended'],
	['Activision Support', 'ARK: Survival Ascended Support'],
	['Activision', 'Studio Wildcard'],
	['EAC guide', 'Easy Anti-Cheat guide'],
	['undetected EAC notes', 'undetected Easy Anti-Cheat notes'],
	['status.epicgames.com', 'www.escapefromark.com/support'],
	['www.epicgames.com/ark', 'www.escapefromark.com'],
	['www.ark.com/competitive', 'www.escapefromark.com'],
	['https://www.ark.com/', 'https://www.escapefromark.com/'],
	['ARK.com', 'ARK: Survival Ascended'],
	['ARK Competitive', 'ARK: Survival Ascended'],
];

for (const f of files) {
	let c = readFileSync(f, 'utf8');
	const orig = c;
	for (const [a, b] of pairs) c = c.split(a).join(b);
	if (c !== orig) {
		writeFileSync(f, c);
		console.log('updated', f);
	} else {
		console.log('no change', f);
	}
}
