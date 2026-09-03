export {
	brand,
	blogLabel,
	fillBrandTokens,
	homeSeo,
	seoDescription,
	seoPageTitle,
	seoTitle,
	siteConfig,
	seoKeywords,
	productInfo,
} from './site-core';

import { fillBrandTokens } from './brand';

function faq<T extends { question: string; answer: string; seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		question: fillBrandTokens(item.question),
		answer: fillBrandTokens(item.answer),
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

function reviewMeta<T extends { seoTitle: string; seoDescription: string }>(item: T): T {
	return {
		...item,
		seoTitle: fillBrandTokens(item.seoTitle),
		seoDescription: fillBrandTokens(item.seoDescription),
	};
}

export const trustSignals = {
	status: 'Online',
	statusNote: fillBrandTokens('{brand} is live for {game} on Windows PC.'),
	delivery: 'Instant digital delivery',
	platform: 'Windows 10 & 11',
	antiCheat: fillBrandTokens('{antiCheat} maintenance supported'),
} as const;

export const seoLandingPages = [
	{ label: fillBrandTokens('{game} hacks'), href: '/ark-hacks/' },
	{ label: fillBrandTokens('{primaryKeyword}'), href: '/ark-hacks/' },
	{ label: fillBrandTokens('{game} esp'), href: '/ark-esp/' },
	{ label: fillBrandTokens('{game} aimbot'), href: '/ark-aimbot/' },
	{ label: fillBrandTokens('{game} setup'), href: '/setup/' },
	{ label: fillBrandTokens('Undetected {primaryKeyword}'), href: '/ark-hacks/' },
	{ label: fillBrandTokens('{game} wallhack'), href: '/ark-esp/' },
	{ label: fillBrandTokens('{game} radar hack'), href: '/ark-radar-hack/' },
] as const;

export const mainNav = [
	{ label: 'Home', href: '/' },
	{ label: 'Cheats', href: '/ark-hacks/' },
	{ label: 'Aimbot', href: '/ark-aimbot/' },
	{ label: 'ESP', href: '/ark-esp/' },
	{ label: 'Features', href: '/features/' },
	{ label: 'Pricing', href: '/pricing/' },
	{ label: 'Setup', href: '/setup/' },
	{ label: 'Updates', href: '/updates/' },
	{ label: 'FAQ', href: '/faq/' },
] as const;

export const footerNav = [
	{ label: fillBrandTokens('{game} hack update log'), href: '/updates/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
	{ label: 'Refund policy details', href: '/refund-policy/' },
	{ label: 'Privacy policy details', href: '/privacy-policy/' },
	{ label: 'Terms of use', href: '/terms/' },
] as const;

export const footerExplore = [
	{ label: fillBrandTokens('{brand} home'), href: '/' },
	{ label: fillBrandTokens('{game} hacks pillar'), href: '/ark-hacks/' },
	{ label: fillBrandTokens('Live {game} status'), href: '/updates/' },
	{ label: fillBrandTokens('{game} ESP overlays'), href: '/ark-esp/' },
	{ label: fillBrandTokens('{game} Aimbot controls'), href: '/ark-aimbot/' },
	{ label: fillBrandTokens('{game} radar hack'), href: '/ark-radar-hack/' },
	{ label: fillBrandTokens('Full {game} hack feature list'), href: '/features/' },
	{ label: 'Monthly & lifetime pricing', href: '/pricing/' },
	{ label: fillBrandTokens('{game} hack setup guide'), href: '/setup/' },
	{ label: fillBrandTokens('{game} hacks FAQ'), href: '/faq/' },
	{ label: fillBrandTokens('{brand} reviews'), href: '/reviews/' },
	{ label: fillBrandTokens('{game} Intel blog'), href: '/blog/' },
	{ label: fillBrandTokens('Contact {brand} support'), href: '/support/' },
] as const;

export type FaqItem = {
	question: string;
	answer: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
};

export const homeFaqs: readonly FaqItem[] = [
	faq({
		question: 'What is {brand}?',
		answer:
			'{brand} is an undetected {primaryKeyword} package for ARK: Survival Ascended on Windows PC. It includes ESP wallhack, 2D radar, and aimbot controls, with {antiCheat} maintenance and setup support.',
		slug: 'what-are-ark-hacks',
		seoTitle: 'What is {brand}? | FAQ',
		seoDescription:
			'{brand} explained: undetected ESP, radar, and aimbot for {game} on Windows PC with {antiCheat} maintenance.',
	}),
	faq({
		question: 'Are {primaryKeyword} undetected in 2026?',
		answer:
			'{brand} is maintained for {game} with rebuilds after {antiCheat} and game patches. Check the Status page before you queue. No cheat can guarantee permanent undetected status — maintenance and responsible use matter.',
		slug: 'are-ark-hacks-undetected-in-2026',
		seoTitle: 'Are {brand} Undetected in 2026? | FAQ',
		seoDescription:
			'How {brand} stays maintained after {antiCheat} patches in 2026 — and why no cheat can promise permanent undetected status.',
	}),
	faq({
		question: 'Does this work in PvP servers and tribe raids?',
		answer:
			'Yes. ESP, radar, and aimbot are built for {game} raid flow — reading players and wild dinos, spotting loot, and staying aware near base raids.',
		slug: 'pmc-raids-and-scav-runs',
		seoTitle: 'player Raid and dino Support | FAQ',
		seoDescription:
			'{brand} works in PvP servers and tribe raids — ESP, radar, and aimbot for Windows PC.',
	}),
	faq({
		question: 'What is included — ESP, wallhack, radar, or Aimbot?',
		answer:
			'{brand} bundles ESP wallhack, loot markers, 2D radar cues, and configurable Aimbot in one license. See Features for the full list.',
		slug: 'esp-wallhack-radar-or-aimbot',
		seoTitle: 'What Is Included: ESP, Wallhack, Radar, Aimbot | FAQ',
		seoDescription:
			'One {brand} license includes ESP wallhack, loot markers, 2D radar cues, and configurable Aimbot for Windows PC.',
	}),
	faq({
		question: 'How are licenses delivered?',
		answer:
			'After payment is confirmed, {brand} license details are delivered digitally through checkout. Timing can vary by payment method and order review. Keep your order confirmation ready if you contact support.',
		slug: 'how-are-licenses-delivered',
		seoTitle: 'How Are {brand} Licenses Delivered? | FAQ',
		seoDescription:
			'{brand} licenses are delivered digitally after payment confirmation. Timing varies by payment method and order review.',
	}),
	faq({
		question: 'Where do I check updates after an ARK: Survival Ascended or {antiCheat} patch?',
		answer:
			'Maintenance notes are posted on the Status page when an ARK: Survival Ascended or {antiCheat} update affects the package. That is the fastest place to confirm whether a new {brand} build is live.',
		slug: 'where-to-check-updates',
		seoTitle: 'Where to Check {game} / {antiCheat} Updates | FAQ',
		seoDescription:
			'Check the Status page after {game} or {antiCheat} patches to confirm the latest {brand} build status.',
	}),
	faq({
		question: 'How do I contact support?',
		answer:
			'Use the Support page or email {email}. Include your order details, package length, and a clear description of the setup issue so replies can be faster.',
		slug: 'how-to-contact-support',
		seoTitle: 'How to Contact {brand} Support | FAQ',
		seoDescription:
			'Contact {brand} support via the Support page or {email} with your order details for faster help.',
	}),
] as const;

export const seoFaqs: readonly FaqItem[] = [
	...homeFaqs,
	faq({
		question: 'What is a {game} wallhack?',
		answer:
			'A {game} wallhack is an ESP overlay that shows players, wild dinos, and loot through walls. {brand} includes distance readouts, base raid cues, and toggleable categories.',
		slug: 'what-is-a-ark-wallhack',
		seoTitle: 'What Is a {game} Wallhack? | FAQ',
		seoDescription:
			'A {game} wallhack is ESP that reveals players, wild dinos, and loot through walls — with distance, base raids, and category toggles.',
	}),
	faq({
		question: 'Does {brand} include a radar hack?',
		answer:
			'Yes. {brand} includes 2D radar overlays that highlight nearby threats outside your view — useful for flanks and base raid holds.',
		slug: 'does-ark-hacks-include-radar-hack',
		seoTitle: 'Does {brand} Include a Radar Hack? | FAQ',
		seoDescription:
			'Yes — {brand} includes 2D radar overlays for nearby threats outside your FOV.',
	}),
	faq({
		question: 'How does {antiCheat} affect {primaryKeyword}?',
		answer:
			'{antiCheat} monitors {game} on Windows PC. {brand} posts maintenance notes after patches that may need a rebuild. Check Status before you raid.',
		slug: 'eac-anti-cheat-and-ark-hacks',
		seoTitle: 'How {antiCheat} Affects {brand} | FAQ',
		seoDescription:
			'{antiCheat} may require {brand} rebuilds after patches. Status notes explain the update workflow.',
	}),
	faq({
		question: 'Can I buy undetected {game} cheats for Windows PC?',
		answer:
			'Yes — {brand} sells monthly and lifetime licenses for Windows PC with ESP, radar, and aimbot in one stack. Compare plans on Store before checkout.',
		slug: 'buy-undetected-ark-hacks-windows-pc',
		seoTitle: 'Buy Undetected {game} Cheats for Windows PC | FAQ',
		seoDescription:
			'Buy monthly or lifetime {brand} licenses for Windows PC — ESP, radar, and aimbot in one stack. Compare pricing before checkout.',
	}),
] as const;

export type CustomerReview = {
	handle: string;
	rating: 3 | 4 | 5;
	text: string;
	short: string;
	slug: string;
	seoTitle: string;
	seoDescription: string;
	date: string;
	tag?: string;
};

export const customerReviews = [
	reviewMeta({
		handle: 'xKrypt0_EFT',
		rating: 5,
		text: 'Soft aim in ARK Hacks feels smooth on Customs. The menu took a few minutes to learn. After that, raids felt easy.',
		short: 'Soft aim in ARK Hacks feels smooth on Customs.',
		slug: 'ark-soft-aim-review-xkrypt0',
		seoTitle: 'Soft Aim Review by @xKrypt0_EFT — 5/5 | {brand}',
		seoDescription: '@xKrypt0_EFT rates {brand} soft aim 5/5 for Customs on Windows PC.',
		date: '2026-07-24',
		tag: 'Soft aim',
	}),
	reviewMeta({
		handle: 'buildsR4K',
		rating: 4,
		text: 'ESP boxes help on PvE sessions. You can see who is holding a hallway before you push. Still worth the price for ARK Hacks.',
		short: 'ESP boxes help on PvE sessions. Still worth the price for ARK Hacks.',
		slug: 'ark-esp-scav-run-review-buildsr4k',
		seoTitle: 'ESP Review by @buildsR4K — 4/5 | {brand}',
		seoDescription: '@buildsR4K rates {brand} ESP 4/5 for PvE sessions on Windows PC.',
		date: '2026-07-19',
		tag: 'PvE session',
	}),
	reviewMeta({
		handle: 'dma_wizard',
		rating: 5,
		text: 'I moved to ARK Hacks this wipe. Setup was simple. It stayed up after the last EAC update when my old cheat failed. Lifetime was a good buy.',
		short: 'ARK Hacks stayed up after the last EAC update. Lifetime was a good buy.',
		slug: 'ark-cloud-dma-review-dma-wizard',
		seoTitle: 'Update Review by @dma_wizard — 5/5 | {brand}',
		seoDescription: '@dma_wizard rates {brand} 5/5 after a {antiCheat} update on Windows PC.',
		date: '2026-06-27',
		tag: 'Updates',
	}),
	reviewMeta({
		handle: 'ctrl_player99',
		rating: 4,
		text: 'Soft aim in ARK Hacks is easy to tune on PC. I changed FOV a little and it felt natural. Menu is clear enough.',
		short: 'Soft aim in ARK Hacks is easy to tune on PC.',
		slug: 'ark-soft-aim-review-ctrl-player99',
		seoTitle: 'Soft Aim Review by @ctrl_player99 — 4/5 | {brand}',
		seoDescription: '@ctrl_player99 rates {brand} soft aim 4/5 on Windows PC.',
		date: '2026-07-11',
		tag: 'Soft aim',
	}),
	reviewMeta({
		handle: 'stormChaser_07',
		rating: 3,
		text: 'ARK Hacks works well once it is running. First launch was slow because Windows Defender flagged the loader. Support replied in about two hours. ESP on Woods is solid.',
		short: 'ESP on Woods is solid. Support helped after a slow first launch.',
		slug: 'ark-cheat-setup-review-stormchaser07',
		seoTitle: 'Setup Review by @stormChaser_07 — 3/5 | {brand}',
		seoDescription: '@stormChaser_07 rates {brand} setup 3/5. ESP on Woods is solid after support help.',
		date: '2026-06-15',
		tag: 'Setup',
	}),
	reviewMeta({
		handle: 'lootGoblinx',
		rating: 5,
		text: 'Loot ESP in ARK Hacks pays for the monthly plan. Extract markers and distance make early raids faster.',
		short: 'Loot ESP in ARK Hacks pays for the monthly plan.',
		slug: 'ark-loot-esp-review-lootgoblinx',
		seoTitle: 'Loot ESP Review by @lootGoblinx — 5/5 | {brand}',
		seoDescription: '@lootGoblinx rates {brand} loot ESP 5/5 for early raids on Windows PC.',
		date: '2026-08-01',
	}),
	reviewMeta({
		handle: 'rankedGrind42',
		rating: 4,
		text: 'I have used ARK Hacks since last wipe. Soft aim per weapon helps in dorms. Status updates after EAC patches could be clearer, but it came back the next day.',
		short: 'Soft aim per weapon in ARK Hacks helps in dorms.',
		slug: 'ark-soft-aim-raid-review-rankedgrind42',
		seoTitle: 'Raid Soft Aim by @rankedGrind42 — 4/5 | {brand}',
		seoDescription: '@rankedGrind42 rates {brand} soft aim 4/5 for raids on Windows PC.',
		date: '2026-07-07',
		tag: 'Raid',
	}),
	reviewMeta({
		handle: 'vanLifeEFT',
		rating: 5,
		text: 'Radar in ARK Hacks saved me near base raids. Seeing the third party early in duos is huge. Boxes plus radar look clean.',
		short: 'Radar in ARK Hacks saved me near base raids.',
		slug: 'ark-radar-hack-review-vanlifeeft',
		seoTitle: 'Radar Review by @vanLifeEFT — 5/5 | {brand}',
		seoDescription: '@vanLifeEFT rates {brand} radar 5/5 near base raids on Windows PC.',
		date: '2026-07-28',
		tag: 'Extracts',
	}),
	reviewMeta({
		handle: 'patchDayMike',
		rating: 4,
		text: 'Most cheats go down on patch day. ARK Hacks posted on the status page within a few hours and was back the next morning. My old tool left me waiting for days.',
		short: 'ARK Hacks was back the next morning after a patch.',
		slug: 'ark-eac-update-review-patchdaymike',
		seoTitle: 'Status Review by @patchDayMike — 4/5 | {brand}',
		seoDescription: '@patchDayMike rates {brand} status updates 4/5 after {antiCheat} patches.',
		date: '2026-06-09',
		tag: 'EAC updates',
	}),
	reviewMeta({
		handle: 'snipezOnly_',
		rating: 5,
		text: 'Bolt-action soft aim plus ESP in ARK Hacks is excellent for long shots. Simple and strong.',
		short: 'Bolt-action soft aim plus ESP in ARK Hacks is excellent.',
		slug: 'ark-sniper-soft-aim-review-snipezonly',
		seoTitle: 'Sniper Soft Aim by @snipezOnly_ — 5/5 | {brand}',
		seoDescription: '@snipezOnly_ rates {brand} sniper soft aim 5/5 with ESP on Windows PC.',
		date: '2026-08-01',
	}),
] as const satisfies readonly CustomerReview[];

export const customerReviewStats = {
	averageRating: 4.4,
	totalCount: customerReviews.length,
} as const;
