export type LocaleCode =
	| 'en'
	| 'es'
	| 'fr'
	| 'de'
	| 'pt'
	| 'it'
	| 'nl'
	| 'pl'
	| 'ru'
	| 'tr'
	| 'ar'
	| 'ja'
	| 'ko'
	| 'zh'
	| 'hi'
	| 'id'
	| 'th'
	| 'vi'
	| 'uk'
	| 'cs'
	| 'ro'
	| 'sv';

export type LocaleMeta = {
	code: LocaleCode;
	name: string;
	nativeName: string;
	hreflang: string;
	ogLocale: string;
	dir: 'ltr' | 'rtl';
	region: string;
};

/** 22 locales for global ARK Hacks blog SEO coverage. */
export const locales: LocaleMeta[] = [
	{ code: 'en', name: 'English', nativeName: 'English', hreflang: 'en', ogLocale: 'en_US', dir: 'ltr', region: 'Worldwide' },
	{ code: 'es', name: 'Spanish', nativeName: 'Español', hreflang: 'es', ogLocale: 'es_ES', dir: 'ltr', region: 'Worldwide' },
	{ code: 'fr', name: 'French', nativeName: 'Français', hreflang: 'fr', ogLocale: 'fr_FR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'de', name: 'German', nativeName: 'Deutsch', hreflang: 'de', ogLocale: 'de_DE', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pt', name: 'Portuguese', nativeName: 'Português', hreflang: 'pt', ogLocale: 'pt_BR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'it', name: 'Italian', nativeName: 'Italiano', hreflang: 'it', ogLocale: 'it_IT', dir: 'ltr', region: 'Worldwide' },
	{ code: 'nl', name: 'Dutch', nativeName: 'Nederlands', hreflang: 'nl', ogLocale: 'nl_NL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'pl', name: 'Polish', nativeName: 'Polski', hreflang: 'pl', ogLocale: 'pl_PL', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ru', name: 'Russian', nativeName: 'Русский', hreflang: 'ru', ogLocale: 'ru_RU', dir: 'ltr', region: 'Worldwide' },
	{ code: 'tr', name: 'Turkish', nativeName: 'Türkçe', hreflang: 'tr', ogLocale: 'tr_TR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ar', name: 'Arabic', nativeName: 'العربية', hreflang: 'ar', ogLocale: 'ar_SA', dir: 'rtl', region: 'Worldwide' },
	{ code: 'ja', name: 'Japanese', nativeName: '日本語', hreflang: 'ja', ogLocale: 'ja_JP', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ko', name: 'Korean', nativeName: '한국어', hreflang: 'ko', ogLocale: 'ko_KR', dir: 'ltr', region: 'Worldwide' },
	{ code: 'zh', name: 'Chinese', nativeName: '中文', hreflang: 'zh', ogLocale: 'zh_CN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', hreflang: 'hi', ogLocale: 'hi_IN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', hreflang: 'id', ogLocale: 'id_ID', dir: 'ltr', region: 'Worldwide' },
	{ code: 'th', name: 'Thai', nativeName: 'ไทย', hreflang: 'th', ogLocale: 'th_TH', dir: 'ltr', region: 'Worldwide' },
	{ code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', hreflang: 'vi', ogLocale: 'vi_VN', dir: 'ltr', region: 'Worldwide' },
	{ code: 'uk', name: 'Ukrainian', nativeName: 'Українська', hreflang: 'uk', ogLocale: 'uk_UA', dir: 'ltr', region: 'Worldwide' },
	{ code: 'cs', name: 'Czech', nativeName: 'Čeština', hreflang: 'cs', ogLocale: 'cs_CZ', dir: 'ltr', region: 'Worldwide' },
	{ code: 'ro', name: 'Romanian', nativeName: 'Română', hreflang: 'ro', ogLocale: 'ro_RO', dir: 'ltr', region: 'Worldwide' },
	{ code: 'sv', name: 'Swedish', nativeName: 'Svenska', hreflang: 'sv', ogLocale: 'sv_SE', dir: 'ltr', region: 'Worldwide' },
];

export const defaultLocale: LocaleCode = 'en';

export const localeCodes = locales.map((l) => l.code);

export const localeMap = Object.fromEntries(locales.map((l) => [l.code, l])) as Record<
	LocaleCode,
	LocaleMeta
>;

export function isLocaleCode(value: string): value is LocaleCode {
	return localeCodes.includes(value as LocaleCode);
}

export function getLocale(code: string): LocaleMeta | undefined {
	return isLocaleCode(code) ? localeMap[code] : undefined;
}

/** UI strings for blog index pages per locale. */
export const blogUi: Record<
	LocaleCode,
	{
		blogTitle: string;
		blogDescription: string;
		blogH1: string;
		blogIntro: string;
		readMore: string;
		published: string;
		updated: string;
		relatedPosts: string;
		allPosts: string;
		home: string;
		language: string;
	}
> = {
	en: {
		blogTitle: 'ARK Hacks Blog | Raid Guides',
		blogDescription:
			'ARK: Survival Ascended guides — raid tips, ESP, aimbot notes, loot routes, and EAC update coverage. English blog at arkhacks.com/blog/.',
		blogH1: 'ARK Hacks Intel',
		blogIntro:
			'Short ARK: Survival Ascended guides for PvP servers and tribe raids. Pair these tips with the ARK Hacks product pages when you need ESP, soft aim, or radar.',
		readMore: 'Read guide',
		published: 'Published',
		updated: 'Updated',
		relatedPosts: 'Related guides',
		allPosts: 'All blog posts',
		home: 'ARK Hacks home',
		language: 'Language',
	},
	es: {
		blogTitle: 'Blog ARK Hacks 2026 | Guías en 22 idiomas',
		blogDescription:
			'Blog de ARK Hacks con guías de trucos indetectables, ESP wallhack, radar y Aimbot para ARK: Survival Ascended en PC Windows.',
		blogH1: 'Blog ARK Hacks — Guías globales',
		blogIntro:
			'Guías SEO de trucos ARK: Survival Ascended indetectables, ESP wallhack, radar hack, Aimbot y mantenimiento Easy Anti-Cheat en 22 idiomas.',
		readMore: 'Leer guía',
		published: 'Publicado',
		updated: 'Actualizado',
		relatedPosts: 'Guías ARK: Survival Ascended relacionadas',
		allPosts: 'Todos los artículos',
		home: 'Inicio ARK Hacks',
		language: 'Idioma',
	},
	fr: {
		blogTitle: 'Blog ARK Hacks 2026 | Guides en 22 langues',
		blogDescription:
			'Blog ARK Hacks : triches indétectables, ESP wallhack, radar et Aimbot pour ARK: Survival Ascended sur PC Windows.',
		blogH1: 'Blog ARK Hacks — Guides mondiaux',
		blogIntro:
			'Guides SEO triches ARK: Survival Ascended indétectables, ESP wallhack, radar hack, Aimbot et Easy Anti-Cheat en 22 langues.',
		readMore: 'Lire le guide',
		published: 'Publié',
		updated: 'Mis à jour',
		relatedPosts: 'Guides ARK: Survival Ascended associés',
		allPosts: 'Tous les articles',
		home: 'Accueil ARK Hacks',
		language: 'Langue',
	},
	de: {
		blogTitle: 'ARK Hacks Blog 2026 | Guides in 22 Sprachen',
		blogDescription:
			'ARK Hacks Blog mit undetected ESP, Wallhack, Radar und Aimbot Guides für ARK: Survival Ascended auf Windows PC.',
		blogH1: 'ARK Hacks Blog — Globale Guides',
		blogIntro:
			'SEO-Guides für undetected ARK Hacks, ESP Wallhack, Radar Hack, Aimbot und Easy Anti-Cheat in 22 Sprachen.',
		readMore: 'Guide lesen',
		published: 'Veröffentlicht',
		updated: 'Aktualisiert',
		relatedPosts: 'Verwandte ARK: Survival Ascended Guides',
		allPosts: 'Alle Beiträge',
		home: 'ARK Hacks Start',
		language: 'Sprache',
	},
	pt: {
		blogTitle: 'Blog ARK Hacks 2026 | Guias em 22 idiomas',
		blogDescription:
			'Blog ARK Hacks com guias de cheats indetectáveis, ESP wallhack, radar e Aimbot para ARK: Survival Ascended no PC.',
		blogH1: 'Blog ARK Hacks — Guias globais',
		blogIntro:
			'Guias SEO de cheats ARK: Survival Ascended indetectáveis, ESP wallhack, radar hack, Aimbot e Easy Anti-Cheat em 22 idiomas.',
		readMore: 'Ler guia',
		published: 'Publicado',
		updated: 'Atualizado',
		relatedPosts: 'Guias ARK: Survival Ascended relacionados',
		allPosts: 'Todos os posts',
		home: 'Início ARK Hacks',
		language: 'Idioma',
	},
	it: {
		blogTitle: 'Blog ARK Hacks 2026 | Guide in 22 lingue',
		blogDescription:
			'Blog ARK Hacks con guide cheat indetectable, ESP wallhack, radar e Aimbot per ARK: Survival Ascended su PC Windows.',
		blogH1: 'Blog ARK Hacks — Guide globali',
		blogIntro:
			'Guide SEO cheat ARK: Survival Ascended indetectable, ESP wallhack, radar hack, Aimbot e Easy Anti-Cheat in 22 lingue.',
		readMore: 'Leggi guida',
		published: 'Pubblicato',
		updated: 'Aggiornato',
		relatedPosts: 'Guide ARK: Survival Ascended correlate',
		allPosts: 'Tutti gli articoli',
		home: 'Home ARK Hacks',
		language: 'Lingua',
	},
	nl: {
		blogTitle: 'ARK Hacks Blog 2026 | Gidsen in 22 talen',
		blogDescription:
			'ARK Hacks blog met undetected ESP, wallhack, radar en Aimbot gidsen voor ARK: Survival Ascended op Windows PC.',
		blogH1: 'ARK Hacks Blog — Wereldwijde gidsen',
		blogIntro:
			'SEO-gidsen voor undetected ARK hacks, ESP wallhack, radar hack, Aimbot en Easy Anti-Cheat in 22 talen.',
		readMore: 'Lees gids',
		published: 'Gepubliceerd',
		updated: 'Bijgewerkt',
		relatedPosts: 'Gerelateerde ARK: Survival Ascended gidsen',
		allPosts: 'Alle posts',
		home: 'ARK Hacks home',
		language: 'Taal',
	},
	pl: {
		blogTitle: 'Blog ARK Hacks 2026 | Poradniki w 22 językach',
		blogDescription:
			'Blog ARK Hacks z poradnikami undetected ESP, wallhack, radar i Aimbot dla ARK: Survival Ascended na PC.',
		blogH1: 'Blog ARK Hacks — Globalne poradniki',
		blogIntro:
			'Poradniki SEO undetected cheatów ARK: Survival Ascended, ESP wallhack, radar hack, Aimbot i Easy Anti-Cheat w 22 językach.',
		readMore: 'Czytaj poradnik',
		published: 'Opublikowano',
		updated: 'Zaktualizowano',
		relatedPosts: 'Powiązane poradniki ARK: Survival Ascended',
		allPosts: 'Wszystkie artykuły',
		home: 'Strona główna ARK Hacks',
		language: 'Język',
	},
	ru: {
		blogTitle: 'Блог ARK Hacks 2026 | Гайды на 22 языках',
		blogDescription:
			'Блог ARK Hacks: undetected ESP, wallhack, radar и Aimbot для ARK: Survival Ascended на Windows PC.',
		blogH1: 'Блог ARK Hacks — Глобальные гайды',
		blogIntro:
			'SEO-гайды по undetected читам ARK: Survival Ascended, ESP wallhack, radar hack, Aimbot и Easy Anti-Cheat на 22 языках.',
		readMore: 'Читать гайд',
		published: 'Опубликовано',
		updated: 'Обновлено',
		relatedPosts: 'Похожие гайды ARK: Survival Ascended',
		allPosts: 'Все статьи',
		home: 'Главная ARK Hacks',
		language: 'Язык',
	},
	tr: {
		blogTitle: 'ARK Hacks Blog 2026 | 22 dilde rehberler',
		blogDescription:
			'ARK Hacks blog: undetected ESP, wallhack, radar ve Aimbot rehberleri ARK: Survival Ascended Windows PC.',
		blogH1: 'ARK Hacks Blog — Küresel rehberler',
		blogIntro:
			'Undetected ARK: Survival Ascended hileleri, ESP wallhack, radar hack, Aimbot ve Easy Anti-Cheat SEO rehberleri 22 dilde.',
		readMore: 'Rehberi oku',
		published: 'Yayınlandı',
		updated: 'Güncellendi',
		relatedPosts: 'İlgili ARK: Survival Ascended rehberleri',
		allPosts: 'Tüm yazılar',
		home: 'ARK Hacks ana sayfa',
		language: 'Dil',
	},
	ar: {
		blogTitle: 'مدونة ARK Hacks 2026 | أدلة بـ 22 لغة',
		blogDescription:
			'مدونة ARK Hacks: غش undetected وESP wallhack ورadar وAimbot لـ ARK: Survival Ascended على Windows PC.',
		blogH1: 'مدونة ARK Hacks — أدلة عالمية',
		blogIntro:
			'أدلة SEO لغش ARK: Survival Ascended undetected وESP wallhack ورadar hack وAimbot وEasy Anti-Cheat بـ 22 لغة.',
		readMore: 'اقرأ الدليل',
		published: 'نُشر',
		updated: 'تم التحديث',
		relatedPosts: 'أدلة ARK: Survival Ascended ذات صلة',
		allPosts: 'جميع المقالات',
		home: 'الرئيسية ARK Hacks',
		language: 'اللغة',
	},
	ja: {
		blogTitle: 'ARK Hacks ブログ 2026 | 22言語ガイド',
		blogDescription:
			'ARK Hacksブログ：undetected ESP、wallhack、radar、Aimbotガイド。ARK: Survival Ascended Windows PC向け。',
		blogH1: 'ARK Hacks ブログ — グローバルガイド',
		blogIntro:
			'undetected ARK: Survival Ascendedチート、ESP wallhack、radar hack、Aimbot、Easy Anti-CheatのSEOガイドを22言語で提供。',
		readMore: 'ガイドを読む',
		published: '公開日',
		updated: '更新日',
		relatedPosts: '関連ARK: Survival Ascendedガイド',
		allPosts: 'すべての記事',
		home: 'ARK Hacks ホーム',
		language: '言語',
	},
	ko: {
		blogTitle: 'ARK Hacks 블로그 2026 | 22개 언어 가이드',
		blogDescription:
			'ARK Hacks 블로그: undetected ESP, wallhack, radar, Aimbot 가이드. ARK: Survival Ascended Windows PC.',
		blogH1: 'ARK Hacks 블로그 — 글로벌 가이드',
		blogIntro:
			'undetected ARK: Survival Ascended 치트, ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat SEO 가이드를 22개 언어로 제공.',
		readMore: '가이드 읽기',
		published: '게시일',
		updated: '업데이트',
		relatedPosts: '관련 ARK: Survival Ascended 가이드',
		allPosts: '모든 게시물',
		home: 'ARK Hacks 홈',
		language: '언어',
	},
	zh: {
		blogTitle: 'ARK Hacks 博客 2026 | 22种语言指南',
		blogDescription:
			'ARK Hacks博客：undetected ESP、wallhack、radar和Aimbot指南，适用于ARK: Survival Ascended Windows PC。',
		blogH1: 'ARK Hacks 博客 — 全球指南',
		blogIntro:
			'undetected ARK: Survival Ascended作弊、ESP wallhack、radar hack、Aimbot和Easy Anti-Cheat的SEO指南，共22种语言。',
		readMore: '阅读指南',
		published: '发布',
		updated: '更新',
		relatedPosts: '相关ARK: Survival Ascended指南',
		allPosts: '所有文章',
		home: 'ARK Hacks 首页',
		language: '语言',
	},
	hi: {
		blogTitle: 'ARK Hacks ब्लॉग 2026 | 22 भाषाओं में गाइड',
		blogDescription:
			'ARK Hacks ब्लॉग: undetected ESP, wallhack, radar और Aimbot गाइड ARK: Survival Ascended Windows PC के लिए।',
		blogH1: 'ARK Hacks ब्लॉग — वैश्विक गाइड',
		blogIntro:
			'undetected ARK hacks, ESP wallhack, radar hack, Aimbot और Easy Anti-Cheat SEO गाइड 22 भाषाओं में।',
		readMore: 'गाइड पढ़ें',
		published: 'प्रकाशित',
		updated: 'अपडेट',
		relatedPosts: 'संबंधित ARK: Survival Ascended गाइड',
		allPosts: 'सभी पोस्ट',
		home: 'ARK Hacks होम',
		language: 'भाषा',
	},
	id: {
		blogTitle: 'Blog ARK Hacks 2026 | Panduan 22 bahasa',
		blogDescription:
			'Blog ARK Hacks: panduan undetected ESP, wallhack, radar dan Aimbot untuk ARK: Survival Ascended di PC Windows.',
		blogH1: 'Blog ARK Hacks — Panduan global',
		blogIntro:
			'Panduan SEO cheat ARK: Survival Ascended undetected, ESP wallhack, radar hack, Aimbot dan Easy Anti-Cheat dalam 22 bahasa.',
		readMore: 'Baca panduan',
		published: 'Dipublikasikan',
		updated: 'Diperbarui',
		relatedPosts: 'Panduan ARK: Survival Ascended terkait',
		allPosts: 'Semua artikel',
		home: 'Beranda ARK Hacks',
		language: 'Bahasa',
	},
	th: {
		blogTitle: 'บล็อก ARK Hacks 2026 | คู่มือ 22 ภาษา',
		blogDescription:
			'บล็อก ARK Hacks: คู่มือ undetected ESP, wallhack, radar และ Aimbot สำหรับ ARK: Survival Ascended บน PC',
		blogH1: 'บล็อก ARK Hacks — คู่มือทั่วโลก',
		blogIntro:
			'คู่มือ SEO สำหรับ cheat ARK: Survival Ascended undetected, ESP wallhack, radar hack, Aimbot และ Easy Anti-Cheat 22 ภาษา',
		readMore: 'อ่านคู่มือ',
		published: 'เผยแพร่',
		updated: 'อัปเดต',
		relatedPosts: 'คู่มือ ARK: Survival Ascended ที่เกี่ยวข้อง',
		allPosts: 'บทความทั้งหมด',
		home: 'หน้าแรก ARK Hacks',
		language: 'ภาษา',
	},
	vi: {
		blogTitle: 'Blog ARK Hacks 2026 | Hướng dẫn 22 ngôn ngữ',
		blogDescription:
			'Blog ARK Hacks: hướng dẫn undetected ESP, wallhack, radar và Aimbot cho ARK: Survival Ascended trên PC.',
		blogH1: 'Blog ARK Hacks — Hướng dẫn toàn cầu',
		blogIntro:
			'Hướng dẫn SEO cheat ARK: Survival Ascended undetected, ESP wallhack, radar hack, Aimbot và Easy Anti-Cheat bằng 22 ngôn ngữ.',
		readMore: 'Đọc hướng dẫn',
		published: 'Xuất bản',
		updated: 'Cập nhật',
		relatedPosts: 'Hướng dẫn ARK: Survival Ascended liên quan',
		allPosts: 'Tất cả bài viết',
		home: 'Trang chủ ARK Hacks',
		language: 'Ngôn ngữ',
	},
	uk: {
		blogTitle: 'Блог ARK Hacks 2026 | Гайди 22 мовами',
		blogDescription:
			'Блог ARK Hacks: undetected ESP, wallhack, radar та Aimbot для ARK: Survival Ascended на Windows PC.',
		blogH1: 'Блог ARK Hacks — Глобальні гайди',
		blogIntro:
			'SEO-гайди з undetected читів ARK: Survival Ascended, ESP wallhack, radar hack, Aimbot та Easy Anti-Cheat 22 мовами.',
		readMore: 'Читати гайд',
		published: 'Опубліковано',
		updated: 'Оновлено',
		relatedPosts: "Пов'язані гайди ARK: Survival Ascended",
		allPosts: 'Усі статті',
		home: 'Головна ARK Hacks',
		language: 'Мова',
	},
	cs: {
		blogTitle: 'Blog ARK Hacks 2026 | Průvodce ve 22 jazycích',
		blogDescription:
			'Blog ARK Hacks: undetected ESP, wallhack, radar a Aimbot pro ARK: Survival Ascended na Windows PC.',
		blogH1: 'Blog ARK Hacks — Globální průvodce',
		blogIntro:
			'SEO průvodce undetected ARK cheaty, ESP wallhack, radar hack, Aimbot a Easy Anti-Cheat ve 22 jazycích.',
		readMore: 'Číst průvodce',
		published: 'Publikováno',
		updated: 'Aktualizováno',
		relatedPosts: 'Související ARK: Survival Ascended průvodce',
		allPosts: 'Všechny články',
		home: 'Domů ARK Hacks',
		language: 'Jazyk',
	},
	ro: {
		blogTitle: 'Blog ARK Hacks 2026 | Ghiduri în 22 de limbi',
		blogDescription:
			'Blog ARK Hacks: ghiduri undetected ESP, wallhack, radar și Aimbot pentru ARK: Survival Ascended pe PC.',
		blogH1: 'Blog ARK Hacks — Ghiduri globale',
		blogIntro:
			'Ghiduri SEO cheat-uri ARK: Survival Ascended undetected, ESP wallhack, radar hack, Aimbot și Easy Anti-Cheat în 22 de limbi.',
		readMore: 'Citește ghidul',
		published: 'Publicat',
		updated: 'Actualizat',
		relatedPosts: 'Ghiduri ARK: Survival Ascended related',
		allPosts: 'Toate articolele',
		home: 'Acasă ARK Hacks',
		language: 'Limbă',
	},
	sv: {
		blogTitle: 'ARK Hacks Blogg 2026 | Guider på 22 språk',
		blogDescription:
			'ARK Hacks blogg med undetected ESP, wallhack, radar och Aimbot guider för ARK: Survival Ascended på PC.',
		blogH1: 'ARK Hacks Blogg — Globala guider',
		blogIntro:
			'SEO-guider för undetected ARK hacks, ESP wallhack, radar hack, Aimbot och Easy Anti-Cheat på 22 språk.',
		readMore: 'Läs guide',
		published: 'Publicerad',
		updated: 'Uppdaterad',
		relatedPosts: 'Relaterade ARK: Survival Ascended guider',
		allPosts: 'Alla inlägg',
		home: 'ARK Hacks hem',
		language: 'Språk',
	},
};
