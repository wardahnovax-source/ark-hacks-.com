import { siteConfig } from '../site';
import {
	defaultLocale,
	isLocaleCode,
	localeCodes,
	localeMap,
	type LocaleCode,
	locales,
} from './locales';
import { getCannibalTargetId, isCannibalPageId } from '../seo-cannibal-map';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'ark-esp'
	| 'ark-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'eac'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'ark-esp': '/ark-esp/',
	'ark-aimbot': '/ark-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/undetected-ark-hacks/',
	wallhack: '/ark-wallhack/',
	radar: '/ark-radar-hack/',
	'eac': '/eac-bypass/',
	'cheats-2026': '/ark-hacks-2026/',
	hacks: '/ark-hacks/',
	'cheat-download': '/ark-cheat-download/',
	'mod-menu': '/ark-mod-menu/',
	'soft-aim': '/ark-soft-aim/',
	'best-cheats': '/best-ark-hacks/',
	'aimbot-hack': '/ark-aimbot-hack/',
	'esp-hack': '/ark-esp-hack/',
	'unlock-all': '/ark-unlock-all/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'ark-esp': {
		en: 'ark-esp',
		es: 'trucos-ark-esp',
		fr: 'triche-ark-esp',
		de: 'ark-esp-wallhack',
		pt: 'cheats-ark-esp',
		it: 'trucchi-ark-esp',
		nl: 'ark-esp-wallhack',
		pl: 'cheaty-ark-esp',
		ru: 'ark-esp-chity',
		tr: 'ark-esp-hile',
		ar: 'ark-esp-wallhack',
		ja: 'ark-esp-wallhack',
		ko: 'ark-esp-wallhack',
		zh: 'ark-esp-wallhack',
		hi: 'ark-esp-wallhack',
		id: 'ark-esp-wallhack',
		th: 'ark-esp-wallhack',
		vi: 'ark-esp-wallhack',
		uk: 'ark-esp-chity',
		cs: 'ark-esp-wallhack',
		ro: 'ark-esp-wallhack',
		sv: 'ark-esp-wallhack',
	},
	'ark-aimbot': {
		en: 'ark-aimbot',
		es: 'trucos-ark-aimbot',
		fr: 'triche-ark-aimbot',
		de: 'ark-aimbot',
		pt: 'cheats-ark-aimbot',
		it: 'trucchi-ark-aimbot',
		nl: 'ark-aimbot',
		pl: 'cheaty-ark-aimbot',
		ru: 'ark-aimbot-chity',
		tr: 'ark-aimbot-hile',
		ar: 'ark-aimbot',
		ja: 'ark-aimbot',
		ko: 'ark-aimbot',
		zh: 'ark-aimbot',
		hi: 'ark-aimbot',
		id: 'ark-aimbot',
		th: 'ark-aimbot',
		vi: 'ark-aimbot',
		uk: 'ark-aimbot-chity',
		cs: 'ark-aimbot',
		ro: 'ark-aimbot',
		sv: 'ark-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-ark',
		fr: 'fonctionnalites-triche-ark',
		de: 'escape-from-ark-hacks-funktionen',
		pt: 'recursos-cheats-ark',
		it: 'funzioni-trucchi-ark',
		nl: 'escape-from-ark-hacks-functies',
		pl: 'funkcje-cheatow-ark',
		ru: 'funkcii-chitov-ark',
		tr: 'ark-hile-ozellikleri',
		ar: 'escape-from-ark-hacks-features',
		ja: 'escape-from-ark-hacks-features',
		ko: 'escape-from-ark-hacks-features',
		zh: 'escape-from-ark-hacks-features',
		hi: 'escape-from-ark-hacks-features',
		id: 'escape-from-ark-hacks-features',
		th: 'escape-from-ark-hacks-features',
		vi: 'escape-from-ark-hacks-features',
		uk: 'funkcii-chitiv-ark',
		cs: 'escape-from-ark-hacks-funkce',
		ro: 'functii-cheats-ark',
		sv: 'escape-from-ark-hacks-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-ark',
		fr: 'prix-triche-ark',
		de: 'escape-from-ark-hacks-preise',
		pt: 'precos-cheats-ark',
		it: 'prezzi-trucchi-ark',
		nl: 'escape-from-ark-hacks-prijzen',
		pl: 'ceny-cheatow-ark',
		ru: 'ceny-chitov-ark',
		tr: 'ark-hile-fiyatlari',
		ar: 'escape-from-ark-hacks-pricing',
		ja: 'escape-from-ark-hacks-pricing',
		ko: 'escape-from-ark-hacks-pricing',
		zh: 'escape-from-ark-hacks-pricing',
		hi: 'escape-from-ark-hacks-pricing',
		id: 'escape-from-ark-hacks-pricing',
		th: 'escape-from-ark-hacks-pricing',
		vi: 'escape-from-ark-hacks-pricing',
		uk: 'ciny-chitiv-ark',
		cs: 'escape-from-ark-hacks-ceny',
		ro: 'preturi-cheats-ark',
		sv: 'escape-from-ark-hacks-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-ark',
		fr: 'installation-triche-ark',
		de: 'escape-from-ark-hacks-installation',
		pt: 'instalacao-cheats-ark',
		it: 'installazione-trucchi-ark',
		nl: 'escape-from-ark-hacks-installatie',
		pl: 'instalacja-cheatow-ark',
		ru: 'ustanovka-chitov-ark',
		tr: 'ark-hile-kurulum',
		ar: 'escape-from-ark-hacks-setup',
		ja: 'escape-from-ark-hacks-setup',
		ko: 'escape-from-ark-hacks-setup',
		zh: 'escape-from-ark-hacks-setup',
		hi: 'escape-from-ark-hacks-setup',
		id: 'escape-from-ark-hacks-setup',
		th: 'escape-from-ark-hacks-setup',
		vi: 'escape-from-ark-hacks-setup',
		uk: 'vstanovka-chitiv-ark',
		cs: 'escape-from-ark-hacks-instalace',
		ro: 'instalare-cheats-ark',
		sv: 'escape-from-ark-hacks-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-ark',
		fr: 'mises-a-jour-triche-ark',
		de: 'escape-from-ark-hacks-updates',
		pt: 'atualizacoes-cheats-ark',
		it: 'aggiornamenti-trucchi-ark',
		nl: 'escape-from-ark-hacks-updates',
		pl: 'aktualizacje-cheatow-ark',
		ru: 'obnovleniya-chitov-ark',
		tr: 'ark-hile-guncellemeleri',
		ar: 'escape-from-ark-hacks-updates',
		ja: 'escape-from-ark-hacks-updates',
		ko: 'escape-from-ark-hacks-updates',
		zh: 'escape-from-ark-hacks-updates',
		hi: 'escape-from-ark-hacks-updates',
		id: 'escape-from-ark-hacks-updates',
		th: 'escape-from-ark-hacks-updates',
		vi: 'escape-from-ark-hacks-updates',
		uk: 'onovlennya-chitiv-ark',
		cs: 'escape-from-ark-hacks-aktualizace',
		ro: 'actualizari-cheats-ark',
		sv: 'escape-from-ark-hacks-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-ark',
		fr: 'faq-triche-ark',
		de: 'escape-from-ark-hacks-faq',
		pt: 'faq-cheats-ark',
		it: 'faq-trucchi-ark',
		nl: 'escape-from-ark-hacks-faq',
		pl: 'faq-cheatow-ark',
		ru: 'faq-chitov-ark',
		tr: 'ark-hile-sss',
		ar: 'escape-from-ark-hacks-faq',
		ja: 'escape-from-ark-hacks-faq',
		ko: 'escape-from-ark-hacks-faq',
		zh: 'escape-from-ark-hacks-faq',
		hi: 'escape-from-ark-hacks-faq',
		id: 'escape-from-ark-hacks-faq',
		th: 'escape-from-ark-hacks-faq',
		vi: 'escape-from-ark-hacks-faq',
		uk: 'faq-chitiv-ark',
		cs: 'escape-from-ark-hacks-faq',
		ro: 'faq-cheats-ark',
		sv: 'escape-from-ark-hacks-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-ark',
		fr: 'support-triche-ark',
		de: 'escape-from-ark-hacks-support',
		pt: 'suporte-cheats-ark',
		it: 'supporto-trucchi-ark',
		nl: 'escape-from-ark-hacks-support',
		pl: 'wsparcie-cheatow-ark',
		ru: 'podderzhka-chitov-ark',
		tr: 'ark-hile-destek',
		ar: 'escape-from-ark-hacks-support',
		ja: 'escape-from-ark-hacks-support',
		ko: 'escape-from-ark-hacks-support',
		zh: 'escape-from-ark-hacks-support',
		hi: 'escape-from-ark-hacks-support',
		id: 'escape-from-ark-hacks-support',
		th: 'escape-from-ark-hacks-support',
		vi: 'escape-from-ark-hacks-support',
		uk: 'pidtrymka-chitiv-ark',
		cs: 'escape-from-ark-hacks-podpora',
		ro: 'suport-cheats-ark',
		sv: 'escape-from-ark-hacks-support',
	},
	undetected: {
		en: 'undetected-ark-hacks',
		es: 'trucos-ark-indetectables',
		fr: 'triche-ark-indetectable',
		de: 'unentdeckte-escape-from-ark-hacks',
		pt: 'cheats-ark-indetectaveis',
		it: 'trucchi-ark-indetectabili',
		nl: 'undetected-ark-hacks',
		pl: 'niewykrywalne-cheats-ark',
		ru: 'nedecektiruemye-chity-ark',
		tr: 'tespit-edilemeyen-ark-hileleri',
		ar: 'undetected-ark-hacks',
		ja: 'undetected-ark-hacks',
		ko: 'undetected-ark-hacks',
		zh: 'undetected-ark-hacks',
		hi: 'undetected-ark-hacks',
		id: 'undetected-ark-hacks',
		th: 'undetected-ark-hacks',
		vi: 'undetected-ark-hacks',
		uk: 'nedecektovani-chity-ark',
		cs: 'undetected-ark-hacks',
		ro: 'cheats-ark-nedetectabile',
		sv: 'undetected-ark-hacks',
	},
	wallhack: {
		en: 'ark-wallhack',
		es: 'wallhack-trucos-ark',
		fr: 'wallhack-triche-ark',
		de: 'ark-wallhack',
		pt: 'wallhack-cheats-ark',
		it: 'wallhack-trucchi-ark',
		nl: 'ark-wallhack',
		pl: 'wallhack-cheatow-ark',
		ru: 'wallhack-chity-ark',
		tr: 'ark-wallhack-hile',
		ar: 'ark-wallhack',
		ja: 'ark-wallhack',
		ko: 'ark-wallhack',
		zh: 'ark-wallhack',
		hi: 'ark-wallhack',
		id: 'ark-wallhack',
		th: 'ark-wallhack',
		vi: 'ark-wallhack',
		uk: 'wallhack-chity-ark',
		cs: 'ark-wallhack',
		ro: 'wallhack-cheats-ark',
		sv: 'ark-wallhack',
	},
	radar: {
		en: 'ark-radar-hack',
		es: 'radar-hack-trucos-ark',
		fr: 'radar-hack-triche-ark',
		de: 'ark-radar-hack',
		pt: 'radar-hack-cheats-ark',
		it: 'radar-hack-trucchi-ark',
		nl: 'ark-radar-hack',
		pl: 'radar-hack-cheatow-ark',
		ru: 'radar-hack-chity-ark',
		tr: 'ark-radar-hack',
		ar: 'ark-radar-hack',
		ja: 'ark-radar-hack',
		ko: 'ark-radar-hack',
		zh: 'ark-radar-hack',
		hi: 'ark-radar-hack',
		id: 'ark-radar-hack',
		th: 'ark-radar-hack',
		vi: 'ark-radar-hack',
		uk: 'radar-hack-chity-ark',
		cs: 'ark-radar-hack',
		ro: 'radar-hack-cheats-ark',
		sv: 'ark-radar-hack',
	},
	'eac': {
		en: 'eac-bypass',
		es: 'eac-bypass-trucos',
		fr: 'eac-bypass-triche',
		de: 'eac-bypass',
		pt: 'eac-bypass-cheats',
		it: 'eac-bypass-trucchi',
		nl: 'eac-bypass',
		pl: 'eac-bypass-cheatow',
		ru: 'eac-bypass-chity',
		tr: 'eac-bypass',
		ar: 'eac-bypass',
		ja: 'eac-bypass',
		ko: 'eac-bypass',
		zh: 'eac-bypass',
		hi: 'eac-bypass',
		id: 'eac-bypass',
		th: 'eac-bypass',
		vi: 'eac-bypass',
		uk: 'eac-bypass-chity',
		cs: 'eac-bypass',
		ro: 'eac-bypass-cheats',
		sv: 'eac-bypass',
	},
	'cheats-2026': {
		en: 'ark-hacks-2026',
		es: 'trucos-ark-2026',
		fr: 'triche-ark-2026',
		de: 'ark-hacks-2026',
		pt: 'cheats-ark-2026',
		it: 'trucchi-ark-2026',
		nl: 'ark-hacks-2026',
		pl: 'cheaty-ark-2026',
		ru: 'chity-ark-2026',
		tr: 'ark-hileleri-2026',
		ar: 'ark-hacks-2026',
		ja: 'ark-hacks-2026',
		ko: 'ark-hacks-2026',
		zh: 'ark-hacks-2026',
		hi: 'ark-hacks-2026',
		id: 'ark-hacks-2026',
		th: 'ark-hacks-2026',
		vi: 'ark-hacks-2026',
		uk: 'chity-ark-2026',
		cs: 'ark-hacks-2026',
		ro: 'cheats-ark-2026',
		sv: 'ark-hacks-2026',
	},
	hacks: {
		en: 'ark-hacks',
		es: 'hacks-trucos-ark',
		fr: 'hacks-triche-ark',
		de: 'ark-hacks',
		pt: 'hacks-cheats-ark',
		it: 'hacks-trucchi-ark',
		nl: 'ark-hacks',
		pl: 'hacks-cheatow-ark',
		ru: 'haksy-chity-ark',
		tr: 'ark-hile-hacks',
		ar: 'ark-hacks',
		ja: 'ark-hacks',
		ko: 'ark-hacks',
		zh: 'ark-hacks',
		hi: 'ark-hacks',
		id: 'ark-hacks',
		th: 'ark-hacks',
		vi: 'ark-hacks',
		uk: 'haksy-chity-ark',
		cs: 'ark-hacks',
		ro: 'hacks-cheats-ark',
		sv: 'ark-hacks',
	},
	'cheat-download': {
		en: 'ark-cheat-download',
		es: 'descarga-trucos-ark',
		fr: 'telechargement-triche-ark',
		de: 'ark-cheat-download',
		pt: 'download-cheats-ark',
		it: 'download-trucchi-ark',
		nl: 'ark-cheat-download',
		pl: 'pobieranie-cheatow-ark',
		ru: 'skachat-chity-ark',
		tr: 'ark-hile-indir',
		ar: 'ark-cheat-download',
		ja: 'ark-cheat-download',
		ko: 'ark-cheat-download',
		zh: 'ark-cheat-download',
		hi: 'ark-cheat-download',
		id: 'ark-cheat-download',
		th: 'ark-cheat-download',
		vi: 'ark-cheat-download',
		uk: 'zavantazhennya-chitiv-ark',
		cs: 'ark-cheat-download',
		ro: 'descarcare-cheats-ark',
		sv: 'ark-cheat-download',
	},
	'mod-menu': {
		en: 'ark-mod-menu',
		es: 'menu-mod-trucos-ark',
		fr: 'menu-mod-triche-ark',
		de: 'ark-mod-menu',
		pt: 'menu-mod-cheats-ark',
		it: 'menu-mod-trucchi-ark',
		nl: 'ark-mod-menu',
		pl: 'menu-mod-cheatow-ark',
		ru: 'mod-menu-chity-ark',
		tr: 'ark-mod-menu',
		ar: 'ark-mod-menu',
		ja: 'ark-mod-menu',
		ko: 'ark-mod-menu',
		zh: 'ark-mod-menu',
		hi: 'ark-mod-menu',
		id: 'ark-mod-menu',
		th: 'ark-mod-menu',
		vi: 'ark-mod-menu',
		uk: 'mod-menu-chity-ark',
		cs: 'ark-mod-menu',
		ro: 'meniu-mod-cheats-ark',
		sv: 'ark-mod-menu',
	},
	'soft-aim': {
		en: 'ark-soft-aim',
		es: 'soft-aim-trucos-ark',
		fr: 'soft-aim-triche-ark',
		de: 'ark-soft-aim',
		pt: 'soft-aim-cheats-ark',
		it: 'soft-aim-trucchi-ark',
		nl: 'ark-soft-aim',
		pl: 'soft-aim-cheatow-ark',
		ru: 'soft-aim-chity-ark',
		tr: 'ark-soft-aim',
		ar: 'ark-soft-aim',
		ja: 'ark-soft-aim',
		ko: 'ark-soft-aim',
		zh: 'ark-soft-aim',
		hi: 'ark-soft-aim',
		id: 'ark-soft-aim',
		th: 'ark-soft-aim',
		vi: 'ark-soft-aim',
		uk: 'soft-aim-chity-ark',
		cs: 'ark-soft-aim',
		ro: 'soft-aim-cheats-ark',
		sv: 'ark-soft-aim',
	},
	'best-cheats': {
		en: 'best-ark-hacks',
		es: 'mejores-trucos-ark',
		fr: 'meilleures-triches-ark',
		de: 'beste-escape-from-ark-hacks',
		pt: 'melhores-cheats-ark',
		it: 'migliori-trucchi-ark',
		nl: 'beste-escape-from-ark-hacks',
		pl: 'najlepsze-cheats-ark',
		ru: 'luchshie-chity-ark',
		tr: 'en-iyi-ark-hileleri',
		ar: 'best-ark-hacks',
		ja: 'best-ark-hacks',
		ko: 'best-ark-hacks',
		zh: 'best-ark-hacks',
		hi: 'best-ark-hacks',
		id: 'best-ark-hacks',
		th: 'best-ark-hacks',
		vi: 'best-ark-hacks',
		uk: 'naykrashchi-chity-ark',
		cs: 'nejlepsi-escape-from-ark-hacks',
		ro: 'cele-mai-bune-cheats-ark',
		sv: 'basta-escape-from-ark-hacks',
	},
	'aimbot-hack': {
		en: 'ark-aimbot-hack',
		es: 'aimbot-hack-trucos-ark',
		fr: 'aimbot-hack-triche-ark',
		de: 'ark-aimbot-hack',
		pt: 'aimbot-hack-cheats-ark',
		it: 'aimbot-hack-trucchi-ark',
		nl: 'ark-aimbot-hack',
		pl: 'aimbot-hack-cheatow-ark',
		ru: 'aimbot-hack-chity-ark',
		tr: 'ark-aimbot-hack',
		ar: 'ark-aimbot-hack',
		ja: 'ark-aimbot-hack',
		ko: 'ark-aimbot-hack',
		zh: 'ark-aimbot-hack',
		hi: 'ark-aimbot-hack',
		id: 'ark-aimbot-hack',
		th: 'ark-aimbot-hack',
		vi: 'ark-aimbot-hack',
		uk: 'aimbot-hack-chity-ark',
		cs: 'ark-aimbot-hack',
		ro: 'aimbot-hack-cheats-ark',
		sv: 'ark-aimbot-hack',
	},
	'esp-hack': {
		en: 'ark-esp-hack',
		es: 'esp-hack-trucos-ark',
		fr: 'esp-hack-triche-ark',
		de: 'ark-esp-hack',
		pt: 'esp-hack-cheats-ark',
		it: 'esp-hack-trucchi-ark',
		nl: 'ark-esp-hack',
		pl: 'esp-hack-cheatow-ark',
		ru: 'esp-hack-chity-ark',
		tr: 'ark-esp-hack',
		ar: 'ark-esp-hack',
		ja: 'ark-esp-hack',
		ko: 'ark-esp-hack',
		zh: 'ark-esp-hack',
		hi: 'ark-esp-hack',
		id: 'ark-esp-hack',
		th: 'ark-esp-hack',
		vi: 'ark-esp-hack',
		uk: 'esp-hack-chity-ark',
		cs: 'ark-esp-hack',
		ro: 'esp-hack-cheats-ark',
		sv: 'ark-esp-hack',
	},
	'unlock-all': {
		en: 'ark-unlock-all',
		es: 'unlock-all-trucos-ark',
		fr: 'unlock-all-triche-ark',
		de: 'ark-unlock-all',
		pt: 'unlock-all-cheats-ark',
		it: 'unlock-all-trucchi-ark',
		nl: 'ark-unlock-all',
		pl: 'unlock-all-cheatow-ark',
		ru: 'unlock-all-chity-ark',
		tr: 'ark-unlock-all',
		ar: 'ark-unlock-all',
		ja: 'ark-unlock-all',
		ko: 'ark-unlock-all',
		zh: 'ark-unlock-all',
		hi: 'ark-unlock-all',
		id: 'ark-unlock-all',
		th: 'ark-unlock-all',
		vi: 'ark-unlock-all',
		uk: 'unlock-all-chity-ark',
		cs: 'ark-unlock-all',
		ro: 'unlock-all-cheats-ark',
		sv: 'ark-unlock-all',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			const targetId = getCannibalTargetId(pageId) as PageId;
			return getLocalizedPath(targetId, locale);
		}
	}
	return href;
}

