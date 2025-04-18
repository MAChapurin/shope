import Link from 'next/link'
import {
	FOOTER_NAV_LINKS,
	FOOTER_SOCIALS_LINKS
} from '../settings/links-settings'
import { SubscriptionForm } from '@/widgets'

import styles from './styles.module.css'
import { Icon } from '@/shared/ui'

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
				<ul className={styles.socialsList}>
					{FOOTER_SOCIALS_LINKS.map(({ href, icon }, index) => (
						<li key={index}>
							<Link href={href}>
								<Icon name={icon} />
							</Link>
						</li>
					))}
				</ul>
			</div>
		</footer>
	)
}
