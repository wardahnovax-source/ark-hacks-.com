import { siteConfig } from './site';

/** Screenshots used across product pages — simple ark cheats keyword alts. */
export const arkImages = {
	hero: '/images/ark-hacks-hero-full.webp',
	espWallhack: '/images/ark-hacks-wallhack.webp',
	aimbotCombat: '/images/ark-hacks-aimbot.webp',
	aimbotSkeleton: '/images/ark-hacks-aimbot-view.webp',
	playerEsp: '/images/ark-hacks-radar.webp',
	cheatsCombat: '/images/ark-hacks-raid.webp',
	logo: siteConfig.logo,
	/** @deprecated Blog / legacy aliases — each maps to one of the six assets above */
	cover: '/images/ark-hacks-raid.webp',
	loadoutBuilder: '/images/ark-hacks-radar.webp',
	squadFight: '/images/ark-hacks-aimbot-view.webp',
	cheatsPackage: '/images/ark-hacks-radar.webp',
	headerArt: '/images/ark-hacks-aimbot-view.webp',
	battleRoyaleCombat: '/images/ark-hacks-raid.webp',
	extractFight: '/images/ark-hacks-aimbot.webp',
	rebootFight: '/images/ark-hacks-aimbot.webp',
	scavRunCombat: '/images/ark-hacks-wallhack.webp',
	scavRunMode: '/images/ark-hacks-esp.webp',
	battleRoyaleIsland: '/images/ark-hacks-esp.webp',
	raidMap: '/images/ark-hacks-esp.webp',
	product: [
		{ src: '/images/ark-hacks-wallhack.webp', alt: 'Wallhack outlines for players and wild dinos' },
		{ src: '/images/ark-hacks-aimbot.webp', alt: 'Soft aim assist overlay for ARK' },
		{ src: '/images/ark-hacks-aimbot-view.webp', alt: 'Aimbot bone priority settings' },
	],
	gallery: [
		{ src: '/images/ark-hacks-esp.webp', alt: 'ESP overlay showing enemy distance', featured: true },
		{ src: '/images/ark-hacks-wallhack.webp', alt: 'Wallhack view through terrain' },
		{ src: '/images/ark-hacks-aimbot.webp', alt: 'Soft aim FOV ring in combat' },
		{ src: '/images/ark-hacks-esp.webp', alt: 'Container and loot ESP pins' },
		{ src: '/images/ark-hacks-wallhack.webp', alt: 'Boss and player wallhack filters' },
	],
	/**
	 * @deprecated Prefer brand.sitemap.images via brand-sitemap / page-sitemap.
	 * Kept as path aliases for older imports; titles come from Brand Studio.
	 */
	sitemap: [
		{ src: '/images/ark-hacks-esp.webp', title: '', caption: '' },
		{ src: '/images/ark-hacks-wallhack.webp', title: '', caption: '' },
		{ src: '/images/ark-hacks-aimbot.webp', title: '', caption: '' },
		{ src: '/images/ark-hacks-aimbot-view.webp', title: '', caption: '' },
		{ src: '/images/ark-hacks-radar.webp', title: '', caption: '' },
		{ src: '/images/ark-hacks-raid.webp', title: '', caption: '' },
	],
} as const;