/** Canonical absolute URL — always https apex with trailing slash (matches Layout.astro). */
export function buildCanonicalUrl(path: string): string {
	const normalized =
		!path || path === '/'
			? '/'
			: path.endsWith('/') || path.includes('.')
				? path
				: `${path}/`;
	return new URL(normalized, siteConfig.url).href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return buildCanonicalUrl(getLocalizedPath(pageId, locale));
}

export type HreflangAlternate = { hreflang: string; href: string };

/** Self-referential hreflang for single-locale pages (reviews, 404). */
export function getSelfHreflangAlternates(
	path: string,
	locale: LocaleCode = defaultLocale,
): HreflangAlternate[] {
	const href = buildCanonicalUrl(path);
	return [
		{ hreflang: localeMap[locale].hreflang, href },
		{ hreflang: 'x-default', href },
	];
}

export function getHreflangAlternates(pageId: PageId, currentLocale: LocaleCode = defaultLocale) {
	const resolvedId = (isCannibalPageId(pageId) ? getCannibalTargetId(pageId) : pageId) as PageId;
	const byLocale = localeCodes.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: absoluteLocalizedUrl(resolvedId, code),
		code,
	}));
	const self = byLocale.find((alt) => alt.code === currentLocale)!;
	const others = byLocale.filter((alt) => alt.code !== currentLocale);
	const xDefault = {
		hreflang: 'x-default' as const,
		href: absoluteLocalizedUrl(resolvedId, defaultLocale),
	};
	// Self-referential hreflang first — required by Google/Seobility for the active locale.
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		xDefault,
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

