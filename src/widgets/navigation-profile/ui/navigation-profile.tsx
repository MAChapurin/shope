'use client'
import Link from 'next/link'
import { PATH_NAMES } from '@/shared/settings'
import { cn } from '@/shared/lib'
import { usePathname } from 'next/navigation'
import { LogoutButton } from '@/features/logout-button'
import styles from './styles.module.css'

export const NavigationProfile = () => {
	const pathname = usePathname()

	const isOrdersPage =
		pathname === PATH_NAMES.PROFILE_HISTORY || pathname === PATH_NAMES.PROFILE

	const isCurrentOrderPage = pathname === PATH_NAMES.PROFILE_ORDER
	const isUserPage = pathname === PATH_NAMES.PROFILE_USER

	return (
		<div className={styles.nav}>
			<Link
				className={cn(styles.nav__item, {
					[styles['nav__item--active']]: isOrdersPage
				})}
				href={PATH_NAMES.PROFILE_HISTORY}
			>
				История заказов
			</Link>
			<Link
				className={cn(styles.nav__item, {
					[styles['nav__item--active']]: isCurrentOrderPage
				})}
				href={PATH_NAMES.PROFILE_ORDER}
			>
				Текущий заказ
			</Link>
			<Link
				className={cn(styles.nav__item, {
					[styles['nav__item--active']]: isUserPage
				})}
				href={PATH_NAMES.PROFILE_USER}
			>
				Профиль
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
