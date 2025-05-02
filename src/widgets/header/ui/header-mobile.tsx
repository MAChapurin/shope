import { CartLinkWithIndicator, Search } from '@/features'
import { Logo } from '@/shared/ui'
import { BurgerMenuButton } from '@/features/burger-menu-button/ui/burger-menu-button'
import { cn } from '@/shared/lib'
import { NavigationMobile } from '@/widgets/navigation'

import styles from './styles.module.css'
import { Suspense } from 'react'

export const HeaderMobile = () => {
	return (
		<header className={cn(styles.header, styles.isMobile)}>
			<div className={styles.top}>
				<Logo />
				<div className={styles.space} />
				<CartLinkWithIndicator />
				<BurgerMenuButton />
			</div>
			<Suspense>
				<Search />
			</Suspense>
			<NavigationMobile />
		</header>
	)
}
