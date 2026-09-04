#!/usr/bin/env node
/**
 * Generates src/data/guides/posts.generated.ts — one unique guide per external URL.
 * Run: node scripts/generate-external-guides.mjs
 */
import { writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { PROVIDED_URLS, getUniqueUrls, urlToSlug, normalizeUrl } from './guide-urls.mjs';
import { detectGameFromHost, getGameMeta, getGuideImagePath } from './guide-games.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '..', 'src', 'data', 'guides', 'posts.generated.ts');
const AUDIT = join(__dirname, '..', 'guides-audit.json');

const ANCHOR_TEXTS = [
	'this resource',
	'additional guides',
	'more game information',
	'related resources',
	'further reading',
];

function hash(s) {
	let h = 0;
	for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
	return Math.abs(h);
}

function pick(arr, seed) {
	return arr[seed % arr.length];
}

function closingLink(url, anchorText) {
	return `For more game updates, guides, and related resources, you can also explore <a href="${url}" target="_blank" rel="noopener noreferrer">${anchorText}</a>.`;
}

function buildSections(gameName, seed) {
	const openers = [
		`${gameName} rewards players who understand the core loop before chasing flashy plays.`,
		`Whether you are new to ${gameName} or returning after a long break, a structured approach beats random queue grinding.`,
		`${gameName} has a steep skill curve, but most losses come from fixable habits rather than bad luck.`,
		`Competitive ${gameName} matches punish autopilot decisions — small adjustments compound quickly.`,
	];

	const metaTopics = [
		'map awareness and rotation timing',
		'economy management between rounds',
		'team communication and callout clarity',
		'loadout flexibility across different lobbies',
		'counter-picking common enemy strategies',
		'positioning during objective phases',
	];

	const settingsTips = [
		'Keep frame times stable before tweaking sensitivity — jitter hides recoil patterns and delays peek timing.',
		'Use a fixed field-of-view baseline for two weeks so muscle memory can actually form.',
		'Disable unnecessary overlays that add input lag on lower-end PCs.',
		'Cap background apps during ranked sessions; thermal throttling causes subtle aim inconsistency.',
	];

	const advanced = [
		'Review one full match recording weekly and mark three decision points where you forced a fight without information.',
		'Practice scenario drills for ten minutes before ranked instead of warming up in casual lobbies with no stakes.',
		'Track which maps or modes produce your best K/D or win rate and queue them during climb sessions.',
		'Pair mechanical practice with VOD notes — aim alone will not fix repeated positioning errors.',
	];

	const s = seed;
	return [
		{
			h2: `Understanding the ${gameName} core loop`,
			paragraphs: [
				pick(openers, s),
				`Start each session with one concrete goal: learn a new route, test a backup loadout, or drill a defensive setup. ${gameName} lobbies move fast, and players who treat every death as data improve faster than those who immediately requeue.`,
				`Focus on ${pick(metaTopics, s + 1)} during your first five matches. These fundamentals decide more fights than raw flick speed, especially when teams stack objectives or third-party weak rotations.`,
			],
		},
		{
			h2: `${gameName} meta habits that actually stick`,
			paragraphs: [
				`The current ${gameName} meta shifts with patches, but disciplined habits transfer across updates. Note which weapons, abilities, or roles your lobby favors after each patch day, then adjust one slot at a time instead of rebuilding your entire kit overnight.`,
				`When you lose two fights for the same reason — overextending, ignoring audio cues, or burning resources early — write a one-line reminder before your next queue. ${gameName} players who externalize mistakes break loss streaks sooner.`,
				`Study ${pick(metaTopics, s + 2)} from stronger players in your rank bracket, not only from highlight reels. Copy decision timing, not just crosshair placement.`,
			],
		},
		{
			h2: `Performance and settings for ${gameName}`,
			paragraphs: [
				pick(settingsTips, s + 3),
				`${gameName} performs best when your setup stays consistent between sessions. Document sensitivity, keybinds, and graphics presets so a Windows update or driver swap does not silently change how your aim feels.`,
				`If ranked anxiety spikes, drop to unranked for one controlled drill block, then return with a single micro-goal — cleaner crosshair placement, slower peeks, or better utility timing.`,
			],
		},
		{
			h2: `Advanced ${gameName} improvement plan`,
			paragraphs: [
				pick(advanced, s + 4),
				`Build a weekly checklist: one VOD review, one new strat tested in unranked, and one rest day to avoid tilt queues. ${gameName} improvement is a volume game, but quality reps beat twelve angry rematches.`,
				`Stay patient with patch cycles — overreacting to day-one hotfixes often wastes currency and practice time. Let the meta settle, then commit to a loadout for at least ten serious matches.`,
			],
		},
	];
}

function buildGuide(url, index) {
	const host = new URL(url).hostname;
	const gameId = detectGameFromHost(host);
	const game = getGameMeta(gameId);
	const slug = urlToSlug(url);
	const seed = hash(normalizeUrl(url) + String(index));
	const anchorText = pick(ANCHOR_TEXTS, seed);
	const titleVariants = [
		`${game.name} Guide: Core Loop, Meta, and Competitive Tips`,
		`How to Improve at ${game.name}: Settings, Strategy, and Practice`,
		`${game.name} Player Guide — Rotations, Loadouts, and Ranked Climbing`,
		`Complete ${game.name} Guide for New and Returning Players`,
		`${game.name} Tips: Map Control, Economy, and Session Planning`,
	];
	const title = pick(titleVariants, seed);
	const h1 = title.replace(' Guide:', ':').replace(' — ', ' – ');
	const introVariants = [
		`This guide breaks down practical ${game.name} improvement — from first-hour fundamentals to ranked habits that survive the next patch.`,
		`Looking to climb in ${game.name} without burning out? Here is a structured playbook covering settings, meta awareness, and deliberate practice.`,
		`${game.name} players often stall because they grind volume without fixing repeatable mistakes. Use this guide to build a weekly routine that actually moves your rank.`,
	];
	const intro = pick(introVariants, seed + 7);
	const sections = buildSections(game.name, seed);
	const closing = closingLink(url, anchorText);
	sections[sections.length - 1].paragraphs.push(closing);

	const published = new Date(2026, 0, 15 + (index % 28)).toISOString().slice(0, 10);
	const updated = new Date(2026, 2, 1 + (index % 20)).toISOString().slice(0, 10);

	return {
		id: slug,
		slug,
		externalUrl: url,
		gameId,
		gameName: game.name,
		imageSrc: getGuideImagePath(gameId),
		published,
		updated,
		category: game.name,
		title,
		metaDescription: `${game.name} guide covering core loop basics, meta habits, performance settings, and a weekly improvement plan for ranked players.`,
		h1,
		intro,
		keywords: [game.name, `${game.name} guide`, `${game.name} tips`, `${game.name} meta`, 'competitive gaming'],
		imageAlt: `${game.name} gameplay screenshot from IGN`,
		anchorText,
		sections,
	};
}

const uniqueUrls = getUniqueUrls();
const guides = uniqueUrls.map((url, i) => buildGuide(url, i));

const ts = `/** Auto-generated by scripts/generate-external-guides.mjs — do not edit manually. */
import type { GuidePostDefinition } from './types';

export const guidePosts: GuidePostDefinition[] = ${JSON.stringify(
	guides.map(({ id, slug, externalUrl, gameId, gameName, imageSrc, published, updated, category, title, metaDescription, h1, intro, keywords, imageAlt, anchorText, sections }) => ({
		id,
		slug,
		externalUrl,
		gameId,
		gameName,
		imageSrc,
		published,
		updated,
		category,
		title,
		metaDescription,
		h1,
		intro,
		keywords,
		imageAlt,
		anchorText,
		sections,
	})),
	null,
	2,
)};
`;

writeFileSync(OUT, ts, 'utf8');

const auditRows = guides.map((g) => ({
	url: g.externalUrl,
	game: g.gameName,
	path: `/guides/${g.slug}/`,
	ignImage: g.imageSrc,
	anchorText: g.anchorText,
}));

const dupes = PROVIDED_URLS.length - uniqueUrls.length;
writeFileSync(
	AUDIT,
	JSON.stringify(
		{
			totalProvided: PROVIDED_URLS.length,
			dedicatedPagesCreated: guides.length,
			missing: 0,
			duplicatesRemoved: dupes,
			rows: auditRows,
		},
		null,
		2,
	),
	'utf8',
);

console.log(`Generated ${guides.length} guides → ${OUT}`);
console.log(`Audit → ${AUDIT}`);
console.log(`Total provided: ${PROVIDED_URLS.length} | Unique: ${uniqueUrls.length} | Duplicates removed: ${dupes}`);
