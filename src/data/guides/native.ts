import { arkImages } from '../ark';
import type { NativeGuideLink } from './types';

/** Primary ARK ASCENDED HACKS product guides shown at the top of /guides/. */
export const nativeGuides: NativeGuideLink[] = [
	{
		title: 'ARK ASCENDED HACKS Overview',
		description: 'Full breakdown of ARK: Survival Ascended hacks — ESP, aimbot, dino filters, and EAC-safe usage.',
		href: '/ark-hacks/',
		imageSrc: arkImages.hero,
		imageAlt: 'ARK: Survival Ascended hacks overview',
	},
	{
		title: 'ARK ESP Guide',
		description: 'Player and dino ESP setup, loot filters, and tribe raid visibility tips.',
		href: '/ark-esp/',
		imageSrc: arkImages.espWallhack,
		imageAlt: 'ARK ESP wallhack guide',
	},
	{
		title: 'ARK Aimbot Guide',
		description: 'Soft aim configuration, recoil control, and PvP dino combat tuning.',
		href: '/ark-aimbot/',
		imageSrc: arkImages.aimbotCombat,
		imageAlt: 'ARK aimbot configuration guide',
	},
	{
		title: 'Setup & Installation',
		description: 'Step-by-step loader install, Windows compatibility, and first-launch checklist.',
		href: '/setup/',
		imageSrc: arkImages.playerEsp,
		imageAlt: 'ARK ASCENDED HACKS setup guide',
	},
	{
		title: 'Features Reference',
		description: 'Complete feature list — radar, loot ESP, mod menu tabs, and hotkey map.',
		href: '/features/',
		imageSrc: arkImages.cheatsCombat,
		imageAlt: 'ARK ASCENDED HACKS features reference',
	},
	{
		title: 'Pricing & Plans',
		description: 'Monthly vs lifetime plans, checkout flow, and instant delivery details.',
		href: '/pricing/',
		imageSrc: arkImages.espWallhack,
		imageAlt: 'ARK ASCENDED HACKS pricing guide',
	},
	{
		title: 'Patch Updates',
		description: 'Live status page for EAC patches, loader updates, and downtime notices.',
		href: '/updates/',
		imageSrc: arkImages.aimbotSkeleton,
		imageAlt: 'ARK ASCENDED HACKS update status',
	},
	{
		title: 'FAQ',
		description: 'Common questions about detection, refunds, hardware requirements, and support.',
		href: '/faq/',
		imageSrc: arkImages.hero,
		imageAlt: 'ARK ASCENDED HACKS frequently asked questions',
	},
];
