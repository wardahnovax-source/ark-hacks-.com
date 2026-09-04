import { siteConfig } from '../site';
import type { GuidePostDefinition, ResolvedGuidePost } from './types';
import { guidePosts as rawGuidePosts } from './posts.generated';

export const guidesBasePath = '/guides/';

export const guidePosts: GuidePostDefinition[] = rawGuidePosts;

export function getGuidePostPath(slug: string): string {
	return `${guidesBasePath}${slug}/`;
}

export function absoluteGuideUrl(slug?: string): string {
	return new URL(slug ? getGuidePostPath(slug) : guidesBasePath, siteConfig.url).href;
}

export function resolveGuide(post: GuidePostDefinition): ResolvedGuidePost {
	return {
		...post,
		canonicalPath: getGuidePostPath(post.slug),
	};
}

export function getAllGuides(): ResolvedGuidePost[] {
	return guidePosts.map(resolveGuide).sort((a, b) => (a.published < b.published ? 1 : -1));
}

export function getGuideBySlug(slug: string): ResolvedGuidePost | undefined {
	const post = guidePosts.find((p) => p.slug === slug);
	return post ? resolveGuide(post) : undefined;
}

/** Group external guides by game name for the hub lower section. */
export function getGuidesGroupedByGame(): { gameName: string; guides: ResolvedGuidePost[] }[] {
	const map = new Map<string, ResolvedGuidePost[]>();
	for (const guide of getAllGuides()) {
		const list = map.get(guide.gameName) ?? [];
		list.push(guide);
		map.set(guide.gameName, list);
	}
	return [...map.entries()]
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([gameName, guides]) => ({ gameName, guides }));
}

export function getAllGuideStaticPaths() {
	return guidePosts.map((post) => ({
		params: { slug: post.slug },
		props: { post: resolveGuide(post) },
	}));
}

export function getGuideSitemapEntries() {
	const indexLastmod = guidePosts.reduce(
		(max, post) => (post.updated > max ? post.updated : max),
		guidePosts[0]?.updated ?? new Date().toISOString().slice(0, 10),
	);

	const entries: {
		path: string;
		lastmod: string;
		priority: number;
		changefreq: 'daily' | 'weekly' | 'monthly';
		images: { url: string; title: string; caption: string }[];
	}[] = [
		{
			path: guidesBasePath,
			lastmod: indexLastmod,
			priority: 0.88,
			changefreq: 'weekly',
			images: [
				{
					url: new URL(siteConfig.defaultOgImage, siteConfig.url).href,
					title: 'Game Guides Hub',
					caption: 'ARK ASCENDED HACKS native guides and game-specific guides',
				},
			],
		},
	];

	for (const post of guidePosts) {
		entries.push({
			path: getGuidePostPath(post.slug),
			lastmod: post.updated,
			priority: 0.72,
			changefreq: 'monthly',
			images: [
				{
					url: new URL(post.imageSrc, siteConfig.url).href,
					title: post.title,
					caption: post.imageAlt,
				},
			],
		});
	}

	return entries;
}
