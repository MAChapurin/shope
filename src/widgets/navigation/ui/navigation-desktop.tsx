import Link from 'next/link'
import { CartLinkWithIndicator, LikeLinkIndicator, Search } from '@/features'
import { Suspense } from 'react'
import { PATH_NAMES } from '@/shared/settings'
import { Avatar } from '@/entities'

import styles from './styles.module.css'

export const NavigationDesktop = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<Link className={styles.link} href={PATH_NAMES.CATALOG}>
						Магазин
					</Link>
				</li>
				<li>
					<Link className={styles.link} href={PATH_NAMES.ABOUT}>
						О нас
					</Link>
				</li>
			</ul>
			<div className={styles.divider} />
			<Suspense>
				<Search />
			</Suspense>
			<ul className={styles.iconList}>
				<li>
					<CartLinkWithIndicator />
				</li>
				<li>
					<LikeLinkIndicator />
				</li>
				<li>
					<Avatar />
				</li>
			</ul>
		</nav>
	)
}
