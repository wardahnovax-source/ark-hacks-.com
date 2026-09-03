import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta, EXT } from './constants.mjs';

/** Richest English page content — source of truth for structure. */
export const enPages = {
	home: {
		title: 'ARK Ascended Hacks 2026 | Aimbot, ESP & Dino ESP',
		description:
			'ARK ascended hacks for Windows PC — aimbot, player ESP, dino ESP, loot ESP, and EAC updates. Compare plans and buy ARK hacks.',
		h1: 'ARK Ascended Hacks — Aimbot, ESP & Dino ESP',
		intro:
			'ARK Hacks is the undetected ark ascended hacks package for Windows PC — built for ARK: Survival Ascended. Player ESP, dino ESP, loot ESP, aimbot, no recoil, and dino filters with EAC maintenance after every major patch.',
		imageAlt: "ARK Hacks homepage hero — aimbot and ESP for ARK: Survival Ascended",
		galleryTitle: 'ARK Hacks gallery — aimbot, ESP, and dino ESP visuals',
		ctaPrimary: 'Buy ARK Hacks',
		ctaSecondary: 'See all features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why players choose ARK ascended hacks in 2026',
				'ARK: Survival Ascended rewards map awareness. ARK Hacks combines player ESP, dino ESP, loot ESP, and aimbot so you can read fights before committing — on PvP servers, tribe raids, and PvE sessions.',
				`Official patches and anti-cheat updates come from ${EXT.ark} and ${EXT.eac}. We rebuild aimbot, ESP, and combat modules when those patches require maintenance — then post status on the <a href="/updates/">Updates page</a>.`,
				'Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include EAC maintenance rebuilds when anti-cheat or game patches require updates.',
				'Start with the <a href="/ark-hacks/">ARK hacks pillar</a>, <a href="/ark-esp/">ESP guide</a>, <a href="/ark-aimbot/">Aimbot controls</a>, and <a href="/ark-hacks/">undetected status</a> pages if you are comparing tools before checkout.',
			),
			section(
				'Aimbot, player ESP, dino ESP, and combat tools in one license',
				'Instead of stacking separate tools, ARK Hacks bundles player ESP, dino ESP, loot ESP, supply crate ESP, skeleton ESP, boss ESP, alpha dino ESP, aimbot, no recoil, no spread, rapid fire, FOV changer, zoom, crosshair, and dino filters in one undetected package — covering both "ark ascended hacks" and "ARK cheats PC" search intent.',
				'Browse the <a href="/ark-esp/">ESP</a>, <a href="/ark-aimbot/">Aimbot</a>, <a href="/ark-esp/">wallhack</a>, and <a href="/features/">features</a> pages for control details — or jump to <a href="/pricing/">Pricing</a> for monthly and lifetime options.',
				`Before patch days, check ${EXT.status} for Studio Wildcard service health, then confirm our maintenance notes so you are not joining on an outdated build.`,
				'Ready to buy? Open <a href="/pricing/">Pricing</a>, follow <a href="/setup/">Setup</a> after delivery, and keep <a href="/faq/">FAQ</a> / <a href="/support/">Support</a> bookmarked for license questions.',
			),
		],
	},
	'ark-esp': {
		title: 'ARK ESP 2026 | Player Boxes & Wallhack',
		description:
			'ARK ESP for Windows PC — player boxes, loot markers, and distance readouts. Part of our undetected ark cheats for ARK: Survival Ascended.',
		h1: 'ARK ESP — Player Boxes & Wallhack',
		intro:
			'ARK esp visibility tools for raid and scav-run. Read enemy squads, players, wild dinos, loot, and distance before you commit — toggleable ark esp wallhack overlays bundled in our ark cheats package.',
		imageAlt: "ARK ESP player boxes and distance readouts in a raid",
		galleryTitle: 'ARK ESP overlay visuals',
		ctaPrimary: 'Buy ARK Hacks',
		ctaSecondary: 'ARK wallhack guide',
		ctaSecondaryHref: '/ark-esp/',
		sections: [
			section(
				'What ARK ESP solves in raids',
				'ARK maps punish incomplete information. ARK Hacks ESP wallhack helps you spot enemy squads early, spot players and wild dinos before they push your angle, and mark rare resources worth the detour.',
				'On raid, scav-run, and competitive lobbies, that visibility gap is often the difference between a clean third-party and a wiped squad. ESP ships bundled with radar overlays and Aimbot in one license.',
				`ARK’s live seasons and map updates are published by Studio Wildcard (${EXT.ark}). When POIs or loot rules shift, ESP categories stay useful because they track players and containers — not a single static landmark.`,
			),
			section(
				'Player, boss, and loot ESP wallhack categories',
				'Toggle enemy player outlines, boss markers, base raid cues, and loot pins so only raid-critical ESP wallhack overlays stay active during rotations.',
				'Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports player raids and scav-runs lobbies alike.',
				'Compare category detail on the <a href="/ark-esp/">wallhack page</a> and pair visibility with the <a href="/ark-radar-hack/">radar hack</a> for flanks outside your FOV.',
				[
					'Enemy player ESP outlines with distance',
					'Loot and container markers for faster rotations',
					'Boss and base raid awareness cues',
					'Toggleable categories to reduce overlay noise',
				],
			),
			section(
				'Undetected ESP with EAC maintenance',
				'ARK Hacks ESP wallhack is maintained for ARK with rebuilds after Easy Anti-Cheat patches. Check the <a href="/updates/">Updates page</a> before you queue — no cheat guarantees permanent undetected status.',
				`Read ${EXT.eac} for how anti-cheat updates ship, then cross-check our <a href="/updates/">EAC bypass maintenance guide</a> after major patches.`,
				'Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href="/setup/">Setup guide</a> and tune overlays before your first raid.',
			),
			section(
				'ESP next steps — Aimbot, pricing, and support',
				'ESP alone wins information wars; Aimbot covers the firefight. Review <a href="/ark-aimbot/">Aimbot controls</a> if you want one license for visibility and assist.',
				'Compare monthly ($35) and lifetime ($150) on <a href="/pricing/">Pricing</a>, then keep <a href="/support/">Support</a> ready if activation needs a human reply.',
				'Still researching? The <a href="/ark-hacks/">ARK hacks pillar</a> and <a href="/ark-hacks/">2026 buyer guide</a> summarize the full stack.',
			),
		],
	},
	'ark-aimbot': {
		title: 'ARK Aimbot 2026 | Soft Aim for Windows PC',
		description:
			'ARK aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our ark cheats package.',
		h1: 'ARK Aimbot — Soft Aim for Windows PC',
		intro:
			'Configurable Aimbot tools for ARK firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "ARK aimbot and soft aim controls on Windows PC",
		galleryTitle: 'ARK Aimbot combat previews',
		ctaPrimary: 'Buy ARK Hacks',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/ark-esp/',
		sections: [
			section(
				'Aimbot tuned for ARK combat pace',
				'ARK mixes long-range AR fights with close-quarters SMG pushes. ARK Hacks Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.',
				'Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and close-range scav fights.',
				`Weapon balance and season rules change via ${EXT.ark}. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.`,
			),
			section(
				'Per-weapon Aimbot profiles',
				'Save separate Aimbot profiles for ARs, SMGs, and bolt-actions. Switch between long-range DMR fights and dorms clears without reopening menus every raid.',
				'Prefer softer tracking? Read the <a href="/ark-aimbot/">soft aim guide</a>.',
				'Aimbot ships alongside <a href="/ark-esp/">ESP wallhack</a> and <a href="/ark-radar-hack/">2D radar</a> in the same ARK Hacks license.',
				[
					'Smoothness, FOV, and sensitivity sliders',
					'Bone priority and threat-based targeting',
					'Hotkeys to toggle Aimbot mid-match',
					'Per-weapon profile slots for AR / SMG / bolt-action',
				],
			),
			section(
				'EAC maintenance for undetected Aimbot',
				'ARK Hacks rebuilds Aimbot behavior when Easy Anti-Cheat or major ARK patches land. Maintenance notes appear on the <a href="/updates/">Updates page</a> so you know when a new build is live.',
				`Cross-check service health on ${EXT.status} and anti-cheat context on ${EXT.eac}, then follow our <a href="/updates/">EAC maintenance guide</a> before queueing on patch day.`,
				'Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.',
			),
			section(
				'Buy Aimbot with ESP — pricing and setup',
				'Every plan includes Aimbot plus ESP and radar. Compare options on <a href="/pricing/">Pricing</a>, then activate with the <a href="/setup/">Setup guide</a>.',
				'Questions about delivery or profiles? Use <a href="/faq/">FAQ</a> or email <a href="/support/">Support</a> with your order ID.',
				'Want the full control list first? Open <a href="/features/">Features</a> before checkout.',
			),
		],
	},
	features: {
		title: 'ARK Hacks Features | ESP, Soft Aim & Radar',
		description:
			'Full ark cheats feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.',
		h1: 'ARK Hacks Features — Full Control List',
		intro:
			'Every ESP wallhack, radar hack, and Aimbot control included in the ARK Hacks package for ARK on Windows PC — with EAC maintenance after major patches.',
		imageAlt: "ARK Hacks features — ESP, soft aim, and radar screenshots",
		galleryTitle: 'ARK Hacks feature gallery',
		ctaPrimary: 'Buy ARK Hacks',
		ctaSecondary: 'View pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'ESP wallhack and visibility features',
				'Enemy player ESP wallhack, boss and base raid awareness cues, loot and container markers, distance readouts, snaplines, and toggleable ESP categories for raid-critical overlays only.',
				'Team and enemy colour coding supports player raids and scav-runs. Deep-dive the <a href="/ark-esp/">ESP page</a> and <a href="/ark-esp/">wallhack guide</a> for category-level detail.',
				`Map and loot systems evolve with ${EXT.ark} wipe and map updates — toggleable ESP categories keep overlays useful when POIs rotate.`,
			),
			section(
				'Radar hack and Aimbot controls',
				'2D radar overlay with directional threat cues, configurable range for rotations and late-raid base raids, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.',
				'All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live ARK sessions. See <a href="/ark-radar-hack/">radar</a> and <a href="/ark-aimbot/">Aimbot</a> for settings walkthroughs.',
				'Prefer a menu-first workflow? The <a href="/ark-hacks/">mod menu page</a> explains mid-match toggles without alt-tabbing.',
			),
			section(
				'Licensing, delivery, and EAC maintenance',
				'Monthly ($35) and lifetime ($150) licenses with instant digital delivery. EAC maintenance rebuilds publish on the <a href="/updates/">Updates page</a> after anti-cheat or game patches.',
				`Monitor ${EXT.status} on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href="/support/">Support</a> and support@arkhacks.com.`,
				'Next step: compare plans on <a href="/pricing/">Pricing</a> or read <a href="/ark-hacks/">how undetected maintenance works</a>.',
			),
		],
	},
	pricing: {
		title: 'ARK Hacks Pricing | $35/mo or $150 Life',
		description:
			'ARK hacks pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.',
		h1: 'ARK Hacks Pricing — Monthly & Lifetime',
		intro:
			'Choose monthly or lifetime access to undetected ARK Hacks — ESP wallhack, radar hack, and Aimbot for ARK on Windows PC. Instant digital delivery after payment.',
		imageAlt: "ARK Hacks store plans for monthly and lifetime licenses",
		galleryTitle: 'ARK Hacks package visuals',
		ctaPrimary: 'Buy ARK Hacks',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'Monthly and lifetime ARK Hacks plans',
				'Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with EAC maintenance included during your term.',
				'Lifetime license: $150 USD for long-term access to the same undetected ARK Hacks package — ideal if you play ARK regularly across seasons.',
				'Both plans unlock the same feature stack described on <a href="/features/">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.',
			),
			section(
				'What every plan includes',
				'Player ESP wallhack, loot markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Easy Anti-Cheat or major ARK patches.',
				`Season calendars and client updates come from ${EXT.ark}. Active licenses receive rebuild access when we publish maintenance on <a href="/updates/">Updates</a>.`,
				'Digital delivery starts after payment confirmation. Keep your order reference for <a href="/support/">Support</a> requests and follow <a href="/setup/">Setup</a> for first launch.',
			),
			section(
				'Refund, billing, and buying checklist',
				'Review the <a href="/refund-policy/">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.',
				'Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.',
				'Still comparing tools? Read <a href="/ark-hacks/">ARK hacks</a>, <a href="/ark-hacks/">undetected status</a>, and <a href="/faq/">FAQ</a> before you checkout.',
			),
		],
	},
	setup: {
		title: 'ARK Hacks Setup | Windows PC Guide',
		description:
			'Set up ark cheats on Windows PC — activate ESP boxes, soft aim profiles, and . Check EAC updates before your first queue.',
		h1: 'ARK Hacks Setup — Windows PC Guide',
		intro:
			'Install and configure ARK Hacks for ARK on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify EAC maintenance status before queueing.',
		imageAlt: "ARK Hacks setup guide screenshot for Windows PC",
		galleryTitle: 'ARK Hacks setup visuals',
		ctaPrimary: 'Buy ARK Hacks',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'Before you install ARK Hacks',
				'Confirm your order email and license details. Check the <a href="/updates/">Updates page</a> for the latest EAC maintenance build before launching ARK.',
				`Also glance at ${EXT.status} if Studio Wildcard services look unstable on patch day — a platform outage is not a license fault.`,
				'ARK Hacks requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.',
			),
			section(
				'Activate ESP wallhack and Aimbot profiles',
				'Follow the delivery instructions in your license email. Load default ESP wallhack categories for players, wild dinos, and loot — then tune radar range and Aimbot smoothness to your playstyle.',
				'Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for Easy Anti-Cheat module live on <a href="/ark-esp/">ESP</a>, <a href="/ark-aimbot/">Aimbot</a>, and <a href="/ark-hacks/">mod menu</a>.',
				'Prefer a soft tracking feel? Start with the <a href="/ark-aimbot/">soft aim</a> recommendations before raising aggressiveness.',
			),
			section(
				'After ARK or Easy Anti-Cheat patches',
				'When Studio Wildcard ships a major ARK update or Easy Anti-Cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.',
				`Official anti-cheat background: ${EXT.eac}. Our practical workflow is documented on the <a href="/updates/">EAC bypass page</a> and <a href="/ark-hacks/">undetected guide</a>.`,
				'Contact <a href="/support/">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.',
			),
		],
	},
	updates: {
		title: 'ARK Hacks Updates | Easy Anti-Cheat Maintenance Log',
		description:
			'ARK hacks update log: Easy Anti-Cheat rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before queueing after patches.',
		h1: 'ARK Hacks Updates — Maintenance Log',
		intro:
			'Track EAC maintenance and ARK patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.',
		imageAlt: "ARK Hacks live status after EAC and game patches",
		galleryTitle: 'ARK patch and maintenance visuals',
		ctaPrimary: 'Buy ARK Hacks',
		ctaSecondary: 'Undetected status guide',
		ctaSecondaryHref: '/ark-hacks/',
		sections: [
			section(
				'Why the Updates page matters',
				'ARK and Easy Anti-Cheat receive frequent patches. ARK Hacks publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.',
				`Use ${EXT.status} for Studio Wildcard platform health and this page for ARK Hacks build status — both matter on big update days.`,
				'Checking this log before you queue reduces surprises after game days or seasonal launches on raid and scav-run.',
			),
			section(
				'What maintenance entries cover',
				'Entries note Easy Anti-Cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.',
				'Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href="/pricing/">Pricing</a> if you need to renew.',
				'For context on why rebuilds happen, read the <a href="/updates/">EAC bypass guide</a> and <a href="/ark-hacks/">undetected ARK hacks</a> explainer.',
			),
			section(
				'Staying undetected after patches',
				'No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.',
				`Follow season notes from ${EXT.ark}, then confirm our rebuild is live before you queue.`,
				'For urgent status questions after a EAC update, contact <a href="/support/">Support</a> with your license tier and last played build version.',
			),
		],
	},
	faq: {
		title: 'ARK Hacks FAQ | ESP, Soft Aim & Radar Answers',
		description:
			'ARK hacks FAQ: ESP boxes, soft aim, EAC maintenance, and pricing for PC. Clear answers before you buy.',
		h1: 'ARK Hacks FAQ — Common Questions',
		intro:
			'Answers about undetected ARK Hacks — ESP wallhack, radar hack, Aimbot, EAC maintenance, checkout, and ARK compatibility on Windows PC.',
		imageAlt: "ARK Hacks FAQ — delivery, setup, and update answers",
		galleryTitle: 'ARK Hacks FAQ visuals',
		ctaPrimary: 'Buy ARK Hacks',
		ctaSecondary: 'Contact support',
		ctaSecondaryHref: '/support/',
		sections: [
			section(
				'What is ARK Hacks?',
				'ARK Hacks is an undetected cheat package for ARK on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with EAC maintenance updates.',
				'Packages cover raid and scav-run. Explore <a href="/features/">Features</a> for the full control list and <a href="/ark-esp/">ESP</a> / <a href="/ark-aimbot/">Aimbot</a> for module detail.',
				`ARK itself is published by Studio Wildcard (${EXT.ark}). Cheats are third-party tools and may violate Studio Wildcard' rules — use is at your own risk.`,
			),
			section(
				'Are ARK Hacks undetected in 2026?',
				'ARK Hacks is maintained with rebuilds after Easy Anti-Cheat and game patches. Check the <a href="/updates/">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.',
				'Read <a href="/ark-hacks/">undetected ARK hacks</a> and the <a href="/updates/">Easy Anti-Cheat guide</a> for the maintenance workflow.',
				'Responsible settings and reading maintenance notes before queueing are essential.',
			),
			section(
				'Delivery, pricing, and support',
				'Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href="/pricing/">Pricing</a>.',
				'Contact support@arkhacks.com or the <a href="/support/">Support page</a> with order details for setup or billing help. First launch steps are on <a href="/setup/">Setup</a>.',
				'Refund eligibility is covered in the <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	support: {
		title: 'ARK Hacks Support | Help & Contact',
		description:
			'Contact ark cheats support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.',
		h1: 'ARK Hacks Support — Contact Us',
		intro:
			'Get help with ARK Hacks licenses, checkout, ESP wallhack setup, Aimbot profiles, and EAC maintenance for ARK on Windows PC.',
		imageAlt: "ARK Hacks support page for license and setup help",
		galleryTitle: 'ARK Hacks support resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'When to contact support',
				'Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after EAC maintenance rebuilds.',
				'Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.',
				'Many answers already live in <a href="/faq/">FAQ</a>, <a href="/setup/">Setup</a>, and <a href="/updates/">Updates</a> — check those first for faster resolution.',
			),
			section(
				'Response times and scope',
				'Support requests are reviewed daily. ARK Hacks support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Studio Wildcard bans.',
				`Account and game policy questions belong with Studio Wildcard. We can help with license delivery and product configuration only.`,
				'Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.',
			),
			section(
				'Self-service resources',
				'Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. EAC bypass notes live on the dedicated <a href="/updates/">Easy Anti-Cheat page</a>.',
				'Email: support@arkhacks.com',
				'Ready to purchase or renew? Open <a href="/pricing/">Pricing</a>. Need feature detail first? See <a href="/features/">Features</a>.',
			),
		],
	},
	undetected: {
		title: 'Undetected ARK Hacks 2026 | Easy Anti-Cheat Maintenance',
		description:
			'Undetected ark cheats with EAC maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you queue.',
		h1: 'Undetected ARK Hacks — Easy Anti-Cheat Maintenance',
		intro:
			'How ARK Hacks stays maintained for ARK after Easy Anti-Cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.',
		imageAlt: "ARK Hacks undetected status overview for Windows PC",
		galleryTitle: 'Undetected ARK Hacks visuals',
		ctaPrimary: 'Buy ARK Hacks',
		ctaSecondary: 'EAC bypass guide',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'What undetected means for ARK Hacks',
				'Undetected ARK Hacks means the package is actively maintained against Easy Anti-Cheat and major ARK patches — not that detection is impossible forever.',
				'Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after EAC security updates.',
				`Anti-cheat technology is documented by ${EXT.eac}; ARK client updates ship through ${EXT.activision}. Undetected status is an ongoing process tied to those releases.`,
			),
			section(
				'EAC maintenance workflow',
				'When Easy Anti-Cheat or ARK updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href="/updates/">Updates page</a>, and delivers rebuilt builds to active licenses.',
				`On patch mornings, also check ${EXT.status} for launcher outages that can look like product failures.`,
				'Deep technical workflow: <a href="/updates/">EAC bypass ARK guide</a>. Feature stack: <a href="/features/">Features</a>.',
			),
			section(
				'Responsible use and next steps',
				'Combine maintenance with conservative in-game settings. Read the <a href="/faq/">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.',
				'Lifetime and monthly plans include rebuild access during active terms — see <a href="/pricing/">Pricing</a>.',
				'New buyers should also read <a href="/ark-hacks/">ARK hacks 2026</a> and complete <a href="/setup/">Setup</a> after delivery.',
			),
		],
	},
	wallhack: {
		title: 'ARK Wallhack 2026 | ESP Boxes & Visibility',
		description:
			'ARK wallhack ESP with player boxes and loot markers for Windows PC. Undetected ark cheats — learn overlays and buy.',
		h1: 'ARK Wallhack — ESP Boxes & Visibility',
		intro:
			'ARK wallhack ESP for ARK — see players, loot, bosses, and containers through toggleable wallhack overlays built for player raids and scav-runs.',
		imageAlt: "ARK wallhack visibility through walls in a raid",
		galleryTitle: 'ARK wallhack ESP gallery',
		ctaPrimary: 'Buy ARK Hacks',
		ctaSecondary: 'ARK ESP page',
		ctaSecondaryHref: '/ark-esp/',
		sections: [
			section(
				'Wallhack ESP vs raw aim tools',
				'A ARK wallhack focuses on information — player outlines, loot pins, boss threat cues — rather than automatic aiming. ARK Hacks bundles wallhack ESP with radar and optional Aimbot in one license.',
				'Toggle categories so only the wallhack overlays you need stay active during rotations and base raid holds.',
				'For the broader ESP keyword page see <a href="/ark-esp/">ARK ESP</a>; for combat assist see <a href="/ark-aimbot/">Aimbot</a>.',
			),
			section(
				'Map coverage for wallhack ESP',
				'Wallhack overlays support raid, scav-run, and competitive lobbies with distance readouts and snaplines for engagement control.',
				`Season maps and POI changes are announced via ${EXT.ark}. Wallhack remains useful because it tracks entities, not fixed landmarks alone.`,
				'Pair wallhack awareness with <a href="/ark-radar-hack/">radar hack</a> cues for flanks during building and rooftop fights.',
			),
			section(
				'Undetected wallhack maintenance',
				'ESP wallhack modules rebuild after Easy Anti-Cheat patches. Follow the <a href="/updates/">Updates page</a> and complete checkout for instant license delivery on Windows PC.',
				'Learn the full maintenance story on <a href="/ark-hacks/">undetected ARK hacks</a> and <a href="/updates/">EAC bypass</a>.',
				'Ready to buy? Compare <a href="/pricing/">Pricing</a> or continue to the <a href="/ark-esp/">ESP hack</a> landing for alternate search wording.',
			),
		],
	},
	radar: {
		title: 'ARK Radar Hack 2026 | 2D Threat Overlay',
		description:
			'ARK radar hack for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our ark cheats package.',
		h1: 'ARK Radar Hack — 2D Threat Awareness',
		intro:
			'2D radar-style overlay for ARK — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.',
		imageAlt: "ARK 2D radar overlay showing nearby threats",
		galleryTitle: 'ARK radar hack visuals',
		ctaPrimary: 'Buy ARK Hacks',
		ctaSecondary: 'See ESP wallhack',
		ctaSecondaryHref: '/ark-esp/',
		sections: [
			section(
				'Why radar hack matters in ARK',
				'raids fights happen in three dimensions — rooftops, windows, and flanks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third party.',
				'ARK Hacks radar complements <a href="/ark-esp/">ESP wallhack</a> markers during squad pushes and base raid camp fights.',
				`Mode rules and seasonal changes come from ${EXT.ark}. Radar range remains configurable when map scale or mobility meta shifts.`,
			),
			section(
				'Configurable radar range',
				'Adjust radar range for early rotations versus tight base raid holds. Directional cues highlight flanks during building clears and flank pushes across raid and scav-run.',
				'Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href="/ark-hacks/">mod menu</a> page.',
				'Combat follow-up lives on <a href="/ark-aimbot/">Aimbot</a> when you convert radar info into a fight.',
			),
			section(
				'Maintenance and licensing',
				'Radar hack modules receive EAC maintenance rebuilds with the full ARK Hacks package. Monthly and lifetime licenses include digital delivery — see <a href="/pricing/">Pricing</a>.',
				'Check <a href="/updates/">Updates</a> after major ARK patches before relying on previous radar configs.',
				'New to the stack? Start at <a href="/features/">Features</a> or <a href="/ark-hacks/">undetected status</a>.',
			),
		],
	},
	'eac': {
		title: 'EAC Bypass ARK | ARK Hacks Maintenance',
		description:
			'How ark cheats rebuild after EAC patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before queueing.',
		h1: 'EAC Bypass — ARK Hacks Maintenance',
		intro:
			'Understand Easy Anti-Cheat maintenance for ARK Hacks — how ESP wallhack, radar hack, and Aimbot rebuild after ARK security updates.',
		imageAlt: "ARK Hacks maintenance after a EAC patch",
		galleryTitle: 'EAC maintenance visuals',
		ctaPrimary: 'Buy ARK Hacks',
		ctaSecondary: 'Check updates',
		ctaSecondaryHref: '/updates/',
		sections: [
			section(
				'Easy Anti-Cheat overview',
				`Easy Anti-Cheat is Studio Wildcard' anti-cheat for ARK on PC (see ${EXT.eac}). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.`,
				`ARK Hacks monitors EAC patch notes and ARK seasonal updates from ${EXT.ark} to schedule module reviews.`,
				'“EAC bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.',
			),
			section(
				'What happens after a EAC patch',
				'The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href="/updates/">Updates</a>, and ships rebuilt packages to active licenses.',
				`Confirm Studio Wildcard service health on ${EXT.status} if the launcher or matchmaking fails during the same window.`,
				'Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href="/ark-hacks/">undetected ARK hacks</a>.',
			),
			section(
				'No permanent bypass guarantee',
				'EAC bypass in practice means timely maintenance. Read the undetected guide, <a href="/faq/">FAQ</a>, and Updates log before every session.',
				'Contact <a href="/support/">Support</a> if activation fails immediately after a posted rebuild.',
				'Buying for the first time? Compare <a href="/pricing/">Pricing</a> and finish <a href="/setup/">Setup</a> only after Updates shows a live build.',
			),
		],
	},
	'cheats-2026': {
		title: 'ARK Hacks 2026 | ESP Soft Aim & Radar',
		description:
			'Best ark cheats 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected ark cheats with EAC maintenance — compare and buy.',
		h1: 'ARK Hacks 2026 — ESP, Soft Aim & Radar',
		intro:
			'The 2026 ARK Hacks package for ARK — undetected ESP wallhack, radar hack, and Aimbot with EAC maintenance, instant delivery, and Windows PC support.',
		imageAlt: "ARK Hacks product overview for ARK: Survival Ascended",
		galleryTitle: 'ARK Hacks 2026 gallery',
		ctaPrimary: 'Buy ARK Hacks',
		ctaSecondary: 'Compare features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'Why ark cheats buyers choose ARK Hacks in 2026',
				'2026 seasons bring new maps, weapons, and Easy Anti-Cheat updates. ARK Hacks bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.',
				`Track official season messaging on ${EXT.ark}, then use our <a href="/updates/">Updates log</a> for product rebuild timing.`,
				'Monthly ($35) and lifetime ($150) plans cover raid and scav-run loops — see <a href="/pricing/">Pricing</a>.',
			),
			section(
				'Full feature stack for 2026 buyers',
				'Player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.',
				'Deep links: <a href="/ark-hacks/">ARK hacks pillar</a>, <a href="/ark-esp/">ESP</a>, <a href="/ark-aimbot/">Aimbot</a>, <a href="/ark-esp/">wallhack</a>, <a href="/ark-radar-hack/">radar</a>, <a href="/ark-hacks/">undetected</a>.',
				'Instant digital delivery after checkout confirmation worldwide.',
			),
			section(
				'Before you buy in 2026',
				'Read the <a href="/ark-hacks/">ARK hacks</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.',
				'Also compare the <a href="/ark-hacks/">ARK hacks</a> checklist, <a href="/blog/ark-hacks-2026-whats-new/">2026 blog guide</a>, and <a href="/faq/">FAQ</a>.',
				'Support is available at support@arkhacks.com via the <a href="/support/">Support page</a>.',
			),
		],
	},
	hacks: {
		title: 'ARK Hacks 2026 | Undetected ESP Aimbot Guide',
		description:
			'ARK hacks for Windows PC: undetected ESP wallhack, radar hack, and Aimbot with EAC maintenance. Compare ark cheats options and buy the full package.',
		h1: 'ARK Hacks — Undetected ESP, Aimbot & Wallhack',
		intro:
			'ARK hacks for raid and scav-run combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after Easy Anti-Cheat patches. This is the pillar guide for ark cheats in 2026.',
		imageAlt: "ARK Hacks product page — ESP, aimbot, and radar",
		galleryTitle: 'ARK hacks gallery — ESP, Aimbot, wallhack',
		ctaPrimary: 'Buy ARK Hacks',
		ctaSecondary: 'See undetected guide',
		ctaSecondaryHref: '/ark-hacks/',
		sections: [
			section(
				'What ARK hacks include in 2026',
				'Players searching for ARK hacks usually want visibility and combat tools without stacking separate downloads. ARK Hacks bundles player ESP wallhack, loot markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called ark cheats.',
				'Coverage spans raid and scav-run with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.',
				`Official game updates come from ${EXT.ark}; our hacks package tracks those releases via the <a href="/updates/">Updates page</a>. Cross-check platform health on ${EXT.status} before patch-day queues.`,
			),
			section(
				'How this ARK hacks pillar fits nearby pages',
				'Use this pillar for the core product overview. For year-specific buying notes, see the <a href="/ark-hacks/">ark cheats 2026</a> and <a href="/ark-hacks/">ARK hacks</a> pages cover buyer comparisons in cheats wording.',
				'Deep-dive modules: <a href="/ark-esp/">ARK ESP</a>, <a href="/ark-aimbot/">ARK Aimbot</a>, <a href="/ark-esp/">wallhack</a>, <a href="/ark-radar-hack/">radar hack</a>, and <a href="/ark-aimbot/">soft aim</a>.',
				'Blog guides expand Easy Anti-Cheat keyword: <a href="/blog/ark-hacks-complete-guide-2026/">hacks complete guide</a>, <a href="/blog/escape-from-ark-hacks-buyers-guide/">cheats buyers guide</a>, and <a href="/blog/undetected-ark-hacks-eac/">undetected Easy Anti-Cheat notes</a>.',
			),
			section(
				'ARK hacks vs single-feature tools',
				'Standalone hacks often cover only wallhack or only aim assist. ARK Hacks maps the full raid loop: read enemy squads, track bosses and containers, spot flanks on radar, and tune Aimbot per weapon class.',
				'Compare the <a href="/ark-esp/">ESP</a>, <a href="/ark-aimbot/">Aimbot</a>, and <a href="/features/">Features</a> pages — or review <a href="/pricing/">Pricing</a> for monthly and lifetime licenses.',
				'Related landings: <a href="/setup/">cheat download</a>, <a href="/ark-hacks/">mod menu</a>, <a href="/ark-aimbot/">aimbot</a>, <a href="/ark-esp/">ESP</a>.',
			),
			section(
				'Undetected ARK hacks with EAC maintenance',
				'Undetected ARK hacks require rebuilds after Easy Anti-Cheat and major ARK patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.',
				`See ${EXT.eac} for anti-cheat background and our <a href="/updates/">EAC bypass guide</a> for the practical workflow. Pair with <a href="/ark-hacks/">undetected ARK hacks</a> for status language buyers expect.`,
				'Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href="/setup/">Setup</a> and keep <a href="/support/">Support</a> ready with your order ID.',
			),
		],
	},
	'cheat-download': {
		title: 'ARK Hack Download 2026 | Instant Access',
		description:
			'ARK cheat download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.',
		h1: 'ARK Hack Download — Instant License Delivery',
		intro:
			'How ARK cheat download works for ARK — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.',
		imageAlt: "ARK Hacks download and install delivery flow",
		galleryTitle: 'ARK cheat download visuals',
		ctaPrimary: 'Buy ARK Hacks',
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		sections: [
			section(
				'How ARK cheat download delivery works',
				'After checkout confirms payment, ARK Hacks license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.',
				'Keep your order confirmation and license email ready for the <a href="/setup/">Setup guide</a> and Support requests.',
				`If Studio Wildcard services are down, check ${EXT.status} before assuming a download failure.`,
			),
			section(
				'What your download unlocks',
				'Every ARK cheat download includes player ESP wallhack, loot and container markers, 2D radar overlays, Aimbot profiles, and in-client toggles for player raids and scav-runs.',
				'Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href="/pricing/">Pricing page</a>.',
				'Feature detail: <a href="/features/">Features</a>. Module pages: <a href="/ark-esp/">ESP</a>, <a href="/ark-aimbot/">Aimbot</a>.',
			),
			section(
				'After purchase — setup and updates',
				'Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When ARK or Easy Anti-Cheat patches ship, check the <a href="/updates/">Updates page</a> for maintenance rebuilds.',
				'Contact <a href="/support/">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.',
				'Also read <a href="/ark-hacks/">undetected status</a> so you know what “download ready” means after a patch.',
			),
		],
	},
	'mod-menu': {
		title: 'ARK Mod Menu 2026 | ESP & Soft Aim Toggles',
		description:
			'ARK mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected ark cheats package.',
		h1: 'ARK Mod Menu — In-Client Control Panel',
		intro:
			'ARK mod menu controls for ARK — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your ARK session on Windows PC.',
		imageAlt: "ARK Hacks in-game menu controls",
		galleryTitle: 'ARK mod menu gallery',
		ctaPrimary: 'Buy ARK Hacks',
		ctaSecondary: 'Full feature list',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What a ARK mod menu controls',
				'A ARK mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. ARK Hacks keeps those toggles accessible with hotkeys.',
				'Toggle player outlines, loot markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of ARK.',
				'Control deep-dives: <a href="/ark-esp/">ESP</a>, <a href="/ark-aimbot/">Aimbot</a>, <a href="/ark-radar-hack/">radar</a>.',
			),
			section(
				'Mod menu categories for player raids and scav-runs',
				'Separate ESP wallhack categories for players, loot, containers, and bosses let you reduce overlay noise during rotations and base raid holds.',
				'Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.ark} seasons change fight distances and mobility.',
				'Soft tracking players should start with <a href="/ark-aimbot/">soft aim</a> profiles before aggressive FOV.',
			),
			section(
				'Maintained mod menu after EAC patches',
				'ARK mod menu behavior is rebuilt when Easy Anti-Cheat or major ARK updates land. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">EAC bypass guide</a> before queueing on patch days.',
				'Checkout with instant digital delivery for monthly and lifetime licenses — see <a href="/pricing/">Pricing</a>.',
				'Need install steps? Open <a href="/setup/">Setup</a> after your license email arrives.',
			),
		],
	},
	'soft-aim': {
		title: 'ARK Soft Aim 2026 | Smooth Aimbot Settings',
		description:
			'ARK soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our ark cheats with ESP boxes.',
		h1: 'ARK Soft Aim — Smooth Aimbot Controls',
		intro:
			'ARK soft aim settings for ARK — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "ARK soft aim FOV and smoothness settings",
		galleryTitle: 'ARK soft aim gallery',
		ctaPrimary: 'Buy ARK Hacks',
		ctaSecondary: 'Aimbot controls',
		ctaSecondaryHref: '/ark-aimbot/',
		sections: [
			section(
				'What ARK soft aim means',
				'ARK soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. ARK Hacks exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.',
				'Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.',
				'Full Aimbot documentation: <a href="/ark-aimbot/">ARK Aimbot</a>. Alternate wording: <a href="/ark-aimbot/">aimbot hack</a>.',
			),
			section(
				'Soft aim profiles per weapon class',
				'Save separate soft aim profiles for ARs, SMGs, and bolt-actions. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.',
				`Weapon TTKs shift with ${EXT.ark} balance patches — retune smoothness after major combat updates.`,
				'Soft aim ships alongside <a href="/ark-esp/">ESP wallhack</a> and <a href="/ark-radar-hack/">2D radar</a> overlays.',
			),
			section(
				'Undetected soft aim with EAC maintenance',
				'Aimbot modules rebuild after Easy Anti-Cheat patches. Check the <a href="/updates/">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.',
				'Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href="/pricing/">Pricing</a>.',
				'Activation help: <a href="/setup/">Setup</a> · status questions: <a href="/support/">Support</a>.',
			),
		],
	},
	'best-cheats': {
		title: 'Best ARK Hacks 2026 | Buyer Guide',
		description:
			'Best ark cheats for 2026: ESP boxes, soft aim, and EAC maintenance on Windows PC. Use this checklist before checkout.',
		h1: 'Best ARK Hacks — 2026 Buyer Guide',
		intro:
			'Compare the ARK hacks for ARK in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Easy Anti-Cheat rebuilds and instant delivery.',
		imageAlt: "ARK Hacks overview for ARK: Survival Ascended on PC",
		galleryTitle: 'Best ARK hacks gallery',
		ctaPrimary: 'Buy ARK Hacks',
		ctaSecondary: 'Compare pricing',
		ctaSecondaryHref: '/pricing/',
		sections: [
			section(
				'What makes the ARK hacks in 2026',
				'The ARK hacks combine active EAC maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.',
				'ARK Hacks covers raid and scav-run with in-client toggles and post-patch rebuilds.',
				`Verify the live game is healthy via ${EXT.status}, then confirm our <a href="/updates/">Updates</a> note before you judge any package “best.”`,
			),
			section(
				'Best ARK hacks feature checklist',
				'Look for player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after ARK patches.',
				'Review <a href="/features/">Features</a>, <a href="/ark-hacks/">undetected status</a>, and <a href="/ark-hacks/">ARK hacks 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.',
				'Module pages worth opening: <a href="/ark-esp/">ESP</a>, <a href="/ark-aimbot/">Aimbot</a>, <a href="/ark-hacks/">hacks</a>.',
			),
			section(
				'Buying the ARK hacks safely',
				'Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.',
				'No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.',
				`Remember: using cheats can violate Studio Wildcard terms. Proceed only if you accept that risk.`,
			),
		],
	},
	'aimbot-hack': {
		title: 'ARK Aimbot Hack 2026 | Soft Aim Assist',
		description:
			'ARK aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our ark cheats package.',
		h1: 'ARK Aimbot Hack — Soft Aim Assist',
		intro:
			'ARK aimbot hack tools for ARK — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.',
		imageAlt: "ARK aimbot hack controls and bone priority",
		galleryTitle: 'ARK aimbot hack gallery',
		ctaPrimary: 'Buy ARK Hacks',
		ctaSecondary: 'Aimbot settings',
		ctaSecondaryHref: '/ark-aimbot/',
		sections: [
			section(
				'ARK aimbot hack vs visibility tools',
				'A ARK aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. ARK Hacks bundles aimbot hack modules with visibility overlays in one license.',
				'Smoothness, FOV, and sensitivity controls tune assist for ARK combat pace across player raids and scav-runs.',
				'Prefer softer tracking language? See <a href="/ark-aimbot/">soft aim</a>. Full settings: <a href="/ark-aimbot/">Aimbot page</a>.',
			),
			section(
				'Aimbot hack controls and hotkeys',
				'Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-raid base raids.',
				'Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.',
				`Balance patches from ${EXT.ark} can change ideal FOV — retune after major weapon updates.`,
			),
			section(
				'Undetected aimbot hack maintenance',
				'Aimbot hack signatures rebuild after Easy Anti-Cheat updates. Follow the <a href="/updates/">Updates page</a> and <a href="/updates/">EAC bypass guide</a> before queueing after patch days.',
				'Checkout with instant digital delivery for Windows 10 and 11 — <a href="/pricing/">Pricing</a>.',
				'Pair with <a href="/ark-esp/">ESP</a> for the full information + assist loop.',
			),
		],
	},
	'esp-hack': {
		title: 'ARK ESP Hack 2026 | Player Boxes & Loot',
		description:
			'ARK ESP hack with player boxes and loot markers for Windows PC. Undetected ark cheats with — see overlays and buy.',
		h1: 'ARK ESP Hack — Player Boxes Guide',
		intro:
			'ARK ESP hack overlays for ARK — player outlines, boss threat cues, loot and container markers with distance readouts across raid and scav-run.',
		imageAlt: "ARK ESP hack boxes and loot markers",
		galleryTitle: 'ARK ESP hack gallery',
		ctaPrimary: 'Buy ARK Hacks',
		ctaSecondary: 'ESP controls',
		ctaSecondaryHref: '/ark-esp/',
		sections: [
			section(
				'What a ARK ESP hack shows',
				'A ARK ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.',
				'Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.',
				'Canonical visibility guide: <a href="/ark-esp/">ARK ESP</a>. Wallhack wording: <a href="/ark-esp/">wallhack</a>.',
			),
			section(
				'ESP hack categories for raids',
				'Toggle player ESP hack, loot markers, chest pins, and vehicle cues independently so only raid-critical overlays stay active during rotations.',
				'Team and enemy colour coding supports player raids and scav-runs.',
				`POI and loot changes publish through ${EXT.activision} — keep categories toggled to what the current map rewards.`,
			),
			section(
				'Undetected ESP hack with EAC maintenance',
				'ESP hack modules rebuild after Easy Anti-Cheat and ARK patches. Check the <a href="/updates/">Updates page</a> before queueing — pair ESP hack awareness with <a href="/ark-radar-hack/">radar hack</a> for flank reads.',
				'Licenses deliver digitally after checkout on Windows PC — see <a href="/pricing/">Pricing</a>.',
				'Install steps: <a href="/setup/">Setup</a>. Status questions: <a href="/ark-hacks/">undetected guide</a>.',
			),
		],
	},
	'unlock-all': {
		title: 'ARK Unlock All 2026 | What It Really Means',
		description:
			'ARK unlock all explained vs real ark cheats — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.',
		h1: 'ARK Unlock All — What Players Search For',
		intro:
			'ARK unlock all is a common search term for ARK — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools ARK Hacks actually provides on Windows PC.',
		imageAlt: "ARK Hacks license features overview",
		galleryTitle: 'ARK unlock all guide visuals',
		ctaPrimary: 'Buy ARK Hacks',
		ctaSecondary: 'See features',
		ctaSecondaryHref: '/features/',
		sections: [
			section(
				'What ARK unlock all usually means',
				'ARK unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.',
				'ARK Hacks focuses on in-match awareness — player ESP, loot markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.',
				`Cosmetics and wipe progression items are sold through ${EXT.ark}. Be wary of unlock-all downloads that promise free skins — they are often scams.`,
			),
			section(
				'Visibility tools vs unlock-all claims',
				'ESP wallhack helps you spot enemy squads, bosses, and rare resources during live matches. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.',
				'For loadout planning during a match, loot and container markers speed map rotations — see the <a href="/ark-esp/">ESP</a> and <a href="/features/">Features</a> pages for the full tool list.',
				'Related: <a href="/ark-hacks/">ARK hacks</a> and <a href="/ark-hacks/">ARK hacks</a>.',
			),
			section(
				'Buying ARK Hacks for the right reasons',
				'If you need undetected ESP wallhack, radar hack, and Aimbot for ARK on Windows PC, compare <a href="/pricing/">Pricing</a> and read the <a href="/setup/">Setup guide</a> before checkout.',
				'Check the <a href="/updates/">Updates page</a> after Easy Anti-Cheat patches — maintenance rebuilds publish for active licenses.',
				'Questions? <a href="/faq/">FAQ</a> and <a href="/support/">Support</a> cover delivery and configuration — not cosmetic unlocks.',
			),
		],
	},
	privacy: {
		title: 'Privacy Policy | ARK Hacks',
		description:
			'Privacy policy for ARK Hacks. How we handle support emails, order data, and checkout for ark cheats licenses on arkhacks.com.',
		h1: 'Privacy Policy',
		intro: 'How ARK Hacks handles information when you browse arkhacks.com or contact support about a ARK license.',
		imageAlt: "ARK Hacks privacy policy page",
		galleryTitle: 'ARK Hacks legal resources',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read terms of use',
		ctaSecondaryHref: '/terms/',
		sections: [
			section(
				'Information we may collect',
				'We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.',
				'We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.',
				['Contact details you send by email', 'Order references for support requests', 'Basic technical data for site security'],
			),
			section(
				'How information is used',
				'Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.',
				'Analytics may use aggregated traffic data without identifying individual ARK Hacks customers.',
			),
			section(
				'Your choices and contact',
				'You may request correction or deletion of support email data by contacting support@arkhacks.com with your request details.',
				'Policy updates publish on this page. Continued use of arkhacks.com after updates means you accept the revised policy. Also see <a href="/terms/">Terms of Use</a> and <a href="/refund-policy/">Refund Policy</a>.',
			),
		],
	},
	refund: {
		title: 'Refund Policy | ARK Hacks',
		description:
			'Refund policy for ARK Hacks. Digital delivery terms and eligibility for ark cheats packages with ESP, soft aim, and radar.',
		h1: 'Refund Policy',
		intro:
			'Refund terms for ARK Hacks licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for ARK.',
		imageAlt: "ARK Hacks refund policy page",
		galleryTitle: 'ARK Hacks billing resources',
		ctaPrimary: 'Contact support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Digital delivery and eligibility',
				'ARK Hacks licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.',
				'Submit refund requests within 24 hours of purchase with your order ID and reason.',
			),
			section(
				'When refunds may be approved',
				'Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.',
				'Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href="/terms/">Terms of Use</a>.',
			),
			section(
				'How to request a refund',
				'Email support@arkhacks.com with subject "Refund Request", your order ID, purchase date, and issue summary — or use the <a href="/support/">Support page</a>.',
				'Approved refunds process back to the original payment method when possible. Pricing details live on <a href="/pricing/">Pricing</a>.',
			),
		],
	},
	terms: {
		title: 'Terms of Use 2026 | ARK Hacks Rules',
		description:
			'Terms of use for arkhacks.com and ARK Hacks licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.',
		h1: 'Terms of Use',
		intro: 'Terms governing use of arkhacks.com and ARK Hacks licenses for ARK on Windows PC.',
		imageAlt: "ARK Hacks terms of use page",
		galleryTitle: 'ARK Hacks legal pages',
		ctaPrimary: 'Email support',
		ctaSecondary: 'Read privacy policy',
		ctaSecondaryHref: '/privacy-policy/',
		sections: [
			section(
				'Acceptance and license scope',
				'By purchasing or using ARK Hacks you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for ARK on Windows PC only.',
				'Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.',
			),
			section(
				'Risk and anti-cheat disclaimer',
				`Using cheats in ARK may violate Studio Wildcard terms and result in account penalties. ARK Hacks provides maintenance but does not guarantee undetected status or account safety.`,
				'You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href="/ark-hacks/">undetected status</a>.',
			),
			section(
				'Changes and governing law',
				'We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.',
				'Contact support@arkhacks.com for questions. Related policies: <a href="/privacy-policy/">Privacy</a> and <a href="/refund-policy/">Refunds</a>.',
			),
		],
	},
};

/** Attach heroImage paths and clamp meta lengths. */
export function finalizePage(pageId, page) {
	return {
		...page,
		title: clampTitle(stripZadeyoFromMeta(page.title)),
		description: clampDesc(stripZadeyoFromMeta(page.description)),
		heroImage: HERO_IMAGES[pageId],
	};
}

export function finalizePages(pages) {
	const out = {};
	for (const [id, page] of Object.entries(pages)) {
		out[id] = finalizePage(id, page);
	}
	return out;
}

export const englishPagesFinal = finalizePages(enPages);
