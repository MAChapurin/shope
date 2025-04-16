import Link from 'next/link'
import { CartLinkWithIndicator, Search } from '@/features'
import { Icon } from '@/shared/ui'
import styles from './styles.module.css'

export const NavigationDesktop = () => {
	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				<li className={styles.item}>
					<Link className={styles.link} href={'/catalog'}>
						Магазин
					</Link>
				</li>
				<li>
					<Link className={styles.link} href={'/about'}>
						О нас
					</Link>
				</li>
			</ul>
			<div className={styles.divider} />
			<Search />
			<ul className={styles.iconList}>
				<li>
					<CartLinkWithIndicator />
				</li>
				<li>
					<Link href={'/favorites'}>
						<Icon name='like' />
					</Link>
				</li>
				<li>
					<Link href={'/profile'}>
						<Icon name='profile' />
					</Link>
				</li>
			</ul>
		</nav>
	)
}
