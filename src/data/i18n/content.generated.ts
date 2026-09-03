import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	imageAlt: string;
	galleryTitle: string;
	heroImage: string;
	sections: PageSection[];
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
};
export type LocaleUi = {
	nav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
	hero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
	trust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
	product: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
	reviews: { title: string; subtitle: string; outOf: string; countLabel: string };
	common: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
	footer: { explore: string; help: string; tagline: string };
	images: {
		hero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
		headerArt: string; cheatsPackage: string; rebootFight: string; battleRoyale: string; battleRoyaleIsland: string;
	};
};
export type PageId = 'home' | 'ark-esp' | 'ark-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';

export const i18nContent: Record<LocaleCode, { ui: LocaleUi; pages: Record<PageId, PageContent> }> = {
		en: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Pricing",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Buy Now",
				},
				hero: {
					accent: "2026 — Undetected ESP, Aimbot & Wallhack",
					accentShort: "Undetected ark cheats 2026",
					subtitle: "ARK hacks with ark esp, radar hack and ark aimbot for Windows PC — EAC maintenance included.",
					subtitleShort: "ARK esp, radar & aimbot for PC",
					buyNow: "Buy ARK Hacks",
					seeFeatures: "See Features",
				},
				trust: {
					status: "Online",
					statusNote: "ARK Hacks — undetected ark cheats live for ARK on Windows PC.",
					statusShort: "Live",
					delivery: "Instant digital delivery",
					platform: "Windows 10 & 11",
					antiCheat: "EAC maintenance supported",
					antiCheatShort: "Easy Anti-Cheat supported",
				},
				product: {
					title: "ARK Hacks",
					addToCart: "Add to Cart",
					monthly: "Monthly",
					lifetime: "Lifetime",
					available: "Available now",
					gameBadge: "ARK",
					platformBadge: "Windows PC",
					statusBadge: "Undetected ark cheats",
				},
				reviews: {
					title: "What players say",
					subtitle: "Recent feedback from ARK Hacks buyers",
					outOf: "out of 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Buy ARK Hacks",
					readGuide: "Read guide",
					language: "Language",
					officialLanguageNote: "English is official; other locales are translated.",
					relatedPages: "Related pages",
				},
				footer: {
					explore: "Explore",
					help: "Help & legal",
					tagline: "Undetected ARK hacks for PC.\nESP, wallhack, radar & aimbot.",
				},
				images: {
					hero: "ARK Hacks hero — ESP and aimbot overlay in ARK: Survival Ascended",
					espWallhack: "Wallhack outlines showing players and wild dinos through walls",
					aimbotCombat: "Soft aim assist overlay during an ARK: Survival Ascended raid",
					squadFight: "ARK Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a ARK raid",
					headerArt: "Aimbot view and bone priority controls for ARK",
					cheatsPackage: "2D radar threat overlay for ARK: Survival Ascended",
					rebootFight: "Aimbot assist during a ARK firefight",
					battleRoyale: "ARK Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base raids in ARK",
				},
			},
			pages: {
				home: {
					title: "ARK Ascended Hacks 2026 | Aimbot, ESP & Dino ESP",
					description: "ARK ascended hacks for Windows PC — aimbot, player ESP, dino ESP, loot ESP, and EAC updates. Compare plans and buy ARK hacks.",
					h1: "ARK Ascended Hacks — Aimbot, ESP & Dino ESP",
					intro: "ARK Hacks is the undetected ark ascended hacks package for Windows PC — built for ARK: Survival Ascended. Player ESP, dino ESP, loot ESP, aimbot, no recoil, and dino filters with EAC maintenance after every major patch.",
					imageAlt: "ARK Hacks homepage hero — aimbot and ESP for ARK: Survival Ascended",
					galleryTitle: "ARK Hacks gallery — aimbot, ESP, and dino ESP visuals",
					ctaPrimary: "Buy ARK Hacks",
					ctaSecondary: "See all features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why players choose ARK ascended hacks in 2026",
							paragraphs: [
								"ARK: Survival Ascended rewards map awareness. ARK Hacks combines player ESP, dino ESP, loot ESP, and aimbot so you can read fights before committing — on PvP servers, tribe raids, and PvE sessions.",
								"Official patches and anti-cheat updates come from <a href=\"https://www.escapefromark.com/\" target=\"_blank\" rel=\"noopener noreferrer\">ARK: Survival Ascended</a> and <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat Anti-Cheat</a>. We rebuild aimbot, ESP, and combat modules when those patches require maintenance — then post status on the <a href=\"/updates/\">Updates page</a>.",
								"Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include EAC maintenance rebuilds when anti-cheat or game patches require updates.",
								"Start with the <a href=\"/ark-hacks/\">ARK hacks pillar</a>, <a href=\"/ark-esp/\">ESP guide</a>, <a href=\"/ark-aimbot/\">Aimbot controls</a>, and <a href=\"/ark-hacks/\">undetected status</a> pages if you are comparing tools before checkout.",
							],
						},
						{
							h2: "Aimbot, player ESP, dino ESP, and combat tools in one license",
							paragraphs: [
								"Instead of stacking separate tools, ARK Hacks bundles player ESP, dino ESP, loot ESP, supply crate ESP, skeleton ESP, boss ESP, alpha dino ESP, aimbot, no recoil, no spread, rapid fire, FOV changer, zoom, crosshair, and dino filters in one undetected package — covering both \"ark ascended hacks\" and \"ARK cheats PC\" search intent.",
								"Browse the <a href=\"/ark-esp/\">ESP</a>, <a href=\"/ark-aimbot/\">Aimbot</a>, <a href=\"/ark-esp/\">wallhack</a>, and <a href=\"/features/\">features</a> pages for control details — or jump to <a href=\"/pricing/\">Pricing</a> for monthly and lifetime options.",
								"Before patch days, check <a href=\"https://www.escapefromark.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">ARK: Survival Ascended Support</a> for Studio Wildcard service health, then confirm our maintenance notes so you are not joining on an outdated build.",
								"Ready to buy? Open <a href=\"/pricing/\">Pricing</a>, follow <a href=\"/setup/\">Setup</a> after delivery, and keep <a href=\"/faq/\">FAQ</a> / <a href=\"/support/\">Support</a> bookmarked for license questions.",
							],
						},
					],
					heroImage: "/images/ark-hacks-esp.webp",
				},
				"ark-esp": {
					title: "ARK ESP 2026 | Player Boxes & Wallhack",
					description: "ARK ESP for Windows PC — player boxes, loot markers, and distance readouts. Part of our undetected ark cheats for ARK: Survival Ascended.",
					h1: "ARK ESP — Player Boxes & Wallhack",
					intro: "ARK esp visibility tools for raid and scav-run. Read enemy squads, players, wild dinos, loot, and distance before you commit — toggleable ark esp wallhack overlays bundled in our ark cheats package.",
					imageAlt: "ARK ESP player boxes and distance readouts in a raid",
					galleryTitle: "ARK ESP overlay visuals",
					ctaPrimary: "Buy ARK Hacks",
					ctaSecondary: "ARK wallhack guide",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "What ARK ESP solves in raids",
							paragraphs: [
								"ARK maps punish incomplete information. ARK Hacks ESP wallhack helps you spot enemy squads early, spot players and wild dinos before they push your angle, and mark rare resources worth the detour.",
								"On raid, scav-run, and competitive lobbies, that visibility gap is often the difference between a clean third-party and a wiped squad. ESP ships bundled with radar overlays and Aimbot in one license.",
								"ARK’s live seasons and map updates are published by Studio Wildcard (<a href=\"https://www.escapefromark.com/\" target=\"_blank\" rel=\"noopener noreferrer\">ARK: Survival Ascended</a>). When POIs or loot rules shift, ESP categories stay useful because they track players and containers — not a single static landmark.",
							],
						},
						{
							h2: "Player, boss, and loot ESP wallhack categories",
							paragraphs: [
								"Toggle enemy player outlines, boss markers, base raid cues, and loot pins so only raid-critical ESP wallhack overlays stay active during rotations.",
								"Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports player raids and scav-runs lobbies alike.",
								"Compare category detail on the <a href=\"/ark-esp/\">wallhack page</a> and pair visibility with the <a href=\"/ark-radar-hack/\">radar hack</a> for flanks outside your FOV.",
							],
							list: [
								"Enemy player ESP outlines with distance",
								"Loot and container markers for faster rotations",
								"Boss and base raid awareness cues",
								"Toggleable categories to reduce overlay noise",
							],
						},
						{
							h2: "Undetected ESP with EAC maintenance",
							paragraphs: [
								"ARK Hacks ESP wallhack is maintained for ARK with rebuilds after Easy Anti-Cheat patches. Check the <a href=\"/updates/\">Updates page</a> before you queue — no cheat guarantees permanent undetected status.",
								"Read <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat Anti-Cheat</a> for how anti-cheat updates ship, then cross-check our <a href=\"/updates/\">EAC bypass maintenance guide</a> after major patches.",
								"Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href=\"/setup/\">Setup guide</a> and tune overlays before your first raid.",
							],
						},
						{
							h2: "ESP next steps — Aimbot, pricing, and support",
							paragraphs: [
								"ESP alone wins information wars; Aimbot covers the firefight. Review <a href=\"/ark-aimbot/\">Aimbot controls</a> if you want one license for visibility and assist.",
								"Compare monthly ($35) and lifetime ($150) on <a href=\"/pricing/\">Pricing</a>, then keep <a href=\"/support/\">Support</a> ready if activation needs a human reply.",
								"Still researching? The <a href=\"/ark-hacks/\">ARK hacks pillar</a> and <a href=\"/ark-hacks/\">2026 buyer guide</a> summarize the full stack.",
							],
						},
					],
					heroImage: "/images/ark-hacks-radar.webp",
				},
				"ark-aimbot": {
					title: "ARK Aimbot 2026 | Soft Aim for Windows PC",
					description: "ARK aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our ark cheats package.",
					h1: "ARK Aimbot — Soft Aim for Windows PC",
					intro: "Configurable Aimbot tools for ARK firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "ARK aimbot and soft aim controls on Windows PC",
					galleryTitle: "ARK Aimbot combat previews",
					ctaPrimary: "Buy ARK Hacks",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Aimbot tuned for ARK combat pace",
							paragraphs: [
								"ARK mixes long-range AR fights with close-quarters SMG pushes. ARK Hacks Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.",
								"Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and close-range scav fights.",
								"Weapon balance and season rules change via <a href=\"https://www.escapefromark.com/\" target=\"_blank\" rel=\"noopener noreferrer\">ARK: Survival Ascended</a>. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.",
							],
						},
						{
							h2: "Per-weapon Aimbot profiles",
							paragraphs: [
								"Save separate Aimbot profiles for ARs, SMGs, and bolt-actions. Switch between long-range DMR fights and dorms clears without reopening menus every raid.",
								"Prefer softer tracking? Read the <a href=\"/ark-aimbot/\">soft aim guide</a>.",
								"Aimbot ships alongside <a href=\"/ark-esp/\">ESP wallhack</a> and <a href=\"/ark-radar-hack/\">2D radar</a> in the same ARK Hacks license.",
							],
							list: [
								"Smoothness, FOV, and sensitivity sliders",
								"Bone priority and threat-based targeting",
								"Hotkeys to toggle Aimbot mid-match",
								"Per-weapon profile slots for AR / SMG / bolt-action",
							],
						},
						{
							h2: "EAC maintenance for undetected Aimbot",
							paragraphs: [
								"ARK Hacks rebuilds Aimbot behavior when Easy Anti-Cheat or major ARK patches land. Maintenance notes appear on the <a href=\"/updates/\">Updates page</a> so you know when a new build is live.",
								"Cross-check service health on <a href=\"https://www.escapefromark.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">ARK: Survival Ascended Support</a> and anti-cheat context on <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat Anti-Cheat</a>, then follow our <a href=\"/updates/\">EAC maintenance guide</a> before queueing on patch day.",
								"Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.",
							],
						},
						{
							h2: "Buy Aimbot with ESP — pricing and setup",
							paragraphs: [
								"Every plan includes Aimbot plus ESP and radar. Compare options on <a href=\"/pricing/\">Pricing</a>, then activate with the <a href=\"/setup/\">Setup guide</a>.",
								"Questions about delivery or profiles? Use <a href=\"/faq/\">FAQ</a> or email <a href=\"/support/\">Support</a> with your order ID.",
								"Want the full control list first? Open <a href=\"/features/\">Features</a> before checkout.",
							],
						},
					],
					heroImage: "/images/ark-hacks-aimbot.webp",
				},
				features: {
					title: "ARK Hacks Features | ESP, Soft Aim & Radar",
					description: "Full ark cheats feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.",
					h1: "ARK Hacks Features — Full Control List",
					intro: "Every ESP wallhack, radar hack, and Aimbot control included in the ARK Hacks package for ARK on Windows PC — with EAC maintenance after major patches.",
					imageAlt: "ARK Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "ARK Hacks feature gallery",
					ctaPrimary: "Buy ARK Hacks",
					ctaSecondary: "View pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ESP wallhack and visibility features",
							paragraphs: [
								"Enemy player ESP wallhack, boss and base raid awareness cues, loot and container markers, distance readouts, snaplines, and toggleable ESP categories for raid-critical overlays only.",
								"Team and enemy colour coding supports player raids and scav-runs. Deep-dive the <a href=\"/ark-esp/\">ESP page</a> and <a href=\"/ark-esp/\">wallhack guide</a> for category-level detail.",
								"Map and loot systems evolve with <a href=\"https://www.escapefromark.com/\" target=\"_blank\" rel=\"noopener noreferrer\">ARK: Survival Ascended</a> wipe and map updates — toggleable ESP categories keep overlays useful when POIs rotate.",
							],
						},
						{
							h2: "Radar hack and Aimbot controls",
							paragraphs: [
								"2D radar overlay with directional threat cues, configurable range for rotations and late-raid base raids, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.",
								"All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live ARK sessions. See <a href=\"/ark-radar-hack/\">radar</a> and <a href=\"/ark-aimbot/\">Aimbot</a> for settings walkthroughs.",
								"Prefer a menu-first workflow? The <a href=\"/ark-hacks/\">mod menu page</a> explains mid-match toggles without alt-tabbing.",
							],
						},
						{
							h2: "Licensing, delivery, and EAC maintenance",
							paragraphs: [
								"Monthly ($35) and lifetime ($150) licenses with instant digital delivery. EAC maintenance rebuilds publish on the <a href=\"/updates/\">Updates page</a> after anti-cheat or game patches.",
								"Monitor <a href=\"https://www.escapefromark.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">ARK: Survival Ascended Support</a> on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href=\"/support/\">Support</a> and support@arkhacks.com.",
								"Next step: compare plans on <a href=\"/pricing/\">Pricing</a> or read <a href=\"/ark-hacks/\">how undetected maintenance works</a>.",
							],
						},
					],
					heroImage: "/images/ark-hacks-aimbot-view.webp",
				},
				pricing: {
					title: "ARK Hacks Pricing | $35/mo or $150 Life",
					description: "ARK hacks pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.",
					h1: "ARK Hacks Pricing — Monthly & Lifetime",
					intro: "Choose monthly or lifetime access to undetected ARK Hacks — ESP wallhack, radar hack, and Aimbot for ARK on Windows PC. Instant digital delivery after payment.",
					imageAlt: "ARK Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "ARK Hacks package visuals",
					ctaPrimary: "Buy ARK Hacks",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Monthly and lifetime ARK Hacks plans",
							paragraphs: [
								"Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with EAC maintenance included during your term.",
								"Lifetime license: $150 USD for long-term access to the same undetected ARK Hacks package — ideal if you play ARK regularly across seasons.",
								"Both plans unlock the same feature stack described on <a href=\"/features/\">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.",
							],
						},
						{
							h2: "What every plan includes",
							paragraphs: [
								"Player ESP wallhack, loot markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Easy Anti-Cheat or major ARK patches.",
								"Season calendars and client updates come from <a href=\"https://www.escapefromark.com/\" target=\"_blank\" rel=\"noopener noreferrer\">ARK: Survival Ascended</a>. Active licenses receive rebuild access when we publish maintenance on <a href=\"/updates/\">Updates</a>.",
								"Digital delivery starts after payment confirmation. Keep your order reference for <a href=\"/support/\">Support</a> requests and follow <a href=\"/setup/\">Setup</a> for first launch.",
							],
						},
						{
							h2: "Refund, billing, and buying checklist",
							paragraphs: [
								"Review the <a href=\"/refund-policy/\">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.",
								"Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.",
								"Still comparing tools? Read <a href=\"/ark-hacks/\">ARK hacks</a>, <a href=\"/ark-hacks/\">undetected status</a>, and <a href=\"/faq/\">FAQ</a> before you checkout.",
							],
						},
					],
					heroImage: "/images/ark-hacks-raid.webp",
				},
				setup: {
					title: "ARK Hacks Setup | Windows PC Guide",
					description: "Set up ark cheats on Windows PC — activate ESP boxes, soft aim profiles, and . Check EAC updates before your first queue.",
					h1: "ARK Hacks Setup — Windows PC Guide",
					intro: "Install and configure ARK Hacks for ARK on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify EAC maintenance status before queueing.",
					imageAlt: "ARK Hacks setup guide screenshot for Windows PC",
					galleryTitle: "ARK Hacks setup visuals",
					ctaPrimary: "Buy ARK Hacks",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before you install ARK Hacks",
							paragraphs: [
								"Confirm your order email and license details. Check the <a href=\"/updates/\">Updates page</a> for the latest EAC maintenance build before launching ARK.",
								"Also glance at <a href=\"https://www.escapefromark.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">ARK: Survival Ascended Support</a> if Studio Wildcard services look unstable on patch day — a platform outage is not a license fault.",
								"ARK Hacks requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.",
							],
						},
						{
							h2: "Activate ESP wallhack and Aimbot profiles",
							paragraphs: [
								"Follow the delivery instructions in your license email. Load default ESP wallhack categories for players, wild dinos, and loot — then tune radar range and Aimbot smoothness to your playstyle.",
								"Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for Easy Anti-Cheat module live on <a href=\"/ark-esp/\">ESP</a>, <a href=\"/ark-aimbot/\">Aimbot</a>, and <a href=\"/ark-hacks/\">mod menu</a>.",
								"Prefer a soft tracking feel? Start with the <a href=\"/ark-aimbot/\">soft aim</a> recommendations before raising aggressiveness.",
							],
						},
						{
							h2: "After ARK or Easy Anti-Cheat patches",
							paragraphs: [
								"When Studio Wildcard ships a major ARK update or Easy Anti-Cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.",
								"Official anti-cheat background: <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat Anti-Cheat</a>. Our practical workflow is documented on the <a href=\"/updates/\">EAC bypass page</a> and <a href=\"/ark-hacks/\">undetected guide</a>.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.",
							],
						},
					],
					heroImage: "/images/ark-hacks-radar.webp",
				},
				updates: {
					title: "ARK Hacks Updates | Easy Anti-Cheat Maintenance Log",
					description: "ARK hacks update log: Easy Anti-Cheat rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before queueing after patches.",
					h1: "ARK Hacks Updates — Maintenance Log",
					intro: "Track EAC maintenance and ARK patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.",
					imageAlt: "ARK Hacks live status after EAC and game patches",
					galleryTitle: "ARK patch and maintenance visuals",
					ctaPrimary: "Buy ARK Hacks",
					ctaSecondary: "Undetected status guide",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Why the Updates page matters",
							paragraphs: [
								"ARK and Easy Anti-Cheat receive frequent patches. ARK Hacks publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.",
								"Use <a href=\"https://www.escapefromark.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">ARK: Survival Ascended Support</a> for Studio Wildcard platform health and this page for ARK Hacks build status — both matter on big update days.",
								"Checking this log before you queue reduces surprises after game days or seasonal launches on raid and scav-run.",
							],
						},
						{
							h2: "What maintenance entries cover",
							paragraphs: [
								"Entries note Easy Anti-Cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.",
								"Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href=\"/pricing/\">Pricing</a> if you need to renew.",
								"For context on why rebuilds happen, read the <a href=\"/updates/\">EAC bypass guide</a> and <a href=\"/ark-hacks/\">undetected ARK hacks</a> explainer.",
							],
						},
						{
							h2: "Staying undetected after patches",
							paragraphs: [
								"No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.",
								"Follow season notes from <a href=\"https://www.escapefromark.com/\" target=\"_blank\" rel=\"noopener noreferrer\">ARK: Survival Ascended</a>, then confirm our rebuild is live before you queue.",
								"For urgent status questions after a EAC update, contact <a href=\"/support/\">Support</a> with your license tier and last played build version.",
							],
						},
					],
					heroImage: "/images/ark-hacks-esp.webp",
				},
				faq: {
					title: "ARK Hacks FAQ | ESP, Soft Aim & Radar Answers",
					description: "ARK hacks FAQ: ESP boxes, soft aim, EAC maintenance, and pricing for PC. Clear answers before you buy.",
					h1: "ARK Hacks FAQ — Common Questions",
					intro: "Answers about undetected ARK Hacks — ESP wallhack, radar hack, Aimbot, EAC maintenance, checkout, and ARK compatibility on Windows PC.",
					imageAlt: "ARK Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "ARK Hacks FAQ visuals",
					ctaPrimary: "Buy ARK Hacks",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "What is ARK Hacks?",
							paragraphs: [
								"ARK Hacks is an undetected cheat package for ARK on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with EAC maintenance updates.",
								"Packages cover raid and scav-run. Explore <a href=\"/features/\">Features</a> for the full control list and <a href=\"/ark-esp/\">ESP</a> / <a href=\"/ark-aimbot/\">Aimbot</a> for module detail.",
								"ARK itself is published by Studio Wildcard (<a href=\"https://www.escapefromark.com/\" target=\"_blank\" rel=\"noopener noreferrer\">ARK: Survival Ascended</a>). Cheats are third-party tools and may violate Studio Wildcard' rules — use is at your own risk.",
							],
						},
						{
							h2: "Are ARK Hacks undetected in 2026?",
							paragraphs: [
								"ARK Hacks is maintained with rebuilds after Easy Anti-Cheat and game patches. Check the <a href=\"/updates/\">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.",
								"Read <a href=\"/ark-hacks/\">undetected ARK hacks</a> and the <a href=\"/updates/\">Easy Anti-Cheat guide</a> for the maintenance workflow.",
								"Responsible settings and reading maintenance notes before queueing are essential.",
							],
						},
						{
							h2: "Delivery, pricing, and support",
							paragraphs: [
								"Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href=\"/pricing/\">Pricing</a>.",
								"Contact support@arkhacks.com or the <a href=\"/support/\">Support page</a> with order details for setup or billing help. First launch steps are on <a href=\"/setup/\">Setup</a>.",
								"Refund eligibility is covered in the <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/ark-hacks-aimbot-view.webp",
				},
				support: {
					title: "ARK Hacks Support | Help & Contact",
					description: "Contact ark cheats support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.",
					h1: "ARK Hacks Support — Contact Us",
					intro: "Get help with ARK Hacks licenses, checkout, ESP wallhack setup, Aimbot profiles, and EAC maintenance for ARK on Windows PC.",
					imageAlt: "ARK Hacks support page for license and setup help",
					galleryTitle: "ARK Hacks support resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "When to contact support",
							paragraphs: [
								"Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after EAC maintenance rebuilds.",
								"Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.",
								"Many answers already live in <a href=\"/faq/\">FAQ</a>, <a href=\"/setup/\">Setup</a>, and <a href=\"/updates/\">Updates</a> — check those first for faster resolution.",
							],
						},
						{
							h2: "Response times and scope",
							paragraphs: [
								"Support requests are reviewed daily. ARK Hacks support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Studio Wildcard bans.",
								"Account and game policy questions belong with Studio Wildcard. We can help with license delivery and product configuration only.",
								"Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.",
							],
						},
						{
							h2: "Self-service resources",
							paragraphs: [
								"Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. EAC bypass notes live on the dedicated <a href=\"/updates/\">Easy Anti-Cheat page</a>.",
								"Email: support@arkhacks.com",
								"Ready to purchase or renew? Open <a href=\"/pricing/\">Pricing</a>. Need feature detail first? See <a href=\"/features/\">Features</a>.",
							],
						},
					],
					heroImage: "/images/ark-hacks-raid.webp",
				},
				undetected: {
					title: "Undetected ARK Hacks 2026 | Easy Anti-Cheat Maintenance",
					description: "Undetected ark cheats with EAC maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you queue.",
					h1: "Undetected ARK Hacks — Easy Anti-Cheat Maintenance",
					intro: "How ARK Hacks stays maintained for ARK after Easy Anti-Cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.",
					imageAlt: "ARK Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected ARK Hacks visuals",
					ctaPrimary: "Buy ARK Hacks",
					ctaSecondary: "EAC bypass guide",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "What undetected means for ARK Hacks",
							paragraphs: [
								"Undetected ARK Hacks means the package is actively maintained against Easy Anti-Cheat and major ARK patches — not that detection is impossible forever.",
								"Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after EAC security updates.",
								"Anti-cheat technology is documented by <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat Anti-Cheat</a>; ARK client updates ship through <a href=\"https://www.escapefromark.com/\" target=\"_blank\" rel=\"noopener noreferrer\">ARK: Survival Ascended</a>. Undetected status is an ongoing process tied to those releases.",
							],
						},
						{
							h2: "EAC maintenance workflow",
							paragraphs: [
								"When Easy Anti-Cheat or ARK updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href=\"/updates/\">Updates page</a>, and delivers rebuilt builds to active licenses.",
								"On patch mornings, also check <a href=\"https://www.escapefromark.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">ARK: Survival Ascended Support</a> for launcher outages that can look like product failures.",
								"Deep technical workflow: <a href=\"/updates/\">EAC bypass ARK guide</a>. Feature stack: <a href=\"/features/\">Features</a>.",
							],
						},
						{
							h2: "Responsible use and next steps",
							paragraphs: [
								"Combine maintenance with conservative in-game settings. Read the <a href=\"/faq/\">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.",
								"Lifetime and monthly plans include rebuild access during active terms — see <a href=\"/pricing/\">Pricing</a>.",
								"New buyers should also read <a href=\"/ark-hacks/\">ARK hacks 2026</a> and complete <a href=\"/setup/\">Setup</a> after delivery.",
							],
						},
					],
					heroImage: "/images/ark-hacks-wallhack.webp",
				},
				wallhack: {
					title: "ARK Wallhack 2026 | ESP Boxes & Visibility",
					description: "ARK wallhack ESP with player boxes and loot markers for Windows PC. Undetected ark cheats — learn overlays and buy.",
					h1: "ARK Wallhack — ESP Boxes & Visibility",
					intro: "ARK wallhack ESP for ARK — see players, loot, bosses, and containers through toggleable wallhack overlays built for player raids and scav-runs.",
					imageAlt: "ARK wallhack visibility through walls in a raid",
					galleryTitle: "ARK wallhack ESP gallery",
					ctaPrimary: "Buy ARK Hacks",
					ctaSecondary: "ARK ESP page",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Wallhack ESP vs raw aim tools",
							paragraphs: [
								"A ARK wallhack focuses on information — player outlines, loot pins, boss threat cues — rather than automatic aiming. ARK Hacks bundles wallhack ESP with radar and optional Aimbot in one license.",
								"Toggle categories so only the wallhack overlays you need stay active during rotations and base raid holds.",
								"For the broader ESP keyword page see <a href=\"/ark-esp/\">ARK ESP</a>; for combat assist see <a href=\"/ark-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "Map coverage for wallhack ESP",
							paragraphs: [
								"Wallhack overlays support raid, scav-run, and competitive lobbies with distance readouts and snaplines for engagement control.",
								"Season maps and POI changes are announced via <a href=\"https://www.escapefromark.com/\" target=\"_blank\" rel=\"noopener noreferrer\">ARK: Survival Ascended</a>. Wallhack remains useful because it tracks entities, not fixed landmarks alone.",
								"Pair wallhack awareness with <a href=\"/ark-radar-hack/\">radar hack</a> cues for flanks during building and rooftop fights.",
							],
						},
						{
							h2: "Undetected wallhack maintenance",
							paragraphs: [
								"ESP wallhack modules rebuild after Easy Anti-Cheat patches. Follow the <a href=\"/updates/\">Updates page</a> and complete checkout for instant license delivery on Windows PC.",
								"Learn the full maintenance story on <a href=\"/ark-hacks/\">undetected ARK hacks</a> and <a href=\"/updates/\">EAC bypass</a>.",
								"Ready to buy? Compare <a href=\"/pricing/\">Pricing</a> or continue to the <a href=\"/ark-esp/\">ESP hack</a> landing for alternate search wording.",
							],
						},
					],
					heroImage: "/images/ark-hacks-wallhack.webp",
				},
				radar: {
					title: "ARK Radar Hack 2026 | 2D Threat Overlay",
					description: "ARK radar hack for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our ark cheats package.",
					h1: "ARK Radar Hack — 2D Threat Awareness",
					intro: "2D radar-style overlay for ARK — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.",
					imageAlt: "ARK 2D radar overlay showing nearby threats",
					galleryTitle: "ARK radar hack visuals",
					ctaPrimary: "Buy ARK Hacks",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Why radar hack matters in ARK",
							paragraphs: [
								"raids fights happen in three dimensions — rooftops, windows, and flanks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third party.",
								"ARK Hacks radar complements <a href=\"/ark-esp/\">ESP wallhack</a> markers during squad pushes and base raid camp fights.",
								"Mode rules and seasonal changes come from <a href=\"https://www.escapefromark.com/\" target=\"_blank\" rel=\"noopener noreferrer\">ARK: Survival Ascended</a>. Radar range remains configurable when map scale or mobility meta shifts.",
							],
						},
						{
							h2: "Configurable radar range",
							paragraphs: [
								"Adjust radar range for early rotations versus tight base raid holds. Directional cues highlight flanks during building clears and flank pushes across raid and scav-run.",
								"Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href=\"/ark-hacks/\">mod menu</a> page.",
								"Combat follow-up lives on <a href=\"/ark-aimbot/\">Aimbot</a> when you convert radar info into a fight.",
							],
						},
						{
							h2: "Maintenance and licensing",
							paragraphs: [
								"Radar hack modules receive EAC maintenance rebuilds with the full ARK Hacks package. Monthly and lifetime licenses include digital delivery — see <a href=\"/pricing/\">Pricing</a>.",
								"Check <a href=\"/updates/\">Updates</a> after major ARK patches before relying on previous radar configs.",
								"New to the stack? Start at <a href=\"/features/\">Features</a> or <a href=\"/ark-hacks/\">undetected status</a>.",
							],
						},
					],
					heroImage: "/images/ark-hacks-radar.webp",
				},
				eac: {
					title: "EAC Bypass ARK | ARK Hacks Maintenance",
					description: "How ark cheats rebuild after EAC patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before queueing.",
					h1: "EAC Bypass — ARK Hacks Maintenance",
					intro: "Understand Easy Anti-Cheat maintenance for ARK Hacks — how ESP wallhack, radar hack, and Aimbot rebuild after ARK security updates.",
					imageAlt: "ARK Hacks maintenance after a EAC patch",
					galleryTitle: "EAC maintenance visuals",
					ctaPrimary: "Buy ARK Hacks",
					ctaSecondary: "Check updates",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat overview",
							paragraphs: [
								"Easy Anti-Cheat is Studio Wildcard' anti-cheat for ARK on PC (see <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat Anti-Cheat</a>). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.",
								"ARK Hacks monitors EAC patch notes and ARK seasonal updates from <a href=\"https://www.escapefromark.com/\" target=\"_blank\" rel=\"noopener noreferrer\">ARK: Survival Ascended</a> to schedule module reviews.",
								"“EAC bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.",
							],
						},
						{
							h2: "What happens after a EAC patch",
							paragraphs: [
								"The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href=\"/updates/\">Updates</a>, and ships rebuilt packages to active licenses.",
								"Confirm Studio Wildcard service health on <a href=\"https://www.escapefromark.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">ARK: Survival Ascended Support</a> if the launcher or matchmaking fails during the same window.",
								"Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href=\"/ark-hacks/\">undetected ARK hacks</a>.",
							],
						},
						{
							h2: "No permanent bypass guarantee",
							paragraphs: [
								"EAC bypass in practice means timely maintenance. Read the undetected guide, <a href=\"/faq/\">FAQ</a>, and Updates log before every session.",
								"Contact <a href=\"/support/\">Support</a> if activation fails immediately after a posted rebuild.",
								"Buying for the first time? Compare <a href=\"/pricing/\">Pricing</a> and finish <a href=\"/setup/\">Setup</a> only after Updates shows a live build.",
							],
						},
					],
					heroImage: "/images/ark-hacks-aimbot.webp",
				},
				"cheats-2026": {
					title: "ARK Hacks 2026 | ESP Soft Aim & Radar",
					description: "Best ark cheats 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected ark cheats with EAC maintenance — compare and buy.",
					h1: "ARK Hacks 2026 — ESP, Soft Aim & Radar",
					intro: "The 2026 ARK Hacks package for ARK — undetected ESP wallhack, radar hack, and Aimbot with EAC maintenance, instant delivery, and Windows PC support.",
					imageAlt: "ARK Hacks product overview for ARK: Survival Ascended",
					galleryTitle: "ARK Hacks 2026 gallery",
					ctaPrimary: "Buy ARK Hacks",
					ctaSecondary: "Compare features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why ark cheats buyers choose ARK Hacks in 2026",
							paragraphs: [
								"2026 seasons bring new maps, weapons, and Easy Anti-Cheat updates. ARK Hacks bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.",
								"Track official season messaging on <a href=\"https://www.escapefromark.com/\" target=\"_blank\" rel=\"noopener noreferrer\">ARK: Survival Ascended</a>, then use our <a href=\"/updates/\">Updates log</a> for product rebuild timing.",
								"Monthly ($35) and lifetime ($150) plans cover raid and scav-run loops — see <a href=\"/pricing/\">Pricing</a>.",
							],
						},
						{
							h2: "Full feature stack for 2026 buyers",
							paragraphs: [
								"Player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.",
								"Deep links: <a href=\"/ark-hacks/\">ARK hacks pillar</a>, <a href=\"/ark-esp/\">ESP</a>, <a href=\"/ark-aimbot/\">Aimbot</a>, <a href=\"/ark-esp/\">wallhack</a>, <a href=\"/ark-radar-hack/\">radar</a>, <a href=\"/ark-hacks/\">undetected</a>.",
								"Instant digital delivery after checkout confirmation worldwide.",
							],
						},
						{
							h2: "Before you buy in 2026",
							paragraphs: [
								"Read the <a href=\"/ark-hacks/\">ARK hacks</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.",
								"Also compare the <a href=\"/ark-hacks/\">ARK hacks</a> checklist, <a href=\"/blog/ark-hacks-2026-whats-new/\">2026 blog guide</a>, and <a href=\"/faq/\">FAQ</a>.",
								"Support is available at support@arkhacks.com via the <a href=\"/support/\">Support page</a>.",
							],
						},
					],
					heroImage: "/images/ark-hacks-esp.webp",
				},
				hacks: {
					title: "ARK Hacks 2026 | Undetected ESP Aimbot Guide",
					description: "ARK hacks for Windows PC: undetected ESP wallhack, radar hack, and Aimbot with EAC maintenance. Compare ark cheats options and buy the full package.",
					h1: "ARK Hacks — Undetected ESP, Aimbot & Wallhack",
					intro: "ARK hacks for raid and scav-run combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after Easy Anti-Cheat patches. This is the pillar guide for ark cheats in 2026.",
					imageAlt: "ARK Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "ARK hacks gallery — ESP, Aimbot, wallhack",
					ctaPrimary: "Buy ARK Hacks",
					ctaSecondary: "See undetected guide",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "What ARK hacks include in 2026",
							paragraphs: [
								"Players searching for ARK hacks usually want visibility and combat tools without stacking separate downloads. ARK Hacks bundles player ESP wallhack, loot markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called ark cheats.",
								"Coverage spans raid and scav-run with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.",
								"Official game updates come from <a href=\"https://www.escapefromark.com/\" target=\"_blank\" rel=\"noopener noreferrer\">ARK: Survival Ascended</a>; our hacks package tracks those releases via the <a href=\"/updates/\">Updates page</a>. Cross-check platform health on <a href=\"https://www.escapefromark.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">ARK: Survival Ascended Support</a> before patch-day queues.",
							],
						},
						{
							h2: "How this ARK hacks pillar fits nearby pages",
							paragraphs: [
								"Use this pillar for the core product overview. For year-specific buying notes, see the <a href=\"/ark-hacks/\">ark cheats 2026</a> and <a href=\"/ark-hacks/\">ARK hacks</a> pages cover buyer comparisons in cheats wording.",
								"Deep-dive modules: <a href=\"/ark-esp/\">ARK ESP</a>, <a href=\"/ark-aimbot/\">ARK Aimbot</a>, <a href=\"/ark-esp/\">wallhack</a>, <a href=\"/ark-radar-hack/\">radar hack</a>, and <a href=\"/ark-aimbot/\">soft aim</a>.",
								"Blog guides expand Easy Anti-Cheat keyword: <a href=\"/blog/ark-hacks-complete-guide-2026/\">hacks complete guide</a>, <a href=\"/blog/escape-from-ark-hacks-buyers-guide/\">cheats buyers guide</a>, and <a href=\"/blog/undetected-ark-hacks-eac/\">undetected Easy Anti-Cheat notes</a>.",
							],
						},
						{
							h2: "ARK hacks vs single-feature tools",
							paragraphs: [
								"Standalone hacks often cover only wallhack or only aim assist. ARK Hacks maps the full raid loop: read enemy squads, track bosses and containers, spot flanks on radar, and tune Aimbot per weapon class.",
								"Compare the <a href=\"/ark-esp/\">ESP</a>, <a href=\"/ark-aimbot/\">Aimbot</a>, and <a href=\"/features/\">Features</a> pages — or review <a href=\"/pricing/\">Pricing</a> for monthly and lifetime licenses.",
								"Related landings: <a href=\"/setup/\">cheat download</a>, <a href=\"/ark-hacks/\">mod menu</a>, <a href=\"/ark-aimbot/\">aimbot</a>, <a href=\"/ark-esp/\">ESP</a>.",
							],
						},
						{
							h2: "Undetected ARK hacks with EAC maintenance",
							paragraphs: [
								"Undetected ARK hacks require rebuilds after Easy Anti-Cheat and major ARK patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.",
								"See <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat Anti-Cheat</a> for anti-cheat background and our <a href=\"/updates/\">EAC bypass guide</a> for the practical workflow. Pair with <a href=\"/ark-hacks/\">undetected ARK hacks</a> for status language buyers expect.",
								"Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href=\"/setup/\">Setup</a> and keep <a href=\"/support/\">Support</a> ready with your order ID.",
							],
						},
					],
					heroImage: "/images/ark-hacks-raid.webp",
				},
				"cheat-download": {
					title: "ARK Hack Download 2026 | Instant Access",
					description: "ARK cheat download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.",
					h1: "ARK Hack Download — Instant License Delivery",
					intro: "How ARK cheat download works for ARK — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.",
					imageAlt: "ARK Hacks download and install delivery flow",
					galleryTitle: "ARK cheat download visuals",
					ctaPrimary: "Buy ARK Hacks",
					ctaSecondary: "Setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How ARK cheat download delivery works",
							paragraphs: [
								"After checkout confirms payment, ARK Hacks license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.",
								"Keep your order confirmation and license email ready for the <a href=\"/setup/\">Setup guide</a> and Support requests.",
								"If Studio Wildcard services are down, check <a href=\"https://www.escapefromark.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">ARK: Survival Ascended Support</a> before assuming a download failure.",
							],
						},
						{
							h2: "What your download unlocks",
							paragraphs: [
								"Every ARK cheat download includes player ESP wallhack, loot and container markers, 2D radar overlays, Aimbot profiles, and in-client toggles for player raids and scav-runs.",
								"Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href=\"/pricing/\">Pricing page</a>.",
								"Feature detail: <a href=\"/features/\">Features</a>. Module pages: <a href=\"/ark-esp/\">ESP</a>, <a href=\"/ark-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "After purchase — setup and updates",
							paragraphs: [
								"Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When ARK or Easy Anti-Cheat patches ship, check the <a href=\"/updates/\">Updates page</a> for maintenance rebuilds.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.",
								"Also read <a href=\"/ark-hacks/\">undetected status</a> so you know what “download ready” means after a patch.",
							],
						},
					],
					heroImage: "/images/ark-hacks-raid.webp",
				},
				"mod-menu": {
					title: "ARK Mod Menu 2026 | ESP & Soft Aim Toggles",
					description: "ARK mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected ark cheats package.",
					h1: "ARK Mod Menu — In-Client Control Panel",
					intro: "ARK mod menu controls for ARK — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your ARK session on Windows PC.",
					imageAlt: "ARK Hacks in-game menu controls",
					galleryTitle: "ARK mod menu gallery",
					ctaPrimary: "Buy ARK Hacks",
					ctaSecondary: "Full feature list",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What a ARK mod menu controls",
							paragraphs: [
								"A ARK mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. ARK Hacks keeps those toggles accessible with hotkeys.",
								"Toggle player outlines, loot markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of ARK.",
								"Control deep-dives: <a href=\"/ark-esp/\">ESP</a>, <a href=\"/ark-aimbot/\">Aimbot</a>, <a href=\"/ark-radar-hack/\">radar</a>.",
							],
						},
						{
							h2: "Mod menu categories for player raids and scav-runs",
							paragraphs: [
								"Separate ESP wallhack categories for players, loot, containers, and bosses let you reduce overlay noise during rotations and base raid holds.",
								"Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.ark} seasons change fight distances and mobility.",
								"Soft tracking players should start with <a href=\"/ark-aimbot/\">soft aim</a> profiles before aggressive FOV.",
							],
						},
						{
							h2: "Maintained mod menu after EAC patches",
							paragraphs: [
								"ARK mod menu behavior is rebuilt when Easy Anti-Cheat or major ARK updates land. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">EAC bypass guide</a> before queueing on patch days.",
								"Checkout with instant digital delivery for monthly and lifetime licenses — see <a href=\"/pricing/\">Pricing</a>.",
								"Need install steps? Open <a href=\"/setup/\">Setup</a> after your license email arrives.",
							],
						},
					],
					heroImage: "/images/ark-hacks-radar.webp",
				},
				"soft-aim": {
					title: "ARK Soft Aim 2026 | Smooth Aimbot Settings",
					description: "ARK soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our ark cheats with ESP boxes.",
					h1: "ARK Soft Aim — Smooth Aimbot Controls",
					intro: "ARK soft aim settings for ARK — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "ARK soft aim FOV and smoothness settings",
					galleryTitle: "ARK soft aim gallery",
					ctaPrimary: "Buy ARK Hacks",
					ctaSecondary: "Aimbot controls",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "What ARK soft aim means",
							paragraphs: [
								"ARK soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. ARK Hacks exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.",
								"Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.",
								"Full Aimbot documentation: <a href=\"/ark-aimbot/\">ARK Aimbot</a>. Alternate wording: <a href=\"/ark-aimbot/\">aimbot hack</a>.",
							],
						},
						{
							h2: "Soft aim profiles per weapon class",
							paragraphs: [
								"Save separate soft aim profiles for ARs, SMGs, and bolt-actions. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.",
								"Weapon TTKs shift with <a href=\"https://www.escapefromark.com/\" target=\"_blank\" rel=\"noopener noreferrer\">ARK: Survival Ascended</a> balance patches — retune smoothness after major combat updates.",
								"Soft aim ships alongside <a href=\"/ark-esp/\">ESP wallhack</a> and <a href=\"/ark-radar-hack/\">2D radar</a> overlays.",
							],
						},
						{
							h2: "Undetected soft aim with EAC maintenance",
							paragraphs: [
								"Aimbot modules rebuild after Easy Anti-Cheat patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.",
								"Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href=\"/pricing/\">Pricing</a>.",
								"Activation help: <a href=\"/setup/\">Setup</a> · status questions: <a href=\"/support/\">Support</a>.",
							],
						},
					],
					heroImage: "/images/ark-hacks-aimbot-view.webp",
				},
				"best-cheats": {
					title: "Best ARK Hacks 2026 | Buyer Guide",
					description: "Best ark cheats for 2026: ESP boxes, soft aim, and EAC maintenance on Windows PC. Use this checklist before checkout.",
					h1: "Best ARK Hacks — 2026 Buyer Guide",
					intro: "Compare the ARK hacks for ARK in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Easy Anti-Cheat rebuilds and instant delivery.",
					imageAlt: "ARK Hacks overview for ARK: Survival Ascended on PC",
					galleryTitle: "Best ARK hacks gallery",
					ctaPrimary: "Buy ARK Hacks",
					ctaSecondary: "Compare pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "What makes the ARK hacks in 2026",
							paragraphs: [
								"The ARK hacks combine active EAC maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.",
								"ARK Hacks covers raid and scav-run with in-client toggles and post-patch rebuilds.",
								"Verify the live game is healthy via <a href=\"https://www.escapefromark.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">ARK: Survival Ascended Support</a>, then confirm our <a href=\"/updates/\">Updates</a> note before you judge any package “best.”",
							],
						},
						{
							h2: "Best ARK hacks feature checklist",
							paragraphs: [
								"Look for player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after ARK patches.",
								"Review <a href=\"/features/\">Features</a>, <a href=\"/ark-hacks/\">undetected status</a>, and <a href=\"/ark-hacks/\">ARK hacks 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.",
								"Module pages worth opening: <a href=\"/ark-esp/\">ESP</a>, <a href=\"/ark-aimbot/\">Aimbot</a>, <a href=\"/ark-hacks/\">hacks</a>.",
							],
						},
						{
							h2: "Buying the ARK hacks safely",
							paragraphs: [
								"Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.",
								"No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.",
								"Remember: using cheats can violate Studio Wildcard terms. Proceed only if you accept that risk.",
							],
						},
					],
					heroImage: "/images/ark-hacks-esp.webp",
				},
				"aimbot-hack": {
					title: "ARK Aimbot Hack 2026 | Soft Aim Assist",
					description: "ARK aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our ark cheats package.",
					h1: "ARK Aimbot Hack — Soft Aim Assist",
					intro: "ARK aimbot hack tools for ARK — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "ARK aimbot hack controls and bone priority",
					galleryTitle: "ARK aimbot hack gallery",
					ctaPrimary: "Buy ARK Hacks",
					ctaSecondary: "Aimbot settings",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "ARK aimbot hack vs visibility tools",
							paragraphs: [
								"A ARK aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. ARK Hacks bundles aimbot hack modules with visibility overlays in one license.",
								"Smoothness, FOV, and sensitivity controls tune assist for ARK combat pace across player raids and scav-runs.",
								"Prefer softer tracking language? See <a href=\"/ark-aimbot/\">soft aim</a>. Full settings: <a href=\"/ark-aimbot/\">Aimbot page</a>.",
							],
						},
						{
							h2: "Aimbot hack controls and hotkeys",
							paragraphs: [
								"Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-raid base raids.",
								"Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.",
								"Balance patches from <a href=\"https://www.escapefromark.com/\" target=\"_blank\" rel=\"noopener noreferrer\">ARK: Survival Ascended</a> can change ideal FOV — retune after major weapon updates.",
							],
						},
						{
							h2: "Undetected aimbot hack maintenance",
							paragraphs: [
								"Aimbot hack signatures rebuild after Easy Anti-Cheat updates. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">EAC bypass guide</a> before queueing after patch days.",
								"Checkout with instant digital delivery for Windows 10 and 11 — <a href=\"/pricing/\">Pricing</a>.",
								"Pair with <a href=\"/ark-esp/\">ESP</a> for the full information + assist loop.",
							],
						},
					],
					heroImage: "/images/ark-hacks-aimbot-view.webp",
				},
				"esp-hack": {
					title: "ARK ESP Hack 2026 | Player Boxes & Loot",
					description: "ARK ESP hack with player boxes and loot markers for Windows PC. Undetected ark cheats with — see overlays and buy.",
					h1: "ARK ESP Hack — Player Boxes Guide",
					intro: "ARK ESP hack overlays for ARK — player outlines, boss threat cues, loot and container markers with distance readouts across raid and scav-run.",
					imageAlt: "ARK ESP hack boxes and loot markers",
					galleryTitle: "ARK ESP hack gallery",
					ctaPrimary: "Buy ARK Hacks",
					ctaSecondary: "ESP controls",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "What a ARK ESP hack shows",
							paragraphs: [
								"A ARK ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.",
								"Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.",
								"Canonical visibility guide: <a href=\"/ark-esp/\">ARK ESP</a>. Wallhack wording: <a href=\"/ark-esp/\">wallhack</a>.",
							],
						},
						{
							h2: "ESP hack categories for raids",
							paragraphs: [
								"Toggle player ESP hack, loot markers, chest pins, and vehicle cues independently so only raid-critical overlays stay active during rotations.",
								"Team and enemy colour coding supports player raids and scav-runs.",
								"POI and loot changes publish through <a href=\"https://www.escapefromark.com/\" target=\"_blank\" rel=\"noopener noreferrer\">ARK: Survival Ascended</a> — keep categories toggled to what the current map rewards.",
							],
						},
						{
							h2: "Undetected ESP hack with EAC maintenance",
							paragraphs: [
								"ESP hack modules rebuild after Easy Anti-Cheat and ARK patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — pair ESP hack awareness with <a href=\"/ark-radar-hack/\">radar hack</a> for flank reads.",
								"Licenses deliver digitally after checkout on Windows PC — see <a href=\"/pricing/\">Pricing</a>.",
								"Install steps: <a href=\"/setup/\">Setup</a>. Status questions: <a href=\"/ark-hacks/\">undetected guide</a>.",
							],
						},
					],
					heroImage: "/images/ark-hacks-wallhack.webp",
				},
				"unlock-all": {
					title: "ARK Unlock All 2026 | What It Really Means",
					description: "ARK unlock all explained vs real ark cheats — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.",
					h1: "ARK Unlock All — What Players Search For",
					intro: "ARK unlock all is a common search term for ARK — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools ARK Hacks actually provides on Windows PC.",
					imageAlt: "ARK Hacks license features overview",
					galleryTitle: "ARK unlock all guide visuals",
					ctaPrimary: "Buy ARK Hacks",
					ctaSecondary: "See features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What ARK unlock all usually means",
							paragraphs: [
								"ARK unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.",
								"ARK Hacks focuses on in-match awareness — player ESP, loot markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.",
								"Cosmetics and wipe progression items are sold through <a href=\"https://www.escapefromark.com/\" target=\"_blank\" rel=\"noopener noreferrer\">ARK: Survival Ascended</a>. Be wary of unlock-all downloads that promise free skins — they are often scams.",
							],
						},
						{
							h2: "Visibility tools vs unlock-all claims",
							paragraphs: [
								"ESP wallhack helps you spot enemy squads, bosses, and rare resources during live matches. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.",
								"For loadout planning during a match, loot and container markers speed map rotations — see the <a href=\"/ark-esp/\">ESP</a> and <a href=\"/features/\">Features</a> pages for the full tool list.",
								"Related: <a href=\"/ark-hacks/\">ARK hacks</a> and <a href=\"/ark-hacks/\">ARK hacks</a>.",
							],
						},
						{
							h2: "Buying ARK Hacks for the right reasons",
							paragraphs: [
								"If you need undetected ESP wallhack, radar hack, and Aimbot for ARK on Windows PC, compare <a href=\"/pricing/\">Pricing</a> and read the <a href=\"/setup/\">Setup guide</a> before checkout.",
								"Check the <a href=\"/updates/\">Updates page</a> after Easy Anti-Cheat patches — maintenance rebuilds publish for active licenses.",
								"Questions? <a href=\"/faq/\">FAQ</a> and <a href=\"/support/\">Support</a> cover delivery and configuration — not cosmetic unlocks.",
							],
						},
					],
					heroImage: "/images/ark-hacks-radar.webp",
				},
				privacy: {
					title: "Privacy Policy | ARK Hacks",
					description: "Privacy policy for ARK Hacks. How we handle support emails, order data, and checkout for ark cheats licenses on arkhacks.com.",
					h1: "Privacy Policy",
					intro: "How ARK Hacks handles information when you browse arkhacks.com or contact support about a ARK license.",
					imageAlt: "ARK Hacks privacy policy page",
					galleryTitle: "ARK Hacks legal resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms of use",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we may collect",
							paragraphs: [
								"We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.",
								"We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.",
							],
							list: [
								"Contact details you send by email",
								"Order references for support requests",
								"Basic technical data for site security",
							],
						},
						{
							h2: "How information is used",
							paragraphs: [
								"Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.",
								"Analytics may use aggregated traffic data without identifying individual ARK Hacks customers.",
							],
						},
						{
							h2: "Your choices and contact",
							paragraphs: [
								"You may request correction or deletion of support email data by contacting support@arkhacks.com with your request details.",
								"Policy updates publish on this page. Continued use of arkhacks.com after updates means you accept the revised policy. Also see <a href=\"/terms/\">Terms of Use</a> and <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/ark-hacks-aimbot.webp",
				},
				refund: {
					title: "Refund Policy | ARK Hacks",
					description: "Refund policy for ARK Hacks. Digital delivery terms and eligibility for ark cheats packages with ESP, soft aim, and radar.",
					h1: "Refund Policy",
					intro: "Refund terms for ARK Hacks licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for ARK.",
					imageAlt: "ARK Hacks refund policy page",
					galleryTitle: "ARK Hacks billing resources",
					ctaPrimary: "Contact support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery and eligibility",
							paragraphs: [
								"ARK Hacks licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.",
								"Submit refund requests within 24 hours of purchase with your order ID and reason.",
							],
						},
						{
							h2: "When refunds may be approved",
							paragraphs: [
								"Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.",
								"Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href=\"/terms/\">Terms of Use</a>.",
							],
						},
						{
							h2: "How to request a refund",
							paragraphs: [
								"Email support@arkhacks.com with subject \"Refund Request\", your order ID, purchase date, and issue summary — or use the <a href=\"/support/\">Support page</a>.",
								"Approved refunds process back to the original payment method when possible. Pricing details live on <a href=\"/pricing/\">Pricing</a>.",
							],
						},
					],
					heroImage: "/images/ark-hacks-raid.webp",
				},
				terms: {
					title: "Terms of Use 2026 | ARK Hacks Rules",
					description: "Terms of use for arkhacks.com and ARK Hacks licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.",
					h1: "Terms of Use",
					intro: "Terms governing use of arkhacks.com and ARK Hacks licenses for ARK on Windows PC.",
					imageAlt: "ARK Hacks terms of use page",
					galleryTitle: "ARK Hacks legal pages",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance and license scope",
							paragraphs: [
								"By purchasing or using ARK Hacks you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for ARK on Windows PC only.",
								"Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.",
							],
						},
						{
							h2: "Risk and anti-cheat disclaimer",
							paragraphs: [
								"Using cheats in ARK may violate Studio Wildcard terms and result in account penalties. ARK Hacks provides maintenance but does not guarantee undetected status or account safety.",
								"You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href=\"/ark-hacks/\">undetected status</a>.",
							],
						},
						{
							h2: "Changes and governing law",
							paragraphs: [
								"We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.",
								"Contact support@arkhacks.com for questions. Related policies: <a href=\"/privacy-policy/\">Privacy</a> and <a href=\"/refund-policy/\">Refunds</a>.",
							],
						},
					],
					heroImage: "/images/ark-hacks-aimbot-view.webp",
				},
			},
		},
		es: {
			ui: {
				nav: {
					home: "Inicio",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funciones",
					pricing: "Precios",
					setup: "Instalación",
					updates: "Actualizaciones",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Trucos ARK indetectables",
					accentShort: "ARK Hacks",
					subtitle: "ESP wallhack, radar hack y Aimbot para ARK en PC Windows — mantenimiento Easy Anti-Cheat incluido.",
					subtitleShort: "ESP, radar y Aimbot para ARK PC",
					buyNow: "Comprar ahora",
					seeFeatures: "Ver funciones",
				},
				trust: {
					status: "En línea",
					statusNote: "El paquete ARK Hacks está activo para ARK en PC Windows.",
					statusShort: "Activo",
					delivery: "Entrega digital instantánea",
					platform: "Windows 10 y 11",
					antiCheat: "Mantenimiento Easy Anti-Cheat incluido",
					antiCheatShort: "Easy Anti-Cheat incluido",
				},
				product: {
					title: "ARK Hacks",
					addToCart: "Añadir al carrito",
					monthly: "Mensual",
					lifetime: "De por vida",
					available: "Disponible ahora",
					gameBadge: "ARK",
					platformBadge: "PC Windows",
					statusBadge: "Paquete indetectable",
				},
				reviews: {
					title: "Lo que dicen los jugadores",
					subtitle: "Comentarios recientes de compradores de ARK Hacks",
					outOf: "de 5",
					countLabel: "reseñas",
				},
				common: {
					buyNow: "Comprar ahora",
					readGuide: "Leer guía",
					language: "Idioma",
					officialLanguageNote: "El inglés es el idioma oficial. Otras versiones están traducidas para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ayuda y legal",
					tagline: "ESP, wallhack, radar y Aimbot indetectables para ARK — checkout en Zadeyo.",
				},
				images: {
					hero: "ARK Hacks hero — ESP and aimbot overlay in ARK: Survival Ascended",
					espWallhack: "Wallhack outlines showing players and wild dinos through walls",
					aimbotCombat: "Soft aim assist overlay during an ARK: Survival Ascended raid",
					squadFight: "ARK Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a ARK raid",
					headerArt: "Aimbot view and bone priority controls for ARK",
					cheatsPackage: "2D radar threat overlay for ARK: Survival Ascended",
					rebootFight: "Aimbot assist during a ARK firefight",
					battleRoyale: "ARK Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base raids in ARK",
				},
			},
			pages: {
				home: {
					title: "ARK Hacks 2026 | ESP, Wallhack y Aimbot",
					description: "Trucos ARK: Survival Ascended indetectables para ARK: Survival Ascended en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Easy Anti-Cheat. Entrega",
					h1: "ARK Hacks — ESP, Wallhack y Aimbot indetectables",
					intro: "Paquete undetected para ARK: Survival Ascended en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Easy Anti-Cheat tras cada parche.",
					imageAlt: "ARK ESP player tags hack",
					galleryTitle: "Galería ARK Hacks — ESP, Aimbot y wallhack",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por qué eligen ARK Hacks en 2026",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Ideal para leer escuadrones enemigos en BR y scav-run.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "ESP wallhack, radar y Aimbot en una licencia",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Una licencia en lugar de herramientas separadas.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
					],
				},
				"ark-esp": {
					title: "ESP ARK | Cajas de jugador y wallhack",
					description: "ESP ARK: player boxes, loot markers, and wallhack overlays. entrega digital instantánea. indetectables — Windows PC.",
					h1: "ESP ARK",
					intro: "ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. ESP ARK.",
					imageAlt: "ARK ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ESP ARK",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@arkhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"ark-aimbot": {
					title: "Aimbot ARK | Controles soft aim",
					description: "Aimbot ARK: soft aim, FOV, and per-weapon Aimbot profiles. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Aimbot ARK",
					intro: "ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Aimbot ARK.",
					imageAlt: "ARK aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot ARK",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Aimbot ARK",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@arkhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				features: {
					title: "Funciones | Lista completa de funciones",
					description: "Funciones: ESP, soft aim, radar controls. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Funciones",
					intro: "ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Funciones.",
					imageAlt: "ARK Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funciones",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funciones",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. ESP, soft aim, radar controls.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@arkhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				pricing: {
					title: "Precios | Mensual y de por vida",
					description: "Precios: $35 monthly or $150 lifetime licenses. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Precios",
					intro: "ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Precios.",
					imageAlt: "ARK Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Precios",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Precios",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@arkhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				setup: {
					title: "Instalación | Guía de instalación PC",
					description: "Instalación: Windows PC activation and first-launch setup. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Instalación",
					intro: "ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Instalación.",
					imageAlt: "ARK Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalación",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalación",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Windows PC activation and first-launch setup.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@arkhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				updates: {
					title: "Actualizaciones | Registro Easy Anti-Cheat",
					description: "Actualizaciones: EAC patch status and rebuild notes. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Actualizaciones",
					intro: "ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Actualizaciones.",
					imageAlt: "ARK Hacks live status after EAC and game patches",
					galleryTitle: "Actualizaciones",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Actualizaciones",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. EAC patch status and rebuild notes.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@arkhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Preguntas frecuentes",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. entrega digital instantánea. indetectables — Windows PC.",
					h1: "FAQ",
					intro: "ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. FAQ.",
					imageAlt: "ARK Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@arkhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				support: {
					title: "Soporte | Ayuda y contacto",
					description: "Soporte: order help and license support contact. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soporte",
					intro: "ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Soporte.",
					imageAlt: "ARK Hacks support page for license and setup help",
					galleryTitle: "Soporte",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Soporte",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. order help and license support contact.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@arkhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				undetected: {
					title: "Trucos indetectables | Estado indetectable",
					description: "Trucos indetectables: undetected maintenance after Easy Anti-Cheat patches. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos indetectables",
					intro: "ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Trucos indetectables.",
					imageAlt: "ARK Hacks undetected status overview for Windows PC",
					galleryTitle: "Trucos indetectables",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Trucos indetectables",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@arkhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack ARK | Visibilidad ESP",
					description: "Wallhack ARK: wallhack ESP for players, loot, and distance. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Wallhack ARK",
					intro: "ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Wallhack ARK.",
					imageAlt: "ARK wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack ARK",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Wallhack ARK",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. wallhack ESP for players, loot, and distance.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@arkhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D de amenazas",
					description: "Radar hack: 2D radar cues for flanks and rotations. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Radar hack",
					intro: "ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Radar hack.",
					imageAlt: "ARK 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. 2D radar cues for flanks and rotations.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@arkhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Mantenimiento de parches",
					description: "Bypass Easy Anti-Cheat: how EAC updates are handled for ARK: Survival Ascended hacks. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "ARK Hacks maintenance after a EAC patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. how EAC updates are handled for ARK: Survival Ascended hacks.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@arkhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Trucos ARK 2026 | Guía del comprador",
					description: "Trucos ARK 2026: 2026 ARK hacks checklist before checkout. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos ARK 2026",
					intro: "ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Trucos ARK 2026.",
					imageAlt: "ARK Hacks product overview for ARK: Survival Ascended",
					galleryTitle: "Trucos ARK 2026",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Trucos ARK 2026",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. 2026 ARK hacks checklist before checkout.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@arkhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				hacks: {
					title: "Trucos ARK | Guía ESP y Aimbot",
					description: "Trucos ARK: the ARK: Survival Ascended hacks pillar for ESP and Aimbot. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos ARK",
					intro: "ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Trucos ARK.",
					imageAlt: "ARK Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Trucos ARK",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Trucos ARK",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. the ARK: Survival Ascended hacks pillar for ESP and Aimbot.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@arkhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descarga ARK Hacks | Acceso instantáneo",
					description: "Descarga ARK Hacks: digital license download after payment. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Descarga ARK Hacks",
					intro: "ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Descarga ARK Hacks.",
					imageAlt: "ARK Hacks download and install delivery flow",
					galleryTitle: "Descarga ARK Hacks",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descarga ARK Hacks",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. digital license download after payment.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@arkhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menú mod ARK | Controles en partida",
					description: "Menú mod ARK: in-client ESP and soft aim toggles. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Menú mod ARK",
					intro: "ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Menú mod ARK.",
					imageAlt: "ARK Hacks in-game menu controls",
					galleryTitle: "Menú mod ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menú mod ARK",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. in-client ESP and soft aim toggles.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@arkhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim ARK | Ajustes soft aim",
					description: "Soft aim ARK: smooth soft aim settings for Windows PC. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soft aim ARK",
					intro: "ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Soft aim ARK.",
					imageAlt: "ARK soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim ARK",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "Soft aim ARK",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. smooth soft aim settings for Windows PC.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@arkhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Mejores trucos ARK | Lista de compra",
					description: "Mejores trucos ARK: what to compare before buying ARK hacks. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Mejores trucos ARK",
					intro: "ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Mejores trucos ARK.",
					imageAlt: "ARK Hacks overview for ARK: Survival Ascended on PC",
					galleryTitle: "Mejores trucos ARK",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Mejores trucos ARK",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. what to compare before buying ARK hacks.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@arkhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot ARK | Asistencia soft aim",
					description: "Hack aimbot ARK: undetected Aimbot hack assist for ARK: Survival Ascended. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack aimbot ARK",
					intro: "ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Hack aimbot ARK.",
					imageAlt: "ARK aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot ARK",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "Hack aimbot ARK",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. undetected Aimbot hack assist for ARK: Survival Ascended.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@arkhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP ARK | Cajas y loot",
					description: "Hack ESP ARK: ESP hack boxes, loot pins, and distance. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack ESP ARK",
					intro: "ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Hack ESP ARK.",
					imageAlt: "ARK ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP ARK",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Hack ESP ARK",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@arkhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all ARK | Qué significa",
					description: "Unlock all ARK: unlock-all searches vs real ESP and Aimbot tools. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Unlock all ARK",
					intro: "ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Unlock all ARK.",
					imageAlt: "ARK Hacks license features overview",
					galleryTitle: "Unlock all ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all ARK",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@arkhacks.com para solicitudes legales o de soporte.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidad | ARK Hacks",
					description: "Política de privacidad for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de privacidad",
					intro: "ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Política de privacidad for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer términos",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Información que recopilamos",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on arkhacks.com.",
							],
						},
						{
							h2: "Uso de la información",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Tus derechos",
							paragraphs: [
								"Contacta support@arkhacks.com para solicitudes legales o de soporte.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | ARK Hacks",
					description: "Política de reembolso for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de reembolso",
					intro: "ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Política de reembolso for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Entrega digital",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "Cuándo se aprueba",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Cómo solicitar",
							paragraphs: [
								"Contacta support@arkhacks.com para solicitudes legales o de soporte.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Términos de uso | ARK Hacks",
					description: "Términos de uso for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Términos de uso",
					intro: "ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Términos de uso for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Aceptación de términos",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "Riesgos y anti-cheat",
							paragraphs: [
								"ARK Hacks ofrece ESP wallhack, radar hack y ark aimbot indetectables para ARK en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Cambios",
							paragraphs: [
								"Contacta support@arkhacks.com para solicitudes legales o de soporte.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
			},
		},
		fr: {
			ui: {
				nav: {
					home: "Accueil",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fonctions",
					pricing: "Tarifs",
					setup: "Installation",
					updates: "Mises à jour",
					faq: "FAQ",
					buyNow: "Acheter",
				},
				hero: {
					accent: "Triches ARK indétectables",
					accentShort: "ARK Hacks",
					subtitle: "ESP wallhack, radar hack et Aimbot pour ARK sur PC Windows — maintenance Easy Anti-Cheat incluse.",
					subtitleShort: "ESP, radar et Aimbot pour ARK PC",
					buyNow: "Acheter",
					seeFeatures: "Voir les fonctions",
				},
				trust: {
					status: "En ligne",
					statusNote: "Le pack ARK Hacks est actif pour ARK sur PC Windows.",
					statusShort: "Actif",
					delivery: "Livraison numérique instantanée",
					platform: "Windows 10 et 11",
					antiCheat: "Maintenance Easy Anti-Cheat incluse",
					antiCheatShort: "Easy Anti-Cheat inclus",
				},
				product: {
					title: "ARK Hacks",
					addToCart: "Ajouter au panier",
					monthly: "Mensuel",
					lifetime: "À vie",
					available: "Disponible",
					gameBadge: "ARK",
					platformBadge: "PC Windows",
					statusBadge: "Pack indétectable",
				},
				reviews: {
					title: "Ce que disent les joueurs",
					subtitle: "Avis récents des acheteurs ARK Hacks",
					outOf: "sur 5",
					countLabel: "avis",
				},
				common: {
					buyNow: "Acheter",
					readGuide: "Lire le guide",
					language: "Langue",
					officialLanguageNote: "L'anglais est la langue officielle. Les autres versions sont traduites pour le SEO mondial.",
					relatedPages: "Pages associées",
				},
				footer: {
					explore: "Explorer",
					help: "Aide et légal",
					tagline: "ESP, wallhack, radar et Aimbot indétectables pour ARK — checkout via Zadeyo.",
				},
				images: {
					hero: "ARK Hacks hero — ESP and aimbot overlay in ARK: Survival Ascended",
					espWallhack: "Wallhack outlines showing players and wild dinos through walls",
					aimbotCombat: "Soft aim assist overlay during an ARK: Survival Ascended raid",
					squadFight: "ARK Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a ARK raid",
					headerArt: "Aimbot view and bone priority controls for ARK",
					cheatsPackage: "2D radar threat overlay for ARK: Survival Ascended",
					rebootFight: "Aimbot assist during a ARK firefight",
					battleRoyale: "ARK Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base raids in ARK",
				},
			},
			pages: {
				home: {
					title: "ARK Hacks 2026 | ESP, Wallhack et Aimbot",
					description: "Triches ARK: Survival Ascended indétectables pour ARK: Survival Ascended sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Easy Anti-Cheat. Livraison",
					h1: "ARK Hacks — ESP, Wallhack et Aimbot indétectables",
					intro: "Pack undetected pour ARK: Survival Ascended sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Easy Anti-Cheat après chaque patch.",
					imageAlt: "ARK ESP player tags hack",
					galleryTitle: "Galerie ARK Hacks — ESP, Aimbot et wallhack",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Acheter ARK Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Pourquoi choisir ARK Hacks en 2026",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Parfait pour lire les escouades ennemies en BR et scav-run.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar et Aimbot en une licence",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Une licence au lieu d'outils séparés.",
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
					],
				},
				"ark-esp": {
					title: "ESP ARK | Boîtes joueur et wallhack",
					description: "ESP ARK: player boxes, loot markers, and wallhack overlays. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "ESP ARK",
					intro: "ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. ESP ARK.",
					imageAlt: "ARK ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Acheter ARK Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ESP ARK",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@arkhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"ark-aimbot": {
					title: "Aimbot ARK | Contrôles soft aim",
					description: "Aimbot ARK: soft aim, FOV, and per-weapon Aimbot profiles. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Aimbot ARK",
					intro: "ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Aimbot ARK.",
					imageAlt: "ARK aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot ARK",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Acheter ARK Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Aimbot ARK",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@arkhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				features: {
					title: "Fonctions | Liste complète des fonctions",
					description: "Fonctions: ESP, soft aim, radar controls. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Fonctions",
					intro: "ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Fonctions.",
					imageAlt: "ARK Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fonctions",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter ARK Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fonctions",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. ESP, soft aim, radar controls.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@arkhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				pricing: {
					title: "Tarifs | Mensuel et à vie",
					description: "Tarifs: $35 monthly or $150 lifetime licenses. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Tarifs",
					intro: "ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Tarifs.",
					imageAlt: "ARK Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Tarifs",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Acheter ARK Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tarifs",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@arkhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				setup: {
					title: "Installation | Guide d'installation PC",
					description: "Installation: Windows PC activation and first-launch setup. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Installation",
					intro: "ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Installation.",
					imageAlt: "ARK Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Acheter ARK Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Windows PC activation and first-launch setup.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@arkhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				updates: {
					title: "Mises à jour | Journal Easy Anti-Cheat",
					description: "Mises à jour: EAC patch status and rebuild notes. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Mises à jour",
					intro: "ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Mises à jour.",
					imageAlt: "ARK Hacks live status after EAC and game patches",
					galleryTitle: "Mises à jour",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Acheter ARK Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Mises à jour",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. EAC patch status and rebuild notes.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@arkhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Questions fréquentes",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "FAQ",
					intro: "ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. FAQ.",
					imageAlt: "ARK Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter ARK Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@arkhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				support: {
					title: "Support | Aide et contact",
					description: "Support: order help and license support contact. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Support",
					intro: "ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Support.",
					imageAlt: "ARK Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Acheter ARK Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. order help and license support contact.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@arkhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				undetected: {
					title: "Triches indétectables | Statut indétectable",
					description: "Triches indétectables: undetected maintenance after Easy Anti-Cheat patches. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches indétectables",
					intro: "ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Triches indétectables.",
					imageAlt: "ARK Hacks undetected status overview for Windows PC",
					galleryTitle: "Triches indétectables",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Acheter ARK Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Triches indétectables",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@arkhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack ARK | Visibilité ESP",
					description: "Wallhack ARK: wallhack ESP for players, loot, and distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Wallhack ARK",
					intro: "ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Wallhack ARK.",
					imageAlt: "ARK wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack ARK",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Acheter ARK Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Wallhack ARK",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. wallhack ESP for players, loot, and distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@arkhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D des menaces",
					description: "Radar hack: 2D radar cues for flanks and rotations. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Radar hack",
					intro: "ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Radar hack.",
					imageAlt: "ARK 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Acheter ARK Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. 2D radar cues for flanks and rotations.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@arkhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Maintenance des patchs",
					description: "Bypass Easy Anti-Cheat: how EAC updates are handled for ARK: Survival Ascended hacks. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "ARK Hacks maintenance after a EAC patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Acheter ARK Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. how EAC updates are handled for ARK: Survival Ascended hacks.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@arkhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Triches ARK 2026 | Guide acheteur",
					description: "Triches ARK 2026: 2026 ARK hacks checklist before checkout. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches ARK 2026",
					intro: "ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Triches ARK 2026.",
					imageAlt: "ARK Hacks product overview for ARK: Survival Ascended",
					galleryTitle: "Triches ARK 2026",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Acheter ARK Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Triches ARK 2026",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. 2026 ARK hacks checklist before checkout.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@arkhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				hacks: {
					title: "Triches ARK | Guide ESP et Aimbot",
					description: "Triches ARK: the ARK: Survival Ascended hacks pillar for ESP and Aimbot. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches ARK",
					intro: "ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Triches ARK.",
					imageAlt: "ARK Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Triches ARK",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Acheter ARK Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Triches ARK",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. the ARK: Survival Ascended hacks pillar for ESP and Aimbot.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@arkhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Téléchargement ARK Hacks | Accès instantané",
					description: "Téléchargement ARK Hacks: digital license download after payment. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Téléchargement ARK Hacks",
					intro: "ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Téléchargement ARK Hacks.",
					imageAlt: "ARK Hacks download and install delivery flow",
					galleryTitle: "Téléchargement ARK Hacks",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Acheter ARK Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Téléchargement ARK Hacks",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. digital license download after payment.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@arkhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod ARK | Contrôles en jeu",
					description: "Menu mod ARK: in-client ESP and soft aim toggles. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Menu mod ARK",
					intro: "ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Menu mod ARK.",
					imageAlt: "ARK Hacks in-game menu controls",
					galleryTitle: "Menu mod ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Acheter ARK Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod ARK",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. in-client ESP and soft aim toggles.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@arkhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim ARK | Réglages soft aim",
					description: "Soft aim ARK: smooth soft aim settings for Windows PC. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Soft aim ARK",
					intro: "ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Soft aim ARK.",
					imageAlt: "ARK soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim ARK",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter ARK Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "Soft aim ARK",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. smooth soft aim settings for Windows PC.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@arkhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Meilleures triches ARK | Checklist acheteur",
					description: "Meilleures triches ARK: what to compare before buying ARK hacks. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Meilleures triches ARK",
					intro: "ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Meilleures triches ARK.",
					imageAlt: "ARK Hacks overview for ARK: Survival Ascended on PC",
					galleryTitle: "Meilleures triches ARK",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Acheter ARK Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Meilleures triches ARK",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. what to compare before buying ARK hacks.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@arkhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot ARK | Assistance soft aim",
					description: "Hack aimbot ARK: undetected Aimbot hack assist for ARK: Survival Ascended. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack aimbot ARK",
					intro: "ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Hack aimbot ARK.",
					imageAlt: "ARK aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot ARK",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter ARK Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "Hack aimbot ARK",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. undetected Aimbot hack assist for ARK: Survival Ascended.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@arkhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP ARK | Boîtes et loot",
					description: "Hack ESP ARK: ESP hack boxes, loot pins, and distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack ESP ARK",
					intro: "ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Hack ESP ARK.",
					imageAlt: "ARK ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP ARK",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Acheter ARK Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Hack ESP ARK",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@arkhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all ARK | Ce que ça signifie",
					description: "Unlock all ARK: unlock-all searches vs real ESP and Aimbot tools. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Unlock all ARK",
					intro: "ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Unlock all ARK.",
					imageAlt: "ARK Hacks license features overview",
					galleryTitle: "Unlock all ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Acheter ARK Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all ARK",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@arkhacks.com pour le support ou les demandes légales.",
							],
						},
					],
				},
				privacy: {
					title: "Politique de confidentialité | ARK Hacks",
					description: "Politique de confidentialité for ARK Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de confidentialité",
					intro: "ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Politique de confidentialité for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Lire conditions",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informations collectées",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on arkhacks.com.",
							],
						},
						{
							h2: "Utilisation",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Vos droits",
							paragraphs: [
								"Contactez support@arkhacks.com pour le support ou les demandes légales.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Politique de remboursement | ARK Hacks",
					description: "Politique de remboursement for ARK Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de remboursement",
					intro: "ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Politique de remboursement for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Livraison numérique",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "Approbation",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Comment demander",
							paragraphs: [
								"Contactez support@arkhacks.com pour le support ou les demandes légales.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Conditions d'utilisation | ARK Hacks",
					description: "Conditions d'utilisation for ARK Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Conditions d'utilisation",
					intro: "ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Conditions d'utilisation for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptation",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risques",
							paragraphs: [
								"ARK Hacks combine ESP wallhack, radar hack et ark aimbot indétectables pour ARK sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Modifications",
							paragraphs: [
								"Contactez support@arkhacks.com pour le support ou les demandes légales.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
			},
		},
		de: {
			ui: {
				nav: {
					home: "Start",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Preise",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kaufen",
				},
				hero: {
					accent: "Undetected ARK Hacks",
					accentShort: "ARK Hacks",
					subtitle: "ESP Wallhack, Radar Hack und Aimbot für ARK auf Windows PC — Easy Anti-Cheat-Wartung inklusive.",
					subtitleShort: "ESP, Radar & Aimbot für ARK PC",
					buyNow: "Jetzt kaufen",
					seeFeatures: "Features ansehen",
				},
				trust: {
					status: "Online",
					statusNote: "ARK Hacks Paket ist live für ARK auf Windows PC.",
					statusShort: "Live",
					delivery: "Sofortige digitale Lieferung",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat-Wartung unterstützt",
					antiCheatShort: "Easy Anti-Cheat Support",
				},
				product: {
					title: "ARK Hacks",
					addToCart: "In den Warenkorb",
					monthly: "Monatlich",
					lifetime: "Lifetime",
					available: "Jetzt verfügbar",
					gameBadge: "ARK",
					platformBadge: "Windows PC",
					statusBadge: "Undetected Paket",
				},
				reviews: {
					title: "Was Spieler sagen",
					subtitle: "Aktuelles Feedback von ARK Hacks Käufern",
					outOf: "von 5",
					countLabel: "Bewertungen",
				},
				common: {
					buyNow: "Jetzt kaufen",
					readGuide: "Guide lesen",
					language: "Sprache",
					officialLanguageNote: "Englisch ist die offizielle Sprache. Andere Locales sind für globales SEO übersetzt.",
					relatedPages: "Verwandte Seiten",
				},
				footer: {
					explore: "Entdecken",
					help: "Hilfe & Rechtliches",
					tagline: "Undetected ESP, Wallhack, Radar und Aimbot für ARK — Checkout über Zadeyo.",
				},
				images: {
					hero: "ARK Hacks hero — ESP and aimbot overlay in ARK: Survival Ascended",
					espWallhack: "Wallhack outlines showing players and wild dinos through walls",
					aimbotCombat: "Soft aim assist overlay during an ARK: Survival Ascended raid",
					squadFight: "ARK Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a ARK raid",
					headerArt: "Aimbot view and bone priority controls for ARK",
					cheatsPackage: "2D radar threat overlay for ARK: Survival Ascended",
					rebootFight: "Aimbot assist during a ARK firefight",
					battleRoyale: "ARK Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base raids in ARK",
				},
			},
			pages: {
				home: {
					title: "ARK Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected ARK Hacks für ARK: Survival Ascended auf PC. ESP Wallhack, Radar Hack und Aimbot mit Easy Anti-Cheat-Wartung. Sofortige digitale Lieferung.",
					h1: "ARK Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected Windows PC Paket für ARK: Survival Ascended: ESP Wallhack, Radar und Aimbot mit Easy Anti-Cheat-Wartung nach jedem Patch.",
					imageAlt: "ARK ESP player tags hack",
					galleryTitle: "ARK Hacks Galerie — ESP, Aimbot und Wallhack",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ARK Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warum ARK Hacks 2026 führt",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. Ideal um feindliche Squads in BR und scav-run zu lesen.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "ESP Wallhack, Radar und Aimbot in einer Lizenz",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. Eine Lizenz statt separater Tools.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
					],
				},
				"ark-esp": {
					title: "ARK ESP | Spielerboxen & Wallhack",
					description: "ARK ESP: player boxes, loot markers, and wallhack overlays. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "ARK ESP",
					intro: "ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. ARK ESP.",
					imageAlt: "ARK ESP player boxes and distance readouts in a raid",
					galleryTitle: "ARK ESP",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ARK ESP",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@arkhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"ark-aimbot": {
					title: "ARK Aimbot | Soft-Aim Steuerung",
					description: "ARK Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "ARK Aimbot",
					intro: "ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. ARK Aimbot.",
					imageAlt: "ARK aimbot and soft aim controls on Windows PC",
					galleryTitle: "ARK Aimbot",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "ARK Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK Aimbot",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@arkhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				features: {
					title: "Features | Vollständige Feature-Liste",
					description: "Features: ESP, soft aim, radar controls. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Features",
					intro: "ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. Features.",
					imageAlt: "ARK Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Features",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ARK Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Features",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. ESP, soft aim, radar controls.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@arkhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				pricing: {
					title: "Preise | Monatlich & Lifetime",
					description: "Preise: $35 monthly or $150 lifetime licenses. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Preise",
					intro: "ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. Preise.",
					imageAlt: "ARK Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Preise",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ARK Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preise",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. $35 monthly or $150 lifetime licenses.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@arkhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup-Anleitung",
					description: "Setup: Windows PC activation and first-launch setup. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Setup",
					intro: "ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. Setup.",
					imageAlt: "ARK Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. Windows PC activation and first-launch setup.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@arkhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | Easy Anti-Cheat Wartungslog",
					description: "Updates: EAC patch status and rebuild notes. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Updates",
					intro: "ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. Updates.",
					imageAlt: "ARK Hacks live status after EAC and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ARK Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. EAC patch status and rebuild notes.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@arkhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Häufige Fragen",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "FAQ",
					intro: "ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. FAQ.",
					imageAlt: "ARK Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ARK Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@arkhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Hilfe & Kontakt",
					description: "Support: order help and license support contact. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Support",
					intro: "ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. Support.",
					imageAlt: "ARK Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ARK Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. order help and license support contact.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@arkhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Undetected Status",
					description: "Undetected Cheats: undetected maintenance after Easy Anti-Cheat patches. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. Undetected Cheats.",
					imageAlt: "ARK Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "ARK Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@arkhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				wallhack: {
					title: "ARK Wallhack | ESP Sichtbarkeit",
					description: "ARK Wallhack: wallhack ESP for players, loot, and distance. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "ARK Wallhack",
					intro: "ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. ARK Wallhack.",
					imageAlt: "ARK wallhack visibility through walls in a raid",
					galleryTitle: "ARK Wallhack",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "ARK Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK Wallhack",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. wallhack ESP for players, loot, and distance.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@arkhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Bedrohungsradar",
					description: "Radar Hack: 2D radar cues for flanks and rotations. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. Radar Hack.",
					imageAlt: "ARK 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. 2D radar cues for flanks and rotations.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@arkhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				eac: {
					title: "EAC Bypass | Patch-Wartung",
					description: "EAC Bypass: how EAC updates are handled for ARK: Survival Ascended hacks. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "EAC Bypass",
					intro: "ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. EAC Bypass.",
					imageAlt: "ARK Hacks maintenance after a EAC patch",
					galleryTitle: "EAC Bypass",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "ARK Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "EAC Bypass",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. how EAC updates are handled for ARK: Survival Ascended hacks.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@arkhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "ARK Hacks 2026 | Käuferleitfaden",
					description: "ARK Hacks 2026: 2026 ARK hacks checklist before checkout. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "ARK Hacks 2026",
					intro: "ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. ARK Hacks 2026.",
					imageAlt: "ARK Hacks product overview for ARK: Survival Ascended",
					galleryTitle: "ARK Hacks 2026",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ARK Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ARK Hacks 2026",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. 2026 ARK hacks checklist before checkout.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@arkhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				hacks: {
					title: "ARK Hacks | ESP Aimbot Guide",
					description: "ARK Hacks: the ARK: Survival Ascended hacks pillar for ESP and Aimbot. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "ARK Hacks",
					intro: "ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. ARK Hacks.",
					imageAlt: "ARK Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "ARK Hacks",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ARK Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK Hacks",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. the ARK: Survival Ascended hacks pillar for ESP and Aimbot.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@arkhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "ARK Cheat Download | Sofortzugang",
					description: "ARK Cheat Download: digital license download after payment. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "ARK Cheat Download",
					intro: "ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. ARK Cheat Download.",
					imageAlt: "ARK Hacks download and install delivery flow",
					galleryTitle: "ARK Cheat Download",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ARK Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ARK Cheat Download",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. digital license download after payment.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@arkhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "ARK Mod-Menü | In-Game Toggles",
					description: "ARK Mod-Menü: in-client ESP and soft aim toggles. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "ARK Mod-Menü",
					intro: "ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. ARK Mod-Menü.",
					imageAlt: "ARK Hacks in-game menu controls",
					galleryTitle: "ARK Mod-Menü",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK Mod-Menü",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. in-client ESP and soft aim toggles.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@arkhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "ARK Soft Aim | Soft-Aim Einstellungen",
					description: "ARK Soft Aim: smooth soft aim settings for Windows PC. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "ARK Soft Aim",
					intro: "ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. ARK Soft Aim.",
					imageAlt: "ARK soft aim FOV and smoothness settings",
					galleryTitle: "ARK Soft Aim",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ARK Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "ARK Soft Aim",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. smooth soft aim settings for Windows PC.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@arkhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste ARK Hacks | Käufer-Checkliste",
					description: "Beste ARK Hacks: what to compare before buying ARK hacks. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Beste ARK Hacks",
					intro: "ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. Beste ARK Hacks.",
					imageAlt: "ARK Hacks overview for ARK: Survival Ascended on PC",
					galleryTitle: "Beste ARK Hacks",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ARK Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste ARK Hacks",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. what to compare before buying ARK hacks.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@arkhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "ARK Aimbot Hack | Soft-Aim Assist",
					description: "ARK Aimbot Hack: undetected Aimbot hack assist for ARK: Survival Ascended. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "ARK Aimbot Hack",
					intro: "ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. ARK Aimbot Hack.",
					imageAlt: "ARK aimbot hack controls and bone priority",
					galleryTitle: "ARK Aimbot Hack",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ARK Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "ARK Aimbot Hack",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. undetected Aimbot hack assist for ARK: Survival Ascended.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@arkhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "ARK ESP Hack | Boxen & Loot",
					description: "ARK ESP Hack: ESP hack boxes, loot pins, and distance. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "ARK ESP Hack",
					intro: "ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. ARK ESP Hack.",
					imageAlt: "ARK ESP hack boxes and loot markers",
					galleryTitle: "ARK ESP Hack",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "ARK Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK ESP Hack",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. ESP hack boxes, loot pins, and distance.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@arkhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "ARK Unlock All | Was es bedeutet",
					description: "ARK Unlock All: unlock-all searches vs real ESP and Aimbot tools. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "ARK Unlock All",
					intro: "ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. ARK Unlock All.",
					imageAlt: "ARK Hacks license features overview",
					galleryTitle: "ARK Unlock All",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK Unlock All",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@arkhacks.com für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				privacy: {
					title: "Datenschutz | ARK Hacks",
					description: "Datenschutz for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Datenschutz",
					intro: "ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. Datenschutz for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Nutzungsbedingungen",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Erhobene Daten",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on arkhacks.com.",
							],
						},
						{
							h2: "Datennutzung",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "Ihre Rechte",
							paragraphs: [
								"support@arkhacks.com für Support und rechtliche Anfragen.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Rückerstattung | ARK Hacks",
					description: "Rückerstattung for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Rückerstattung",
					intro: "ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. Rückerstattung for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digitale Lieferung",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "Genehmigung",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "Anfrage stellen",
							paragraphs: [
								"support@arkhacks.com für Support und rechtliche Anfragen.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Nutzungsbedingungen | ARK Hacks",
					description: "Nutzungsbedingungen for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Nutzungsbedingungen",
					intro: "ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. Nutzungsbedingungen for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Annahme",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "Risiko",
							paragraphs: [
								"ARK Hacks bündelt ESP wallhack, radar hack und ark aimbot als undetected Paket für ARK auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Änderungen",
							paragraphs: [
								"support@arkhacks.com für Support und rechtliche Anfragen.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
			},
		},
		pt: {
			ui: {
				nav: {
					home: "Início",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Recursos",
					pricing: "Preços",
					setup: "Instalação",
					updates: "Atualizações",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Cheats ARK indetectáveis",
					accentShort: "ARK Hacks",
					subtitle: "ESP wallhack, radar hack e Aimbot para ARK no PC Windows — manutenção Easy Anti-Cheat incluída.",
					subtitleShort: "ESP, radar e Aimbot para ARK PC",
					buyNow: "Comprar agora",
					seeFeatures: "Ver recursos",
				},
				trust: {
					status: "Online",
					statusNote: "O pacote ARK Hacks está ativo para ARK no PC Windows.",
					statusShort: "Ativo",
					delivery: "Entrega digital instantânea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenção Easy Anti-Cheat incluída",
					antiCheatShort: "Easy Anti-Cheat incluído",
				},
				product: {
					title: "ARK Hacks",
					addToCart: "Adicionar ao carrinho",
					monthly: "Mensal",
					lifetime: "Vitalício",
					available: "Disponível agora",
					gameBadge: "ARK",
					platformBadge: "PC Windows",
					statusBadge: "Pacote indetectável",
				},
				reviews: {
					title: "O que os jogadores dizem",
					subtitle: "Feedback recente de compradores ARK Hacks",
					outOf: "de 5",
					countLabel: "avaliações",
				},
				common: {
					buyNow: "Comprar agora",
					readGuide: "Ler guia",
					language: "Idioma",
					officialLanguageNote: "Inglês é o idioma oficial. Outros idiomas são traduzidos para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ajuda e legal",
					tagline: "ESP, wallhack, radar e Aimbot indetectáveis para ARK — checkout via Zadeyo.",
				},
				images: {
					hero: "ARK Hacks hero — ESP and aimbot overlay in ARK: Survival Ascended",
					espWallhack: "Wallhack outlines showing players and wild dinos through walls",
					aimbotCombat: "Soft aim assist overlay during an ARK: Survival Ascended raid",
					squadFight: "ARK Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a ARK raid",
					headerArt: "Aimbot view and bone priority controls for ARK",
					cheatsPackage: "2D radar threat overlay for ARK: Survival Ascended",
					rebootFight: "Aimbot assist during a ARK firefight",
					battleRoyale: "ARK Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base raids in ARK",
				},
			},
			pages: {
				home: {
					title: "ARK Hacks 2026 | ESP, Wallhack e Aimbot",
					description: "Cheats ARK: Survival Ascended indetectáveis para ARK: Survival Ascended no PC. ESP wallhack, radar hack e Aimbot com manutenção Easy Anti-Cheat. Entrega",
					h1: "ARK Hacks — ESP, Wallhack e Aimbot indetectáveis",
					intro: "Pacote undetected para ARK: Survival Ascended no Windows PC: ESP wallhack, radar e Aimbot com manutenção Easy Anti-Cheat após cada patch.",
					imageAlt: "ARK ESP player tags hack",
					galleryTitle: "Galeria ARK Hacks — ESP, Aimbot e wallhack",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por que escolher ARK Hacks em 2026",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Ideal para ler esquadrões inimigos em BR e scav-run.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot numa licença",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Uma licença em vez de ferramentas separadas.",
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
					],
				},
				"ark-esp": {
					title: "ESP ARK | Caixas de jogador e wallhack",
					description: "ESP ARK: player boxes, loot markers, and wallhack overlays. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "ESP ARK",
					intro: "ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. ESP ARK.",
					imageAlt: "ARK ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ESP ARK",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@arkhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				"ark-aimbot": {
					title: "Aimbot ARK | Controles soft aim",
					description: "Aimbot ARK: soft aim, FOV, and per-weapon Aimbot profiles. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Aimbot ARK",
					intro: "ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Aimbot ARK.",
					imageAlt: "ARK aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot ARK",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Aimbot ARK",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@arkhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				features: {
					title: "Recursos | Lista completa de recursos",
					description: "Recursos: ESP, soft aim, radar controls. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Recursos",
					intro: "ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Recursos.",
					imageAlt: "ARK Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Recursos",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Recursos",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. ESP, soft aim, radar controls.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@arkhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				pricing: {
					title: "Preços | Mensal e vitalício",
					description: "Preços: $35 monthly or $150 lifetime licenses. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Preços",
					intro: "ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Preços.",
					imageAlt: "ARK Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Preços",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preços",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@arkhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				setup: {
					title: "Instalação | Guia de instalação PC",
					description: "Instalação: Windows PC activation and first-launch setup. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Instalação",
					intro: "ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Instalação.",
					imageAlt: "ARK Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalação",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalação",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Windows PC activation and first-launch setup.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@arkhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				updates: {
					title: "Atualizações | Registro Easy Anti-Cheat",
					description: "Atualizações: EAC patch status and rebuild notes. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Atualizações",
					intro: "ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Atualizações.",
					imageAlt: "ARK Hacks live status after EAC and game patches",
					galleryTitle: "Atualizações",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Atualizações",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. EAC patch status and rebuild notes.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@arkhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Perguntas frequentes",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "FAQ",
					intro: "ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. FAQ.",
					imageAlt: "ARK Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@arkhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				support: {
					title: "Suporte | Ajuda e contato",
					description: "Suporte: order help and license support contact. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Suporte",
					intro: "ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Suporte.",
					imageAlt: "ARK Hacks support page for license and setup help",
					galleryTitle: "Suporte",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suporte",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. order help and license support contact.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@arkhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats indetectáveis | Status indetectável",
					description: "Cheats indetectáveis: undetected maintenance after Easy Anti-Cheat patches. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats indetectáveis",
					intro: "ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Cheats indetectáveis.",
					imageAlt: "ARK Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheats indetectáveis",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Cheats indetectáveis",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@arkhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack ARK | Visibilidade ESP",
					description: "Wallhack ARK: wallhack ESP for players, loot, and distance. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Wallhack ARK",
					intro: "ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Wallhack ARK.",
					imageAlt: "ARK wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack ARK",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Wallhack ARK",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. wallhack ESP for players, loot, and distance.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@arkhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D de ameaças",
					description: "Radar hack: 2D radar cues for flanks and rotations. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Radar hack",
					intro: "ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Radar hack.",
					imageAlt: "ARK 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. 2D radar cues for flanks and rotations.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@arkhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Manutenção de patches",
					description: "Bypass Easy Anti-Cheat: how EAC updates are handled for ARK: Survival Ascended hacks. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "ARK Hacks maintenance after a EAC patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. how EAC updates are handled for ARK: Survival Ascended hacks.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@arkhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats ARK 2026 | Guia do comprador",
					description: "Cheats ARK 2026: 2026 ARK hacks checklist before checkout. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats ARK 2026",
					intro: "ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Cheats ARK 2026.",
					imageAlt: "ARK Hacks product overview for ARK: Survival Ascended",
					galleryTitle: "Cheats ARK 2026",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Cheats ARK 2026",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. 2026 ARK hacks checklist before checkout.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@arkhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats ARK | Guia ESP e Aimbot",
					description: "Cheats ARK: the ARK: Survival Ascended hacks pillar for ESP and Aimbot. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats ARK",
					intro: "ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Cheats ARK.",
					imageAlt: "ARK Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats ARK",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats ARK",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. the ARK: Survival Ascended hacks pillar for ESP and Aimbot.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@arkhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download ARK Hacks | Acesso instantâneo",
					description: "Download ARK Hacks: digital license download after payment. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Download ARK Hacks",
					intro: "ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Download ARK Hacks.",
					imageAlt: "ARK Hacks download and install delivery flow",
					galleryTitle: "Download ARK Hacks",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download ARK Hacks",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. digital license download after payment.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@arkhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod ARK | Controles in-game",
					description: "Menu mod ARK: in-client ESP and soft aim toggles. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Menu mod ARK",
					intro: "ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Menu mod ARK.",
					imageAlt: "ARK Hacks in-game menu controls",
					galleryTitle: "Menu mod ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod ARK",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. in-client ESP and soft aim toggles.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@arkhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim ARK | Ajustes soft aim",
					description: "Soft aim ARK: smooth soft aim settings for Windows PC. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Soft aim ARK",
					intro: "ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Soft aim ARK.",
					imageAlt: "ARK soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim ARK",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "Soft aim ARK",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. smooth soft aim settings for Windows PC.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@arkhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Melhores cheats ARK | Checklist do comprador",
					description: "Melhores cheats ARK: what to compare before buying ARK hacks. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Melhores cheats ARK",
					intro: "ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Melhores cheats ARK.",
					imageAlt: "ARK Hacks overview for ARK: Survival Ascended on PC",
					galleryTitle: "Melhores cheats ARK",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Melhores cheats ARK",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. what to compare before buying ARK hacks.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@arkhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot ARK | Assistência soft aim",
					description: "Hack aimbot ARK: undetected Aimbot hack assist for ARK: Survival Ascended. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack aimbot ARK",
					intro: "ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Hack aimbot ARK.",
					imageAlt: "ARK aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot ARK",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "Hack aimbot ARK",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. undetected Aimbot hack assist for ARK: Survival Ascended.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@arkhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP ARK | Caixas e loot",
					description: "Hack ESP ARK: ESP hack boxes, loot pins, and distance. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack ESP ARK",
					intro: "ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Hack ESP ARK.",
					imageAlt: "ARK ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP ARK",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Hack ESP ARK",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@arkhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all ARK | O que significa",
					description: "Unlock all ARK: unlock-all searches vs real ESP and Aimbot tools. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Unlock all ARK",
					intro: "ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Unlock all ARK.",
					imageAlt: "ARK Hacks license features overview",
					galleryTitle: "Unlock all ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Comprar ARK Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all ARK",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@arkhacks.com para suporte ou questões legais.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidade | ARK Hacks",
					description: "Política de privacidade for ARK Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de privacidade",
					intro: "ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Política de privacidade for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on arkhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Contacte support@arkhacks.com para suporte ou questões legais.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | ARK Hacks",
					description: "Política de reembolso for ARK Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de reembolso",
					intro: "ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Política de reembolso for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Contacte support@arkhacks.com para suporte ou questões legais.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Termos de uso | ARK Hacks",
					description: "Termos de uso for ARK Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termos de uso",
					intro: "ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Termos de uso for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"ARK Hacks reúne ESP wallhack, radar hack e ark aimbot indetectáveis para ARK no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Contacte support@arkhacks.com para suporte ou questões legais.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
			},
		},
		it: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funzioni",
					pricing: "Prezzi",
					setup: "Setup",
					updates: "Aggiornamenti",
					faq: "FAQ",
					buyNow: "Acquista",
				},
				hero: {
					accent: "Cheat ARK indetectable",
					accentShort: "ARK Hacks",
					subtitle: "ESP wallhack, radar hack e Aimbot per ARK su PC Windows — manutenzione Easy Anti-Cheat inclusa.",
					subtitleShort: "ESP, radar e Aimbot per ARK PC",
					buyNow: "Acquista ora",
					seeFeatures: "Vedi funzioni",
				},
				trust: {
					status: "Online",
					statusNote: "Il pacchetto ARK Hacks è attivo per ARK su PC Windows.",
					statusShort: "Attivo",
					delivery: "Consegna digitale istantanea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenzione Easy Anti-Cheat supportata",
					antiCheatShort: "Easy Anti-Cheat supportato",
				},
				product: {
					title: "ARK Hacks",
					addToCart: "Aggiungi al carrello",
					monthly: "Mensile",
					lifetime: "A vita",
					available: "Disponibile ora",
					gameBadge: "ARK",
					platformBadge: "PC Windows",
					statusBadge: "Pacchetto indetectable",
				},
				reviews: {
					title: "Cosa dicono i giocatori",
					subtitle: "Feedback recente dagli acquirenti ARK Hacks",
					outOf: "su 5",
					countLabel: "recensioni",
				},
				common: {
					buyNow: "Acquista ora",
					readGuide: "Leggi guida",
					language: "Lingua",
					officialLanguageNote: "L'inglese è la lingua ufficiale. Altre versioni sono tradotte per SEO globale.",
					relatedPages: "Pagine correlate",
				},
				footer: {
					explore: "Esplora",
					help: "Aiuto e legale",
					tagline: "ESP, wallhack, radar e Aimbot indetectable per ARK — checkout via Zadeyo.",
				},
				images: {
					hero: "ARK Hacks hero — ESP and aimbot overlay in ARK: Survival Ascended",
					espWallhack: "Wallhack outlines showing players and wild dinos through walls",
					aimbotCombat: "Soft aim assist overlay during an ARK: Survival Ascended raid",
					squadFight: "ARK Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a ARK raid",
					headerArt: "Aimbot view and bone priority controls for ARK",
					cheatsPackage: "2D radar threat overlay for ARK: Survival Ascended",
					rebootFight: "Aimbot assist during a ARK firefight",
					battleRoyale: "ARK Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base raids in ARK",
				},
			},
			pages: {
				home: {
					title: "ARK Hacks 2026 | ESP, Wallhack e Aimbot",
					description: "Cheat ARK: Survival Ascended indetectable per ARK: Survival Ascended su PC. ESP wallhack, radar hack e Aimbot con manutenzione Easy Anti-Cheat. Consegna",
					h1: "ARK Hacks — ESP, Wallhack e Aimbot indetectable",
					intro: "Pacchetto undetected per ARK: Survival Ascended su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Easy Anti-Cheat dopo ogni patch.",
					imageAlt: "ARK ESP player tags hack",
					galleryTitle: "Galleria ARK Hacks — ESP, Aimbot e wallhack",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Acquista ARK Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Perché scegliere ARK Hacks nel 2026",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Ideale per leggere squadre nemiche in BR e scav-run.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot in una licenza",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Una licenza invece di tool separati.",
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
					],
				},
				"ark-esp": {
					title: "ESP ARK | Box giocatore e wallhack",
					description: "ESP ARK: player boxes, loot markers, and wallhack overlays. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "ESP ARK",
					intro: "ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. ESP ARK.",
					imageAlt: "ARK ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Acquista ARK Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ESP ARK",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@arkhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				"ark-aimbot": {
					title: "Aimbot ARK | Controlli soft aim",
					description: "Aimbot ARK: soft aim, FOV, and per-weapon Aimbot profiles. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aimbot ARK",
					intro: "ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Aimbot ARK.",
					imageAlt: "ARK aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot ARK",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Acquista ARK Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Aimbot ARK",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@arkhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				features: {
					title: "Funzioni | Elenco completo funzioni",
					description: "Funzioni: ESP, soft aim, radar controls. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Funzioni",
					intro: "ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Funzioni.",
					imageAlt: "ARK Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funzioni",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista ARK Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funzioni",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. ESP, soft aim, radar controls.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@arkhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				pricing: {
					title: "Prezzi | Mensile e lifetime",
					description: "Prezzi: $35 monthly or $150 lifetime licenses. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Prezzi",
					intro: "ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Prezzi.",
					imageAlt: "ARK Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Prezzi",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Acquista ARK Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prezzi",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@arkhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				setup: {
					title: "Setup | Guida setup PC",
					description: "Setup: Windows PC activation and first-launch setup. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Setup",
					intro: "ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Setup.",
					imageAlt: "ARK Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Acquista ARK Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Windows PC activation and first-launch setup.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@arkhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				updates: {
					title: "Aggiornamenti | Log manutenzione Easy Anti-Cheat",
					description: "Aggiornamenti: EAC patch status and rebuild notes. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aggiornamenti",
					intro: "ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Aggiornamenti.",
					imageAlt: "ARK Hacks live status after EAC and game patches",
					galleryTitle: "Aggiornamenti",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Acquista ARK Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Aggiornamenti",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. EAC patch status and rebuild notes.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@arkhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Domande frequenti",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "FAQ",
					intro: "ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. FAQ.",
					imageAlt: "ARK Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista ARK Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@arkhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				support: {
					title: "Supporto | Aiuto e contatto",
					description: "Supporto: order help and license support contact. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Supporto",
					intro: "ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Supporto.",
					imageAlt: "ARK Hacks support page for license and setup help",
					galleryTitle: "Supporto",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Acquista ARK Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Supporto",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. order help and license support contact.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@arkhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat indetectable | Stato indetectable",
					description: "Cheat indetectable: undetected maintenance after Easy Anti-Cheat patches. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat indetectable",
					intro: "ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Cheat indetectable.",
					imageAlt: "ARK Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheat indetectable",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Acquista ARK Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Cheat indetectable",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@arkhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack ARK | Visibilità ESP",
					description: "Wallhack ARK: wallhack ESP for players, loot, and distance. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Wallhack ARK",
					intro: "ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Wallhack ARK.",
					imageAlt: "ARK wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack ARK",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Acquista ARK Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Wallhack ARK",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. wallhack ESP for players, loot, and distance.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@arkhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D minacce",
					description: "Radar hack: 2D radar cues for flanks and rotations. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Radar hack",
					intro: "ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Radar hack.",
					imageAlt: "ARK 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Acquista ARK Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. 2D radar cues for flanks and rotations.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@arkhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Manutenzione patch",
					description: "Bypass Easy Anti-Cheat: how EAC updates are handled for ARK: Survival Ascended hacks. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "ARK Hacks maintenance after a EAC patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Acquista ARK Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. how EAC updates are handled for ARK: Survival Ascended hacks.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@arkhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat ARK 2026 | Guida acquirente",
					description: "Cheat ARK 2026: 2026 ARK hacks checklist before checkout. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat ARK 2026",
					intro: "ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Cheat ARK 2026.",
					imageAlt: "ARK Hacks product overview for ARK: Survival Ascended",
					galleryTitle: "Cheat ARK 2026",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Acquista ARK Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Cheat ARK 2026",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. 2026 ARK hacks checklist before checkout.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@arkhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat ARK | Guida ESP e Aimbot",
					description: "Cheat ARK: the ARK: Survival Ascended hacks pillar for ESP and Aimbot. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat ARK",
					intro: "ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Cheat ARK.",
					imageAlt: "ARK Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat ARK",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Acquista ARK Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat ARK",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. the ARK: Survival Ascended hacks pillar for ESP and Aimbot.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@arkhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download ARK Hacks | Accesso istantaneo",
					description: "Download ARK Hacks: digital license download after payment. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Download ARK Hacks",
					intro: "ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Download ARK Hacks.",
					imageAlt: "ARK Hacks download and install delivery flow",
					galleryTitle: "Download ARK Hacks",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Acquista ARK Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download ARK Hacks",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. digital license download after payment.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@arkhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu ARK | Toggle in-game",
					description: "Mod menu ARK: in-client ESP and soft aim toggles. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Mod menu ARK",
					intro: "ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Mod menu ARK.",
					imageAlt: "ARK Hacks in-game menu controls",
					galleryTitle: "Mod menu ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Acquista ARK Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu ARK",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. in-client ESP and soft aim toggles.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@arkhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim ARK | Impostazioni soft aim",
					description: "Soft aim ARK: smooth soft aim settings for Windows PC. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Soft aim ARK",
					intro: "ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Soft aim ARK.",
					imageAlt: "ARK soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim ARK",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista ARK Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "Soft aim ARK",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. smooth soft aim settings for Windows PC.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@arkhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Migliori cheat ARK | Checklist acquirente",
					description: "Migliori cheat ARK: what to compare before buying ARK hacks. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Migliori cheat ARK",
					intro: "ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Migliori cheat ARK.",
					imageAlt: "ARK Hacks overview for ARK: Survival Ascended on PC",
					galleryTitle: "Migliori cheat ARK",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Acquista ARK Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Migliori cheat ARK",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. what to compare before buying ARK hacks.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@arkhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot ARK | Assist soft aim",
					description: "Hack aimbot ARK: undetected Aimbot hack assist for ARK: Survival Ascended. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack aimbot ARK",
					intro: "ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Hack aimbot ARK.",
					imageAlt: "ARK aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot ARK",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista ARK Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "Hack aimbot ARK",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. undetected Aimbot hack assist for ARK: Survival Ascended.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@arkhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP ARK | Box e loot",
					description: "Hack ESP ARK: ESP hack boxes, loot pins, and distance. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack ESP ARK",
					intro: "ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Hack ESP ARK.",
					imageAlt: "ARK ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP ARK",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Acquista ARK Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Hack ESP ARK",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@arkhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all ARK | Cosa significa",
					description: "Unlock all ARK: unlock-all searches vs real ESP and Aimbot tools. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Unlock all ARK",
					intro: "ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Unlock all ARK.",
					imageAlt: "ARK Hacks license features overview",
					galleryTitle: "Unlock all ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Acquista ARK Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all ARK",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@arkhacks.com per supporto o richieste legali.",
							],
						},
					],
				},
				privacy: {
					title: "Informativa privacy | ARK Hacks",
					description: "Informativa privacy for ARK Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Informativa privacy",
					intro: "ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Informativa privacy for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on arkhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Contatta support@arkhacks.com per supporto o richieste legali.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Politica di rimborso | ARK Hacks",
					description: "Politica di rimborso for ARK Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica di rimborso",
					intro: "ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Politica di rimborso for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Contatta support@arkhacks.com per supporto o richieste legali.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Termini di utilizzo | ARK Hacks",
					description: "Termini di utilizzo for ARK Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termini di utilizzo",
					intro: "ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Termini di utilizzo for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"ARK Hacks unisce ESP wallhack, radar hack e ark aimbot indetectable per ARK su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Contatta support@arkhacks.com per supporto o richieste legali.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
			},
		},
		nl: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Functies",
					pricing: "Prijzen",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kopen",
				},
				hero: {
					accent: "Undetected ARK Hacks",
					accentShort: "ARK Hacks",
					subtitle: "ESP wallhack, radar hack en Aimbot voor ARK op Windows PC — Easy Anti-Cheat-onderhoud inbegrepen.",
					subtitleShort: "ESP, radar & Aimbot voor ARK PC",
					buyNow: "Nu kopen",
					seeFeatures: "Bekijk functies",
				},
				trust: {
					status: "Online",
					statusNote: "ARK Hacks pakket is live voor ARK op Windows PC.",
					statusShort: "Live",
					delivery: "Directe digitale levering",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat-onderhoud ondersteund",
					antiCheatShort: "Easy Anti-Cheat support",
				},
				product: {
					title: "ARK Hacks",
					addToCart: "In winkelwagen",
					monthly: "Maandelijks",
					lifetime: "Lifetime",
					available: "Nu beschikbaar",
					gameBadge: "ARK",
					platformBadge: "Windows PC",
					statusBadge: "Undetected pakket",
				},
				reviews: {
					title: "Wat spelers zeggen",
					subtitle: "Recente feedback van ARK Hacks kopers",
					outOf: "van 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Nu kopen",
					readGuide: "Lees gids",
					language: "Taal",
					officialLanguageNote: "Engels is de officiële taal. Andere talen zijn vertaald voor wereldwijde SEO.",
					relatedPages: "Gerelateerde pagina's",
				},
				footer: {
					explore: "Verkennen",
					help: "Help & juridisch",
					tagline: "Undetected ESP, wallhack, radar en Aimbot voor ARK — checkout via Zadeyo.",
				},
				images: {
					hero: "ARK Hacks hero — ESP and aimbot overlay in ARK: Survival Ascended",
					espWallhack: "Wallhack outlines showing players and wild dinos through walls",
					aimbotCombat: "Soft aim assist overlay during an ARK: Survival Ascended raid",
					squadFight: "ARK Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a ARK raid",
					headerArt: "Aimbot view and bone priority controls for ARK",
					cheatsPackage: "2D radar threat overlay for ARK: Survival Ascended",
					rebootFight: "Aimbot assist during a ARK firefight",
					battleRoyale: "ARK Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base raids in ARK",
				},
			},
			pages: {
				home: {
					title: "ARK Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected ARK hacks voor ARK: Survival Ascended op PC. ESP wallhack, radar hack en Aimbot met Easy Anti-Cheat-onderhoud. Directe digitale levering.",
					h1: "ARK Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected Windows PC pakket voor ARK: Survival Ascended: ESP wallhack, radar en Aimbot met Easy Anti-Cheat-onderhoud na elke patch.",
					imageAlt: "ARK ESP player tags hack",
					galleryTitle: "ARK Hacks galerij — ESP, Aimbot en wallhack",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ARK Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Waarom ARK Hacks in 2026",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. Ideaal om vijandelijke squads te lezen in BR en scav-run.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "ESP wallhack, radar en Aimbot in één licentie",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. Eén licentie in plaats van losse tools.",
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
					],
				},
				"ark-esp": {
					title: "ARK ESP | Player Boxes & Wallhack",
					description: "ARK ESP: player boxes, loot markers, and wallhack overlays. directe digitale levering. undetected — Windows PC.",
					h1: "ARK ESP",
					intro: "ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. ARK ESP.",
					imageAlt: "ARK ESP player boxes and distance readouts in a raid",
					galleryTitle: "ARK ESP",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ARK ESP",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@arkhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				"ark-aimbot": {
					title: "ARK Aimbot | Soft Aim Controls",
					description: "ARK Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. directe digitale levering. undetected — Windows PC.",
					h1: "ARK Aimbot",
					intro: "ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. ARK Aimbot.",
					imageAlt: "ARK aimbot and soft aim controls on Windows PC",
					galleryTitle: "ARK Aimbot",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "ARK Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK Aimbot",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@arkhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				features: {
					title: "Functies | Full Feature List",
					description: "Functies: ESP, soft aim, radar controls. directe digitale levering. undetected — Windows PC.",
					h1: "Functies",
					intro: "ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. Functies.",
					imageAlt: "ARK Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Functies",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ARK Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Functies",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. ESP, soft aim, radar controls.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@arkhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				pricing: {
					title: "Prijzen | Monthly & Lifetime",
					description: "Prijzen: $35 monthly or $150 lifetime licenses. directe digitale levering. undetected — Windows PC.",
					h1: "Prijzen",
					intro: "ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. Prijzen.",
					imageAlt: "ARK Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Prijzen",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ARK Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prijzen",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@arkhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: Windows PC activation and first-launch setup. directe digitale levering. undetected — Windows PC.",
					h1: "Setup",
					intro: "ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. Setup.",
					imageAlt: "ARK Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. Windows PC activation and first-launch setup.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@arkhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | Easy Anti-Cheat Maintenance Log",
					description: "Updates: EAC patch status and rebuild notes. directe digitale levering. undetected — Windows PC.",
					h1: "Updates",
					intro: "ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. Updates.",
					imageAlt: "ARK Hacks live status after EAC and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ARK Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. EAC patch status and rebuild notes.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@arkhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. directe digitale levering. undetected — Windows PC.",
					h1: "FAQ",
					intro: "ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. FAQ.",
					imageAlt: "ARK Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ARK Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@arkhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: order help and license support contact. directe digitale levering. undetected — Windows PC.",
					h1: "Support",
					intro: "ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. Support.",
					imageAlt: "ARK Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ARK Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. order help and license support contact.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@arkhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Easy Anti-Cheat Safe Status",
					description: "Undetected Cheats: undetected maintenance after Easy Anti-Cheat patches. directe digitale levering. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. Undetected Cheats.",
					imageAlt: "ARK Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "ARK Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@arkhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				wallhack: {
					title: "ARK Wallhack | ESP Visibility",
					description: "ARK Wallhack: wallhack ESP for players, loot, and distance. directe digitale levering. undetected — Windows PC.",
					h1: "ARK Wallhack",
					intro: "ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. ARK Wallhack.",
					imageAlt: "ARK wallhack visibility through walls in a raid",
					galleryTitle: "ARK Wallhack",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "ARK Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK Wallhack",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. wallhack ESP for players, loot, and distance.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@arkhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. directe digitale levering. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. Radar Hack.",
					imageAlt: "ARK 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. 2D radar cues for flanks and rotations.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@arkhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				eac: {
					title: "EAC Bypass | Patch Maintenance",
					description: "EAC Bypass: how EAC updates are handled for ARK: Survival Ascended hacks. directe digitale levering. undetected — Windows PC.",
					h1: "EAC Bypass",
					intro: "ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. EAC Bypass.",
					imageAlt: "ARK Hacks maintenance after a EAC patch",
					galleryTitle: "EAC Bypass",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "ARK Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "EAC Bypass",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. how EAC updates are handled for ARK: Survival Ascended hacks.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@arkhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "ARK Hacks 2026 | Buyer Guide",
					description: "ARK Hacks 2026: 2026 ARK hacks checklist before checkout. directe digitale levering. undetected — Windows PC.",
					h1: "ARK Hacks 2026",
					intro: "ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. ARK Hacks 2026.",
					imageAlt: "ARK Hacks product overview for ARK: Survival Ascended",
					galleryTitle: "ARK Hacks 2026",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ARK Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ARK Hacks 2026",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. 2026 ARK hacks checklist before checkout.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@arkhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				hacks: {
					title: "ARK Hacks | ESP Aimbot Guide",
					description: "ARK Hacks: the ARK: Survival Ascended hacks pillar for ESP and Aimbot. directe digitale levering. undetected — Windows PC.",
					h1: "ARK Hacks",
					intro: "ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. ARK Hacks.",
					imageAlt: "ARK Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "ARK Hacks",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ARK Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK Hacks",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. the ARK: Survival Ascended hacks pillar for ESP and Aimbot.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@arkhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "ARK Cheat Download | Instant Access",
					description: "ARK Cheat Download: digital license download after payment. directe digitale levering. undetected — Windows PC.",
					h1: "ARK Cheat Download",
					intro: "ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. ARK Cheat Download.",
					imageAlt: "ARK Hacks download and install delivery flow",
					galleryTitle: "ARK Cheat Download",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ARK Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ARK Cheat Download",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. digital license download after payment.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@arkhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "ARK Mod Menu | In-Game Toggles",
					description: "ARK Mod Menu: in-client ESP and soft aim toggles. directe digitale levering. undetected — Windows PC.",
					h1: "ARK Mod Menu",
					intro: "ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. ARK Mod Menu.",
					imageAlt: "ARK Hacks in-game menu controls",
					galleryTitle: "ARK Mod Menu",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK Mod Menu",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. in-client ESP and soft aim toggles.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@arkhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "ARK Soft Aim | Smooth Aim Settings",
					description: "ARK Soft Aim: smooth soft aim settings for Windows PC. directe digitale levering. undetected — Windows PC.",
					h1: "ARK Soft Aim",
					intro: "ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. ARK Soft Aim.",
					imageAlt: "ARK soft aim FOV and smoothness settings",
					galleryTitle: "ARK Soft Aim",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ARK Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "ARK Soft Aim",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. smooth soft aim settings for Windows PC.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@arkhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste ARK Hacks | Buyer Checklist",
					description: "Beste ARK Hacks: what to compare before buying ARK hacks. directe digitale levering. undetected — Windows PC.",
					h1: "Beste ARK Hacks",
					intro: "ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. Beste ARK Hacks.",
					imageAlt: "ARK Hacks overview for ARK: Survival Ascended on PC",
					galleryTitle: "Beste ARK Hacks",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ARK Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste ARK Hacks",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. what to compare before buying ARK hacks.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@arkhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "ARK Aimbot Hack | Soft Aim Assist",
					description: "ARK Aimbot Hack: undetected Aimbot hack assist for ARK: Survival Ascended. directe digitale levering. undetected — Windows PC.",
					h1: "ARK Aimbot Hack",
					intro: "ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. ARK Aimbot Hack.",
					imageAlt: "ARK aimbot hack controls and bone priority",
					galleryTitle: "ARK Aimbot Hack",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ARK Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "ARK Aimbot Hack",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. undetected Aimbot hack assist for ARK: Survival Ascended.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@arkhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "ARK ESP Hack | Boxes & Loot",
					description: "ARK ESP Hack: ESP hack boxes, loot pins, and distance. directe digitale levering. undetected — Windows PC.",
					h1: "ARK ESP Hack",
					intro: "ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. ARK ESP Hack.",
					imageAlt: "ARK ESP hack boxes and loot markers",
					galleryTitle: "ARK ESP Hack",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "ARK Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK ESP Hack",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@arkhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "ARK Unlock All | What It Means",
					description: "ARK Unlock All: unlock-all searches vs real ESP and Aimbot tools. directe digitale levering. undetected — Windows PC.",
					h1: "ARK Unlock All",
					intro: "ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. ARK Unlock All.",
					imageAlt: "ARK Hacks license features overview",
					galleryTitle: "ARK Unlock All",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK Unlock All",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@arkhacks.com voor support en juridische vragen.",
							],
						},
					],
				},
				privacy: {
					title: "Privacybeleid | ARK Hacks",
					description: "Privacybeleid for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Privacybeleid",
					intro: "ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. Privacybeleid for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on arkhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@arkhacks.com voor support en juridische vragen.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Restitutiebeleid | ARK Hacks",
					description: "Restitutiebeleid for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Restitutiebeleid",
					intro: "ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. Restitutiebeleid for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@arkhacks.com voor support en juridische vragen.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Gebruiksvoorwaarden | ARK Hacks",
					description: "Gebruiksvoorwaarden for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gebruiksvoorwaarden",
					intro: "ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. Gebruiksvoorwaarden for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"ARK Hacks bundelt ESP wallhack, radar hack en ark aimbot als undetected pakket voor ARK op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@arkhacks.com voor support en juridische vragen.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
			},
		},
		pl: {
			ui: {
				nav: {
					home: "Strona główna",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkcje",
					pricing: "Cennik",
					setup: "Instalacja",
					updates: "Aktualizacje",
					faq: "FAQ",
					buyNow: "Kup teraz",
				},
				hero: {
					accent: "Undetected cheaty ARK",
					accentShort: "ARK Hacks",
					subtitle: "ESP wallhack, radar hack i Aimbot do ARK na PC Windows — konserwacja Easy Anti-Cheat w cenie.",
					subtitleShort: "ESP, radar i Aimbot dla ARK PC",
					buyNow: "Kup teraz",
					seeFeatures: "Zobacz funkcje",
				},
				trust: {
					status: "Online",
					statusNote: "Pakiet ARK Hacks jest aktywny dla ARK na PC Windows.",
					statusShort: "Aktywny",
					delivery: "Natychmiastowa dostawa cyfrowa",
					platform: "Windows 10 i 11",
					antiCheat: "Wsparcie konserwacji Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat wsparcie",
				},
				product: {
					title: "ARK Hacks",
					addToCart: "Dodaj do koszyka",
					monthly: "Miesięcznie",
					lifetime: "Dożywotnio",
					available: "Dostępne teraz",
					gameBadge: "ARK",
					platformBadge: "PC Windows",
					statusBadge: "Pakiet undetected",
				},
				reviews: {
					title: "Co mówią gracze",
					subtitle: "Ostatnie opinie kupujących ARK Hacks",
					outOf: "na 5",
					countLabel: "opinii",
				},
				common: {
					buyNow: "Kup teraz",
					readGuide: "Czytaj poradnik",
					language: "Język",
					officialLanguageNote: "Angielski jest językiem oficjalnym. Inne wersje są tłumaczone dla globalnego SEO.",
					relatedPages: "Powiązane strony",
				},
				footer: {
					explore: "Odkrywaj",
					help: "Pomoc i prawo",
					tagline: "Undetected ESP, wallhack, radar i Aimbot dla ARK — checkout przez Zadeyo.",
				},
				images: {
					hero: "ARK Hacks hero — ESP and aimbot overlay in ARK: Survival Ascended",
					espWallhack: "Wallhack outlines showing players and wild dinos through walls",
					aimbotCombat: "Soft aim assist overlay during an ARK: Survival Ascended raid",
					squadFight: "ARK Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a ARK raid",
					headerArt: "Aimbot view and bone priority controls for ARK",
					cheatsPackage: "2D radar threat overlay for ARK: Survival Ascended",
					rebootFight: "Aimbot assist during a ARK firefight",
					battleRoyale: "ARK Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base raids in ARK",
				},
			},
			pages: {
				home: {
					title: "ARK Hacks 2026 | ESP, Wallhack i Aimbot",
					description: "Undetected cheaty ARK: Survival Ascended dla ARK: Survival Ascended na PC. ESP wallhack, radar hack i Aimbot z konserwacją Easy Anti-Cheat. Natychmiastowa",
					h1: "ARK Hacks — Undetected ESP, Wallhack i Aimbot",
					intro: "Pakiet undetected dla ARK: Survival Ascended na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Easy Anti-Cheat po każdym patchu.",
					imageAlt: "ARK ESP player tags hack",
					galleryTitle: "Galeria ARK Hacks — ESP, Aimbot i wallhack",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Kup ARK Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dlaczego ARK Hacks w 2026",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Idealny do czytania wrogich squadów w BR i scav-run.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar i Aimbot w jednej licencji",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Jedna licencja zamiast osobnych narzędzi.",
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
					],
				},
				"ark-esp": {
					title: "ESP ARK | Player Boxes & Wallhack",
					description: "ESP ARK: player boxes, loot markers, and wallhack overlays. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "ESP ARK",
					intro: "ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. ESP ARK.",
					imageAlt: "ARK ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Kup ARK Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ESP ARK",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@arkhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"ark-aimbot": {
					title: "Aimbot ARK | Soft Aim Controls",
					description: "Aimbot ARK: soft aim, FOV, and per-weapon Aimbot profiles. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aimbot ARK",
					intro: "ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Aimbot ARK.",
					imageAlt: "ARK aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot ARK",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Kup ARK Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Aimbot ARK",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@arkhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				features: {
					title: "Funkcje | Full Feature List",
					description: "Funkcje: ESP, soft aim, radar controls. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Funkcje",
					intro: "ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Funkcje.",
					imageAlt: "ARK Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkcje",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Kup ARK Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkcje",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. ESP, soft aim, radar controls.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@arkhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				pricing: {
					title: "Cennik | Monthly & Lifetime",
					description: "Cennik: $35 monthly or $150 lifetime licenses. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cennik",
					intro: "ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Cennik.",
					imageAlt: "ARK Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Cennik",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Kup ARK Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Cennik",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@arkhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				setup: {
					title: "Instalacja | PC Setup Guide",
					description: "Instalacja: Windows PC activation and first-launch setup. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Instalacja",
					intro: "ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Instalacja.",
					imageAlt: "ARK Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalacja",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Kup ARK Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalacja",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Windows PC activation and first-launch setup.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@arkhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizacje | Easy Anti-Cheat Maintenance Log",
					description: "Aktualizacje: EAC patch status and rebuild notes. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aktualizacje",
					intro: "ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Aktualizacje.",
					imageAlt: "ARK Hacks live status after EAC and game patches",
					galleryTitle: "Aktualizacje",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Kup ARK Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Aktualizacje",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. EAC patch status and rebuild notes.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@arkhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "FAQ",
					intro: "ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. FAQ.",
					imageAlt: "ARK Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Kup ARK Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@arkhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				support: {
					title: "Wsparcie | Help & Contact",
					description: "Wsparcie: order help and license support contact. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Wsparcie",
					intro: "ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Wsparcie.",
					imageAlt: "ARK Hacks support page for license and setup help",
					galleryTitle: "Wsparcie",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Kup ARK Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Wsparcie",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. order help and license support contact.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@arkhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				undetected: {
					title: "Cheaty undetected | Easy Anti-Cheat Safe Status",
					description: "Cheaty undetected: undetected maintenance after Easy Anti-Cheat patches. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty undetected",
					intro: "ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Cheaty undetected.",
					imageAlt: "ARK Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheaty undetected",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Kup ARK Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Cheaty undetected",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@arkhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack ARK | ESP Visibility",
					description: "Wallhack ARK: wallhack ESP for players, loot, and distance. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Wallhack ARK",
					intro: "ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Wallhack ARK.",
					imageAlt: "ARK wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack ARK",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Kup ARK Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Wallhack ARK",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. wallhack ESP for players, loot, and distance.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@arkhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Radar hack.",
					imageAlt: "ARK 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Kup ARK Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. 2D radar cues for flanks and rotations.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@arkhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how EAC updates are handled for ARK: Survival Ascended hacks. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "ARK Hacks maintenance after a EAC patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Kup ARK Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. how EAC updates are handled for ARK: Survival Ascended hacks.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@arkhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheaty ARK 2026 | Buyer Guide",
					description: "Cheaty ARK 2026: 2026 ARK hacks checklist before checkout. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty ARK 2026",
					intro: "ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Cheaty ARK 2026.",
					imageAlt: "ARK Hacks product overview for ARK: Survival Ascended",
					galleryTitle: "Cheaty ARK 2026",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Kup ARK Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Cheaty ARK 2026",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. 2026 ARK hacks checklist before checkout.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@arkhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				hacks: {
					title: "Cheaty ARK | ESP Aimbot Guide",
					description: "Cheaty ARK: the ARK: Survival Ascended hacks pillar for ESP and Aimbot. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty ARK",
					intro: "ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Cheaty ARK.",
					imageAlt: "ARK Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheaty ARK",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Kup ARK Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheaty ARK",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. the ARK: Survival Ascended hacks pillar for ESP and Aimbot.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@arkhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Pobieranie ARK Hacks | Instant Access",
					description: "Pobieranie ARK Hacks: digital license download after payment. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Pobieranie ARK Hacks",
					intro: "ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Pobieranie ARK Hacks.",
					imageAlt: "ARK Hacks download and install delivery flow",
					galleryTitle: "Pobieranie ARK Hacks",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Kup ARK Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Pobieranie ARK Hacks",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. digital license download after payment.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@arkhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu ARK | In-Game Toggles",
					description: "Mod menu ARK: in-client ESP and soft aim toggles. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Mod menu ARK",
					intro: "ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Mod menu ARK.",
					imageAlt: "ARK Hacks in-game menu controls",
					galleryTitle: "Mod menu ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Kup ARK Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu ARK",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. in-client ESP and soft aim toggles.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@arkhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim ARK | Smooth Aim Settings",
					description: "Soft aim ARK: smooth soft aim settings for Windows PC. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Soft aim ARK",
					intro: "ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Soft aim ARK.",
					imageAlt: "ARK soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim ARK",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Kup ARK Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "Soft aim ARK",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. smooth soft aim settings for Windows PC.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@arkhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Najlepsze cheaty ARK | Buyer Checklist",
					description: "Najlepsze cheaty ARK: what to compare before buying ARK hacks. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Najlepsze cheaty ARK",
					intro: "ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Najlepsze cheaty ARK.",
					imageAlt: "ARK Hacks overview for ARK: Survival Ascended on PC",
					galleryTitle: "Najlepsze cheaty ARK",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Kup ARK Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Najlepsze cheaty ARK",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. what to compare before buying ARK hacks.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@arkhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot ARK | Soft Aim Assist",
					description: "Hack aimbot ARK: undetected Aimbot hack assist for ARK: Survival Ascended. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack aimbot ARK",
					intro: "ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Hack aimbot ARK.",
					imageAlt: "ARK aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot ARK",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Kup ARK Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "Hack aimbot ARK",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. undetected Aimbot hack assist for ARK: Survival Ascended.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@arkhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP ARK | Boxes & Loot",
					description: "Hack ESP ARK: ESP hack boxes, loot pins, and distance. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack ESP ARK",
					intro: "ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Hack ESP ARK.",
					imageAlt: "ARK ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP ARK",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Kup ARK Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Hack ESP ARK",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@arkhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all ARK | What It Means",
					description: "Unlock all ARK: unlock-all searches vs real ESP and Aimbot tools. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Unlock all ARK",
					intro: "ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Unlock all ARK.",
					imageAlt: "ARK Hacks license features overview",
					galleryTitle: "Unlock all ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Kup ARK Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all ARK",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@arkhacks.com w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				privacy: {
					title: "Polityka prywatności | ARK Hacks",
					description: "Polityka prywatności for ARK Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka prywatności",
					intro: "ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Polityka prywatności for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on arkhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@arkhacks.com w sprawach wsparcia i prawnych.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Polityka zwrotów | ARK Hacks",
					description: "Polityka zwrotów for ARK Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka zwrotów",
					intro: "ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Polityka zwrotów for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@arkhacks.com w sprawach wsparcia i prawnych.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Warunki użytkowania | ARK Hacks",
					description: "Warunki użytkowania for ARK Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Warunki użytkowania",
					intro: "ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Warunki użytkowania for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"ARK Hacks łączy ESP wallhack, radar hack i ark aimbot jako pakiet undetected dla ARK na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@arkhacks.com w sprawach wsparcia i prawnych.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
			},
		},
		ru: {
			ui: {
				nav: {
					home: "Главная",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функции",
					pricing: "Цены",
					setup: "Установка",
					updates: "Обновления",
					faq: "FAQ",
					buyNow: "Купить",
				},
				hero: {
					accent: "Undetected читы ARK",
					accentShort: "ARK Hacks",
					subtitle: "ESP wallhack, radar hack и Aimbot для ARK на Windows PC — обслуживание Easy Anti-Cheat включено.",
					subtitleShort: "ESP, radar и Aimbot для ARK PC",
					buyNow: "Купить",
					seeFeatures: "Смотреть функции",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет ARK Hacks активен для ARK на Windows PC.",
					statusShort: "Активен",
					delivery: "Мгновенная цифровая доставка",
					platform: "Windows 10 и 11",
					antiCheat: "Поддержка обслуживания Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat поддержка",
				},
				product: {
					title: "ARK Hacks",
					addToCart: "В корзину",
					monthly: "Месяц",
					lifetime: "Навсегда",
					available: "Доступно сейчас",
					gameBadge: "ARK",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Что говорят игроки",
					subtitle: "Недавние отзывы покупателей ARK Hacks",
					outOf: "из 5",
					countLabel: "отзывов",
				},
				common: {
					buyNow: "Купить",
					readGuide: "Читать гайд",
					language: "Язык",
					officialLanguageNote: "Английский — официальный язык. Другие версии переведены для глобального SEO.",
					relatedPages: "Похожие страницы",
				},
				footer: {
					explore: "Обзор",
					help: "Помощь и право",
					tagline: "Undetected ESP, wallhack, radar и Aimbot для ARK — оплата через Zadeyo.",
				},
				images: {
					hero: "ARK Hacks hero — ESP and aimbot overlay in ARK: Survival Ascended",
					espWallhack: "Wallhack outlines showing players and wild dinos through walls",
					aimbotCombat: "Soft aim assist overlay during an ARK: Survival Ascended raid",
					squadFight: "ARK Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a ARK raid",
					headerArt: "Aimbot view and bone priority controls for ARK",
					cheatsPackage: "2D radar threat overlay for ARK: Survival Ascended",
					rebootFight: "Aimbot assist during a ARK firefight",
					battleRoyale: "ARK Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base raids in ARK",
				},
			},
			pages: {
				home: {
					title: "ARK Hacks 2026 | ESP, Wallhack и Aimbot",
					description: "Undetected читы ARK: Survival Ascended для ARK: Survival Ascended на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Easy Anti-Cheat. Мгновенная цифровая",
					h1: "ARK Hacks — Undetected ESP, Wallhack и Aimbot",
					intro: "Undetected пакет для ARK: Survival Ascended на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Easy Anti-Cheat после патчей.",
					imageAlt: "ARK ESP player tags hack",
					galleryTitle: "Галерея ARK Hacks — ESP, Aimbot и wallhack",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Купить ARK Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Почему выбирают ARK Hacks в 2026",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Идеально для чтения вражеских отрядов в BR и scav-run.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar и Aimbot в одной лицензии",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Одна лицензия вместо отдельных инструментов.",
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
					],
				},
				"ark-esp": {
					title: "ESP ARK | Боксы игроков и wallhack",
					description: "ESP ARK: player boxes, loot markers, and wallhack overlays. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "ESP ARK",
					intro: "ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. ESP ARK.",
					imageAlt: "ARK ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Купить ARK Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ESP ARK",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@arkhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"ark-aimbot": {
					title: "Aimbot ARK | Управление soft aim",
					description: "Aimbot ARK: soft aim, FOV, and per-weapon Aimbot profiles. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Aimbot ARK",
					intro: "ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Aimbot ARK.",
					imageAlt: "ARK aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot ARK",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Купить ARK Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Aimbot ARK",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@arkhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				features: {
					title: "Функции | Полный список функций",
					description: "Функции: ESP, soft aim, radar controls. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Функции",
					intro: "ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Функции.",
					imageAlt: "ARK Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функции",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Купить ARK Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функции",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. ESP, soft aim, radar controls.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@arkhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				pricing: {
					title: "Цены | Месяц и lifetime",
					description: "Цены: $35 monthly or $150 lifetime licenses. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Цены",
					intro: "ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Цены.",
					imageAlt: "ARK Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Цены",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Купить ARK Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Цены",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. $35 monthly or $150 lifetime licenses.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@arkhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				setup: {
					title: "Установка | Гайд по установке",
					description: "Установка: Windows PC activation and first-launch setup. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Установка",
					intro: "ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Установка.",
					imageAlt: "ARK Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Установка",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Купить ARK Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Установка",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Windows PC activation and first-launch setup.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@arkhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				updates: {
					title: "Обновления | Журнал Easy Anti-Cheat",
					description: "Обновления: EAC patch status and rebuild notes. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Обновления",
					intro: "ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Обновления.",
					imageAlt: "ARK Hacks live status after EAC and game patches",
					galleryTitle: "Обновления",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Купить ARK Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Обновления",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. EAC patch status and rebuild notes.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@arkhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Частые вопросы",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. FAQ.",
					imageAlt: "ARK Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Купить ARK Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@arkhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				support: {
					title: "Поддержка | Помощь и контакт",
					description: "Поддержка: order help and license support contact. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Поддержка",
					intro: "ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Поддержка.",
					imageAlt: "ARK Hacks support page for license and setup help",
					galleryTitle: "Поддержка",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Купить ARK Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Поддержка",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. order help and license support contact.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@arkhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected читы | Статус undetected",
					description: "Undetected читы: undetected maintenance after Easy Anti-Cheat patches. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Undetected читы",
					intro: "ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Undetected читы.",
					imageAlt: "ARK Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected читы",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Купить ARK Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Undetected читы",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@arkhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack ARK | Видимость ESP",
					description: "Wallhack ARK: wallhack ESP for players, loot, and distance. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Wallhack ARK",
					intro: "ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Wallhack ARK.",
					imageAlt: "ARK wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack ARK",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Купить ARK Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Wallhack ARK",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. wallhack ESP for players, loot, and distance.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@arkhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D радар угроз",
					description: "Radar hack: 2D radar cues for flanks and rotations. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Radar hack.",
					imageAlt: "ARK 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Купить ARK Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. 2D radar cues for flanks and rotations.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@arkhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Обслуживание патчей",
					description: "Bypass Easy Anti-Cheat: how EAC updates are handled for ARK: Survival Ascended hacks. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "ARK Hacks maintenance after a EAC patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Купить ARK Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. how EAC updates are handled for ARK: Survival Ascended hacks.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@arkhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Читы ARK 2026 | Гайд покупателя",
					description: "Читы ARK 2026: 2026 ARK hacks checklist before checkout. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы ARK 2026",
					intro: "ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Читы ARK 2026.",
					imageAlt: "ARK Hacks product overview for ARK: Survival Ascended",
					galleryTitle: "Читы ARK 2026",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Купить ARK Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Читы ARK 2026",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. 2026 ARK hacks checklist before checkout.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@arkhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				hacks: {
					title: "Читы ARK | Гайд ESP и Aimbot",
					description: "Читы ARK: the ARK: Survival Ascended hacks pillar for ESP and Aimbot. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы ARK",
					intro: "ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Читы ARK.",
					imageAlt: "ARK Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Читы ARK",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Купить ARK Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Читы ARK",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. the ARK: Survival Ascended hacks pillar for ESP and Aimbot.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@arkhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Скачать ARK Hacks | Мгновенный доступ",
					description: "Скачать ARK Hacks: digital license download after payment. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Скачать ARK Hacks",
					intro: "ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Скачать ARK Hacks.",
					imageAlt: "ARK Hacks download and install delivery flow",
					galleryTitle: "Скачать ARK Hacks",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Купить ARK Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Скачать ARK Hacks",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. digital license download after payment.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@arkhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню ARK | Игровые переключатели",
					description: "Мод-меню ARK: in-client ESP and soft aim toggles. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Мод-меню ARK",
					intro: "ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Мод-меню ARK.",
					imageAlt: "ARK Hacks in-game menu controls",
					galleryTitle: "Мод-меню ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Купить ARK Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню ARK",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. in-client ESP and soft aim toggles.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@arkhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim ARK | Настройки soft aim",
					description: "Soft aim ARK: smooth soft aim settings for Windows PC. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Soft aim ARK",
					intro: "ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Soft aim ARK.",
					imageAlt: "ARK soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim ARK",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Купить ARK Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "Soft aim ARK",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. smooth soft aim settings for Windows PC.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@arkhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Лучшие читы ARK | Чеклист покупателя",
					description: "Лучшие читы ARK: what to compare before buying ARK hacks. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Лучшие читы ARK",
					intro: "ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Лучшие читы ARK.",
					imageAlt: "ARK Hacks overview for ARK: Survival Ascended on PC",
					galleryTitle: "Лучшие читы ARK",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Купить ARK Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Лучшие читы ARK",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. what to compare before buying ARK hacks.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@arkhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot ARK | Soft aim ассист",
					description: "Хак aimbot ARK: undetected Aimbot hack assist for ARK: Survival Ascended. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак aimbot ARK",
					intro: "ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Хак aimbot ARK.",
					imageAlt: "ARK aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot ARK",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Купить ARK Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "Хак aimbot ARK",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. undetected Aimbot hack assist for ARK: Survival Ascended.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@arkhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP ARK | Боксы и лут",
					description: "Хак ESP ARK: ESP hack boxes, loot pins, and distance. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак ESP ARK",
					intro: "ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Хак ESP ARK.",
					imageAlt: "ARK ESP hack boxes and loot markers",
					galleryTitle: "Хак ESP ARK",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Купить ARK Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Хак ESP ARK",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. ESP hack boxes, loot pins, and distance.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@arkhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all ARK | Что это значит",
					description: "Unlock all ARK: unlock-all searches vs real ESP and Aimbot tools. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Unlock all ARK",
					intro: "ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Unlock all ARK.",
					imageAlt: "ARK Hacks license features overview",
					galleryTitle: "Unlock all ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Купить ARK Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all ARK",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@arkhacks.com для поддержки и юридических вопросов.",
							],
						},
					],
				},
				privacy: {
					title: "Политика конфиденциальности | ARK Hacks",
					description: "Политика конфиденциальности for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика конфиденциальности",
					intro: "ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Политика конфиденциальности for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on arkhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@arkhacks.com для поддержки и юридических вопросов.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Политика возврата | ARK Hacks",
					description: "Политика возврата for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика возврата",
					intro: "ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Политика возврата for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@arkhacks.com для поддержки и юридических вопросов.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Условия использования | ARK Hacks",
					description: "Условия использования for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Условия использования",
					intro: "ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Условия использования for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"ARK Hacks объединяет ESP wallhack, radar hack и ark aimbot в undetected пакете для ARK на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@arkhacks.com для поддержки и юридических вопросов.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
			},
		},
		tr: {
			ui: {
				nav: {
					home: "Ana sayfa",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Özellikler",
					pricing: "Fiyatlar",
					setup: "Kurulum",
					updates: "Güncellemeler",
					faq: "SSS",
					buyNow: "Satın al",
				},
				hero: {
					accent: "Undetected ARK hileleri",
					accentShort: "ARK Hacks",
					subtitle: "ARK Windows PC için ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat bakımı dahil.",
					subtitleShort: "ARK PC için ESP, radar ve Aimbot",
					buyNow: "Satın al",
					seeFeatures: "Özellikleri gör",
				},
				trust: {
					status: "Çevrimiçi",
					statusNote: "ARK Hacks paketi ARK Windows PC için aktif.",
					statusShort: "Aktif",
					delivery: "Anında dijital teslimat",
					platform: "Windows 10 ve 11",
					antiCheat: "Easy Anti-Cheat bakım desteği",
					antiCheatShort: "Easy Anti-Cheat destek",
				},
				product: {
					title: "ARK Hacks",
					addToCart: "Sepete ekle",
					monthly: "Aylık",
					lifetime: "Ömür boyu",
					available: "Şimdi mevcut",
					gameBadge: "ARK",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Oyuncular ne diyor",
					subtitle: "ARK Hacks alıcılarından son geri bildirimler",
					outOf: "/5",
					countLabel: "yorum",
				},
				common: {
					buyNow: "Satın al",
					readGuide: "Rehberi oku",
					language: "Dil",
					officialLanguageNote: "Resmi dil İngilizcedir. Diğer diller küresel SEO için çevrilmiştir.",
					relatedPages: "İlgili sayfalar",
				},
				footer: {
					explore: "Keşfet",
					help: "Yardım ve yasal",
					tagline: "ARK için undetected ESP, wallhack, radar ve Aimbot — Zadeyo checkout.",
				},
				images: {
					hero: "ARK Hacks hero — ESP and aimbot overlay in ARK: Survival Ascended",
					espWallhack: "Wallhack outlines showing players and wild dinos through walls",
					aimbotCombat: "Soft aim assist overlay during an ARK: Survival Ascended raid",
					squadFight: "ARK Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a ARK raid",
					headerArt: "Aimbot view and bone priority controls for ARK",
					cheatsPackage: "2D radar threat overlay for ARK: Survival Ascended",
					rebootFight: "Aimbot assist during a ARK firefight",
					battleRoyale: "ARK Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base raids in ARK",
				},
			},
			pages: {
				home: {
					title: "ARK Hacks 2026 | ESP, Wallhack ve Aimbot",
					description: "ARK: Survival Ascended için undetected hileler. ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat bakımı. Anında dijital teslimat.",
					h1: "ARK Hacks — Undetected ESP, Wallhack ve Aimbot",
					intro: "ARK: Survival Ascended Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Easy Anti-Cheat bakımı dahil.",
					imageAlt: "ARK ESP player tags hack",
					galleryTitle: "ARK Hacks galeri — ESP, Aimbot ve wallhack",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ARK Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026'da neden ARK Hacks",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. BR ve scav-run'da düşman squad okumak için ideal.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "ESP wallhack, radar ve Aimbot tek lisans",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. Ayrı araçlar yerine tek lisans.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
					],
				},
				"ark-esp": {
					title: "ARK ESP | Player Boxes & Wallhack",
					description: "ARK ESP: player boxes, loot markers, and wallhack overlays. anında dijital teslimat. undetected — Windows PC.",
					h1: "ARK ESP",
					intro: "ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. ARK ESP.",
					imageAlt: "ARK ESP player boxes and distance readouts in a raid",
					galleryTitle: "ARK ESP",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ARK ESP",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@arkhacks.com.",
							],
						},
					],
				},
				"ark-aimbot": {
					title: "ARK Aimbot | Soft Aim Controls",
					description: "ARK Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. anında dijital teslimat. undetected — Windows PC.",
					h1: "ARK Aimbot",
					intro: "ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. ARK Aimbot.",
					imageAlt: "ARK aimbot and soft aim controls on Windows PC",
					galleryTitle: "ARK Aimbot",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "ARK Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK Aimbot",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@arkhacks.com.",
							],
						},
					],
				},
				features: {
					title: "Özellikler | Full Feature List",
					description: "Özellikler: ESP, soft aim, radar controls. anında dijital teslimat. undetected — Windows PC.",
					h1: "Özellikler",
					intro: "ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. Özellikler.",
					imageAlt: "ARK Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Özellikler",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ARK Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Özellikler",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. ESP, soft aim, radar controls.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@arkhacks.com.",
							],
						},
					],
				},
				pricing: {
					title: "Fiyatlar | Monthly & Lifetime",
					description: "Fiyatlar: $35 monthly or $150 lifetime licenses. anında dijital teslimat. undetected — Windows PC.",
					h1: "Fiyatlar",
					intro: "ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. Fiyatlar.",
					imageAlt: "ARK Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Fiyatlar",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ARK Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Fiyatlar",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@arkhacks.com.",
							],
						},
					],
				},
				setup: {
					title: "Kurulum | PC Setup Guide",
					description: "Kurulum: Windows PC activation and first-launch setup. anında dijital teslimat. undetected — Windows PC.",
					h1: "Kurulum",
					intro: "ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. Kurulum.",
					imageAlt: "ARK Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Kurulum",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Kurulum",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. Windows PC activation and first-launch setup.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@arkhacks.com.",
							],
						},
					],
				},
				updates: {
					title: "Güncellemeler | Easy Anti-Cheat Maintenance Log",
					description: "Güncellemeler: EAC patch status and rebuild notes. anında dijital teslimat. undetected — Windows PC.",
					h1: "Güncellemeler",
					intro: "ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. Güncellemeler.",
					imageAlt: "ARK Hacks live status after EAC and game patches",
					galleryTitle: "Güncellemeler",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ARK Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Güncellemeler",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. EAC patch status and rebuild notes.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@arkhacks.com.",
							],
						},
					],
				},
				faq: {
					title: "SSS | Common Answers",
					description: "SSS: ESP, soft aim, delivery, and Easy Anti-Cheat questions. anında dijital teslimat. undetected — Windows PC.",
					h1: "SSS",
					intro: "ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. SSS.",
					imageAlt: "ARK Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "SSS",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ARK Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "SSS",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@arkhacks.com.",
							],
						},
					],
				},
				support: {
					title: "Destek | Help & Contact",
					description: "Destek: order help and license support contact. anında dijital teslimat. undetected — Windows PC.",
					h1: "Destek",
					intro: "ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. Destek.",
					imageAlt: "ARK Hacks support page for license and setup help",
					galleryTitle: "Destek",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ARK Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Destek",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. order help and license support contact.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@arkhacks.com.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected hileler | Easy Anti-Cheat Safe Status",
					description: "Undetected hileler: undetected maintenance after Easy Anti-Cheat patches. anında dijital teslimat. undetected — Windows PC.",
					h1: "Undetected hileler",
					intro: "ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. Undetected hileler.",
					imageAlt: "ARK Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected hileler",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "ARK Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Undetected hileler",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. undetected maintenance after Easy Anti-Cheat patches.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@arkhacks.com.",
							],
						},
					],
				},
				wallhack: {
					title: "ARK Wallhack | ESP Visibility",
					description: "ARK Wallhack: wallhack ESP for players, loot, and distance. anında dijital teslimat. undetected — Windows PC.",
					h1: "ARK Wallhack",
					intro: "ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. ARK Wallhack.",
					imageAlt: "ARK wallhack visibility through walls in a raid",
					galleryTitle: "ARK Wallhack",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "ARK Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK Wallhack",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. wallhack ESP for players, loot, and distance.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@arkhacks.com.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. anında dijital teslimat. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. Radar hack.",
					imageAlt: "ARK 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. 2D radar cues for flanks and rotations.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@arkhacks.com.",
							],
						},
					],
				},
				eac: {
					title: "EAC bypass | Patch Maintenance",
					description: "EAC bypass: how EAC updates are handled for ARK: Survival Ascended hacks. anında dijital teslimat. undetected — Windows PC.",
					h1: "EAC bypass",
					intro: "ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. EAC bypass.",
					imageAlt: "ARK Hacks maintenance after a EAC patch",
					galleryTitle: "EAC bypass",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "ARK Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "EAC bypass",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. how EAC updates are handled for ARK: Survival Ascended hacks.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@arkhacks.com.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "ARK Hileleri 2026 | Buyer Guide",
					description: "ARK Hileleri 2026: 2026 ARK hacks checklist before checkout. anında dijital teslimat. undetected — Windows PC.",
					h1: "ARK Hileleri 2026",
					intro: "ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. ARK Hileleri 2026.",
					imageAlt: "ARK Hacks product overview for ARK: Survival Ascended",
					galleryTitle: "ARK Hileleri 2026",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ARK Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ARK Hileleri 2026",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. 2026 ARK hacks checklist before checkout.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@arkhacks.com.",
							],
						},
					],
				},
				hacks: {
					title: "ARK Hileleri | ESP Aimbot Guide",
					description: "ARK Hileleri: the ARK: Survival Ascended hacks pillar for ESP and Aimbot. anında dijital teslimat. undetected — Windows PC.",
					h1: "ARK Hileleri",
					intro: "ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. ARK Hileleri.",
					imageAlt: "ARK Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "ARK Hileleri",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ARK Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK Hileleri",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. the ARK: Survival Ascended hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@arkhacks.com.",
							],
						},
					],
				},
				"cheat-download": {
					title: "ARK Hile İndir | Instant Access",
					description: "ARK Hile İndir: digital license download after payment. anında dijital teslimat. undetected — Windows PC.",
					h1: "ARK Hile İndir",
					intro: "ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. ARK Hile İndir.",
					imageAlt: "ARK Hacks download and install delivery flow",
					galleryTitle: "ARK Hile İndir",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ARK Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ARK Hile İndir",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. digital license download after payment.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@arkhacks.com.",
							],
						},
					],
				},
				"mod-menu": {
					title: "ARK Mod Menü | In-Game Toggles",
					description: "ARK Mod Menü: in-client ESP and soft aim toggles. anında dijital teslimat. undetected — Windows PC.",
					h1: "ARK Mod Menü",
					intro: "ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. ARK Mod Menü.",
					imageAlt: "ARK Hacks in-game menu controls",
					galleryTitle: "ARK Mod Menü",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK Mod Menü",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. in-client ESP and soft aim toggles.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@arkhacks.com.",
							],
						},
					],
				},
				"soft-aim": {
					title: "ARK Soft Aim | Smooth Aim Settings",
					description: "ARK Soft Aim: smooth soft aim settings for Windows PC. anında dijital teslimat. undetected — Windows PC.",
					h1: "ARK Soft Aim",
					intro: "ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. ARK Soft Aim.",
					imageAlt: "ARK soft aim FOV and smoothness settings",
					galleryTitle: "ARK Soft Aim",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ARK Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "ARK Soft Aim",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. smooth soft aim settings for Windows PC.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@arkhacks.com.",
							],
						},
					],
				},
				"best-cheats": {
					title: "En İyi ARK Hileleri | Buyer Checklist",
					description: "En İyi ARK Hileleri: what to compare before buying ARK hacks. anında dijital teslimat. undetected — Windows PC.",
					h1: "En İyi ARK Hileleri",
					intro: "ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. En İyi ARK Hileleri.",
					imageAlt: "ARK Hacks overview for ARK: Survival Ascended on PC",
					galleryTitle: "En İyi ARK Hileleri",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ARK Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "En İyi ARK Hileleri",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. what to compare before buying ARK hacks.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@arkhacks.com.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "ARK Aimbot Hilesi | Soft Aim Assist",
					description: "ARK Aimbot Hilesi: undetected Aimbot hack assist for ARK: Survival Ascended. anında dijital teslimat. undetected — Windows PC.",
					h1: "ARK Aimbot Hilesi",
					intro: "ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. ARK Aimbot Hilesi.",
					imageAlt: "ARK aimbot hack controls and bone priority",
					galleryTitle: "ARK Aimbot Hilesi",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ARK Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "ARK Aimbot Hilesi",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. undetected Aimbot hack assist for ARK: Survival Ascended.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@arkhacks.com.",
							],
						},
					],
				},
				"esp-hack": {
					title: "ARK ESP Hilesi | Boxes & Loot",
					description: "ARK ESP Hilesi: ESP hack boxes, loot pins, and distance. anında dijital teslimat. undetected — Windows PC.",
					h1: "ARK ESP Hilesi",
					intro: "ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. ARK ESP Hilesi.",
					imageAlt: "ARK ESP hack boxes and loot markers",
					galleryTitle: "ARK ESP Hilesi",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "ARK Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK ESP Hilesi",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@arkhacks.com.",
							],
						},
					],
				},
				"unlock-all": {
					title: "ARK Unlock All | What It Means",
					description: "ARK Unlock All: unlock-all searches vs real ESP and Aimbot tools. anında dijital teslimat. undetected — Windows PC.",
					h1: "ARK Unlock All",
					intro: "ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. ARK Unlock All.",
					imageAlt: "ARK Hacks license features overview",
					galleryTitle: "ARK Unlock All",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK Unlock All",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@arkhacks.com.",
							],
						},
					],
				},
				privacy: {
					title: "Gizlilik politikası | ARK Hacks",
					description: "Gizlilik politikası for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gizlilik politikası",
					intro: "ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. Gizlilik politikası for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on arkhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Destek ve yasal sorular için support@arkhacks.com.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				refund: {
					title: "İade politikası | ARK Hacks",
					description: "İade politikası for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "İade politikası",
					intro: "ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. İade politikası for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Destek ve yasal sorular için support@arkhacks.com.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Kullanım şartları | ARK Hacks",
					description: "Kullanım şartları for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Kullanım şartları",
					intro: "ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. Kullanım şartları for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"ARK Hacks, ARK için Windows PC üzerinde ESP wallhack, radar hack ve ark aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Destek ve yasal sorular için support@arkhacks.com.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
			},
		},
		ar: {
			ui: {
				nav: {
					home: "الرئيسية",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "الميزات",
					pricing: "الأسعار",
					setup: "التثبيت",
					updates: "التحديثات",
					faq: "الأسئلة",
					buyNow: "اشترِ الآن",
				},
				hero: {
					accent: "غش ARK غير مكتشف",
					accentShort: "ARK Hacks",
					subtitle: "ESP wallhack ورadar hack وAimbot لـ ARK على Windows PC — صيانة Easy Anti-Cheat مشمولة.",
					subtitleShort: "ESP ورadar وAimbot لـ ARK PC",
					buyNow: "اشترِ الآن",
					seeFeatures: "عرض الميزات",
				},
				trust: {
					status: "متصل",
					statusNote: "حزمة ARK Hacks نشطة لـ ARK على Windows PC.",
					statusShort: "نشط",
					delivery: "تسليم رقمي فوري",
					platform: "Windows 10 و11",
					antiCheat: "دعم صيانة Easy Anti-Cheat",
					antiCheatShort: "دعم Easy Anti-Cheat",
				},
				product: {
					title: "ARK Hacks",
					addToCart: "أضف إلى السلة",
					monthly: "شهري",
					lifetime: "مدى الحياة",
					available: "متوفر الآن",
					gameBadge: "ARK",
					platformBadge: "Windows PC",
					statusBadge: "حزمة غير مكتشفة",
				},
				reviews: {
					title: "ماذا يقول اللاعبون",
					subtitle: "آراء حديثة من مشتري ARK Hacks",
					outOf: "من 5",
					countLabel: "مراجعات",
				},
				common: {
					buyNow: "اشترِ الآن",
					readGuide: "اقرأ الدليل",
					language: "اللغة",
					officialLanguageNote: "الإنجليزية هي اللغة الرسمية. اللغات الأخرى مترجمة لتحسين SEO العالمي.",
					relatedPages: "صفحات ذات صلة",
				},
				footer: {
					explore: "استكشف",
					help: "المساعدة والقانون",
					tagline: "ESP وwallhack ورadar وAimbot غير مكتشف لـ ARK — الدفع عبر Zadeyo.",
				},
				images: {
					hero: "ARK Hacks hero — ESP and aimbot overlay in ARK: Survival Ascended",
					espWallhack: "Wallhack outlines showing players and wild dinos through walls",
					aimbotCombat: "Soft aim assist overlay during an ARK: Survival Ascended raid",
					squadFight: "ARK Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a ARK raid",
					headerArt: "Aimbot view and bone priority controls for ARK",
					cheatsPackage: "2D radar threat overlay for ARK: Survival Ascended",
					rebootFight: "Aimbot assist during a ARK firefight",
					battleRoyale: "ARK Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base raids in ARK",
				},
			},
			pages: {
				home: {
					title: "ARK Hacks 2026 | ESP وWallhack وAimbot",
					description: "غش ARK: Survival Ascended undetected لـ ARK: Survival Ascended على PC. ESP wallhack ورadar hack وAimbot مع صيانة Easy Anti-Cheat. تسليم رقمي فوري.",
					h1: "ARK Hacks — ESP وWallhack وAimbot غير مكتشف",
					intro: "حزمة undetected لـ ARK: Survival Ascended على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Easy Anti-Cheat.",
					imageAlt: "ARK ESP player tags hack",
					galleryTitle: "معرض ARK Hacks — ESP وAimbot وwallhack",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "اشترِ ARK Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "لماذا ARK Hacks في 2026",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. مثالي لقراءة فرق العدو في BR وscav-run.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack ورadar وAimbot في ترخيص واحد",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. ترخيص واحد بدلاً من أدوات منفصلة.",
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
					],
				},
				"ark-esp": {
					title: "ESP ARK | Player Boxes & Wallhack",
					description: "ESP ARK: player boxes, loot markers, and wallhack overlays. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "ESP ARK",
					intro: "ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. ESP ARK.",
					imageAlt: "ARK ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "اشترِ ARK Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ESP ARK",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. player boxes, loot markers, and wallhack overlays.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@arkhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"ark-aimbot": {
					title: "Aimbot ARK | Soft Aim Controls",
					description: "Aimbot ARK: soft aim, FOV, and per-weapon Aimbot profiles. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Aimbot ARK",
					intro: "ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. Aimbot ARK.",
					imageAlt: "ARK aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot ARK",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "اشترِ ARK Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Aimbot ARK",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@arkhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				features: {
					title: "الميزات | Full Feature List",
					description: "الميزات: ESP, soft aim, radar controls. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الميزات",
					intro: "ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. الميزات.",
					imageAlt: "ARK Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "الميزات",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ ARK Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "الميزات",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. ESP, soft aim, radar controls.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@arkhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				pricing: {
					title: "الأسعار | Monthly & Lifetime",
					description: "الأسعار: $35 monthly or $150 lifetime licenses. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسعار",
					intro: "ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. الأسعار.",
					imageAlt: "ARK Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "الأسعار",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "اشترِ ARK Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الأسعار",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. $35 monthly or $150 lifetime licenses.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@arkhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				setup: {
					title: "التثبيت | PC Setup Guide",
					description: "التثبيت: Windows PC activation and first-launch setup. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التثبيت",
					intro: "ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. التثبيت.",
					imageAlt: "ARK Hacks setup guide screenshot for Windows PC",
					galleryTitle: "التثبيت",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "اشترِ ARK Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "التثبيت",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. Windows PC activation and first-launch setup.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@arkhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				updates: {
					title: "التحديثات | Easy Anti-Cheat Maintenance Log",
					description: "التحديثات: EAC patch status and rebuild notes. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التحديثات",
					intro: "ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. التحديثات.",
					imageAlt: "ARK Hacks live status after EAC and game patches",
					galleryTitle: "التحديثات",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "اشترِ ARK Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "التحديثات",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. EAC patch status and rebuild notes.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@arkhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				faq: {
					title: "الأسئلة | Common Answers",
					description: "الأسئلة: ESP, soft aim, delivery, and Easy Anti-Cheat questions. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسئلة",
					intro: "ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. الأسئلة.",
					imageAlt: "ARK Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "الأسئلة",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ ARK Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "الأسئلة",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@arkhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				support: {
					title: "الدعم | Help & Contact",
					description: "الدعم: order help and license support contact. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الدعم",
					intro: "ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. الدعم.",
					imageAlt: "ARK Hacks support page for license and setup help",
					galleryTitle: "الدعم",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "اشترِ ARK Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الدعم",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. order help and license support contact.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@arkhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				undetected: {
					title: "غش undetected | Easy Anti-Cheat Safe Status",
					description: "غش undetected: undetected maintenance after Easy Anti-Cheat patches. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش undetected",
					intro: "ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. غش undetected.",
					imageAlt: "ARK Hacks undetected status overview for Windows PC",
					galleryTitle: "غش undetected",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "اشترِ ARK Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "غش undetected",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@arkhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack ARK | ESP Visibility",
					description: "Wallhack ARK: wallhack ESP for players, loot, and distance. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Wallhack ARK",
					intro: "ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. Wallhack ARK.",
					imageAlt: "ARK wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack ARK",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "اشترِ ARK Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Wallhack ARK",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. wallhack ESP for players, loot, and distance.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@arkhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Radar hack",
					intro: "ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. Radar hack.",
					imageAlt: "ARK 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "اشترِ ARK Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. 2D radar cues for flanks and rotations.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@arkhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how EAC updates are handled for ARK: Survival Ascended hacks. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "ARK Hacks maintenance after a EAC patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "اشترِ ARK Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. how EAC updates are handled for ARK: Survival Ascended hacks.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@arkhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "غش ARK 2026 | Buyer Guide",
					description: "غش ARK 2026: 2026 ARK hacks checklist before checkout. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش ARK 2026",
					intro: "ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. غش ARK 2026.",
					imageAlt: "ARK Hacks product overview for ARK: Survival Ascended",
					galleryTitle: "غش ARK 2026",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "اشترِ ARK Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "غش ARK 2026",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. 2026 ARK hacks checklist before checkout.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@arkhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				hacks: {
					title: "غش ARK | ESP Aimbot Guide",
					description: "غش ARK: the ARK: Survival Ascended hacks pillar for ESP and Aimbot. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش ARK",
					intro: "ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. غش ARK.",
					imageAlt: "ARK Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "غش ARK",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "اشترِ ARK Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "غش ARK",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. the ARK: Survival Ascended hacks pillar for ESP and Aimbot.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@arkhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheat-download": {
					title: "تحميل ARK Hacks | Instant Access",
					description: "تحميل ARK Hacks: digital license download after payment. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "تحميل ARK Hacks",
					intro: "ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. تحميل ARK Hacks.",
					imageAlt: "ARK Hacks download and install delivery flow",
					galleryTitle: "تحميل ARK Hacks",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "اشترِ ARK Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "تحميل ARK Hacks",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. digital license download after payment.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@arkhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"mod-menu": {
					title: "قائمة مود ARK | In-Game Toggles",
					description: "قائمة مود ARK: in-client ESP and soft aim toggles. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "قائمة مود ARK",
					intro: "ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. قائمة مود ARK.",
					imageAlt: "ARK Hacks in-game menu controls",
					galleryTitle: "قائمة مود ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "اشترِ ARK Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "قائمة مود ARK",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. in-client ESP and soft aim toggles.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@arkhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim ARK | Smooth Aim Settings",
					description: "Soft aim ARK: smooth soft aim settings for Windows PC. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Soft aim ARK",
					intro: "ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. Soft aim ARK.",
					imageAlt: "ARK soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim ARK",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ ARK Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "Soft aim ARK",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. smooth soft aim settings for Windows PC.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@arkhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"best-cheats": {
					title: "أفضل غش ARK | Buyer Checklist",
					description: "أفضل غش ARK: what to compare before buying ARK hacks. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "أفضل غش ARK",
					intro: "ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. أفضل غش ARK.",
					imageAlt: "ARK Hacks overview for ARK: Survival Ascended on PC",
					galleryTitle: "أفضل غش ARK",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "اشترِ ARK Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "أفضل غش ARK",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. what to compare before buying ARK hacks.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@arkhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "هاك Aimbot ARK | Soft Aim Assist",
					description: "هاك Aimbot ARK: undetected Aimbot hack assist for ARK: Survival Ascended. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك Aimbot ARK",
					intro: "ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. هاك Aimbot ARK.",
					imageAlt: "ARK aimbot hack controls and bone priority",
					galleryTitle: "هاك Aimbot ARK",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ ARK Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "هاك Aimbot ARK",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. undetected Aimbot hack assist for ARK: Survival Ascended.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@arkhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"esp-hack": {
					title: "هاك ESP ARK | Boxes & Loot",
					description: "هاك ESP ARK: ESP hack boxes, loot pins, and distance. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك ESP ARK",
					intro: "ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. هاك ESP ARK.",
					imageAlt: "ARK ESP hack boxes and loot markers",
					galleryTitle: "هاك ESP ARK",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "اشترِ ARK Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "هاك ESP ARK",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. ESP hack boxes, loot pins, and distance.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@arkhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all ARK | What It Means",
					description: "Unlock all ARK: unlock-all searches vs real ESP and Aimbot tools. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Unlock all ARK",
					intro: "ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. Unlock all ARK.",
					imageAlt: "ARK Hacks license features overview",
					galleryTitle: "Unlock all ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "اشترِ ARK Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all ARK",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@arkhacks.com للدعم والطلبات القانونية.",
							],
						},
					],
				},
				privacy: {
					title: "سياسة الخصوصية | ARK Hacks",
					description: "سياسة الخصوصية for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الخصوصية",
					intro: "ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. سياسة الخصوصية for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الشروط",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "المعلومات التي نجمعها",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on arkhacks.com.",
							],
						},
						{
							h2: "استخدام المعلومات",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "حقوقك",
							paragraphs: [
								"support@arkhacks.com للدعم والطلبات القانونية.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				refund: {
					title: "سياسة الاسترداد | ARK Hacks",
					description: "سياسة الاسترداد for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الاسترداد",
					intro: "ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. سياسة الاسترداد for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "التسليم الرقمي",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "موافقة الاسترداد",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "كيفية الطلب",
							paragraphs: [
								"support@arkhacks.com للدعم والطلبات القانونية.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				terms: {
					title: "شروط الاستخدام | ARK Hacks",
					description: "شروط الاستخدام for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "شروط الاستخدام",
					intro: "ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. شروط الاستخدام for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "قبول الشروط",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "المخاطر",
							paragraphs: [
								"ARK Hacks يجمع ESP wallhack وradar hack وark aimbot غير مكتشف لـ ARK على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "التغييرات",
							paragraphs: [
								"support@arkhacks.com للدعم والطلبات القانونية.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
			},
		},
		ja: {
			ui: {
				nav: {
					home: "ホーム",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "機能",
					pricing: "料金",
					setup: "セットアップ",
					updates: "更新",
					faq: "FAQ",
					buyNow: "今すぐ購入",
				},
				hero: {
					accent: "Undetected ARKチート",
					accentShort: "ARK Hacks",
					subtitle: "ARK Windows PC向けESP wallhack、radar hack、Aimbot — Easy Anti-Cheatメンテナンス付き。",
					subtitleShort: "ARK PC向けESP・radar・Aimbot",
					buyNow: "今すぐ購入",
					seeFeatures: "機能を見る",
				},
				trust: {
					status: "オンライン",
					statusNote: "ARK HacksパッケージはARK Windows PCで利用可能です。",
					statusShort: "稼働中",
					delivery: "即時デジタル配信",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheatメンテナンス対応",
					antiCheatShort: "Easy Anti-Cheat対応",
				},
				product: {
					title: "ARK Hacks",
					addToCart: "カートに追加",
					monthly: "月額",
					lifetime: "永久",
					available: "現在利用可能",
					gameBadge: "ARK",
					platformBadge: "Windows PC",
					statusBadge: "Undetectedパッケージ",
				},
				reviews: {
					title: "プレイヤーの声",
					subtitle: "ARK Hacks購入者からの最近のフィードバック",
					outOf: "/5",
					countLabel: "件のレビュー",
				},
				common: {
					buyNow: "今すぐ購入",
					readGuide: "ガイドを読む",
					language: "言語",
					officialLanguageNote: "英語が公式言語です。他言語はグローバルSEO向けに翻訳されています。",
					relatedPages: "関連ページ",
				},
				footer: {
					explore: "探索",
					help: "ヘルプと法務",
					tagline: "ARK向けundetected ESP、wallhack、radar、Aimbot — Zadeyoで購入。",
				},
				images: {
					hero: "ARK Hacks hero — ESP and aimbot overlay in ARK: Survival Ascended",
					espWallhack: "Wallhack outlines showing players and wild dinos through walls",
					aimbotCombat: "Soft aim assist overlay during an ARK: Survival Ascended raid",
					squadFight: "ARK Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a ARK raid",
					headerArt: "Aimbot view and bone priority controls for ARK",
					cheatsPackage: "2D radar threat overlay for ARK: Survival Ascended",
					rebootFight: "Aimbot assist during a ARK firefight",
					battleRoyale: "ARK Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base raids in ARK",
				},
			},
			pages: {
				home: {
					title: "ARK Hacks 2026 | ESP・Wallhack・Aimbot",
					description: "ARK: Survival Ascended向けundetectedチート。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheatメンテナンス。即時デジタル配信。",
					h1: "ARK Hacks — Undetected ESP・Wallhack・Aimbot",
					intro: "ARK: Survival Ascended Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Easy Anti-Cheatメンテナンス付き。",
					imageAlt: "ARK hacks hero ESP aimbot wallhack",
					galleryTitle: "ARK Hacksギャラリー — ESP、Aimbot、wallhack",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ARK Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年にARK Hacksを選ぶ理由",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。BRとscav-runで敵スクワッドを読むのに最適。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbotが1ライセンス",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。別ツールではなく1ライセンス。",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
					],
				},
				"ark-esp": {
					title: "ARK ESP | Player Boxes & Wallhack",
					description: "ARK ESP: player boxes, loot markers, and wallhack overlays. 即時デジタル配信. undetected — Windows PC.",
					h1: "ARK ESP",
					intro: "ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。ARK ESP.",
					imageAlt: "ARK ESP player boxes and distance readouts in a raid",
					galleryTitle: "ARK ESP",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ARK ESP",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@arkhacks.com",
							],
						},
					],
				},
				"ark-aimbot": {
					title: "ARK Aimbot | Soft Aim Controls",
					description: "ARK Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 即時デジタル配信. undetected — Windows PC.",
					h1: "ARK Aimbot",
					intro: "ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。ARK Aimbot.",
					imageAlt: "ARK aimbot and soft aim controls on Windows PC",
					galleryTitle: "ARK Aimbot",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "ARK Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK Aimbot",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@arkhacks.com",
							],
						},
					],
				},
				features: {
					title: "機能 | Full Feature List",
					description: "機能: ESP, soft aim, radar controls. 即時デジタル配信. undetected — Windows PC.",
					h1: "機能",
					intro: "ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。機能.",
					imageAlt: "ARK Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "機能",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ARK Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "機能",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。ESP, soft aim, radar controls.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@arkhacks.com",
							],
						},
					],
				},
				pricing: {
					title: "料金 | Monthly & Lifetime",
					description: "料金: $35 monthly or $150 lifetime licenses. 即時デジタル配信. undetected — Windows PC.",
					h1: "料金",
					intro: "ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。料金.",
					imageAlt: "ARK Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "料金",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ARK Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "料金",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。$35 monthly or $150 lifetime licenses.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@arkhacks.com",
							],
						},
					],
				},
				setup: {
					title: "セットアップ | PC Setup Guide",
					description: "セットアップ: Windows PC activation and first-launch setup. 即時デジタル配信. undetected — Windows PC.",
					h1: "セットアップ",
					intro: "ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。セットアップ.",
					imageAlt: "ARK Hacks setup guide screenshot for Windows PC",
					galleryTitle: "セットアップ",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "セットアップ",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。Windows PC activation and first-launch setup.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@arkhacks.com",
							],
						},
					],
				},
				updates: {
					title: "更新 | Easy Anti-Cheat Maintenance Log",
					description: "更新: EAC patch status and rebuild notes. 即時デジタル配信. undetected — Windows PC.",
					h1: "更新",
					intro: "ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。更新.",
					imageAlt: "ARK Hacks live status after EAC and game patches",
					galleryTitle: "更新",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ARK Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。EAC patch status and rebuild notes.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@arkhacks.com",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. 即時デジタル配信. undetected — Windows PC.",
					h1: "FAQ",
					intro: "ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。FAQ.",
					imageAlt: "ARK Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ARK Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@arkhacks.com",
							],
						},
					],
				},
				support: {
					title: "サポート | Help & Contact",
					description: "サポート: order help and license support contact. 即時デジタル配信. undetected — Windows PC.",
					h1: "サポート",
					intro: "ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。サポート.",
					imageAlt: "ARK Hacks support page for license and setup help",
					galleryTitle: "サポート",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ARK Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "サポート",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。order help and license support contact.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@arkhacks.com",
							],
						},
					],
				},
				undetected: {
					title: "Undetectedチート | Easy Anti-Cheat Safe Status",
					description: "Undetectedチート: undetected maintenance after Easy Anti-Cheat patches. 即時デジタル配信. undetected — Windows PC.",
					h1: "Undetectedチート",
					intro: "ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。Undetectedチート.",
					imageAlt: "ARK Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetectedチート",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "ARK Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Undetectedチート",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。undetected maintenance after Easy Anti-Cheat patches.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@arkhacks.com",
							],
						},
					],
				},
				wallhack: {
					title: "ARK Wallhack | ESP Visibility",
					description: "ARK Wallhack: wallhack ESP for players, loot, and distance. 即時デジタル配信. undetected — Windows PC.",
					h1: "ARK Wallhack",
					intro: "ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。ARK Wallhack.",
					imageAlt: "ARK wallhack visibility through walls in a raid",
					galleryTitle: "ARK Wallhack",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "ARK Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK Wallhack",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。wallhack ESP for players, loot, and distance.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@arkhacks.com",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. 即時デジタル配信. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。Radar Hack.",
					imageAlt: "ARK 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。2D radar cues for flanks and rotations.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@arkhacks.com",
							],
						},
					],
				},
				eac: {
					title: "EAC Bypass | Patch Maintenance",
					description: "EAC Bypass: how EAC updates are handled for ARK: Survival Ascended hacks. 即時デジタル配信. undetected — Windows PC.",
					h1: "EAC Bypass",
					intro: "ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。EAC Bypass.",
					imageAlt: "ARK Hacks maintenance after a EAC patch",
					galleryTitle: "EAC Bypass",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "ARK Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "EAC Bypass",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。how EAC updates are handled for ARK: Survival Ascended hacks.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@arkhacks.com",
							],
						},
					],
				},
				"cheats-2026": {
					title: "ARK Hacks 2026 | Buyer Guide",
					description: "ARK Hacks 2026: 2026 ARK hacks checklist before checkout. 即時デジタル配信. undetected — Windows PC.",
					h1: "ARK Hacks 2026",
					intro: "ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。ARK Hacks 2026.",
					imageAlt: "ARK Hacks product overview for ARK: Survival Ascended",
					galleryTitle: "ARK Hacks 2026",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ARK Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ARK Hacks 2026",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。2026 ARK hacks checklist before checkout.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@arkhacks.com",
							],
						},
					],
				},
				hacks: {
					title: "ARK Hacks | ESP Aimbot Guide",
					description: "ARK Hacks: the ARK: Survival Ascended hacks pillar for ESP and Aimbot. 即時デジタル配信. undetected — Windows PC.",
					h1: "ARK Hacks",
					intro: "ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。ARK Hacks.",
					imageAlt: "ARK Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "ARK Hacks",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ARK Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK Hacks",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。the ARK: Survival Ascended hacks pillar for ESP and Aimbot.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@arkhacks.com",
							],
						},
					],
				},
				"cheat-download": {
					title: "ARK Cheat Download | Instant Access",
					description: "ARK Cheat Download: digital license download after payment. 即時デジタル配信. undetected — Windows PC.",
					h1: "ARK Cheat Download",
					intro: "ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。ARK Cheat Download.",
					imageAlt: "ARK Hacks download and install delivery flow",
					galleryTitle: "ARK Cheat Download",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ARK Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ARK Cheat Download",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。digital license download after payment.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@arkhacks.com",
							],
						},
					],
				},
				"mod-menu": {
					title: "ARK Mod Menu | In-Game Toggles",
					description: "ARK Mod Menu: in-client ESP and soft aim toggles. 即時デジタル配信. undetected — Windows PC.",
					h1: "ARK Mod Menu",
					intro: "ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。ARK Mod Menu.",
					imageAlt: "ARK Hacks in-game menu controls",
					galleryTitle: "ARK Mod Menu",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK Mod Menu",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。in-client ESP and soft aim toggles.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@arkhacks.com",
							],
						},
					],
				},
				"soft-aim": {
					title: "ARK Soft Aim | Smooth Aim Settings",
					description: "ARK Soft Aim: smooth soft aim settings for Windows PC. 即時デジタル配信. undetected — Windows PC.",
					h1: "ARK Soft Aim",
					intro: "ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。ARK Soft Aim.",
					imageAlt: "ARK soft aim FOV and smoothness settings",
					galleryTitle: "ARK Soft Aim",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ARK Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "ARK Soft Aim",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。smooth soft aim settings for Windows PC.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@arkhacks.com",
							],
						},
					],
				},
				"best-cheats": {
					title: "最強ARKチート | Buyer Checklist",
					description: "最強ARKチート: what to compare before buying ARK hacks. 即時デジタル配信. undetected — Windows PC.",
					h1: "最強ARKチート",
					intro: "ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。最強ARKチート.",
					imageAlt: "ARK Hacks overview for ARK: Survival Ascended on PC",
					galleryTitle: "最強ARKチート",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ARK Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最強ARKチート",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。what to compare before buying ARK hacks.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@arkhacks.com",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "ARK Aimbot Hack | Soft Aim Assist",
					description: "ARK Aimbot Hack: undetected Aimbot hack assist for ARK: Survival Ascended. 即時デジタル配信. undetected — Windows PC.",
					h1: "ARK Aimbot Hack",
					intro: "ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。ARK Aimbot Hack.",
					imageAlt: "ARK aimbot hack controls and bone priority",
					galleryTitle: "ARK Aimbot Hack",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ARK Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "ARK Aimbot Hack",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。undetected Aimbot hack assist for ARK: Survival Ascended.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@arkhacks.com",
							],
						},
					],
				},
				"esp-hack": {
					title: "ARK ESP Hack | Boxes & Loot",
					description: "ARK ESP Hack: ESP hack boxes, loot pins, and distance. 即時デジタル配信. undetected — Windows PC.",
					h1: "ARK ESP Hack",
					intro: "ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。ARK ESP Hack.",
					imageAlt: "ARK ESP hack boxes and loot markers",
					galleryTitle: "ARK ESP Hack",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "ARK Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK ESP Hack",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@arkhacks.com",
							],
						},
					],
				},
				"unlock-all": {
					title: "ARK Unlock All | What It Means",
					description: "ARK Unlock All: unlock-all searches vs real ESP and Aimbot tools. 即時デジタル配信. undetected — Windows PC.",
					h1: "ARK Unlock All",
					intro: "ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。ARK Unlock All.",
					imageAlt: "ARK Hacks license features overview",
					galleryTitle: "ARK Unlock All",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK Unlock All",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@arkhacks.com",
							],
						},
					],
				},
				privacy: {
					title: "プライバシーポリシー | ARK Hacks",
					description: "プライバシーポリシー for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "プライバシーポリシー",
					intro: "ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。プライバシーポリシー for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "利用規約",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "収集する情報",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on arkhacks.com.",
							],
						},
						{
							h2: "情報の利用",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "あなたの権利",
							paragraphs: [
								"サポート・法務: support@arkhacks.com",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				refund: {
					title: "返金ポリシー | ARK Hacks",
					description: "返金ポリシー for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "返金ポリシー",
					intro: "ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。返金ポリシー for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "デジタル配信",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "返金承認",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "申請方法",
							paragraphs: [
								"サポート・法務: support@arkhacks.com",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				terms: {
					title: "利用規約 | ARK Hacks",
					description: "利用規約 for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "利用規約",
					intro: "ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。利用規約 for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "規約への同意",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "リスク",
							paragraphs: [
								"ARK HacksはARK向けWindows PC用ESP wallhack、radar hack、ark aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "変更",
							paragraphs: [
								"サポート・法務: support@arkhacks.com",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
			},
		},
		ko: {
			ui: {
				nav: {
					home: "홈",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "기능",
					pricing: "가격",
					setup: "설치",
					updates: "업데이트",
					faq: "FAQ",
					buyNow: "구매하기",
				},
				hero: {
					accent: "Undetected ARK 치트",
					accentShort: "ARK Hacks",
					subtitle: "ARK Windows PC용 ESP wallhack, radar hack, Aimbot — Easy Anti-Cheat 유지보수 포함.",
					subtitleShort: "ARK PC용 ESP, radar, Aimbot",
					buyNow: "지금 구매",
					seeFeatures: "기능 보기",
				},
				trust: {
					status: "온라인",
					statusNote: "ARK Hacks 패키지는 ARK Windows PC에서 이용 가능합니다.",
					statusShort: "가동 중",
					delivery: "즉시 디지털 배송",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat 유지보수 지원",
					antiCheatShort: "Easy Anti-Cheat 지원",
				},
				product: {
					title: "ARK Hacks",
					addToCart: "장바구니에 추가",
					monthly: "월간",
					lifetime: "평생",
					available: "지금 이용 가능",
					gameBadge: "ARK",
					platformBadge: "Windows PC",
					statusBadge: "Undetected 패키지",
				},
				reviews: {
					title: "플레이어 후기",
					subtitle: "ARK Hacks 구매자 최근 피드백",
					outOf: "/5",
					countLabel: "리뷰",
				},
				common: {
					buyNow: "지금 구매",
					readGuide: "가이드 읽기",
					language: "언어",
					officialLanguageNote: "영어가 공식 언어입니다. 다른 언어는 글로벌 SEO를 위해 번역되었습니다.",
					relatedPages: "관련 페이지",
				},
				footer: {
					explore: "탐색",
					help: "도움말 및 법적",
					tagline: "ARK용 undetected ESP, wallhack, radar, Aimbot — Zadeyo 결제.",
				},
				images: {
					hero: "ARK Hacks hero — ESP and aimbot overlay in ARK: Survival Ascended",
					espWallhack: "Wallhack outlines showing players and wild dinos through walls",
					aimbotCombat: "Soft aim assist overlay during an ARK: Survival Ascended raid",
					squadFight: "ARK Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a ARK raid",
					headerArt: "Aimbot view and bone priority controls for ARK",
					cheatsPackage: "2D radar threat overlay for ARK: Survival Ascended",
					rebootFight: "Aimbot assist during a ARK firefight",
					battleRoyale: "ARK Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base raids in ARK",
				},
			},
			pages: {
				home: {
					title: "ARK Hacks 2026 | ESP, Wallhack, Aimbot",
					description: "ARK: Survival Ascended undetected 치트. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat 유지보수. 즉시 디지털 배송.",
					h1: "ARK Hacks — Undetected ESP, Wallhack, Aimbot",
					intro: "ARK: Survival Ascended Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Easy Anti-Cheat 유지보수 포함.",
					imageAlt: "ARK hacks hero ESP aimbot wallhack",
					galleryTitle: "ARK Hacks 갤러리 — ESP, Aimbot, wallhack",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ARK Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026년 ARK Hacks를 선택하는 이유",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. BR 및 scav-run에서 적 분대 읽기에 이상적.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot 단일 라이선스",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. 별도 도구 대신 단일 라이선스.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
					],
				},
				"ark-esp": {
					title: "ARK ESP | Player Boxes & Wallhack",
					description: "ARK ESP: player boxes, loot markers, and wallhack overlays. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "ARK ESP",
					intro: "ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. ARK ESP.",
					imageAlt: "ARK ESP player boxes and distance readouts in a raid",
					galleryTitle: "ARK ESP",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ARK ESP",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@arkhacks.com",
							],
						},
					],
				},
				"ark-aimbot": {
					title: "ARK Aimbot | Soft Aim Controls",
					description: "ARK Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "ARK Aimbot",
					intro: "ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. ARK Aimbot.",
					imageAlt: "ARK aimbot and soft aim controls on Windows PC",
					galleryTitle: "ARK Aimbot",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "ARK Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK Aimbot",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@arkhacks.com",
							],
						},
					],
				},
				features: {
					title: "기능 | Full Feature List",
					description: "기능: ESP, soft aim, radar controls. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "기능",
					intro: "ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. 기능.",
					imageAlt: "ARK Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "기능",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ARK Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "기능",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. ESP, soft aim, radar controls.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@arkhacks.com",
							],
						},
					],
				},
				pricing: {
					title: "가격 | Monthly & Lifetime",
					description: "가격: $35 monthly or $150 lifetime licenses. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "가격",
					intro: "ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. 가격.",
					imageAlt: "ARK Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "가격",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ARK Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "가격",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@arkhacks.com",
							],
						},
					],
				},
				setup: {
					title: "설치 | PC Setup Guide",
					description: "설치: Windows PC activation and first-launch setup. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "설치",
					intro: "ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. 설치.",
					imageAlt: "ARK Hacks setup guide screenshot for Windows PC",
					galleryTitle: "설치",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "설치",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. Windows PC activation and first-launch setup.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@arkhacks.com",
							],
						},
					],
				},
				updates: {
					title: "업데이트 | Easy Anti-Cheat Maintenance Log",
					description: "업데이트: EAC patch status and rebuild notes. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "업데이트",
					intro: "ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. 업데이트.",
					imageAlt: "ARK Hacks live status after EAC and game patches",
					galleryTitle: "업데이트",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ARK Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "업데이트",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. EAC patch status and rebuild notes.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@arkhacks.com",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "FAQ",
					intro: "ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. FAQ.",
					imageAlt: "ARK Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ARK Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@arkhacks.com",
							],
						},
					],
				},
				support: {
					title: "지원 | Help & Contact",
					description: "지원: order help and license support contact. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "지원",
					intro: "ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. 지원.",
					imageAlt: "ARK Hacks support page for license and setup help",
					galleryTitle: "지원",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ARK Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "지원",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. order help and license support contact.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@arkhacks.com",
							],
						},
					],
				},
				undetected: {
					title: "Undetected 치트 | Easy Anti-Cheat Safe Status",
					description: "Undetected 치트: undetected maintenance after Easy Anti-Cheat patches. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Undetected 치트",
					intro: "ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. Undetected 치트.",
					imageAlt: "ARK Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected 치트",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "ARK Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Undetected 치트",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. undetected maintenance after Easy Anti-Cheat patches.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@arkhacks.com",
							],
						},
					],
				},
				wallhack: {
					title: "ARK Wallhack | ESP Visibility",
					description: "ARK Wallhack: wallhack ESP for players, loot, and distance. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "ARK Wallhack",
					intro: "ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. ARK Wallhack.",
					imageAlt: "ARK wallhack visibility through walls in a raid",
					galleryTitle: "ARK Wallhack",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "ARK Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK Wallhack",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. wallhack ESP for players, loot, and distance.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@arkhacks.com",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. Radar Hack.",
					imageAlt: "ARK 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. 2D radar cues for flanks and rotations.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@arkhacks.com",
							],
						},
					],
				},
				eac: {
					title: "EAC Bypass | Patch Maintenance",
					description: "EAC Bypass: how EAC updates are handled for ARK: Survival Ascended hacks. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "EAC Bypass",
					intro: "ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. EAC Bypass.",
					imageAlt: "ARK Hacks maintenance after a EAC patch",
					galleryTitle: "EAC Bypass",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "ARK Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "EAC Bypass",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. how EAC updates are handled for ARK: Survival Ascended hacks.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@arkhacks.com",
							],
						},
					],
				},
				"cheats-2026": {
					title: "ARK Hacks 2026 | Buyer Guide",
					description: "ARK Hacks 2026: 2026 ARK hacks checklist before checkout. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "ARK Hacks 2026",
					intro: "ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. ARK Hacks 2026.",
					imageAlt: "ARK Hacks product overview for ARK: Survival Ascended",
					galleryTitle: "ARK Hacks 2026",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ARK Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ARK Hacks 2026",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. 2026 ARK hacks checklist before checkout.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@arkhacks.com",
							],
						},
					],
				},
				hacks: {
					title: "ARK Hacks | ESP Aimbot Guide",
					description: "ARK Hacks: the ARK: Survival Ascended hacks pillar for ESP and Aimbot. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "ARK Hacks",
					intro: "ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. ARK Hacks.",
					imageAlt: "ARK Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "ARK Hacks",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ARK Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK Hacks",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. the ARK: Survival Ascended hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@arkhacks.com",
							],
						},
					],
				},
				"cheat-download": {
					title: "ARK Cheat Download | Instant Access",
					description: "ARK Cheat Download: digital license download after payment. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "ARK Cheat Download",
					intro: "ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. ARK Cheat Download.",
					imageAlt: "ARK Hacks download and install delivery flow",
					galleryTitle: "ARK Cheat Download",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ARK Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ARK Cheat Download",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. digital license download after payment.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@arkhacks.com",
							],
						},
					],
				},
				"mod-menu": {
					title: "ARK 모드 메뉴 | In-Game Toggles",
					description: "ARK 모드 메뉴: in-client ESP and soft aim toggles. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "ARK 모드 메뉴",
					intro: "ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. ARK 모드 메뉴.",
					imageAlt: "ARK Hacks in-game menu controls",
					galleryTitle: "ARK 모드 메뉴",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK 모드 메뉴",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. in-client ESP and soft aim toggles.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@arkhacks.com",
							],
						},
					],
				},
				"soft-aim": {
					title: "ARK Soft Aim | Smooth Aim Settings",
					description: "ARK Soft Aim: smooth soft aim settings for Windows PC. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "ARK Soft Aim",
					intro: "ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. ARK Soft Aim.",
					imageAlt: "ARK soft aim FOV and smoothness settings",
					galleryTitle: "ARK Soft Aim",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ARK Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "ARK Soft Aim",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. smooth soft aim settings for Windows PC.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@arkhacks.com",
							],
						},
					],
				},
				"best-cheats": {
					title: "최고의 ARK 치트 | Buyer Checklist",
					description: "최고의 ARK 치트: what to compare before buying ARK hacks. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "최고의 ARK 치트",
					intro: "ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. 최고의 ARK 치트.",
					imageAlt: "ARK Hacks overview for ARK: Survival Ascended on PC",
					galleryTitle: "최고의 ARK 치트",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ARK Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "최고의 ARK 치트",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. what to compare before buying ARK hacks.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@arkhacks.com",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "ARK 에임봇 핵 | Soft Aim Assist",
					description: "ARK 에임봇 핵: undetected Aimbot hack assist for ARK: Survival Ascended. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "ARK 에임봇 핵",
					intro: "ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. ARK 에임봇 핵.",
					imageAlt: "ARK aimbot hack controls and bone priority",
					galleryTitle: "ARK 에임봇 핵",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ARK Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "ARK 에임봇 핵",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. undetected Aimbot hack assist for ARK: Survival Ascended.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@arkhacks.com",
							],
						},
					],
				},
				"esp-hack": {
					title: "ARK ESP 핵 | Boxes & Loot",
					description: "ARK ESP 핵: ESP hack boxes, loot pins, and distance. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "ARK ESP 핵",
					intro: "ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. ARK ESP 핵.",
					imageAlt: "ARK ESP hack boxes and loot markers",
					galleryTitle: "ARK ESP 핵",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "ARK Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK ESP 핵",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@arkhacks.com",
							],
						},
					],
				},
				"unlock-all": {
					title: "ARK Unlock All | What It Means",
					description: "ARK Unlock All: unlock-all searches vs real ESP and Aimbot tools. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "ARK Unlock All",
					intro: "ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. ARK Unlock All.",
					imageAlt: "ARK Hacks license features overview",
					galleryTitle: "ARK Unlock All",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK Unlock All",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@arkhacks.com",
							],
						},
					],
				},
				privacy: {
					title: "개인정보 처리방침 | ARK Hacks",
					description: "개인정보 처리방침 for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "개인정보 처리방침",
					intro: "ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. 개인정보 처리방침 for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on arkhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"지원 및 법무: support@arkhacks.com",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				refund: {
					title: "환불 정책 | ARK Hacks",
					description: "환불 정책 for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "환불 정책",
					intro: "ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. 환불 정책 for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"지원 및 법무: support@arkhacks.com",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				terms: {
					title: "이용 약관 | ARK Hacks",
					description: "이용 약관 for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "이용 약관",
					intro: "ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. 이용 약관 for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"ARK Hacks는 ARK Windows PC용 ESP wallhack, radar hack, ark aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"지원 및 법무: support@arkhacks.com",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
			},
		},
		zh: {
			ui: {
				nav: {
					home: "首页",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "功能",
					pricing: "价格",
					setup: "安装",
					updates: "更新",
					faq: "常见问题",
					buyNow: "立即购买",
				},
				hero: {
					accent: "Undetected ARK作弊",
					accentShort: "ARK Hacks",
					subtitle: "适用于ARK Windows PC的ESP wallhack、radar hack和Aimbot — 含Easy Anti-Cheat维护。",
					subtitleShort: "ARK PC版ESP、radar与Aimbot",
					buyNow: "立即购买",
					seeFeatures: "查看功能",
				},
				trust: {
					status: "在线",
					statusNote: "ARK Hacks套餐已在ARK Windows PC上线。",
					statusShort: "运行中",
					delivery: "即时数字交付",
					platform: "Windows 10 和 11",
					antiCheat: "支持Easy Anti-Cheat维护",
					antiCheatShort: "Easy Anti-Cheat支持",
				},
				product: {
					title: "ARK Hacks",
					addToCart: "加入购物车",
					monthly: "月付",
					lifetime: "终身",
					available: "现已可用",
					gameBadge: "ARK",
					platformBadge: "Windows PC",
					statusBadge: "Undetected套餐",
				},
				reviews: {
					title: "玩家评价",
					subtitle: "ARK Hacks 买家近期反馈",
					outOf: "/5",
					countLabel: "条评价",
				},
				common: {
					buyNow: "立即购买",
					readGuide: "阅读指南",
					language: "语言",
					officialLanguageNote: "英语为官方语言。其他语言为全球SEO翻译版本。",
					relatedPages: "相关页面",
				},
				footer: {
					explore: "探索",
					help: "帮助与法律",
					tagline: "ARK undetected ESP、wallhack、radar与Aimbot — 通过Zadeyo结账。",
				},
				images: {
					hero: "ARK Hacks hero — ESP and aimbot overlay in ARK: Survival Ascended",
					espWallhack: "Wallhack outlines showing players and wild dinos through walls",
					aimbotCombat: "Soft aim assist overlay during an ARK: Survival Ascended raid",
					squadFight: "ARK Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a ARK raid",
					headerArt: "Aimbot view and bone priority controls for ARK",
					cheatsPackage: "2D radar threat overlay for ARK: Survival Ascended",
					rebootFight: "Aimbot assist during a ARK firefight",
					battleRoyale: "ARK Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base raids in ARK",
				},
			},
			pages: {
				home: {
					title: "ARK Hacks 2026 | ESP、Wallhack、Aimbot",
					description: "ARK: Survival Ascended undetected作弊。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheat维护。即时数字交付。",
					h1: "ARK Hacks — Undetected ESP、Wallhack、Aimbot",
					intro: "ARK: Survival Ascended Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Easy Anti-Cheat维护。",
					imageAlt: "ARK hacks hero ESP aimbot wallhack",
					galleryTitle: "ARK Hacks图库 — ESP、Aimbot、wallhack",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "购买 ARK Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年选择ARK Hacks的原因",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。适合在BR和scav-run中读取敌方小队。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbot单一许可证",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。一个许可证而非多个工具。",
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
					],
				},
				"ark-esp": {
					title: "ARK ESP | Player Boxes & Wallhack",
					description: "ARK ESP: player boxes, loot markers, and wallhack overlays. 即时数字交付. undetected — Windows PC.",
					h1: "ARK ESP",
					intro: "ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。ARK ESP.",
					imageAlt: "ARK ESP player boxes and distance readouts in a raid",
					galleryTitle: "ARK ESP",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "购买 ARK Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ARK ESP",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。player boxes, loot markers, and wallhack overlays.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@arkhacks.com",
							],
						},
					],
				},
				"ark-aimbot": {
					title: "ARK Aimbot | Soft Aim Controls",
					description: "ARK Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 即时数字交付. undetected — Windows PC.",
					h1: "ARK Aimbot",
					intro: "ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。ARK Aimbot.",
					imageAlt: "ARK aimbot and soft aim controls on Windows PC",
					galleryTitle: "ARK Aimbot",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "购买 ARK Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK Aimbot",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。soft aim, FOV, and per-weapon Aimbot profiles.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@arkhacks.com",
							],
						},
					],
				},
				features: {
					title: "功能 | Full Feature List",
					description: "功能: ESP, soft aim, radar controls. 即时数字交付. undetected — Windows PC.",
					h1: "功能",
					intro: "ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。功能.",
					imageAlt: "ARK Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "功能",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "购买 ARK Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "功能",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。ESP, soft aim, radar controls.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@arkhacks.com",
							],
						},
					],
				},
				pricing: {
					title: "价格 | Monthly & Lifetime",
					description: "价格: $35 monthly or $150 lifetime licenses. 即时数字交付. undetected — Windows PC.",
					h1: "价格",
					intro: "ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。价格.",
					imageAlt: "ARK Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "价格",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "购买 ARK Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "价格",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。$35 monthly or $150 lifetime licenses.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@arkhacks.com",
							],
						},
					],
				},
				setup: {
					title: "安装 | PC Setup Guide",
					description: "安装: Windows PC activation and first-launch setup. 即时数字交付. undetected — Windows PC.",
					h1: "安装",
					intro: "ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。安装.",
					imageAlt: "ARK Hacks setup guide screenshot for Windows PC",
					galleryTitle: "安装",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "购买 ARK Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "安装",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。Windows PC activation and first-launch setup.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@arkhacks.com",
							],
						},
					],
				},
				updates: {
					title: "更新 | Easy Anti-Cheat Maintenance Log",
					description: "更新: EAC patch status and rebuild notes. 即时数字交付. undetected — Windows PC.",
					h1: "更新",
					intro: "ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。更新.",
					imageAlt: "ARK Hacks live status after EAC and game patches",
					galleryTitle: "更新",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "购买 ARK Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。EAC patch status and rebuild notes.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@arkhacks.com",
							],
						},
					],
				},
				faq: {
					title: "常见问题 | Common Answers",
					description: "常见问题: ESP, soft aim, delivery, and Easy Anti-Cheat questions. 即时数字交付. undetected — Windows PC.",
					h1: "常见问题",
					intro: "ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。常见问题.",
					imageAlt: "ARK Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "常见问题",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "购买 ARK Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "常见问题",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@arkhacks.com",
							],
						},
					],
				},
				support: {
					title: "支持 | Help & Contact",
					description: "支持: order help and license support contact. 即时数字交付. undetected — Windows PC.",
					h1: "支持",
					intro: "ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。支持.",
					imageAlt: "ARK Hacks support page for license and setup help",
					galleryTitle: "支持",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "购买 ARK Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "支持",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。order help and license support contact.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@arkhacks.com",
							],
						},
					],
				},
				undetected: {
					title: "Undetected作弊 | Easy Anti-Cheat Safe Status",
					description: "Undetected作弊: undetected maintenance after Easy Anti-Cheat patches. 即时数字交付. undetected — Windows PC.",
					h1: "Undetected作弊",
					intro: "ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。Undetected作弊.",
					imageAlt: "ARK Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected作弊",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "购买 ARK Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Undetected作弊",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。undetected maintenance after Easy Anti-Cheat patches.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@arkhacks.com",
							],
						},
					],
				},
				wallhack: {
					title: "ARK Wallhack | ESP Visibility",
					description: "ARK Wallhack: wallhack ESP for players, loot, and distance. 即时数字交付. undetected — Windows PC.",
					h1: "ARK Wallhack",
					intro: "ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。ARK Wallhack.",
					imageAlt: "ARK wallhack visibility through walls in a raid",
					galleryTitle: "ARK Wallhack",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "购买 ARK Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK Wallhack",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。wallhack ESP for players, loot, and distance.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@arkhacks.com",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. 即时数字交付. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。Radar Hack.",
					imageAlt: "ARK 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "购买 ARK Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。2D radar cues for flanks and rotations.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@arkhacks.com",
							],
						},
					],
				},
				eac: {
					title: "EAC Bypass | Patch Maintenance",
					description: "EAC Bypass: how EAC updates are handled for ARK: Survival Ascended hacks. 即时数字交付. undetected — Windows PC.",
					h1: "EAC Bypass",
					intro: "ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。EAC Bypass.",
					imageAlt: "ARK Hacks maintenance after a EAC patch",
					galleryTitle: "EAC Bypass",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "购买 ARK Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "EAC Bypass",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。how EAC updates are handled for ARK: Survival Ascended hacks.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@arkhacks.com",
							],
						},
					],
				},
				"cheats-2026": {
					title: "ARK作弊 2026 | Buyer Guide",
					description: "ARK作弊 2026: 2026 ARK hacks checklist before checkout. 即时数字交付. undetected — Windows PC.",
					h1: "ARK作弊 2026",
					intro: "ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。ARK作弊 2026.",
					imageAlt: "ARK Hacks product overview for ARK: Survival Ascended",
					galleryTitle: "ARK作弊 2026",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "购买 ARK Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ARK作弊 2026",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。2026 ARK hacks checklist before checkout.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@arkhacks.com",
							],
						},
					],
				},
				hacks: {
					title: "ARK作弊 | ESP Aimbot Guide",
					description: "ARK作弊: the ARK: Survival Ascended hacks pillar for ESP and Aimbot. 即时数字交付. undetected — Windows PC.",
					h1: "ARK作弊",
					intro: "ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。ARK作弊.",
					imageAlt: "ARK Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "ARK作弊",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "购买 ARK Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK作弊",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。the ARK: Survival Ascended hacks pillar for ESP and Aimbot.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@arkhacks.com",
							],
						},
					],
				},
				"cheat-download": {
					title: "ARK作弊下载 | Instant Access",
					description: "ARK作弊下载: digital license download after payment. 即时数字交付. undetected — Windows PC.",
					h1: "ARK作弊下载",
					intro: "ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。ARK作弊下载.",
					imageAlt: "ARK Hacks download and install delivery flow",
					galleryTitle: "ARK作弊下载",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "购买 ARK Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ARK作弊下载",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。digital license download after payment.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@arkhacks.com",
							],
						},
					],
				},
				"mod-menu": {
					title: "ARK修改菜单 | In-Game Toggles",
					description: "ARK修改菜单: in-client ESP and soft aim toggles. 即时数字交付. undetected — Windows PC.",
					h1: "ARK修改菜单",
					intro: "ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。ARK修改菜单.",
					imageAlt: "ARK Hacks in-game menu controls",
					galleryTitle: "ARK修改菜单",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "购买 ARK Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK修改菜单",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。in-client ESP and soft aim toggles.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@arkhacks.com",
							],
						},
					],
				},
				"soft-aim": {
					title: "ARK Soft Aim | Smooth Aim Settings",
					description: "ARK Soft Aim: smooth soft aim settings for Windows PC. 即时数字交付. undetected — Windows PC.",
					h1: "ARK Soft Aim",
					intro: "ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。ARK Soft Aim.",
					imageAlt: "ARK soft aim FOV and smoothness settings",
					galleryTitle: "ARK Soft Aim",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "购买 ARK Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "ARK Soft Aim",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。smooth soft aim settings for Windows PC.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@arkhacks.com",
							],
						},
					],
				},
				"best-cheats": {
					title: "最佳ARK作弊 | Buyer Checklist",
					description: "最佳ARK作弊: what to compare before buying ARK hacks. 即时数字交付. undetected — Windows PC.",
					h1: "最佳ARK作弊",
					intro: "ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。最佳ARK作弊.",
					imageAlt: "ARK Hacks overview for ARK: Survival Ascended on PC",
					galleryTitle: "最佳ARK作弊",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "购买 ARK Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最佳ARK作弊",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。what to compare before buying ARK hacks.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@arkhacks.com",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "ARK自瞄外挂 | Soft Aim Assist",
					description: "ARK自瞄外挂: undetected Aimbot hack assist for ARK: Survival Ascended. 即时数字交付. undetected — Windows PC.",
					h1: "ARK自瞄外挂",
					intro: "ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。ARK自瞄外挂.",
					imageAlt: "ARK aimbot hack controls and bone priority",
					galleryTitle: "ARK自瞄外挂",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "购买 ARK Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "ARK自瞄外挂",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。undetected Aimbot hack assist for ARK: Survival Ascended.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@arkhacks.com",
							],
						},
					],
				},
				"esp-hack": {
					title: "ARK ESP外挂 | Boxes & Loot",
					description: "ARK ESP外挂: ESP hack boxes, loot pins, and distance. 即时数字交付. undetected — Windows PC.",
					h1: "ARK ESP外挂",
					intro: "ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。ARK ESP外挂.",
					imageAlt: "ARK ESP hack boxes and loot markers",
					galleryTitle: "ARK ESP外挂",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "购买 ARK Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK ESP外挂",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。ESP hack boxes, loot pins, and distance.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@arkhacks.com",
							],
						},
					],
				},
				"unlock-all": {
					title: "ARK Unlock All | What It Means",
					description: "ARK Unlock All: unlock-all searches vs real ESP and Aimbot tools. 即时数字交付. undetected — Windows PC.",
					h1: "ARK Unlock All",
					intro: "ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。ARK Unlock All.",
					imageAlt: "ARK Hacks license features overview",
					galleryTitle: "ARK Unlock All",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "购买 ARK Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK Unlock All",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。unlock-all searches vs real ESP and Aimbot tools.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@arkhacks.com",
							],
						},
					],
				},
				privacy: {
					title: "隐私政策 | ARK Hacks",
					description: "隐私政策 for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "隐私政策",
					intro: "ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。隐私政策 for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on arkhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"支持与法务：support@arkhacks.com",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				refund: {
					title: "退款政策 | ARK Hacks",
					description: "退款政策 for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "退款政策",
					intro: "ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。退款政策 for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。Contact email, Zadeyo order references, and basic site security data.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"支持与法务：support@arkhacks.com",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				terms: {
					title: "使用条款 | ARK Hacks",
					description: "使用条款 for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "使用条款",
					intro: "ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。使用条款 for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。Contact email, Zadeyo order references, and basic site security data.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"ARK Hacks为ARKWindows PC提供ESP wallhack、radar hack和ark aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"支持与法务：support@arkhacks.com",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
			},
		},
		hi: {
			ui: {
				nav: {
					home: "होम",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "फ़ीचर्स",
					pricing: "कीमत",
					setup: "सेटअप",
					updates: "अपडेट",
					faq: "FAQ",
					buyNow: "अभी खरीदें",
				},
				hero: {
					accent: "Undetected ARK hacks",
					accentShort: "ARK Hacks",
					subtitle: "ARK Windows PC के लिए ESP wallhack, radar hack और Aimbot — EAC maintenance शामिल।",
					subtitleShort: "ARK PC के लिए ESP, radar और Aimbot",
					buyNow: "अभी खरीदें",
					seeFeatures: "फ़ीचर्स देखें",
				},
				trust: {
					status: "ऑनलाइन",
					statusNote: "ARK Hacks पैकेज ARK Windows PC के लिए सक्रिय है।",
					statusShort: "सक्रिय",
					delivery: "तुरंत डिजिटल डिलीवरी",
					platform: "Windows 10 और 11",
					antiCheat: "EAC maintenance समर्थित",
					antiCheatShort: "Easy Anti-Cheat समर्थित",
				},
				product: {
					title: "ARK Hacks",
					addToCart: "कार्ट में जोड़ें",
					monthly: "मासिक",
					lifetime: "लाइफ़टाइम",
					available: "अभी उपलब्ध",
					gameBadge: "ARK",
					platformBadge: "Windows PC",
					statusBadge: "Undetected पैकेज",
				},
				reviews: {
					title: "खिलाड़ी क्या कहते हैं",
					subtitle: "ARK Hacks खरीदारों की हाल की प्रतिक्रिया",
					outOf: "/5",
					countLabel: "समीक्षाएँ",
				},
				common: {
					buyNow: "अभी खरीदें",
					readGuide: "गाइड पढ़ें",
					language: "भाषा",
					officialLanguageNote: "अंग्रेज़ी आधिकारिक भाषा है। अन्य भाषाएँ वैश्विक SEO के लिए अनुवादित हैं।",
					relatedPages: "संबंधित पेज",
				},
				footer: {
					explore: "एक्सप्लोर",
					help: "सहायता और कानूनी",
					tagline: "ARK के लिए undetected ESP, wallhack, radar और Aimbot — Zadeyo checkout।",
				},
				images: {
					hero: "ARK Hacks hero — ESP and aimbot overlay in ARK: Survival Ascended",
					espWallhack: "Wallhack outlines showing players and wild dinos through walls",
					aimbotCombat: "Soft aim assist overlay during an ARK: Survival Ascended raid",
					squadFight: "ARK Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a ARK raid",
					headerArt: "Aimbot view and bone priority controls for ARK",
					cheatsPackage: "2D radar threat overlay for ARK: Survival Ascended",
					rebootFight: "Aimbot assist during a ARK firefight",
					battleRoyale: "ARK Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base raids in ARK",
				},
			},
			pages: {
				home: {
					title: "ARK Hacks 2026 | ESP, Wallhack और Aimbot",
					description: "ARK: Survival Ascended undetected cheats. ESP wallhack, radar hack, Aimbot, EAC maintenance. Instant digital delivery.",
					h1: "ARK Hacks — Undetected ESP, Wallhack और Aimbot",
					intro: "ARK: Survival Ascended Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, EAC maintenance सहित.",
					imageAlt: "ARK hacks hero ESP aimbot wallhack",
					galleryTitle: "ARK Hacks gallery — ESP, Aimbot, wallhack",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ARK Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026 में ARK Hacks क्यों",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। BR और scav-run में दुश्मन squad पढ़ने के लिए आदर्श.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot एक लाइसेंस में",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। अलग टूल्स के बजाय एक लाइसेंस.",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
					],
				},
				"ark-esp": {
					title: "ARK ESP | Player Boxes & Wallhack",
					description: "ARK ESP: player boxes, loot markers, and wallhack overlays. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "ARK ESP",
					intro: "ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। ARK ESP.",
					imageAlt: "ARK ESP player boxes and distance readouts in a raid",
					galleryTitle: "ARK ESP",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ARK ESP",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@arkhacks.com",
							],
						},
					],
				},
				"ark-aimbot": {
					title: "ARK Aimbot | Soft Aim Controls",
					description: "ARK Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "ARK Aimbot",
					intro: "ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। ARK Aimbot.",
					imageAlt: "ARK aimbot and soft aim controls on Windows PC",
					galleryTitle: "ARK Aimbot",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "ARK Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK Aimbot",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@arkhacks.com",
							],
						},
					],
				},
				features: {
					title: "फ़ीचर्स | Full Feature List",
					description: "फ़ीचर्स: ESP, soft aim, radar controls. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "फ़ीचर्स",
					intro: "ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। फ़ीचर्स.",
					imageAlt: "ARK Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "फ़ीचर्स",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ARK Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "फ़ीचर्स",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। ESP, soft aim, radar controls.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@arkhacks.com",
							],
						},
					],
				},
				pricing: {
					title: "कीमत | Monthly & Lifetime",
					description: "कीमत: $35 monthly or $150 lifetime licenses. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "कीमत",
					intro: "ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। कीमत.",
					imageAlt: "ARK Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "कीमत",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ARK Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "कीमत",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@arkhacks.com",
							],
						},
					],
				},
				setup: {
					title: "सेटअप | PC Setup Guide",
					description: "सेटअप: Windows PC activation and first-launch setup. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सेटअप",
					intro: "ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। सेटअप.",
					imageAlt: "ARK Hacks setup guide screenshot for Windows PC",
					galleryTitle: "सेटअप",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "सेटअप",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। Windows PC activation and first-launch setup.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@arkhacks.com",
							],
						},
					],
				},
				updates: {
					title: "अपडेट | Easy Anti-Cheat Maintenance Log",
					description: "अपडेट: EAC patch status and rebuild notes. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "अपडेट",
					intro: "ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। अपडेट.",
					imageAlt: "ARK Hacks live status after EAC and game patches",
					galleryTitle: "अपडेट",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ARK Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "अपडेट",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। EAC patch status and rebuild notes.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@arkhacks.com",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "FAQ",
					intro: "ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। FAQ.",
					imageAlt: "ARK Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ARK Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@arkhacks.com",
							],
						},
					],
				},
				support: {
					title: "सहायता | Help & Contact",
					description: "सहायता: order help and license support contact. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सहायता",
					intro: "ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। सहायता.",
					imageAlt: "ARK Hacks support page for license and setup help",
					galleryTitle: "सहायता",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ARK Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "सहायता",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। order help and license support contact.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@arkhacks.com",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | Easy Anti-Cheat Safe Status",
					description: "Undetected cheats: undetected maintenance after Easy Anti-Cheat patches. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। Undetected cheats.",
					imageAlt: "ARK Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "ARK Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। undetected maintenance after Easy Anti-Cheat patches.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@arkhacks.com",
							],
						},
					],
				},
				wallhack: {
					title: "ARK Wallhack | ESP Visibility",
					description: "ARK Wallhack: wallhack ESP for players, loot, and distance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "ARK Wallhack",
					intro: "ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। ARK Wallhack.",
					imageAlt: "ARK wallhack visibility through walls in a raid",
					galleryTitle: "ARK Wallhack",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "ARK Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK Wallhack",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। wallhack ESP for players, loot, and distance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@arkhacks.com",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। Radar Hack.",
					imageAlt: "ARK 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। 2D radar cues for flanks and rotations.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@arkhacks.com",
							],
						},
					],
				},
				eac: {
					title: "EAC Bypass | Patch Maintenance",
					description: "EAC Bypass: how EAC updates are handled for ARK: Survival Ascended hacks. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "EAC Bypass",
					intro: "ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। EAC Bypass.",
					imageAlt: "ARK Hacks maintenance after a EAC patch",
					galleryTitle: "EAC Bypass",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "ARK Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "EAC Bypass",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। how EAC updates are handled for ARK: Survival Ascended hacks.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@arkhacks.com",
							],
						},
					],
				},
				"cheats-2026": {
					title: "ARK Hacks 2026 | Buyer Guide",
					description: "ARK Hacks 2026: 2026 ARK hacks checklist before checkout. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "ARK Hacks 2026",
					intro: "ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। ARK Hacks 2026.",
					imageAlt: "ARK Hacks product overview for ARK: Survival Ascended",
					galleryTitle: "ARK Hacks 2026",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ARK Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ARK Hacks 2026",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। 2026 ARK hacks checklist before checkout.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@arkhacks.com",
							],
						},
					],
				},
				hacks: {
					title: "ARK Hacks | ESP Aimbot Guide",
					description: "ARK Hacks: the ARK: Survival Ascended hacks pillar for ESP and Aimbot. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "ARK Hacks",
					intro: "ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। ARK Hacks.",
					imageAlt: "ARK Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "ARK Hacks",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ARK Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK Hacks",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। the ARK: Survival Ascended hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@arkhacks.com",
							],
						},
					],
				},
				"cheat-download": {
					title: "ARK Cheat Download | Instant Access",
					description: "ARK Cheat Download: digital license download after payment. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "ARK Cheat Download",
					intro: "ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। ARK Cheat Download.",
					imageAlt: "ARK Hacks download and install delivery flow",
					galleryTitle: "ARK Cheat Download",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ARK Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ARK Cheat Download",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। digital license download after payment.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@arkhacks.com",
							],
						},
					],
				},
				"mod-menu": {
					title: "ARK Mod Menu | In-Game Toggles",
					description: "ARK Mod Menu: in-client ESP and soft aim toggles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "ARK Mod Menu",
					intro: "ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। ARK Mod Menu.",
					imageAlt: "ARK Hacks in-game menu controls",
					galleryTitle: "ARK Mod Menu",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK Mod Menu",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। in-client ESP and soft aim toggles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@arkhacks.com",
							],
						},
					],
				},
				"soft-aim": {
					title: "ARK Soft Aim | Smooth Aim Settings",
					description: "ARK Soft Aim: smooth soft aim settings for Windows PC. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "ARK Soft Aim",
					intro: "ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। ARK Soft Aim.",
					imageAlt: "ARK soft aim FOV and smoothness settings",
					galleryTitle: "ARK Soft Aim",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ARK Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "ARK Soft Aim",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। smooth soft aim settings for Windows PC.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@arkhacks.com",
							],
						},
					],
				},
				"best-cheats": {
					title: "सर्वश्रेष्ठ ARK Hacks | Buyer Checklist",
					description: "सर्वश्रेष्ठ ARK Hacks: what to compare before buying ARK hacks. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सर्वश्रेष्ठ ARK Hacks",
					intro: "ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। सर्वश्रेष्ठ ARK Hacks.",
					imageAlt: "ARK Hacks overview for ARK: Survival Ascended on PC",
					galleryTitle: "सर्वश्रेष्ठ ARK Hacks",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ARK Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "सर्वश्रेष्ठ ARK Hacks",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। what to compare before buying ARK hacks.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@arkhacks.com",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "ARK Aimbot Hack | Soft Aim Assist",
					description: "ARK Aimbot Hack: undetected Aimbot hack assist for ARK: Survival Ascended. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "ARK Aimbot Hack",
					intro: "ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। ARK Aimbot Hack.",
					imageAlt: "ARK aimbot hack controls and bone priority",
					galleryTitle: "ARK Aimbot Hack",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ARK Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "ARK Aimbot Hack",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। undetected Aimbot hack assist for ARK: Survival Ascended.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@arkhacks.com",
							],
						},
					],
				},
				"esp-hack": {
					title: "ARK ESP Hack | Boxes & Loot",
					description: "ARK ESP Hack: ESP hack boxes, loot pins, and distance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "ARK ESP Hack",
					intro: "ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। ARK ESP Hack.",
					imageAlt: "ARK ESP hack boxes and loot markers",
					galleryTitle: "ARK ESP Hack",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "ARK Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK ESP Hack",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@arkhacks.com",
							],
						},
					],
				},
				"unlock-all": {
					title: "ARK Unlock All | What It Means",
					description: "ARK Unlock All: unlock-all searches vs real ESP and Aimbot tools. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "ARK Unlock All",
					intro: "ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। ARK Unlock All.",
					imageAlt: "ARK Hacks license features overview",
					galleryTitle: "ARK Unlock All",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ARK Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK Unlock All",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@arkhacks.com",
							],
						},
					],
				},
				privacy: {
					title: "गोपनीयता नीति | ARK Hacks",
					description: "गोपनीयता नीति for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "गोपनीयता नीति",
					intro: "ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। गोपनीयता नीति for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on arkhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"सहायता: support@arkhacks.com",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				refund: {
					title: "रिफंड नीति | ARK Hacks",
					description: "रिफंड नीति for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "रिफंड नीति",
					intro: "ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। रिफंड नीति for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"सहायता: support@arkhacks.com",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				terms: {
					title: "उपयोग की शर्तें | ARK Hacks",
					description: "उपयोग की शर्तें for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "उपयोग की शर्तें",
					intro: "ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। उपयोग की शर्तें for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"ARK Hacks ARK के लिए Windows PC पर ESP wallhack, radar hack और ark aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"सहायता: support@arkhacks.com",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
			},
		},
		id: {
			ui: {
				nav: {
					home: "Beranda",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fitur",
					pricing: "Harga",
					setup: "Setup",
					updates: "Pembaruan",
					faq: "FAQ",
					buyNow: "Beli sekarang",
				},
				hero: {
					accent: "Cheat ARK undetected",
					accentShort: "ARK Hacks",
					subtitle: "ESP wallhack, radar hack, dan Aimbot untuk ARK di PC Windows — pemeliharaan Easy Anti-Cheat termasuk.",
					subtitleShort: "ESP, radar & Aimbot untuk ARK PC",
					buyNow: "Beli sekarang",
					seeFeatures: "Lihat fitur",
				},
				trust: {
					status: "Online",
					statusNote: "Paket ARK Hacks aktif untuk ARK di PC Windows.",
					statusShort: "Aktif",
					delivery: "Pengiriman digital instan",
					platform: "Windows 10 & 11",
					antiCheat: "Pemeliharaan Easy Anti-Cheat didukung",
					antiCheatShort: "Easy Anti-Cheat didukung",
				},
				product: {
					title: "ARK Hacks",
					addToCart: "Tambah ke keranjang",
					monthly: "Bulanan",
					lifetime: "Seumur hidup",
					available: "Tersedia sekarang",
					gameBadge: "ARK",
					platformBadge: "Windows PC",
					statusBadge: "Paket undetected",
				},
				reviews: {
					title: "Apa kata pemain",
					subtitle: "Umpan balik terbaru dari pembeli ARK Hacks",
					outOf: "dari 5",
					countLabel: "ulasan",
				},
				common: {
					buyNow: "Beli sekarang",
					readGuide: "Baca panduan",
					language: "Bahasa",
					officialLanguageNote: "Bahasa Inggris adalah bahasa resmi. Bahasa lain diterjemahkan untuk SEO global.",
					relatedPages: "Halaman terkait",
				},
				footer: {
					explore: "Jelajahi",
					help: "Bantuan & legal",
					tagline: "ESP, wallhack, radar, dan Aimbot undetected untuk ARK — checkout via Zadeyo.",
				},
				images: {
					hero: "ARK Hacks hero — ESP and aimbot overlay in ARK: Survival Ascended",
					espWallhack: "Wallhack outlines showing players and wild dinos through walls",
					aimbotCombat: "Soft aim assist overlay during an ARK: Survival Ascended raid",
					squadFight: "ARK Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a ARK raid",
					headerArt: "Aimbot view and bone priority controls for ARK",
					cheatsPackage: "2D radar threat overlay for ARK: Survival Ascended",
					rebootFight: "Aimbot assist during a ARK firefight",
					battleRoyale: "ARK Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base raids in ARK",
				},
			},
			pages: {
				home: {
					title: "ARK Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat ARK: Survival Ascended undetected untuk ARK: Survival Ascended di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Easy Anti-Cheat. Pengiriman digital",
					h1: "ARK Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Paket undetected ARK: Survival Ascended di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Easy Anti-Cheat.",
					imageAlt: "ARK ESP player tags hack",
					galleryTitle: "Galeri ARK Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Beli ARK Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mengapa ARK Hacks di 2026",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Ideal membaca squad musuh di BR dan scav-run.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot dalam satu lisensi",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Satu lisensi alih-alih alat terpisah.",
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
					],
				},
				"ark-esp": {
					title: "ESP ARK | Player Boxes & Wallhack",
					description: "ESP ARK: player boxes, loot markers, and wallhack overlays. pengiriman digital instan. undetected — PC Windows.",
					h1: "ESP ARK",
					intro: "ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. ESP ARK.",
					imageAlt: "ARK ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Beli ARK Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ESP ARK",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. player boxes, loot markers, and wallhack overlays.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@arkhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"ark-aimbot": {
					title: "Aimbot ARK | Soft Aim Controls",
					description: "Aimbot ARK: soft aim, FOV, and per-weapon Aimbot profiles. pengiriman digital instan. undetected — PC Windows.",
					h1: "Aimbot ARK",
					intro: "ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Aimbot ARK.",
					imageAlt: "ARK aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot ARK",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Beli ARK Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Aimbot ARK",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@arkhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				features: {
					title: "Fitur | Full Feature List",
					description: "Fitur: ESP, soft aim, radar controls. pengiriman digital instan. undetected — PC Windows.",
					h1: "Fitur",
					intro: "ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Fitur.",
					imageAlt: "ARK Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fitur",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Beli ARK Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fitur",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. ESP, soft aim, radar controls.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@arkhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				pricing: {
					title: "Harga | Monthly & Lifetime",
					description: "Harga: $35 monthly or $150 lifetime licenses. pengiriman digital instan. undetected — PC Windows.",
					h1: "Harga",
					intro: "ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Harga.",
					imageAlt: "ARK Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Harga",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Beli ARK Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Harga",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. $35 monthly or $150 lifetime licenses.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@arkhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: Windows PC activation and first-launch setup. pengiriman digital instan. undetected — PC Windows.",
					h1: "Setup",
					intro: "ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Setup.",
					imageAlt: "ARK Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Beli ARK Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Windows PC activation and first-launch setup.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@arkhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				updates: {
					title: "Pembaruan | Easy Anti-Cheat Maintenance Log",
					description: "Pembaruan: EAC patch status and rebuild notes. pengiriman digital instan. undetected — PC Windows.",
					h1: "Pembaruan",
					intro: "ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Pembaruan.",
					imageAlt: "ARK Hacks live status after EAC and game patches",
					galleryTitle: "Pembaruan",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Beli ARK Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Pembaruan",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. EAC patch status and rebuild notes.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@arkhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. pengiriman digital instan. undetected — PC Windows.",
					h1: "FAQ",
					intro: "ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. FAQ.",
					imageAlt: "ARK Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Beli ARK Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@arkhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				support: {
					title: "Dukungan | Help & Contact",
					description: "Dukungan: order help and license support contact. pengiriman digital instan. undetected — PC Windows.",
					h1: "Dukungan",
					intro: "ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Dukungan.",
					imageAlt: "ARK Hacks support page for license and setup help",
					galleryTitle: "Dukungan",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Beli ARK Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Dukungan",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. order help and license support contact.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@arkhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | Easy Anti-Cheat Safe Status",
					description: "Cheat undetected: undetected maintenance after Easy Anti-Cheat patches. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Cheat undetected.",
					imageAlt: "ARK Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Beli ARK Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@arkhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack ARK | ESP Visibility",
					description: "Wallhack ARK: wallhack ESP for players, loot, and distance. pengiriman digital instan. undetected — PC Windows.",
					h1: "Wallhack ARK",
					intro: "ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Wallhack ARK.",
					imageAlt: "ARK wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack ARK",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Beli ARK Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Wallhack ARK",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. wallhack ESP for players, loot, and distance.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@arkhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. pengiriman digital instan. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Radar hack.",
					imageAlt: "ARK 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Beli ARK Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. 2D radar cues for flanks and rotations.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@arkhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how EAC updates are handled for ARK: Survival Ascended hacks. pengiriman digital instan. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "ARK Hacks maintenance after a EAC patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Beli ARK Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. how EAC updates are handled for ARK: Survival Ascended hacks.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@arkhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat ARK 2026 | Buyer Guide",
					description: "Cheat ARK 2026: 2026 ARK hacks checklist before checkout. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat ARK 2026",
					intro: "ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Cheat ARK 2026.",
					imageAlt: "ARK Hacks product overview for ARK: Survival Ascended",
					galleryTitle: "Cheat ARK 2026",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Beli ARK Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Cheat ARK 2026",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. 2026 ARK hacks checklist before checkout.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@arkhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat ARK | ESP Aimbot Guide",
					description: "Cheat ARK: the ARK: Survival Ascended hacks pillar for ESP and Aimbot. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat ARK",
					intro: "ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Cheat ARK.",
					imageAlt: "ARK Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat ARK",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Beli ARK Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat ARK",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. the ARK: Survival Ascended hacks pillar for ESP and Aimbot.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@arkhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Cheat ARK | Instant Access",
					description: "Download Cheat ARK: digital license download after payment. pengiriman digital instan. undetected — PC Windows.",
					h1: "Download Cheat ARK",
					intro: "ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Download Cheat ARK.",
					imageAlt: "ARK Hacks download and install delivery flow",
					galleryTitle: "Download Cheat ARK",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Beli ARK Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Cheat ARK",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. digital license download after payment.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@arkhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod ARK | In-Game Toggles",
					description: "Menu mod ARK: in-client ESP and soft aim toggles. pengiriman digital instan. undetected — PC Windows.",
					h1: "Menu mod ARK",
					intro: "ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Menu mod ARK.",
					imageAlt: "ARK Hacks in-game menu controls",
					galleryTitle: "Menu mod ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Beli ARK Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod ARK",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. in-client ESP and soft aim toggles.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@arkhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim ARK | Smooth Aim Settings",
					description: "Soft aim ARK: smooth soft aim settings for Windows PC. pengiriman digital instan. undetected — PC Windows.",
					h1: "Soft aim ARK",
					intro: "ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Soft aim ARK.",
					imageAlt: "ARK soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim ARK",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Beli ARK Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "Soft aim ARK",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. smooth soft aim settings for Windows PC.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@arkhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat ARK terbaik | Buyer Checklist",
					description: "Cheat ARK terbaik: what to compare before buying ARK hacks. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat ARK terbaik",
					intro: "ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Cheat ARK terbaik.",
					imageAlt: "ARK Hacks overview for ARK: Survival Ascended on PC",
					galleryTitle: "Cheat ARK terbaik",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Beli ARK Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat ARK terbaik",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. what to compare before buying ARK hacks.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@arkhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot ARK | Soft Aim Assist",
					description: "Hack aimbot ARK: undetected Aimbot hack assist for ARK: Survival Ascended. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack aimbot ARK",
					intro: "ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Hack aimbot ARK.",
					imageAlt: "ARK aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot ARK",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Beli ARK Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "Hack aimbot ARK",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. undetected Aimbot hack assist for ARK: Survival Ascended.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@arkhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP ARK | Boxes & Loot",
					description: "Hack ESP ARK: ESP hack boxes, loot pins, and distance. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack ESP ARK",
					intro: "ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Hack ESP ARK.",
					imageAlt: "ARK ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP ARK",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Beli ARK Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Hack ESP ARK",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. ESP hack boxes, loot pins, and distance.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@arkhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all ARK | What It Means",
					description: "Unlock all ARK: unlock-all searches vs real ESP and Aimbot tools. pengiriman digital instan. undetected — PC Windows.",
					h1: "Unlock all ARK",
					intro: "ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Unlock all ARK.",
					imageAlt: "ARK Hacks license features overview",
					galleryTitle: "Unlock all ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Beli ARK Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all ARK",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@arkhacks.com untuk dukungan dan legal.",
							],
						},
					],
				},
				privacy: {
					title: "Kebijakan privasi | ARK Hacks",
					description: "Kebijakan privasi for ARK Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan privasi",
					intro: "ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Kebijakan privasi for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on arkhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@arkhacks.com untuk dukungan dan legal.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Kebijakan refund | ARK Hacks",
					description: "Kebijakan refund for ARK Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan refund",
					intro: "ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Kebijakan refund for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@arkhacks.com untuk dukungan dan legal.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Syarat penggunaan | ARK Hacks",
					description: "Syarat penggunaan for ARK Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Syarat penggunaan",
					intro: "ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Syarat penggunaan for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"ARK Hacks menyediakan ESP wallhack, radar hack, dan ark aimbot undetected untuk ARK di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@arkhacks.com untuk dukungan dan legal.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
			},
		},
		th: {
			ui: {
				nav: {
					home: "หน้าแรก",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "ฟีเจอร์",
					pricing: "ราคา",
					setup: "ติดตั้ง",
					updates: "อัปเดต",
					faq: "FAQ",
					buyNow: "ซื้อเลย",
				},
				hero: {
					accent: "ARK hacks ไม่ถูกตรวจจับ",
					accentShort: "ARK Hacks",
					subtitle: "ESP wallhack, radar hack และ Aimbot สำหรับ ARK บน Windows PC — รวมการดูแล Easy Anti-Cheat",
					subtitleShort: "ESP, radar และ Aimbot สำหรับ ARK PC",
					buyNow: "ซื้อเลย",
					seeFeatures: "ดูฟีเจอร์",
				},
				trust: {
					status: "ออนไลน์",
					statusNote: "แพ็กเกจ ARK Hacks พร้อมใช้งานสำหรับ ARK บน Windows PC",
					statusShort: "ใช้งาน",
					delivery: "จัดส่งดิจิทัลทันที",
					platform: "Windows 10 และ 11",
					antiCheat: "รองรับการดูแล Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat รองรับ",
				},
				product: {
					title: "ARK Hacks",
					addToCart: "เพิ่มในตะกร้า",
					monthly: "รายเดือน",
					lifetime: "ตลอดชีพ",
					available: "พร้อมใช้งาน",
					gameBadge: "ARK",
					platformBadge: "Windows PC",
					statusBadge: "แพ็กเกจ undetected",
				},
				reviews: {
					title: "ผู้เล่นพูดว่าอย่างไร",
					subtitle: "ความคิดเห็นล่าสุดจากผู้ซื้อ ARK Hacks",
					outOf: "จาก 5",
					countLabel: "รีวิว",
				},
				common: {
					buyNow: "ซื้อเลย",
					readGuide: "อ่านคู่มือ",
					language: "ภาษา",
					officialLanguageNote: "ภาษาอังกฤษเป็นภาษาทางการ ภาษาอื่นแปลเพื่อ SEO ระดับโลก",
					relatedPages: "หน้าที่เกี่ยวข้อง",
				},
				footer: {
					explore: "สำรวจ",
					help: "ช่วยเหลือและกฎหมาย",
					tagline: "ESP, wallhack, radar และ Aimbot ไม่ถูกตรวจจับสำหรับ ARK — ชำระผ่าน Zadeyo",
				},
				images: {
					hero: "ARK Hacks hero — ESP and aimbot overlay in ARK: Survival Ascended",
					espWallhack: "Wallhack outlines showing players and wild dinos through walls",
					aimbotCombat: "Soft aim assist overlay during an ARK: Survival Ascended raid",
					squadFight: "ARK Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a ARK raid",
					headerArt: "Aimbot view and bone priority controls for ARK",
					cheatsPackage: "2D radar threat overlay for ARK: Survival Ascended",
					rebootFight: "Aimbot assist during a ARK firefight",
					battleRoyale: "ARK Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base raids in ARK",
				},
			},
			pages: {
				home: {
					title: "ARK Hacks 2026 | ESP, Wallhack และ Aimbot",
					description: "Cheat ARK: Survival Ascended undetected สำหรับ ARK: Survival Ascended บน PC. ESP wallhack, radar hack, Aimbot, EAC maintenance. จัดส่งดิจิทัลทันที.",
					h1: "ARK Hacks — Undetected ESP, Wallhack และ Aimbot",
					intro: "แพ็ก undetected สำหรับ ARK: Survival Ascended บน Windows PC: ESP wallhack, radar, Aimbot พร้อม EAC maintenance",
					imageAlt: "ARK ESP player tags hack",
					galleryTitle: "แกลเลอรี ARK Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ซื้อ ARK Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ทำไมเลือก ARK Hacks ปี 2026",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC เหมาะสำหรับอ่าน squad ศัตรูใน BR และ scav-run",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC ใบอนุญาตเดียวแทนเครื่องมือแยก",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
					],
				},
				"ark-esp": {
					title: "ARK ESP | Player Boxes & Wallhack",
					description: "ARK ESP: player boxes, loot markers, and wallhack overlays. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ARK ESP",
					intro: "ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC ARK ESP.",
					imageAlt: "ARK ESP player boxes and distance readouts in a raid",
					galleryTitle: "ARK ESP",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ซื้อ ARK Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ARK ESP",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC player boxes, loot markers, and wallhack overlays.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@arkhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"ark-aimbot": {
					title: "ARK Aimbot | Soft Aim Controls",
					description: "ARK Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ARK Aimbot",
					intro: "ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC ARK Aimbot.",
					imageAlt: "ARK aimbot and soft aim controls on Windows PC",
					galleryTitle: "ARK Aimbot",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "ซื้อ ARK Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK Aimbot",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC soft aim, FOV, and per-weapon Aimbot profiles.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@arkhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				features: {
					title: "ฟีเจอร์ | Full Feature List",
					description: "ฟีเจอร์: ESP, soft aim, radar controls. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ฟีเจอร์",
					intro: "ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC ฟีเจอร์.",
					imageAlt: "ARK Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "ฟีเจอร์",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ ARK Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ฟีเจอร์",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC ESP, soft aim, radar controls.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@arkhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				pricing: {
					title: "ราคา | Monthly & Lifetime",
					description: "ราคา: $35 monthly or $150 lifetime licenses. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ราคา",
					intro: "ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC ราคา.",
					imageAlt: "ARK Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "ราคา",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ซื้อ ARK Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ราคา",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC $35 monthly or $150 lifetime licenses.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@arkhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				setup: {
					title: "ติดตั้ง | PC Setup Guide",
					description: "ติดตั้ง: Windows PC activation and first-launch setup. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ติดตั้ง",
					intro: "ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC ติดตั้ง.",
					imageAlt: "ARK Hacks setup guide screenshot for Windows PC",
					galleryTitle: "ติดตั้ง",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ซื้อ ARK Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "ติดตั้ง",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC Windows PC activation and first-launch setup.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@arkhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				updates: {
					title: "อัปเดต | Easy Anti-Cheat Maintenance Log",
					description: "อัปเดต: EAC patch status and rebuild notes. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "อัปเดต",
					intro: "ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC อัปเดต.",
					imageAlt: "ARK Hacks live status after EAC and game patches",
					galleryTitle: "อัปเดต",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ซื้อ ARK Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "อัปเดต",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC EAC patch status and rebuild notes.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@arkhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "FAQ",
					intro: "ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC FAQ.",
					imageAlt: "ARK Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ ARK Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@arkhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				support: {
					title: "สนับสนุน | Help & Contact",
					description: "สนับสนุน: order help and license support contact. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "สนับสนุน",
					intro: "ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC สนับสนุน.",
					imageAlt: "ARK Hacks support page for license and setup help",
					galleryTitle: "สนับสนุน",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ซื้อ ARK Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "สนับสนุน",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC order help and license support contact.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@arkhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | Easy Anti-Cheat Safe Status",
					description: "Cheats undetected: undetected maintenance after Easy Anti-Cheat patches. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheats undetected",
					intro: "ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC Cheats undetected.",
					imageAlt: "ARK Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "ซื้อ ARK Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC undetected maintenance after Easy Anti-Cheat patches.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@arkhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				wallhack: {
					title: "ARK Wallhack | ESP Visibility",
					description: "ARK Wallhack: wallhack ESP for players, loot, and distance. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ARK Wallhack",
					intro: "ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC ARK Wallhack.",
					imageAlt: "ARK wallhack visibility through walls in a raid",
					galleryTitle: "ARK Wallhack",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "ซื้อ ARK Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK Wallhack",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC wallhack ESP for players, loot, and distance.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@arkhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC Radar Hack.",
					imageAlt: "ARK 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ซื้อ ARK Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC 2D radar cues for flanks and rotations.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@arkhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				eac: {
					title: "EAC Bypass | Patch Maintenance",
					description: "EAC Bypass: how EAC updates are handled for ARK: Survival Ascended hacks. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "EAC Bypass",
					intro: "ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC EAC Bypass.",
					imageAlt: "ARK Hacks maintenance after a EAC patch",
					galleryTitle: "EAC Bypass",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "ซื้อ ARK Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "EAC Bypass",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC how EAC updates are handled for ARK: Survival Ascended hacks.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@arkhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheats-2026": {
					title: "ARK Hacks 2026 | Buyer Guide",
					description: "ARK Hacks 2026: 2026 ARK hacks checklist before checkout. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ARK Hacks 2026",
					intro: "ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC ARK Hacks 2026.",
					imageAlt: "ARK Hacks product overview for ARK: Survival Ascended",
					galleryTitle: "ARK Hacks 2026",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ซื้อ ARK Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ARK Hacks 2026",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC 2026 ARK hacks checklist before checkout.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@arkhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				hacks: {
					title: "ARK Hacks | ESP Aimbot Guide",
					description: "ARK Hacks: the ARK: Survival Ascended hacks pillar for ESP and Aimbot. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ARK Hacks",
					intro: "ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC ARK Hacks.",
					imageAlt: "ARK Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "ARK Hacks",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ซื้อ ARK Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK Hacks",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC the ARK: Survival Ascended hacks pillar for ESP and Aimbot.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@arkhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheat-download": {
					title: "ดาวน์โหลด ARK Hacks | Instant Access",
					description: "ดาวน์โหลด ARK Hacks: digital license download after payment. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ดาวน์โหลด ARK Hacks",
					intro: "ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC ดาวน์โหลด ARK Hacks.",
					imageAlt: "ARK Hacks download and install delivery flow",
					galleryTitle: "ดาวน์โหลด ARK Hacks",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "ซื้อ ARK Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ดาวน์โหลด ARK Hacks",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC digital license download after payment.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@arkhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"mod-menu": {
					title: "เมนูมอด ARK | In-Game Toggles",
					description: "เมนูมอด ARK: in-client ESP and soft aim toggles. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "เมนูมอด ARK",
					intro: "ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC เมนูมอด ARK.",
					imageAlt: "ARK Hacks in-game menu controls",
					galleryTitle: "เมนูมอด ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ซื้อ ARK Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "เมนูมอด ARK",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC in-client ESP and soft aim toggles.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@arkhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"soft-aim": {
					title: "ARK Soft Aim | Smooth Aim Settings",
					description: "ARK Soft Aim: smooth soft aim settings for Windows PC. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ARK Soft Aim",
					intro: "ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC ARK Soft Aim.",
					imageAlt: "ARK soft aim FOV and smoothness settings",
					galleryTitle: "ARK Soft Aim",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ ARK Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "ARK Soft Aim",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC smooth soft aim settings for Windows PC.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@arkhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat ARK ที่ดีที่สุด | Buyer Checklist",
					description: "Cheat ARK ที่ดีที่สุด: what to compare before buying ARK hacks. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheat ARK ที่ดีที่สุด",
					intro: "ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC Cheat ARK ที่ดีที่สุด.",
					imageAlt: "ARK Hacks overview for ARK: Survival Ascended on PC",
					galleryTitle: "Cheat ARK ที่ดีที่สุด",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "ซื้อ ARK Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat ARK ที่ดีที่สุด",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC what to compare before buying ARK hacks.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@arkhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack Aimbot ARK | Soft Aim Assist",
					description: "Hack Aimbot ARK: undetected Aimbot hack assist for ARK: Survival Ascended. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack Aimbot ARK",
					intro: "ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC Hack Aimbot ARK.",
					imageAlt: "ARK aimbot hack controls and bone priority",
					galleryTitle: "Hack Aimbot ARK",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ ARK Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "Hack Aimbot ARK",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC undetected Aimbot hack assist for ARK: Survival Ascended.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@arkhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP ARK | Boxes & Loot",
					description: "Hack ESP ARK: ESP hack boxes, loot pins, and distance. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack ESP ARK",
					intro: "ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC Hack ESP ARK.",
					imageAlt: "ARK ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP ARK",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "ซื้อ ARK Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Hack ESP ARK",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC ESP hack boxes, loot pins, and distance.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@arkhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				"unlock-all": {
					title: "ARK Unlock All | What It Means",
					description: "ARK Unlock All: unlock-all searches vs real ESP and Aimbot tools. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ARK Unlock All",
					intro: "ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC ARK Unlock All.",
					imageAlt: "ARK Hacks license features overview",
					galleryTitle: "ARK Unlock All",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "ซื้อ ARK Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK Unlock All",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC unlock-all searches vs real ESP and Aimbot tools.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@arkhacks.com สำหรับการสนับสนุน",
							],
						},
					],
				},
				privacy: {
					title: "นโยบายความเป็นส่วนตัว | ARK Hacks",
					description: "นโยบายความเป็นส่วนตัว for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายความเป็นส่วนตัว",
					intro: "ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC นโยบายความเป็นส่วนตัว for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on arkhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@arkhacks.com สำหรับการสนับสนุน",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				refund: {
					title: "นโยบายการคืนเงิน | ARK Hacks",
					description: "นโยบายการคืนเงิน for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายการคืนเงิน",
					intro: "ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC นโยบายการคืนเงิน for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@arkhacks.com สำหรับการสนับสนุน",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				terms: {
					title: "ข้อกำหนดการใช้งาน | ARK Hacks",
					description: "ข้อกำหนดการใช้งาน for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "ข้อกำหนดการใช้งาน",
					intro: "ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC ข้อกำหนดการใช้งาน for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"ARK Hacks รวม ESP wallhack, radar hack และ ark aimbot แบบ undetected สำหรับ ARK บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@arkhacks.com สำหรับการสนับสนุน",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
			},
		},
		vi: {
			ui: {
				nav: {
					home: "Trang chủ",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Tính năng",
					pricing: "Giá",
					setup: "Cài đặt",
					updates: "Cập nhật",
					faq: "FAQ",
					buyNow: "Mua ngay",
				},
				hero: {
					accent: "Cheat ARK undetected",
					accentShort: "ARK Hacks",
					subtitle: "ESP wallhack, radar hack và Aimbot cho ARK trên PC Windows — bảo trì Easy Anti-Cheat bao gồm.",
					subtitleShort: "ESP, radar & Aimbot cho ARK PC",
					buyNow: "Mua ngay",
					seeFeatures: "Xem tính năng",
				},
				trust: {
					status: "Trực tuyến",
					statusNote: "Gói ARK Hacks đang hoạt động cho ARK trên PC Windows.",
					statusShort: "Hoạt động",
					delivery: "Giao hàng kỹ thuật số tức thì",
					platform: "Windows 10 & 11",
					antiCheat: "Hỗ trợ bảo trì Easy Anti-Cheat",
					antiCheatShort: "Hỗ trợ Easy Anti-Cheat",
				},
				product: {
					title: "ARK Hacks",
					addToCart: "Thêm vào giỏ",
					monthly: "Hàng tháng",
					lifetime: "Trọn đời",
					available: "Có sẵn ngay",
					gameBadge: "ARK",
					platformBadge: "Windows PC",
					statusBadge: "Gói undetected",
				},
				reviews: {
					title: "Người chơi nói gì",
					subtitle: "Phản hồi gần đây từ người mua ARK Hacks",
					outOf: "/5",
					countLabel: "đánh giá",
				},
				common: {
					buyNow: "Mua ngay",
					readGuide: "Đọc hướng dẫn",
					language: "Ngôn ngữ",
					officialLanguageNote: "Tiếng Anh là ngôn ngữ chính thức. Các ngôn ngữ khác được dịch cho SEO toàn cầu.",
					relatedPages: "Trang liên quan",
				},
				footer: {
					explore: "Khám phá",
					help: "Trợ giúp & pháp lý",
					tagline: "ESP, wallhack, radar và Aimbot undetected cho ARK — thanh toán qua Zadeyo.",
				},
				images: {
					hero: "ARK Hacks hero — ESP and aimbot overlay in ARK: Survival Ascended",
					espWallhack: "Wallhack outlines showing players and wild dinos through walls",
					aimbotCombat: "Soft aim assist overlay during an ARK: Survival Ascended raid",
					squadFight: "ARK Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a ARK raid",
					headerArt: "Aimbot view and bone priority controls for ARK",
					cheatsPackage: "2D radar threat overlay for ARK: Survival Ascended",
					rebootFight: "Aimbot assist during a ARK firefight",
					battleRoyale: "ARK Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base raids in ARK",
				},
			},
			pages: {
				home: {
					title: "ARK Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat ARK: Survival Ascended undetected cho ARK: Survival Ascended trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Easy Anti-Cheat. Giao hàng kỹ thuật số",
					h1: "ARK Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Gói undetected ARK: Survival Ascended trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Easy Anti-Cheat.",
					imageAlt: "ARK ESP player tags hack",
					galleryTitle: "Thư viện ARK Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Mua ARK Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Vì sao chọn ARK Hacks 2026",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Lý tưởng đọc squad địch trong BR và scav-run.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot trong một giấy phép",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Một giấy phép thay vì công cụ riêng.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
					],
				},
				"ark-esp": {
					title: "ESP ARK | Player Boxes & Wallhack",
					description: "ESP ARK: player boxes, loot markers, and wallhack overlays. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "ESP ARK",
					intro: "ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. ESP ARK.",
					imageAlt: "ARK ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Mua ARK Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ESP ARK",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. player boxes, loot markers, and wallhack overlays.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@arkhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"ark-aimbot": {
					title: "Aimbot ARK | Soft Aim Controls",
					description: "Aimbot ARK: soft aim, FOV, and per-weapon Aimbot profiles. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Aimbot ARK",
					intro: "ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Aimbot ARK.",
					imageAlt: "ARK aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot ARK",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Mua ARK Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Aimbot ARK",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@arkhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				features: {
					title: "Tính năng | Full Feature List",
					description: "Tính năng: ESP, soft aim, radar controls. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tính năng",
					intro: "ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Tính năng.",
					imageAlt: "ARK Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Tính năng",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Mua ARK Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Tính năng",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. ESP, soft aim, radar controls.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@arkhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				pricing: {
					title: "Giá | Monthly & Lifetime",
					description: "Giá: $35 monthly or $150 lifetime licenses. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Giá",
					intro: "ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Giá.",
					imageAlt: "ARK Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Giá",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Mua ARK Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Giá",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. $35 monthly or $150 lifetime licenses.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@arkhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				setup: {
					title: "Cài đặt | PC Setup Guide",
					description: "Cài đặt: Windows PC activation and first-launch setup. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cài đặt",
					intro: "ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Cài đặt.",
					imageAlt: "ARK Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Cài đặt",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Mua ARK Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Cài đặt",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Windows PC activation and first-launch setup.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@arkhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				updates: {
					title: "Cập nhật | Easy Anti-Cheat Maintenance Log",
					description: "Cập nhật: EAC patch status and rebuild notes. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cập nhật",
					intro: "ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Cập nhật.",
					imageAlt: "ARK Hacks live status after EAC and game patches",
					galleryTitle: "Cập nhật",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Mua ARK Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Cập nhật",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. EAC patch status and rebuild notes.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@arkhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "FAQ",
					intro: "ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. FAQ.",
					imageAlt: "ARK Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Mua ARK Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@arkhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				support: {
					title: "Hỗ trợ | Help & Contact",
					description: "Hỗ trợ: order help and license support contact. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hỗ trợ",
					intro: "ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Hỗ trợ.",
					imageAlt: "ARK Hacks support page for license and setup help",
					galleryTitle: "Hỗ trợ",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Mua ARK Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Hỗ trợ",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. order help and license support contact.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@arkhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | Easy Anti-Cheat Safe Status",
					description: "Cheat undetected: undetected maintenance after Easy Anti-Cheat patches. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Cheat undetected.",
					imageAlt: "ARK Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Mua ARK Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@arkhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack ARK | ESP Visibility",
					description: "Wallhack ARK: wallhack ESP for players, loot, and distance. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Wallhack ARK",
					intro: "ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Wallhack ARK.",
					imageAlt: "ARK wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack ARK",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Mua ARK Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Wallhack ARK",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. wallhack ESP for players, loot, and distance.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@arkhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Radar hack.",
					imageAlt: "ARK 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Mua ARK Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. 2D radar cues for flanks and rotations.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@arkhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how EAC updates are handled for ARK: Survival Ascended hacks. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "ARK Hacks maintenance after a EAC patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Mua ARK Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. how EAC updates are handled for ARK: Survival Ascended hacks.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@arkhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat ARK 2026 | Buyer Guide",
					description: "Cheat ARK 2026: 2026 ARK hacks checklist before checkout. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat ARK 2026",
					intro: "ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Cheat ARK 2026.",
					imageAlt: "ARK Hacks product overview for ARK: Survival Ascended",
					galleryTitle: "Cheat ARK 2026",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Mua ARK Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Cheat ARK 2026",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. 2026 ARK hacks checklist before checkout.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@arkhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat ARK | ESP Aimbot Guide",
					description: "Cheat ARK: the ARK: Survival Ascended hacks pillar for ESP and Aimbot. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat ARK",
					intro: "ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Cheat ARK.",
					imageAlt: "ARK Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat ARK",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Mua ARK Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat ARK",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. the ARK: Survival Ascended hacks pillar for ESP and Aimbot.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@arkhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Tải Cheat ARK | Instant Access",
					description: "Tải Cheat ARK: digital license download after payment. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tải Cheat ARK",
					intro: "ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Tải Cheat ARK.",
					imageAlt: "ARK Hacks download and install delivery flow",
					galleryTitle: "Tải Cheat ARK",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Mua ARK Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tải Cheat ARK",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. digital license download after payment.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@arkhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu ARK | In-Game Toggles",
					description: "Mod menu ARK: in-client ESP and soft aim toggles. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Mod menu ARK",
					intro: "ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Mod menu ARK.",
					imageAlt: "ARK Hacks in-game menu controls",
					galleryTitle: "Mod menu ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Mua ARK Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu ARK",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. in-client ESP and soft aim toggles.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@arkhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim ARK | Smooth Aim Settings",
					description: "Soft aim ARK: smooth soft aim settings for Windows PC. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Soft aim ARK",
					intro: "ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Soft aim ARK.",
					imageAlt: "ARK soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim ARK",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Mua ARK Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "Soft aim ARK",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. smooth soft aim settings for Windows PC.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@arkhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat ARK tốt nhất | Buyer Checklist",
					description: "Cheat ARK tốt nhất: what to compare before buying ARK hacks. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat ARK tốt nhất",
					intro: "ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Cheat ARK tốt nhất.",
					imageAlt: "ARK Hacks overview for ARK: Survival Ascended on PC",
					galleryTitle: "Cheat ARK tốt nhất",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Mua ARK Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat ARK tốt nhất",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. what to compare before buying ARK hacks.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@arkhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot ARK | Soft Aim Assist",
					description: "Hack aimbot ARK: undetected Aimbot hack assist for ARK: Survival Ascended. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack aimbot ARK",
					intro: "ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Hack aimbot ARK.",
					imageAlt: "ARK aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot ARK",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Mua ARK Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "Hack aimbot ARK",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. undetected Aimbot hack assist for ARK: Survival Ascended.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@arkhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP ARK | Boxes & Loot",
					description: "Hack ESP ARK: ESP hack boxes, loot pins, and distance. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack ESP ARK",
					intro: "ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Hack ESP ARK.",
					imageAlt: "ARK ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP ARK",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Mua ARK Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Hack ESP ARK",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. ESP hack boxes, loot pins, and distance.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@arkhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all ARK | What It Means",
					description: "Unlock all ARK: unlock-all searches vs real ESP and Aimbot tools. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Unlock all ARK",
					intro: "ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Unlock all ARK.",
					imageAlt: "ARK Hacks license features overview",
					galleryTitle: "Unlock all ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Mua ARK Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all ARK",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@arkhacks.com cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				privacy: {
					title: "Chính sách bảo mật | ARK Hacks",
					description: "Chính sách bảo mật for ARK Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách bảo mật",
					intro: "ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Chính sách bảo mật for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on arkhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@arkhacks.com cho hỗ trợ và pháp lý.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Chính sách hoàn tiền | ARK Hacks",
					description: "Chính sách hoàn tiền for ARK Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách hoàn tiền",
					intro: "ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Chính sách hoàn tiền for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@arkhacks.com cho hỗ trợ và pháp lý.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Điều khoản sử dụng | ARK Hacks",
					description: "Điều khoản sử dụng for ARK Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Điều khoản sử dụng",
					intro: "ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Điều khoản sử dụng for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"ARK Hacks cung cấp ESP wallhack, radar hack và ark aimbot undetected cho ARK trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@arkhacks.com cho hỗ trợ và pháp lý.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
			},
		},
		uk: {
			ui: {
				nav: {
					home: "Головна",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функції",
					pricing: "Ціни",
					setup: "Встановлення",
					updates: "Оновлення",
					faq: "FAQ",
					buyNow: "Купити",
				},
				hero: {
					accent: "Undetected чіти ARK",
					accentShort: "ARK Hacks",
					subtitle: "ESP wallhack, radar hack і Aimbot для ARK на Windows PC — обслуговування Easy Anti-Cheat включено.",
					subtitleShort: "ESP, radar і Aimbot для ARK PC",
					buyNow: "Купити",
					seeFeatures: "Дивитися функції",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет ARK Hacks активний для ARK на Windows PC.",
					statusShort: "Активний",
					delivery: "Миттєва цифрова доставка",
					platform: "Windows 10 і 11",
					antiCheat: "Підтримка обслуговування Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat підтримка",
				},
				product: {
					title: "ARK Hacks",
					addToCart: "До кошика",
					monthly: "Щомісяця",
					lifetime: "Назавжди",
					available: "Доступно зараз",
					gameBadge: "ARK",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Що кажуть гравці",
					subtitle: "Останні відгуки покупців ARK Hacks",
					outOf: "з 5",
					countLabel: "відгуків",
				},
				common: {
					buyNow: "Купити",
					readGuide: "Читати гайд",
					language: "Мова",
					officialLanguageNote: "Англійська — офіційна мова. Інші версії перекладені для глобального SEO.",
					relatedPages: "Пов'язані сторінки",
				},
				footer: {
					explore: "Огляд",
					help: "Допомога та право",
					tagline: "Undetected ESP, wallhack, radar і Aimbot для ARK — оплата через Zadeyo.",
				},
				images: {
					hero: "ARK Hacks hero — ESP and aimbot overlay in ARK: Survival Ascended",
					espWallhack: "Wallhack outlines showing players and wild dinos through walls",
					aimbotCombat: "Soft aim assist overlay during an ARK: Survival Ascended raid",
					squadFight: "ARK Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a ARK raid",
					headerArt: "Aimbot view and bone priority controls for ARK",
					cheatsPackage: "2D radar threat overlay for ARK: Survival Ascended",
					rebootFight: "Aimbot assist during a ARK firefight",
					battleRoyale: "ARK Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base raids in ARK",
				},
			},
			pages: {
				home: {
					title: "ARK Hacks 2026 | ESP, Wallhack і Aimbot",
					description: "Undetected чіти ARK: Survival Ascended для ARK: Survival Ascended на PC. ESP wallhack, radar hack, Aimbot, обслуговування Easy Anti-Cheat. Мгновенная цифровая",
					h1: "ARK Hacks — Undetected ESP, Wallhack і Aimbot",
					intro: "Undetected пакет для ARK: Survival Ascended на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Easy Anti-Cheat.",
					imageAlt: "ARK ESP player tags hack",
					galleryTitle: "Галерея ARK Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Купити ARK Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чому ARK Hacks у 2026",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Ідеально для читання ворожих загонів у BR і scav-run.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar і Aimbot в одній ліцензії",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Одна ліцензія замість окремих інструментів.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
					],
				},
				"ark-esp": {
					title: "ESP ARK | Player Boxes & Wallhack",
					description: "ESP ARK: player boxes, loot markers, and wallhack overlays. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "ESP ARK",
					intro: "ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. ESP ARK.",
					imageAlt: "ARK ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Купити ARK Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ESP ARK",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@arkhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				"ark-aimbot": {
					title: "Aimbot ARK | Soft Aim Controls",
					description: "Aimbot ARK: soft aim, FOV, and per-weapon Aimbot profiles. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Aimbot ARK",
					intro: "ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Aimbot ARK.",
					imageAlt: "ARK aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot ARK",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Купити ARK Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Aimbot ARK",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@arkhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				features: {
					title: "Функції | Full Feature List",
					description: "Функції: ESP, soft aim, radar controls. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Функції",
					intro: "ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Функції.",
					imageAlt: "ARK Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функції",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Купити ARK Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функції",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. ESP, soft aim, radar controls.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@arkhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				pricing: {
					title: "Ціни | Monthly & Lifetime",
					description: "Ціни: $35 monthly or $150 lifetime licenses. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Ціни",
					intro: "ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Ціни.",
					imageAlt: "ARK Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Ціни",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Купити ARK Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ціни",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. $35 monthly or $150 lifetime licenses.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@arkhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				setup: {
					title: "Встановлення | PC Setup Guide",
					description: "Встановлення: Windows PC activation and first-launch setup. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Встановлення",
					intro: "ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Встановлення.",
					imageAlt: "ARK Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Встановлення",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Купити ARK Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Встановлення",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Windows PC activation and first-launch setup.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@arkhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				updates: {
					title: "Оновлення | Easy Anti-Cheat Maintenance Log",
					description: "Оновлення: EAC patch status and rebuild notes. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Оновлення",
					intro: "ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Оновлення.",
					imageAlt: "ARK Hacks live status after EAC and game patches",
					galleryTitle: "Оновлення",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Купити ARK Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Оновлення",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. EAC patch status and rebuild notes.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@arkhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. FAQ.",
					imageAlt: "ARK Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Купити ARK Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@arkhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				support: {
					title: "Підтримка | Help & Contact",
					description: "Підтримка: order help and license support contact. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Підтримка",
					intro: "ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Підтримка.",
					imageAlt: "ARK Hacks support page for license and setup help",
					galleryTitle: "Підтримка",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Купити ARK Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Підтримка",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. order help and license support contact.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@arkhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected чіти | Easy Anti-Cheat Safe Status",
					description: "Undetected чіти: undetected maintenance after Easy Anti-Cheat patches. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Undetected чіти",
					intro: "ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Undetected чіти.",
					imageAlt: "ARK Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected чіти",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Купити ARK Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Undetected чіти",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@arkhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack ARK | ESP Visibility",
					description: "Wallhack ARK: wallhack ESP for players, loot, and distance. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Wallhack ARK",
					intro: "ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Wallhack ARK.",
					imageAlt: "ARK wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack ARK",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Купити ARK Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Wallhack ARK",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. wallhack ESP for players, loot, and distance.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@arkhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Radar hack.",
					imageAlt: "ARK 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Купити ARK Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. 2D radar cues for flanks and rotations.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@arkhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how EAC updates are handled for ARK: Survival Ascended hacks. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "ARK Hacks maintenance after a EAC patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Купити ARK Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. how EAC updates are handled for ARK: Survival Ascended hacks.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@arkhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Чіти ARK 2026 | Buyer Guide",
					description: "Чіти ARK 2026: 2026 ARK hacks checklist before checkout. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти ARK 2026",
					intro: "ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Чіти ARK 2026.",
					imageAlt: "ARK Hacks product overview for ARK: Survival Ascended",
					galleryTitle: "Чіти ARK 2026",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Купити ARK Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Чіти ARK 2026",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. 2026 ARK hacks checklist before checkout.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@arkhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				hacks: {
					title: "Чіти ARK | ESP Aimbot Guide",
					description: "Чіти ARK: the ARK: Survival Ascended hacks pillar for ESP and Aimbot. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти ARK",
					intro: "ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Чіти ARK.",
					imageAlt: "ARK Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Чіти ARK",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Купити ARK Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чіти ARK",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. the ARK: Survival Ascended hacks pillar for ESP and Aimbot.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@arkhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Завантаження ARK Hacks | Instant Access",
					description: "Завантаження ARK Hacks: digital license download after payment. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Завантаження ARK Hacks",
					intro: "ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Завантаження ARK Hacks.",
					imageAlt: "ARK Hacks download and install delivery flow",
					galleryTitle: "Завантаження ARK Hacks",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Купити ARK Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Завантаження ARK Hacks",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. digital license download after payment.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@arkhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню ARK | In-Game Toggles",
					description: "Мод-меню ARK: in-client ESP and soft aim toggles. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Мод-меню ARK",
					intro: "ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Мод-меню ARK.",
					imageAlt: "ARK Hacks in-game menu controls",
					galleryTitle: "Мод-меню ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Купити ARK Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню ARK",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. in-client ESP and soft aim toggles.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@arkhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim ARK | Smooth Aim Settings",
					description: "Soft aim ARK: smooth soft aim settings for Windows PC. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Soft aim ARK",
					intro: "ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Soft aim ARK.",
					imageAlt: "ARK soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim ARK",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Купити ARK Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "Soft aim ARK",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. smooth soft aim settings for Windows PC.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@arkhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Найкращі чіти ARK | Buyer Checklist",
					description: "Найкращі чіти ARK: what to compare before buying ARK hacks. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Найкращі чіти ARK",
					intro: "ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Найкращі чіти ARK.",
					imageAlt: "ARK Hacks overview for ARK: Survival Ascended on PC",
					galleryTitle: "Найкращі чіти ARK",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Купити ARK Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Найкращі чіти ARK",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. what to compare before buying ARK hacks.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@arkhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot ARK | Soft Aim Assist",
					description: "Хак aimbot ARK: undetected Aimbot hack assist for ARK: Survival Ascended. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак aimbot ARK",
					intro: "ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Хак aimbot ARK.",
					imageAlt: "ARK aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot ARK",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Купити ARK Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "Хак aimbot ARK",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. undetected Aimbot hack assist for ARK: Survival Ascended.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@arkhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP ARK | Boxes & Loot",
					description: "Хак ESP ARK: ESP hack boxes, loot pins, and distance. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак ESP ARK",
					intro: "ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Хак ESP ARK.",
					imageAlt: "ARK ESP hack boxes and loot markers",
					galleryTitle: "Хак ESP ARK",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Купити ARK Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Хак ESP ARK",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. ESP hack boxes, loot pins, and distance.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@arkhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all ARK | What It Means",
					description: "Unlock all ARK: unlock-all searches vs real ESP and Aimbot tools. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Unlock all ARK",
					intro: "ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Unlock all ARK.",
					imageAlt: "ARK Hacks license features overview",
					galleryTitle: "Unlock all ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Купити ARK Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all ARK",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@arkhacks.com для підтримки та правових питань.",
							],
						},
					],
				},
				privacy: {
					title: "Політика конфіденційності | ARK Hacks",
					description: "Політика конфіденційності for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика конфіденційності",
					intro: "ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Політика конфіденційності for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on arkhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@arkhacks.com для підтримки та правових питань.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Політика повернення | ARK Hacks",
					description: "Політика повернення for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика повернення",
					intro: "ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Політика повернення for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@arkhacks.com для підтримки та правових питань.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Умови використання | ARK Hacks",
					description: "Умови використання for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Умови використання",
					intro: "ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Умови використання for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"ARK Hacks об'єднує ESP wallhack, radar hack і ark aimbot у undetected пакеті для ARK на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@arkhacks.com для підтримки та правових питань.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
			},
		},
		cs: {
			ui: {
				nav: {
					home: "Domů",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkce",
					pricing: "Ceny",
					setup: "Instalace",
					updates: "Aktualizace",
					faq: "FAQ",
					buyNow: "Koupit",
				},
				hero: {
					accent: "Undetected ARK cheaty",
					accentShort: "ARK Hacks",
					subtitle: "ESP wallhack, radar hack a Aimbot pro ARK na Windows PC — údržba Easy Anti-Cheat v ceně.",
					subtitleShort: "ESP, radar a Aimbot pro ARK PC",
					buyNow: "Koupit",
					seeFeatures: "Zobrazit funkce",
				},
				trust: {
					status: "Online",
					statusNote: "Balíček ARK Hacks je aktivní pro ARK na Windows PC.",
					statusShort: "Aktivní",
					delivery: "Okamžité digitální doručení",
					platform: "Windows 10 a 11",
					antiCheat: "Podpora údržby Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat podpora",
				},
				product: {
					title: "ARK Hacks",
					addToCart: "Přidat do košíku",
					monthly: "Měsíčně",
					lifetime: "Doživotně",
					available: "Dostupné nyní",
					gameBadge: "ARK",
					platformBadge: "Windows PC",
					statusBadge: "Undetected balíček",
				},
				reviews: {
					title: "Co říkají hráči",
					subtitle: "Nedávná zpětná vazba od kupujících ARK Hacks",
					outOf: "z 5",
					countLabel: "recenzí",
				},
				common: {
					buyNow: "Koupit",
					readGuide: "Číst průvodce",
					language: "Jazyk",
					officialLanguageNote: "Angličtina je oficiální jazyk. Ostatní jazyky jsou přeloženy pro globální SEO.",
					relatedPages: "Související stránky",
				},
				footer: {
					explore: "Prozkoumat",
					help: "Nápověda a právo",
					tagline: "Undetected ESP, wallhack, radar a Aimbot pro ARK — checkout přes Zadeyo.",
				},
				images: {
					hero: "ARK Hacks hero — ESP and aimbot overlay in ARK: Survival Ascended",
					espWallhack: "Wallhack outlines showing players and wild dinos through walls",
					aimbotCombat: "Soft aim assist overlay during an ARK: Survival Ascended raid",
					squadFight: "ARK Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a ARK raid",
					headerArt: "Aimbot view and bone priority controls for ARK",
					cheatsPackage: "2D radar threat overlay for ARK: Survival Ascended",
					rebootFight: "Aimbot assist during a ARK firefight",
					battleRoyale: "ARK Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base raids in ARK",
				},
			},
			pages: {
				home: {
					title: "ARK Hacks 2026 | ESP, Wallhack a Aimbot",
					description: "Undetected ARK cheaty pro ARK: Survival Ascended na PC. ESP wallhack, radar hack, Aimbot, údržba Easy Anti-Cheat. Okamžité digitální doručení.",
					h1: "ARK Hacks — Undetected ESP, Wallhack a Aimbot",
					intro: "Undetected balíček pro ARK: Survival Ascended na Windows PC: ESP wallhack, radar, Aimbot s údržbou Easy Anti-Cheat.",
					imageAlt: "ARK ESP player tags hack",
					galleryTitle: "Galerie ARK Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Koupit ARK Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Proč ARK Hacks v roce 2026",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. Ideální pro čtení nepřátelských squadů v BR a scav-run.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar a Aimbot v jedné licenci",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. Jedna licence místo samostatných nástrojů.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
					],
				},
				"ark-esp": {
					title: "ARK ESP | Player Boxes & Wallhack",
					description: "ARK ESP: player boxes, loot markers, and wallhack overlays. okamžité digitální doručení. undetected — Windows PC.",
					h1: "ARK ESP",
					intro: "ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. ARK ESP.",
					imageAlt: "ARK ESP player boxes and distance readouts in a raid",
					galleryTitle: "ARK ESP",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Koupit ARK Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ARK ESP",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@arkhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"ark-aimbot": {
					title: "ARK Aimbot | Soft Aim Controls",
					description: "ARK Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. okamžité digitální doručení. undetected — Windows PC.",
					h1: "ARK Aimbot",
					intro: "ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. ARK Aimbot.",
					imageAlt: "ARK aimbot and soft aim controls on Windows PC",
					galleryTitle: "ARK Aimbot",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Koupit ARK Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK Aimbot",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@arkhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				features: {
					title: "Funkce | Full Feature List",
					description: "Funkce: ESP, soft aim, radar controls. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Funkce",
					intro: "ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. Funkce.",
					imageAlt: "ARK Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkce",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit ARK Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkce",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. ESP, soft aim, radar controls.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@arkhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				pricing: {
					title: "Ceny | Monthly & Lifetime",
					description: "Ceny: $35 monthly or $150 lifetime licenses. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Ceny",
					intro: "ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. Ceny.",
					imageAlt: "ARK Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Ceny",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Koupit ARK Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ceny",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@arkhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				setup: {
					title: "Instalace | PC Setup Guide",
					description: "Instalace: Windows PC activation and first-launch setup. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Instalace",
					intro: "ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. Instalace.",
					imageAlt: "ARK Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalace",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Koupit ARK Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalace",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. Windows PC activation and first-launch setup.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@arkhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizace | Easy Anti-Cheat Maintenance Log",
					description: "Aktualizace: EAC patch status and rebuild notes. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Aktualizace",
					intro: "ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. Aktualizace.",
					imageAlt: "ARK Hacks live status after EAC and game patches",
					galleryTitle: "Aktualizace",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Koupit ARK Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Aktualizace",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. EAC patch status and rebuild notes.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@arkhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. okamžité digitální doručení. undetected — Windows PC.",
					h1: "FAQ",
					intro: "ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. FAQ.",
					imageAlt: "ARK Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit ARK Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@arkhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				support: {
					title: "Podpora | Help & Contact",
					description: "Podpora: order help and license support contact. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Podpora",
					intro: "ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. Podpora.",
					imageAlt: "ARK Hacks support page for license and setup help",
					galleryTitle: "Podpora",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Koupit ARK Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Podpora",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. order help and license support contact.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@arkhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheaty | Easy Anti-Cheat Safe Status",
					description: "Undetected cheaty: undetected maintenance after Easy Anti-Cheat patches. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Undetected cheaty",
					intro: "ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. Undetected cheaty.",
					imageAlt: "ARK Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected cheaty",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Koupit ARK Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Undetected cheaty",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@arkhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				wallhack: {
					title: "ARK Wallhack | ESP Visibility",
					description: "ARK Wallhack: wallhack ESP for players, loot, and distance. okamžité digitální doručení. undetected — Windows PC.",
					h1: "ARK Wallhack",
					intro: "ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. ARK Wallhack.",
					imageAlt: "ARK wallhack visibility through walls in a raid",
					galleryTitle: "ARK Wallhack",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Koupit ARK Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK Wallhack",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. wallhack ESP for players, loot, and distance.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@arkhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. Radar Hack.",
					imageAlt: "ARK 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Koupit ARK Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. 2D radar cues for flanks and rotations.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@arkhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				eac: {
					title: "EAC Bypass | Patch Maintenance",
					description: "EAC Bypass: how EAC updates are handled for ARK: Survival Ascended hacks. okamžité digitální doručení. undetected — Windows PC.",
					h1: "EAC Bypass",
					intro: "ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. EAC Bypass.",
					imageAlt: "ARK Hacks maintenance after a EAC patch",
					galleryTitle: "EAC Bypass",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Koupit ARK Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "EAC Bypass",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. how EAC updates are handled for ARK: Survival Ascended hacks.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@arkhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "ARK cheaty 2026 | Buyer Guide",
					description: "ARK cheaty 2026: 2026 ARK hacks checklist before checkout. okamžité digitální doručení. undetected — Windows PC.",
					h1: "ARK cheaty 2026",
					intro: "ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. ARK cheaty 2026.",
					imageAlt: "ARK Hacks product overview for ARK: Survival Ascended",
					galleryTitle: "ARK cheaty 2026",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Koupit ARK Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ARK cheaty 2026",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. 2026 ARK hacks checklist before checkout.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@arkhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				hacks: {
					title: "ARK cheaty | ESP Aimbot Guide",
					description: "ARK cheaty: the ARK: Survival Ascended hacks pillar for ESP and Aimbot. okamžité digitální doručení. undetected — Windows PC.",
					h1: "ARK cheaty",
					intro: "ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. ARK cheaty.",
					imageAlt: "ARK Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "ARK cheaty",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Koupit ARK Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK cheaty",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. the ARK: Survival Ascended hacks pillar for ESP and Aimbot.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@arkhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Stáhnout ARK Hacks | Instant Access",
					description: "Stáhnout ARK Hacks: digital license download after payment. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Stáhnout ARK Hacks",
					intro: "ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. Stáhnout ARK Hacks.",
					imageAlt: "ARK Hacks download and install delivery flow",
					galleryTitle: "Stáhnout ARK Hacks",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Koupit ARK Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Stáhnout ARK Hacks",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. digital license download after payment.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@arkhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"mod-menu": {
					title: "ARK mod menu | In-Game Toggles",
					description: "ARK mod menu: in-client ESP and soft aim toggles. okamžité digitální doručení. undetected — Windows PC.",
					h1: "ARK mod menu",
					intro: "ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. ARK mod menu.",
					imageAlt: "ARK Hacks in-game menu controls",
					galleryTitle: "ARK mod menu",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Koupit ARK Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK mod menu",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. in-client ESP and soft aim toggles.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@arkhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"soft-aim": {
					title: "ARK Soft Aim | Smooth Aim Settings",
					description: "ARK Soft Aim: smooth soft aim settings for Windows PC. okamžité digitální doručení. undetected — Windows PC.",
					h1: "ARK Soft Aim",
					intro: "ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. ARK Soft Aim.",
					imageAlt: "ARK soft aim FOV and smoothness settings",
					galleryTitle: "ARK Soft Aim",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit ARK Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "ARK Soft Aim",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. smooth soft aim settings for Windows PC.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@arkhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Nejlepší ARK cheaty | Buyer Checklist",
					description: "Nejlepší ARK cheaty: what to compare before buying ARK hacks. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Nejlepší ARK cheaty",
					intro: "ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. Nejlepší ARK cheaty.",
					imageAlt: "ARK Hacks overview for ARK: Survival Ascended on PC",
					galleryTitle: "Nejlepší ARK cheaty",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Koupit ARK Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Nejlepší ARK cheaty",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. what to compare before buying ARK hacks.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@arkhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "ARK aimbot hack | Soft Aim Assist",
					description: "ARK aimbot hack: undetected Aimbot hack assist for ARK: Survival Ascended. okamžité digitální doručení. undetected — Windows PC.",
					h1: "ARK aimbot hack",
					intro: "ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. ARK aimbot hack.",
					imageAlt: "ARK aimbot hack controls and bone priority",
					galleryTitle: "ARK aimbot hack",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit ARK Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "ARK aimbot hack",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. undetected Aimbot hack assist for ARK: Survival Ascended.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@arkhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"esp-hack": {
					title: "ARK ESP hack | Boxes & Loot",
					description: "ARK ESP hack: ESP hack boxes, loot pins, and distance. okamžité digitální doručení. undetected — Windows PC.",
					h1: "ARK ESP hack",
					intro: "ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. ARK ESP hack.",
					imageAlt: "ARK ESP hack boxes and loot markers",
					galleryTitle: "ARK ESP hack",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Koupit ARK Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK ESP hack",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@arkhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				"unlock-all": {
					title: "ARK Unlock All | What It Means",
					description: "ARK Unlock All: unlock-all searches vs real ESP and Aimbot tools. okamžité digitální doručení. undetected — Windows PC.",
					h1: "ARK Unlock All",
					intro: "ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. ARK Unlock All.",
					imageAlt: "ARK Hacks license features overview",
					galleryTitle: "ARK Unlock All",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Koupit ARK Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK Unlock All",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@arkhacks.com pro podporu a právní dotazy.",
							],
						},
					],
				},
				privacy: {
					title: "Zásady ochrany soukromí | ARK Hacks",
					description: "Zásady ochrany soukromí for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady ochrany soukromí",
					intro: "ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. Zásady ochrany soukromí for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on arkhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@arkhacks.com pro podporu a právní dotazy.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Zásady vrácení peněz | ARK Hacks",
					description: "Zásady vrácení peněz for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady vrácení peněz",
					intro: "ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. Zásady vrácení peněz for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@arkhacks.com pro podporu a právní dotazy.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Podmínky použití | ARK Hacks",
					description: "Podmínky použití for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Podmínky použití",
					intro: "ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. Podmínky použití for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"ARK Hacks spojuje ESP wallhack, radar hack a ark aimbot jako undetected balíček pro ARK na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@arkhacks.com pro podporu a právní dotazy.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
			},
		},
		ro: {
			ui: {
				nav: {
					home: "Acasă",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funcții",
					pricing: "Prețuri",
					setup: "Instalare",
					updates: "Actualizări",
					faq: "FAQ",
					buyNow: "Cumpără",
				},
				hero: {
					accent: "Cheats ARK undetected",
					accentShort: "ARK Hacks",
					subtitle: "ESP wallhack, radar hack și Aimbot pentru ARK pe PC Windows — mentenanță Easy Anti-Cheat inclusă.",
					subtitleShort: "ESP, radar și Aimbot pentru ARK PC",
					buyNow: "Cumpără acum",
					seeFeatures: "Vezi funcții",
				},
				trust: {
					status: "Online",
					statusNote: "Pachetul ARK Hacks este activ pentru ARK pe PC Windows.",
					statusShort: "Activ",
					delivery: "Livrare digitală instantă",
					platform: "Windows 10 și 11",
					antiCheat: "Mentenanță Easy Anti-Cheat suportată",
					antiCheatShort: "Easy Anti-Cheat suportat",
				},
				product: {
					title: "ARK Hacks",
					addToCart: "Adaugă în coș",
					monthly: "Lunar",
					lifetime: "Pe viață",
					available: "Disponibil acum",
					gameBadge: "ARK",
					platformBadge: "Windows PC",
					statusBadge: "Pachet undetected",
				},
				reviews: {
					title: "Ce spun jucătorii",
					subtitle: "Feedback recent de la cumpărătorii ARK Hacks",
					outOf: "din 5",
					countLabel: "recenzii",
				},
				common: {
					buyNow: "Cumpără acum",
					readGuide: "Citește ghidul",
					language: "Limbă",
					officialLanguageNote: "Engleza este limba oficială. Alte limbi sunt traduse pentru SEO global.",
					relatedPages: "Pagini related",
				},
				footer: {
					explore: "Explorează",
					help: "Ajutor și legal",
					tagline: "ESP, wallhack, radar și Aimbot undetected pentru ARK — checkout via Zadeyo.",
				},
				images: {
					hero: "ARK Hacks hero — ESP and aimbot overlay in ARK: Survival Ascended",
					espWallhack: "Wallhack outlines showing players and wild dinos through walls",
					aimbotCombat: "Soft aim assist overlay during an ARK: Survival Ascended raid",
					squadFight: "ARK Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a ARK raid",
					headerArt: "Aimbot view and bone priority controls for ARK",
					cheatsPackage: "2D radar threat overlay for ARK: Survival Ascended",
					rebootFight: "Aimbot assist during a ARK firefight",
					battleRoyale: "ARK Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base raids in ARK",
				},
			},
			pages: {
				home: {
					title: "ARK Hacks 2026 | ESP, Wallhack și Aimbot",
					description: "Cheats ARK: Survival Ascended undetected pentru ARK: Survival Ascended pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Easy Anti-Cheat. Livrare digitală",
					h1: "ARK Hacks — Undetected ESP, Wallhack și Aimbot",
					intro: "Pachet undetected ARK: Survival Ascended pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Easy Anti-Cheat.",
					imageAlt: "ARK ESP player tags hack",
					galleryTitle: "Galerie ARK Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Cumpără ARK Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "De ce ARK Hacks în 2026",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Ideal pentru citirea squad-urilor inamice în BR și scav-run.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar și Aimbot într-o licență",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. O licență în loc de instrumente separate.",
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
					],
				},
				"ark-esp": {
					title: "ESP ARK | Player Boxes & Wallhack",
					description: "ESP ARK: player boxes, loot markers, and wallhack overlays. livrare digitală instantă. undetected — PC Windows.",
					h1: "ESP ARK",
					intro: "ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. ESP ARK.",
					imageAlt: "ARK ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Cumpără ARK Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ESP ARK",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@arkhacks.com pentru suport și legal.",
							],
						},
					],
				},
				"ark-aimbot": {
					title: "Aimbot ARK | Soft Aim Controls",
					description: "Aimbot ARK: soft aim, FOV, and per-weapon Aimbot profiles. livrare digitală instantă. undetected — PC Windows.",
					h1: "Aimbot ARK",
					intro: "ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Aimbot ARK.",
					imageAlt: "ARK aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot ARK",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Cumpără ARK Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Aimbot ARK",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@arkhacks.com pentru suport și legal.",
							],
						},
					],
				},
				features: {
					title: "Funcții | Full Feature List",
					description: "Funcții: ESP, soft aim, radar controls. livrare digitală instantă. undetected — PC Windows.",
					h1: "Funcții",
					intro: "ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Funcții.",
					imageAlt: "ARK Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funcții",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără ARK Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funcții",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. ESP, soft aim, radar controls.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@arkhacks.com pentru suport și legal.",
							],
						},
					],
				},
				pricing: {
					title: "Prețuri | Monthly & Lifetime",
					description: "Prețuri: $35 monthly or $150 lifetime licenses. livrare digitală instantă. undetected — PC Windows.",
					h1: "Prețuri",
					intro: "ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Prețuri.",
					imageAlt: "ARK Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Prețuri",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Cumpără ARK Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prețuri",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@arkhacks.com pentru suport și legal.",
							],
						},
					],
				},
				setup: {
					title: "Instalare | PC Setup Guide",
					description: "Instalare: Windows PC activation and first-launch setup. livrare digitală instantă. undetected — PC Windows.",
					h1: "Instalare",
					intro: "ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Instalare.",
					imageAlt: "ARK Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalare",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Cumpără ARK Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalare",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Windows PC activation and first-launch setup.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@arkhacks.com pentru suport și legal.",
							],
						},
					],
				},
				updates: {
					title: "Actualizări | Easy Anti-Cheat Maintenance Log",
					description: "Actualizări: EAC patch status and rebuild notes. livrare digitală instantă. undetected — PC Windows.",
					h1: "Actualizări",
					intro: "ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Actualizări.",
					imageAlt: "ARK Hacks live status after EAC and game patches",
					galleryTitle: "Actualizări",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Cumpără ARK Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Actualizări",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. EAC patch status and rebuild notes.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@arkhacks.com pentru suport și legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. livrare digitală instantă. undetected — PC Windows.",
					h1: "FAQ",
					intro: "ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. FAQ.",
					imageAlt: "ARK Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără ARK Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@arkhacks.com pentru suport și legal.",
							],
						},
					],
				},
				support: {
					title: "Suport | Help & Contact",
					description: "Suport: order help and license support contact. livrare digitală instantă. undetected — PC Windows.",
					h1: "Suport",
					intro: "ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Suport.",
					imageAlt: "ARK Hacks support page for license and setup help",
					galleryTitle: "Suport",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Cumpără ARK Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suport",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. order help and license support contact.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@arkhacks.com pentru suport și legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | Easy Anti-Cheat Safe Status",
					description: "Cheats undetected: undetected maintenance after Easy Anti-Cheat patches. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats undetected",
					intro: "ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Cheats undetected.",
					imageAlt: "ARK Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Cumpără ARK Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@arkhacks.com pentru suport și legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack ARK | ESP Visibility",
					description: "Wallhack ARK: wallhack ESP for players, loot, and distance. livrare digitală instantă. undetected — PC Windows.",
					h1: "Wallhack ARK",
					intro: "ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Wallhack ARK.",
					imageAlt: "ARK wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack ARK",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Cumpără ARK Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Wallhack ARK",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. wallhack ESP for players, loot, and distance.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@arkhacks.com pentru suport și legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. livrare digitală instantă. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Radar hack.",
					imageAlt: "ARK 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Cumpără ARK Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. 2D radar cues for flanks and rotations.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@arkhacks.com pentru suport și legal.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how EAC updates are handled for ARK: Survival Ascended hacks. livrare digitală instantă. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "ARK Hacks maintenance after a EAC patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Cumpără ARK Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. how EAC updates are handled for ARK: Survival Ascended hacks.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@arkhacks.com pentru suport și legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats ARK 2026 | Buyer Guide",
					description: "Cheats ARK 2026: 2026 ARK hacks checklist before checkout. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats ARK 2026",
					intro: "ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Cheats ARK 2026.",
					imageAlt: "ARK Hacks product overview for ARK: Survival Ascended",
					galleryTitle: "Cheats ARK 2026",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Cumpără ARK Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Cheats ARK 2026",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. 2026 ARK hacks checklist before checkout.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@arkhacks.com pentru suport și legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats ARK | ESP Aimbot Guide",
					description: "Cheats ARK: the ARK: Survival Ascended hacks pillar for ESP and Aimbot. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats ARK",
					intro: "ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Cheats ARK.",
					imageAlt: "ARK Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats ARK",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Cumpără ARK Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats ARK",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. the ARK: Survival Ascended hacks pillar for ESP and Aimbot.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@arkhacks.com pentru suport și legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descărcare ARK Hacks | Instant Access",
					description: "Descărcare ARK Hacks: digital license download after payment. livrare digitală instantă. undetected — PC Windows.",
					h1: "Descărcare ARK Hacks",
					intro: "ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Descărcare ARK Hacks.",
					imageAlt: "ARK Hacks download and install delivery flow",
					galleryTitle: "Descărcare ARK Hacks",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Cumpără ARK Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descărcare ARK Hacks",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. digital license download after payment.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@arkhacks.com pentru suport și legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Meniu mod ARK | In-Game Toggles",
					description: "Meniu mod ARK: in-client ESP and soft aim toggles. livrare digitală instantă. undetected — PC Windows.",
					h1: "Meniu mod ARK",
					intro: "ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Meniu mod ARK.",
					imageAlt: "ARK Hacks in-game menu controls",
					galleryTitle: "Meniu mod ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Cumpără ARK Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Meniu mod ARK",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. in-client ESP and soft aim toggles.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@arkhacks.com pentru suport și legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim ARK | Smooth Aim Settings",
					description: "Soft aim ARK: smooth soft aim settings for Windows PC. livrare digitală instantă. undetected — PC Windows.",
					h1: "Soft aim ARK",
					intro: "ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Soft aim ARK.",
					imageAlt: "ARK soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim ARK",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără ARK Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "Soft aim ARK",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. smooth soft aim settings for Windows PC.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@arkhacks.com pentru suport și legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cele mai bune cheats ARK | Buyer Checklist",
					description: "Cele mai bune cheats ARK: what to compare before buying ARK hacks. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cele mai bune cheats ARK",
					intro: "ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Cele mai bune cheats ARK.",
					imageAlt: "ARK Hacks overview for ARK: Survival Ascended on PC",
					galleryTitle: "Cele mai bune cheats ARK",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Cumpără ARK Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cele mai bune cheats ARK",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. what to compare before buying ARK hacks.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@arkhacks.com pentru suport și legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot ARK | Soft Aim Assist",
					description: "Hack aimbot ARK: undetected Aimbot hack assist for ARK: Survival Ascended. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack aimbot ARK",
					intro: "ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Hack aimbot ARK.",
					imageAlt: "ARK aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot ARK",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără ARK Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "Hack aimbot ARK",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. undetected Aimbot hack assist for ARK: Survival Ascended.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@arkhacks.com pentru suport și legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP ARK | Boxes & Loot",
					description: "Hack ESP ARK: ESP hack boxes, loot pins, and distance. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack ESP ARK",
					intro: "ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Hack ESP ARK.",
					imageAlt: "ARK ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP ARK",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Cumpără ARK Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Hack ESP ARK",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@arkhacks.com pentru suport și legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all ARK | What It Means",
					description: "Unlock all ARK: unlock-all searches vs real ESP and Aimbot tools. livrare digitală instantă. undetected — PC Windows.",
					h1: "Unlock all ARK",
					intro: "ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Unlock all ARK.",
					imageAlt: "ARK Hacks license features overview",
					galleryTitle: "Unlock all ARK",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Cumpără ARK Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all ARK",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@arkhacks.com pentru suport și legal.",
							],
						},
					],
				},
				privacy: {
					title: "Politica de confidențialitate | ARK Hacks",
					description: "Politica de confidențialitate for ARK Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de confidențialitate",
					intro: "ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Politica de confidențialitate for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on arkhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@arkhacks.com pentru suport și legal.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Politica de rambursare | ARK Hacks",
					description: "Politica de rambursare for ARK Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de rambursare",
					intro: "ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Politica de rambursare for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@arkhacks.com pentru suport și legal.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Termeni de utilizare | ARK Hacks",
					description: "Termeni de utilizare for ARK Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termeni de utilizare",
					intro: "ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Termeni de utilizare for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"ARK Hacks combină ESP wallhack, radar hack și ark aimbot undetected pentru ARK pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@arkhacks.com pentru suport și legal.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
			},
		},
		sv: {
			ui: {
				nav: {
					home: "Hem",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funktioner",
					pricing: "Priser",
					setup: "Installation",
					updates: "Uppdateringar",
					faq: "FAQ",
					buyNow: "Köp nu",
				},
				hero: {
					accent: "Undetected ARK hacks",
					accentShort: "ARK Hacks",
					subtitle: "ESP wallhack, radar hack och Aimbot för ARK på Windows PC — Easy Anti-Cheat-underhåll ingår.",
					subtitleShort: "ESP, radar & Aimbot för ARK PC",
					buyNow: "Köp nu",
					seeFeatures: "Se funktioner",
				},
				trust: {
					status: "Online",
					statusNote: "ARK Hacks-paketet är live för ARK på Windows PC.",
					statusShort: "Live",
					delivery: "Omedelbar digital leverans",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat-underhåll stöds",
					antiCheatShort: "Easy Anti-Cheat stöd",
				},
				product: {
					title: "ARK Hacks",
					addToCart: "Lägg i varukorg",
					monthly: "Månadsvis",
					lifetime: "Lifetime",
					available: "Tillgänglig nu",
					gameBadge: "ARK",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Vad spelare säger",
					subtitle: "Senaste feedback från ARK Hacks-köpare",
					outOf: "av 5",
					countLabel: "recensioner",
				},
				common: {
					buyNow: "Köp nu",
					readGuide: "Läs guide",
					language: "Språk",
					officialLanguageNote: "Engelska är det officiella språket. Andra språk är översatta för global SEO.",
					relatedPages: "Relaterade sidor",
				},
				footer: {
					explore: "Utforska",
					help: "Hjälp & juridik",
					tagline: "Undetected ESP, wallhack, radar och Aimbot för ARK — checkout via Zadeyo.",
				},
				images: {
					hero: "ARK Hacks hero — ESP and aimbot overlay in ARK: Survival Ascended",
					espWallhack: "Wallhack outlines showing players and wild dinos through walls",
					aimbotCombat: "Soft aim assist overlay during an ARK: Survival Ascended raid",
					squadFight: "ARK Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a ARK raid",
					headerArt: "Aimbot view and bone priority controls for ARK",
					cheatsPackage: "2D radar threat overlay for ARK: Survival Ascended",
					rebootFight: "Aimbot assist during a ARK firefight",
					battleRoyale: "ARK Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and base raids in ARK",
				},
			},
			pages: {
				home: {
					title: "ARK Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected ARK hacks för ARK: Survival Ascended på PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat-underhåll. Omedelbar digital leverans.",
					h1: "ARK Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected paket för ARK: Survival Ascended på Windows PC: ESP wallhack, radar, Aimbot med Easy Anti-Cheat-underhåll.",
					imageAlt: "ARK ESP player tags hack",
					galleryTitle: "ARK Hacks galleri — ESP, Aimbot, wallhack",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Köp ARK Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Varför ARK Hacks 2026",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. Ideal för att läsa fiendesquads i BR och scav-run.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "ESP wallhack, radar och Aimbot i en licens",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. En licens istället för separata verktyg.",
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
					],
				},
				"ark-esp": {
					title: "ARK ESP | Player Boxes & Wallhack",
					description: "ARK ESP: player boxes, loot markers, and wallhack overlays. omedelbar digital leverans. undetected — Windows PC.",
					h1: "ARK ESP",
					intro: "ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. ARK ESP.",
					imageAlt: "ARK ESP player boxes and distance readouts in a raid",
					galleryTitle: "ARK ESP",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Köp ARK Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ARK ESP",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@arkhacks.com för support och juridik.",
							],
						},
					],
				},
				"ark-aimbot": {
					title: "ARK Aimbot | Soft Aim Controls",
					description: "ARK Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. omedelbar digital leverans. undetected — Windows PC.",
					h1: "ARK Aimbot",
					intro: "ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. ARK Aimbot.",
					imageAlt: "ARK aimbot and soft aim controls on Windows PC",
					galleryTitle: "ARK Aimbot",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Köp ARK Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK Aimbot",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@arkhacks.com för support och juridik.",
							],
						},
					],
				},
				features: {
					title: "Funktioner | Full Feature List",
					description: "Funktioner: ESP, soft aim, radar controls. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Funktioner",
					intro: "ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. Funktioner.",
					imageAlt: "ARK Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funktioner",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Köp ARK Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funktioner",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. ESP, soft aim, radar controls.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@arkhacks.com för support och juridik.",
							],
						},
					],
				},
				pricing: {
					title: "Priser | Monthly & Lifetime",
					description: "Priser: $35 monthly or $150 lifetime licenses. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Priser",
					intro: "ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. Priser.",
					imageAlt: "ARK Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Priser",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Köp ARK Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Priser",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@arkhacks.com för support och juridik.",
							],
						},
					],
				},
				setup: {
					title: "Installation | PC Setup Guide",
					description: "Installation: Windows PC activation and first-launch setup. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Installation",
					intro: "ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. Installation.",
					imageAlt: "ARK Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Köp ARK Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. Windows PC activation and first-launch setup.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@arkhacks.com för support och juridik.",
							],
						},
					],
				},
				updates: {
					title: "Uppdateringar | Easy Anti-Cheat Maintenance Log",
					description: "Uppdateringar: EAC patch status and rebuild notes. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Uppdateringar",
					intro: "ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. Uppdateringar.",
					imageAlt: "ARK Hacks live status after EAC and game patches",
					galleryTitle: "Uppdateringar",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Köp ARK Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Uppdateringar",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. EAC patch status and rebuild notes.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@arkhacks.com för support och juridik.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. omedelbar digital leverans. undetected — Windows PC.",
					h1: "FAQ",
					intro: "ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. FAQ.",
					imageAlt: "ARK Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Köp ARK Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@arkhacks.com för support och juridik.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: order help and license support contact. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Support",
					intro: "ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. Support.",
					imageAlt: "ARK Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Köp ARK Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. order help and license support contact.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@arkhacks.com för support och juridik.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | Easy Anti-Cheat Safe Status",
					description: "Undetected cheats: undetected maintenance after Easy Anti-Cheat patches. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. Undetected cheats.",
					imageAlt: "ARK Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Köp ARK Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@arkhacks.com för support och juridik.",
							],
						},
					],
				},
				wallhack: {
					title: "ARK Wallhack | ESP Visibility",
					description: "ARK Wallhack: wallhack ESP for players, loot, and distance. omedelbar digital leverans. undetected — Windows PC.",
					h1: "ARK Wallhack",
					intro: "ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. ARK Wallhack.",
					imageAlt: "ARK wallhack visibility through walls in a raid",
					galleryTitle: "ARK Wallhack",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Köp ARK Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK Wallhack",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. wallhack ESP for players, loot, and distance.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@arkhacks.com för support och juridik.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. Radar Hack.",
					imageAlt: "ARK 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Köp ARK Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. 2D radar cues for flanks and rotations.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@arkhacks.com för support och juridik.",
							],
						},
					],
				},
				eac: {
					title: "EAC Bypass | Patch Maintenance",
					description: "EAC Bypass: how EAC updates are handled for ARK: Survival Ascended hacks. omedelbar digital leverans. undetected — Windows PC.",
					h1: "EAC Bypass",
					intro: "ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. EAC Bypass.",
					imageAlt: "ARK Hacks maintenance after a EAC patch",
					galleryTitle: "EAC Bypass",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Köp ARK Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "EAC Bypass",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. how EAC updates are handled for ARK: Survival Ascended hacks.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@arkhacks.com för support och juridik.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "ARK Hacks 2026 | Buyer Guide",
					description: "ARK Hacks 2026: 2026 ARK hacks checklist before checkout. omedelbar digital leverans. undetected — Windows PC.",
					h1: "ARK Hacks 2026",
					intro: "ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. ARK Hacks 2026.",
					imageAlt: "ARK Hacks product overview for ARK: Survival Ascended",
					galleryTitle: "ARK Hacks 2026",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Köp ARK Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/ark-hacks/",
					sections: [
						{
							h2: "ARK Hacks 2026",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. 2026 ARK hacks checklist before checkout.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@arkhacks.com för support och juridik.",
							],
						},
					],
				},
				hacks: {
					title: "ARK Hacks | ESP Aimbot Guide",
					description: "ARK Hacks: the ARK: Survival Ascended hacks pillar for ESP and Aimbot. omedelbar digital leverans. undetected — Windows PC.",
					h1: "ARK Hacks",
					intro: "ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. ARK Hacks.",
					imageAlt: "ARK Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "ARK Hacks",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Köp ARK Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK Hacks",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. the ARK: Survival Ascended hacks pillar for ESP and Aimbot.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@arkhacks.com för support och juridik.",
							],
						},
					],
				},
				"cheat-download": {
					title: "ARK Cheat Download | Instant Access",
					description: "ARK Cheat Download: digital license download after payment. omedelbar digital leverans. undetected — Windows PC.",
					h1: "ARK Cheat Download",
					intro: "ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. ARK Cheat Download.",
					imageAlt: "ARK Hacks download and install delivery flow",
					galleryTitle: "ARK Cheat Download",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Köp ARK Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ARK Cheat Download",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. digital license download after payment.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@arkhacks.com för support och juridik.",
							],
						},
					],
				},
				"mod-menu": {
					title: "ARK Mod-meny | In-Game Toggles",
					description: "ARK Mod-meny: in-client ESP and soft aim toggles. omedelbar digital leverans. undetected — Windows PC.",
					h1: "ARK Mod-meny",
					intro: "ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. ARK Mod-meny.",
					imageAlt: "ARK Hacks in-game menu controls",
					galleryTitle: "ARK Mod-meny",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Köp ARK Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK Mod-meny",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. in-client ESP and soft aim toggles.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@arkhacks.com för support och juridik.",
							],
						},
					],
				},
				"soft-aim": {
					title: "ARK Soft Aim | Smooth Aim Settings",
					description: "ARK Soft Aim: smooth soft aim settings for Windows PC. omedelbar digital leverans. undetected — Windows PC.",
					h1: "ARK Soft Aim",
					intro: "ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. ARK Soft Aim.",
					imageAlt: "ARK soft aim FOV and smoothness settings",
					galleryTitle: "ARK Soft Aim",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Köp ARK Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "ARK Soft Aim",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. smooth soft aim settings for Windows PC.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@arkhacks.com för support och juridik.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Bästa ARK Hacks | Buyer Checklist",
					description: "Bästa ARK Hacks: what to compare before buying ARK hacks. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Bästa ARK Hacks",
					intro: "ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. Bästa ARK Hacks.",
					imageAlt: "ARK Hacks overview for ARK: Survival Ascended on PC",
					galleryTitle: "Bästa ARK Hacks",
					heroImage: "/images/ark-hacks-esp.webp",
					ctaPrimary: "Köp ARK Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Bästa ARK Hacks",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. what to compare before buying ARK hacks.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@arkhacks.com för support och juridik.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "ARK Aimbot Hack | Soft Aim Assist",
					description: "ARK Aimbot Hack: undetected Aimbot hack assist for ARK: Survival Ascended. omedelbar digital leverans. undetected — Windows PC.",
					h1: "ARK Aimbot Hack",
					intro: "ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. ARK Aimbot Hack.",
					imageAlt: "ARK aimbot hack controls and bone priority",
					galleryTitle: "ARK Aimbot Hack",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Köp ARK Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/ark-aimbot/",
					sections: [
						{
							h2: "ARK Aimbot Hack",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. undetected Aimbot hack assist for ARK: Survival Ascended.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@arkhacks.com för support och juridik.",
							],
						},
					],
				},
				"esp-hack": {
					title: "ARK ESP Hack | Boxes & Loot",
					description: "ARK ESP Hack: ESP hack boxes, loot pins, and distance. omedelbar digital leverans. undetected — Windows PC.",
					h1: "ARK ESP Hack",
					intro: "ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. ARK ESP Hack.",
					imageAlt: "ARK ESP hack boxes and loot markers",
					galleryTitle: "ARK ESP Hack",
					heroImage: "/images/ark-hacks-wallhack.webp",
					ctaPrimary: "Köp ARK Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/ark-esp/",
					sections: [
						{
							h2: "ARK ESP Hack",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@arkhacks.com för support och juridik.",
							],
						},
					],
				},
				"unlock-all": {
					title: "ARK Unlock All | What It Means",
					description: "ARK Unlock All: unlock-all searches vs real ESP and Aimbot tools. omedelbar digital leverans. undetected — Windows PC.",
					h1: "ARK Unlock All",
					intro: "ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. ARK Unlock All.",
					imageAlt: "ARK Hacks license features overview",
					galleryTitle: "ARK Unlock All",
					heroImage: "/images/ark-hacks-radar.webp",
					ctaPrimary: "Köp ARK Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ARK Unlock All",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@arkhacks.com för support och juridik.",
							],
						},
					],
				},
				privacy: {
					title: "Integritetspolicy | ARK Hacks",
					description: "Integritetspolicy for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Integritetspolicy",
					intro: "ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. Integritetspolicy for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on arkhacks.com.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@arkhacks.com för support och juridik.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				refund: {
					title: "Återbetalningspolicy | ARK Hacks",
					description: "Återbetalningspolicy for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Återbetalningspolicy",
					intro: "ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. Återbetalningspolicy for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@arkhacks.com för support och juridik.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
				terms: {
					title: "Användarvillkor | ARK Hacks",
					description: "Användarvillkor for ARK Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Användarvillkor",
					intro: "ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. Användarvillkor for arkhacks.com and ARK: Survival Ascended licenses.",
					imageAlt: "ark cheats",
					galleryTitle: "ark cheats",
					heroImage: "/images/ark-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"ARK Hacks kombinerar ESP wallhack, radar hack och ark aimbot som undetected paket för ARK på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@arkhacks.com för support och juridik.",
								"Email: support@arkhacks.com",
							],
						},
					],
				},
			},
		},
	};
