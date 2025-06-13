'use client'

import { PATH_NAMES } from '@/shared/settings'
import Link from 'next/link'
import { cn } from '@/shared/lib'
import { usePathname } from 'next/navigation'
import styles from './styles.module.css'

export const AuthNavigation = () => {
	const pathname = usePathname()
	return (
		<nav className={styles.nav}>
			<Link
				className={cn(styles.nav__link, {
					[styles['nav__link--left']]: pathname === PATH_NAMES.LOGIN
				})}
				href={PATH_NAMES.LOGIN}
			>
				Войти
			</Link>
			<Link
				className={cn(styles.nav__link, {
					[styles['nav__link--right']]: pathname === PATH_NAMES.REGISTER
				})}
				href={PATH_NAMES.REGISTER}
			>
				Регистрация
			</Link>
		</nav>
	)
}
