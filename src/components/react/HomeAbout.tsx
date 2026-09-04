import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type Props = {
	locale: string;
};

const features = [
	{ key: 'featEsp', descKey: 'featEspDesc', icon: 'esp' },
	{ key: 'featAimbot', descKey: 'featAimbotDesc', icon: 'aim' },
	{ key: 'featCombat', descKey: 'featCombatDesc', icon: 'combat' },
	{ key: 'featUpdates', descKey: 'featUpdatesDesc', icon: 'updates' },
] as const;

const quickLinks = [
	{ href: '/ark-hacks/', labelKey: 'pillHacks' },
	{ href: '/ark-esp/', labelKey: 'pillEsp' },
	{ href: '/ark-aimbot/', labelKey: 'pillAimbot' },
	{ href: '/updates/', labelKey: 'pillStatus' },
] as const;

function FeatureIcon({ icon }: { icon: string }) {
	if (icon === 'esp') {
		return (
			<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
				<circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.6" />
				<path d="M12 8.5v3.2L14.2 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
			</svg>
		);
	}
	if (icon === 'aim') {
		return (
			<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
				<circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
				<circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.6" />
			</svg>
		);
	}
	if (icon === 'combat') {
		return (
			<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
				<path
					d="M5 12h14M12 5v14"
					stroke="currentColor"
					strokeWidth="1.6"
					strokeLinecap="round"
				/>
			</svg>
		);
	}
	return (
		<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path
				d="M5 13.2l4.2 4.2L19 7.6"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function HomeAboutInner() {
	const { t } = useTranslation();

	return (
		<section className="home-about shell" aria-labelledby="home-about-title">
			<header className="home-about__head">
				<p className="home-about__eyebrow">{t('home.aboutEyebrow')}</p>
				<h2 id="home-about-title">{t('home.aboutTitle')}</h2>
				<p className="home-about__lede">{t('home.aboutP1')}</p>
			</header>

			<div className="home-about__grid">
				{features.map((item) => (
					<article key={item.key} className="home-about__card">
						<div className="home-about__icon" aria-hidden="true">
							<FeatureIcon icon={item.icon} />
						</div>
						<h3>{t(`home.${item.key}`)}</h3>
						<p>{t(`home.${item.descKey}`)}</p>
					</article>
				))}
			</div>

			<div className="home-about__links">
				<p className="home-about__links-label">{t('home.aboutP2Intro')}</p>
				<div className="home-about__pills">
					{quickLinks.map((link) => (
						<a key={link.href} href={link.href}>
							{t(`home.${link.labelKey}`)}
						</a>
					))}
				</div>
			</div>
		</section>
	);
}

export default function HomeAboutApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeAboutInner />
		</I18nProvider>
	);
}