/** Parsed locale + page from any site URL (English root or /{lang}/…). */
export type PageContext = {
	locale: LocaleCode;
	pageId?: PageId;
	isBlogIndex?: boolean;
	blogSlug?: string;
};

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	if (pathname.includes('.') || pathname.endsWith('/')) return pathname;
	return `${pathname}/`;
}

/** Resolve locale and page/blog context from the current URL path. */
export function resolvePageContextFromPath(pathname: string): PageContext {
	const path = normalizePathname(pathname);

	if (path === '/') {
		return { locale: defaultLocale, pageId: 'home' };
	}

	const segments = path.split('/').filter(Boolean);
	let locale: LocaleCode = defaultLocale;
	let offset = 0;

	if (segments.length > 0 && isLocaleCode(segments[0]) && segments[0] !== defaultLocale) {
		locale = segments[0];
		offset = 1;
	}

	const rest = segments.slice(offset);

	if (rest.length === 0) {
		return { locale, pageId: 'home' };
	}

	if (rest[0] === 'blog') {
		if (rest.length === 1) {
			return { locale, isBlogIndex: true };
		}
		return { locale, blogSlug: rest[1] };
	}

	if (locale === defaultLocale) {
		return { locale, pageId: resolvePageIdFromPath(path) };
	}

	return { locale, pageId: resolvePageFromLocalizedPath(locale, rest[0]) };
}

/** Target URL for the same page in another locale (non-blog pages). */
export function getPageLocaleSwitchHref(context: PageContext, targetLocale: LocaleCode): string {
	if (context.pageId) {
		return getLocalizedPath(context.pageId, targetLocale);
	}
	return getLocalizedPath('home', targetLocale);
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
	{ label: labels.hacks ?? 'Hacks', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.aimbot, href: getLocalizedPath('ark-aimbot', locale), pageId: 'ark-aimbot' },
		{ label: labels.esp, href: getLocalizedPath('ark-esp', locale), pageId: 'ark-esp' },
		{ label: 'Blog', href: locale === defaultLocale ? '/blog/' : `/${locale}/blog/` },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
