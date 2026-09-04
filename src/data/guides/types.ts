export type GuideSection = {
	h2: string;
	paragraphs: string[];
};

export type GuidePostDefinition = {
	id: string;
	slug: string;
	externalUrl: string;
	gameId: string;
	gameName: string;
	imageSrc: string;
	published: string;
	updated: string;
	category: string;
	title: string;
	metaDescription: string;
	h1: string;
	intro: string;
	keywords: string[];
	imageAlt: string;
	anchorText: string;
	sections: GuideSection[];
};

export type ResolvedGuidePost = GuidePostDefinition & {
	canonicalPath: string;
};

export type NativeGuideLink = {
	title: string;
	description: string;
	href: string;
	imageSrc: string;
	imageAlt: string;
};
