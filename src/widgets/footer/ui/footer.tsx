import Link from 'next/link'
import { FOOTER_NAV_LINKS } from '../settings/links-settings'
import { SocialsList, SubscriptionForm } from '@/widgets'

import styles from './styles.module.css'

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.row}>
				<nav className={styles.nav}>
					<ul className={styles.nav__list}>
						{FOOTER_NAV_LINKS.map(({ text, href }, index) => (
							<li key={index}>
								<Link className={styles.nav__link} href={href}>
									{text}
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<SubscriptionForm />
			</div>
			<div className={styles.row}>
				<p className={styles.copyright}>© 2024 Shoppe</p>
				<SocialsList className={styles.socialsList} />
			</div>
		</footer>
	)
}
