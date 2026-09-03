#!/usr/bin/env node
/**
 * Completes escape-from-ark-hacks SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'ark-hacks', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'ark-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'ark-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'ark-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-ark-hacks', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'ark-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'ark-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'ark-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/ark-ark/g, 'ark'],
	[/eac-bypass-ark/g, 'eac-bypass'],
	[/ARK: Survival Ascended/g, 'ARK: Survival Ascended'],
	[/ARK: Survival Ascended/g, 'ARK: Survival Ascended'],
	[/Call of Duty/g, 'ARK: Survival Ascended'],
	[/ARK Wallhack/g, 'ARK: Survival Ascended Wallhack'],
	[/ARK Radar Hack/g, 'ARK: Survival Ascended Radar Hack'],
	[/ARK Cheat Features/g, 'ARK: Survival Ascended Cheat Features'],
	[/ARK Cheat Pricing/g, 'ARK: Survival Ascended Cheat Pricing'],
	[/ARK Cheat Setup/g, 'ARK: Survival Ascended Cheat Setup'],
	[/ARK Cheat Status/g, 'ARK: Survival Ascended Cheat Status'],
	[/ARK Cheat Support/g, 'ARK: Survival Ascended Cheat Support'],
	[/ARK squad fight/g, 'ARK: Survival Ascended squad fight'],
	[/ARK squad builder/g, 'ARK: Survival Ascended loadout builder'],
	[/ARK store header/g, 'ARK: Survival Ascended header'],
	[/ARK wasteland combat/g, 'ARK: Survival Ascended battle royale combat'],
	[/ARK loadout builder/g, 'ARK: Survival Ascended loadout builder'],
	[/ARK pricing/g, 'ARK: Survival Ascended pricing'],
	[/ARK Easy Anti-Cheat/g, 'ARK: Survival Ascended Easy Anti-Cheat'],
	[/on ARK/g, 'on ARK: Survival Ascended'],
	[/for ARK/g, 'for ARK: Survival Ascended'],
	[/ARK guides/g, 'ARK: Survival Ascended guides'],
	[/ARK guide/g, 'ARK: Survival Ascended guide'],
	[/ARK hileleri/g, 'ARK: Survival Ascended hileleri'],
	[/ARK hile/g, 'ARK: Survival Ascended hile'],
	[/ARK hileleri/g, 'ARK: Survival Ascended hileleri'],
	[/cheatów ARK/g, 'cheatów ARK: Survival Ascended'],
	[/cheat ARK/g, 'cheat ARK: Survival Ascended'],
	[/cheats ARK/g, 'cheats ARK: Survival Ascended'],
	[/trucos ARK/g, 'trucos ARK: Survival Ascended'],
	[/triche ARK/g, 'triche ARK: Survival Ascended'],
	[/trucchi ARK/g, 'trucchi ARK: Survival Ascended'],
	[/Wallhack ARK/g, 'ARK: Survival Ascended Wallhack'],
	[/cheat ARK undetected/g, 'cheat ARK: Survival Ascended undetected'],
	[/cheats ARK undetected/g, 'cheats ARK: Survival Ascended undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/scav-run room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Verdansk and scav-run'],
	[/Verdansk, Urzikstan/g, 'Verdansk, scav-run'],
	[/raid and scav-run/g, 'raid and scav-run'],
	[/Activision's anti-cheat/g, "Epic Games' anti-cheat"],
	[/Activision anti-cheat/g, 'Epic Games anti-cheat'],
	[/Activision ships/g, 'Epic Games ships'],
	[/Activision security/g, 'Epic Games security'],
	[/Activision bans/g, 'Epic Games bans'],
	[/Activision/g, 'Epic Games'],
	[/eac/gi, 'eac'],
	[/Easy Anti-Cheat/g, 'Easy Anti-Cheat'],
	[/escape-from-ark-hacks/g, 'escape-from-ark-hacks'],
	[/escape-from-ark/g, 'ark'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for ARK: Survival Ascended'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after ARK: Survival Ascended anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy ARK Hacks')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/ARK guides/g, 'ARK: Survival Ascended guides');
	content = content.replace(/ARK guide/g, 'ARK: Survival Ascended guide');
	content = content.replace(/ARK hileleri/g, 'ARK: Survival Ascended hileleri');
	content = content.replace(/ARK hile/g, 'ARK: Survival Ascended hile');
	content = content.replace(/cheat ARK/g, 'cheat ARK: Survival Ascended');
	content = content.replace(/cheats ARK/g, 'cheats ARK: Survival Ascended');
	content = content.replace(/trucos ARK/g, 'trucos ARK: Survival Ascended');
	content = content.replace(/triche ARK/g, 'triche ARK: Survival Ascended');
	content = content.replace(/trucchi ARK/g, 'trucchi ARK: Survival Ascended');
	content = content.replace(/cheatów ARK/g, 'cheatów ARK: Survival Ascended');
	content = content.replace(/читов ARK/g, 'читов ARK: Survival Ascended');
	content = content.replace(/читів ARK/g, 'читів ARK: Survival Ascended');
	content = content.replace(/ARKチート/g, 'ARK: Survival Ascendedチート');
	content = content.replace(/ARK 치트/g, 'ARK: Survival Ascended 치트');
	content = content.replace(/ARK作弊/g, 'ARK: Survival Ascended作弊');
	content = content.replace(/ARK rehberleri/g, 'ARK: Survival Ascended rehberleri');
	content = content.replace(/ARK gidsen/g, 'ARK: Survival Ascended gidsen');
	content = content.replace(/ARK průvodce/g, 'ARK: Survival Ascended průvodce');
	content = content.replace(/ARK guider/g, 'ARK: Survival Ascended guider');
	content = content.replace(/ARK related/g, 'ARK: Survival Ascended related');
	content = content.replace(/ARK ガイド/g, 'ARK: Survival Ascended ガイド');
	content = content.replace(/ARK 가이드/g, 'ARK: Survival Ascended 가이드');
	content = content.replace(/ARK指南/g, 'ARK: Survival Ascended指南');
	content = content.replace(/ARK गाइड/g, 'ARK: Survival Ascended गाइड');
	content = content.replace(/ARK panduan/g, 'ARK: Survival Ascended panduan');
	content = content.replace(/ARK คู่มือ/g, 'ARK: Survival Ascended คู่มือ');
	content = content.replace(/ARK hướng dẫn/g, 'ARK: Survival Ascended hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== ARK Hacks SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
