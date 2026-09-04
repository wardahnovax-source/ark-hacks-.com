import { siteConfig } from './site';
import { arkImages } from './ark';
import { pageIds, type PageId } from './i18n/routing';
import { pageSitemapImageLabels } from './brand-sitemap';

/** Rotating product screenshots for FAQ / review detail URLs. */
export const crawlPhotoPool = [
	arkImages.espWallhack,
	arkImages.aimbotCombat,
	arkImages.aimbotSkeleton,
	arkImages.playerEsp,
	arkImages.cheatsCombat,
	'/images/ark-hacks-esp.webp',
] as const;

/**
 * One primary crawl/OG photo per product page.
 * Prefer compressed WebP screenshots so Google can fetch them quickly.
 */
export const pageImageSrcById: Record<PageId, string> = {
	home: '/images/ark-hacks-hero-1920w.webp',
	'ark-esp': arkImages.playerEsp,
	'ark-aimbot': arkImages.aimbotCombat,
	features: arkImages.aimbotSkeleton,
	pricing: arkImages.cheatsCombat,
	setup: arkImages.playerEsp,
	updates: '/images/ark-hacks-hero-1920w.webp',
	faq: arkImages.aimbotSkeleton,
	support: arkImages.cheatsCombat,
	undetected: arkImages.espWallhack,
	wallhack: arkImages.espWallhack,
	radar: arkImages.playerEsp,
	eac: arkImages.aimbotCombat,
	'cheats-2026': '/images/ark-hacks-hero-1920w.webp',
	hacks: arkImages.cheatsCombat,
	'cheat-download': arkImages.cheatsCombat,
	'mod-menu': arkImages.playerEsp,
	'soft-aim': arkImages.aimbotSkeleton,
	'best-cheats': '/images/ark-hacks-hero-1920w.webp',
	'aimbot-hack': arkImages.aimbotSkeleton,
	'esp-hack': arkImages.espWallhack,
	'unlock-all': arkImages.playerEsp,
	privacy: arkImages.aimbotCombat,
	refund: arkImages.cheatsCombat,
	terms: arkImages.aimbotSkeleton,
};

for (const pageId of pageIds) {
	if (!pageImageSrcById[pageId]) {
		throw new Error(`[page-images] No image path configured for pageId: ${pageId}`);
	}
}

export function absoluteImageUrl(path: string): string {
	return new URL(path, siteConfig.url).href;
}

export function getPageImageSrc(pageId: PageId): string {
	return pageImageSrcById[pageId];
}

export function getPageCrawlImage(pageId: PageId): {
	src: string;
	url: string;
	title: string;
	caption: string;
} {
	const src = pageImageSrcById[pageId];
	const labels = pageSitemapImageLabels(pageId);
	return {
		src,
		url: absoluteImageUrl(src),
		title: labels.title,
		caption: labels.caption,
	};
}

/** Stable pick from the photo pool (FAQ answers, reviews, etc.). */
export function pickCrawlPhoto(seed: string): string {
	let hash = 0;
	for (let i = 0; i < seed.length; i += 1) {
		hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
	}
	return crawlPhotoPool[hash % crawlPhotoPool.length];
}

export function crawlPhotoMeta(
	seed: string,
	title: string,
	caption: string,
): { src: string; url: string; title: string; caption: string } {
	const src = pickCrawlPhoto(seed);
	return {
		src,
		url: absoluteImageUrl(src),
		title,
		caption,
	};
}

/** Default large social / SERP image when a page has no specific asset. */
export const defaultCrawlImageSrc = pageImageSrcById.home;
