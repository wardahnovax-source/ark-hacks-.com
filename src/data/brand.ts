/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'ARK Hacks',
	/** Short product label if needed */
	shortName: 'ARK',
	/** Canonical origin — no trailing slash */
	url: 'https://arkhacks.com',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@arkhacks.com',
	checkoutUrl: 'https://zadeyo.com/go/WARDAH?to=%2Fproducts%2Fark-ascended',

	/** Game this template instance targets */
	game: 'ARK: Survival Ascended',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Easy Anti-Cheat',

	logo: '/images/ark-hacks-logo.webp',
	logoRaster: '/images/ark-hacks-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'ARK Hacks logo',
	defaultOgImage: '/images/ark-hacks-hero-3840w.webp',
	heroImage: '/images/ark-hacks-hero-3840w.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — jungle green canvas + obelisk cyan accent (matches hero art).
	 */
	theme: {
		accent: '#22d3ee',
		bg: '#0a1210',
		soft: '#7dd3fc',
		deep: '#0891b2',
		hover: '#38bdf8',
		panel: '#0c1614',
	},

	keywords: {
		primary: 'ark ascended hacks',
		list: [
			'ark ascended hacks',
			'ARK hacks',
			'ARK cheat',
			'ARK hack',
			'ARK cheats PC',
			'ARK hacks PC',
			'ARK cheat software',
			'ARK cheat menu',
			'ARK aimbot',
			'ARK ESP',
			'ARK dino ESP',
			'ARK player ESP',
			'ARK no recoil',
			'ARK loot ESP',
			'best ARK cheats',
			'best ARK hacks',
			'ARK cheats 2026',
			'ARK hacks 2026',
			'ARK undetected cheats',
			'ARK cheat download',
		] as const,
	},

	seo: {
		homeTitle: 'ARK Hacks | Undetected ARK Ascended Cheats PC',
		homeDescription:
			'ARK ascended hacks for Windows PC — aimbot, player ESP, dino ESP, loot ESP, and EAC maintenance. Compare plans and buy ARK hacks with instant delivery.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription:
			'Full ARK cheat feature list — aimbot, player ESP, dino ESP, loot ESP, no recoil, FOV changer, and EAC patch updates for Windows PC.',
		storeTitle: '{game} Store | {brand}',
		storeDescription:
			'Monthly and lifetime ARK hacks plans for Windows PC. Same aimbot, ESP, and combat features on both. Instant delivery after checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription:
			'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before you join a server on Windows PC.',
		previewTitle: 'ARK Ascended Hacks | ESP, Aimbot & Dino ESP',
		previewDescription:
			'Buy undetected ARK ascended hacks for Windows PC. Aimbot, player ESP, dino ESP, loot ESP, and EAC updates in one license with instant delivery.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription:
			'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can play faster. Follow each step before your first session.',
		supportTitle: '{game} Support | {brand}',
		supportDescription:
			'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription:
			'Short answers about {brand} for ARK: Survival Ascended — delivery, setup, {antiCheat} updates, refunds, and Windows PC notes before you buy.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Buyer reviews for {brand} — aimbot, ESP, dino ESP, and patch updates for ARK: Survival Ascended on Windows PC. Real feedback from license holders.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription:
			'Guides and notes for {game} — dino taming tips, ESP, aimbot, loot routes, and {antiCheat} update coverage for Windows PC players.',
	},

	copy: {
		tagline: 'Undetected {primaryKeyword} — aimbot, ESP, and dino filters for PC',
		summary:
			'{brand} is an undetected {game} cheat package for Windows PC. Includes aimbot, player ESP, dino ESP, loot ESP, and combat tools with {antiCheat} maintenance after patches.',
		heroLede: 'Hacks and cheats available — 0% detection.',
		blogLabel: 'ARK Intel',
		ctaBuy: 'Buy now',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you play.',
		previewIntro:
			'{brand} for ARK: Survival Ascended — aimbot, player ESP, dino ESP, loot ESP, and EAC rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — aimbot, ESP, dino ESP, and support.',
		chipEsp: 'Player & Dino ESP',
		chipAim: 'Aimbot',
		chipRadar: 'Loot ESP',
		chipUpdates: 'Patch updates',
		navPreview: 'Hacks',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	sitemap: {
		contentLastmod: '2026-09-03',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/ark-hacks-esp.webp',
				title: 'Player ESP overlay in ARK: Survival Ascended',
				caption: 'Player ESP boxes, level readouts, and distance markers',
			},
			{
				src: '/images/ark-hacks-wallhack.webp',
				title: 'Dino ESP and skeleton wallhack for ARK',
				caption: 'Dino outlines, health bars, and skeleton ESP through terrain',
			},
			{
				src: '/images/ark-hacks-aimbot.webp',
				title: 'Aimbot and combat tools for ARK',
				caption: 'Aimbot, no recoil, and rapid fire controls',
			},
			{
				src: '/images/ark-hacks-aimbot-view.webp',
				title: 'ARK cheat menu screenshot',
				caption: 'In-menu aimbot and ESP settings for Windows PC',
			},
			{
				src: '/images/ark-hacks-radar.webp',
				title: 'Loot and supply crate ESP',
				caption: 'Item ESP, loot ESP, and supply crate markers',
			},
			{
				src: '/images/ark-hacks-raid.webp',
				title: 'ARK Hacks license plans',
				caption: 'Monthly and lifetime ARK ascended hacks for Windows PC',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
