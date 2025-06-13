'use client'
import Link from 'next/link'
import { cn } from '@/shared/lib'
import { PATH_NAMES } from '@/shared/settings'
import { LogoutButton } from '@/features'

import { LINK_NAMES } from '../constants'
import { useProfileNavigation } from '../model/useProfileNavigation'
import styles from './styles.module.css'

export const NavigationProfileDesktop = () => {
	const { isOrdersPage, isCurrentOrderPage, isUserPage } =
		useProfileNavigation()

	return (
		<div className={styles.nav}>
			<Link
				className={cn(styles.nav__item, {
					[styles['nav__item--active']]: isOrdersPage
				})}
				href={PATH_NAMES.PROFILE_HISTORY}
			>
				{LINK_NAMES.HISTORY}
			</Link>
			<Link
				className={cn(styles.nav__item, {
					[styles['nav__item--active']]: isCurrentOrderPage
				})}
				href={PATH_NAMES.PROFILE_ORDER}
			>
				{LINK_NAMES.CURRENT_ORDER}
			</Link>
			<Link
				className={cn(styles.nav__item, {
					[styles['nav__item--active']]: isUserPage
				})}
				href={PATH_NAMES.PROFILE_USER}
			>
				{LINK_NAMES.PROFILE}
			</Link>
			<LogoutButton className={styles.nav__item} />
			<div
				className={cn(styles.nav__indicator, {
					[styles['nav__indicator--order']]: isOrdersPage,
					[styles['nav__indicator--current']]: isCurrentOrderPage,
					[styles['nav__indicator--user']]: isUserPage
				})}
			></div>
		</div>
	)
}
