import { CartLinkWithIndicator, Search } from '@/features'
import { Logo } from '@/shared/ui'
import { BurgerMenuButton } from '@/features/burger-menu-button/ui/burger-menu-button'
import cn from 'clsx'

import styles from './styles.module.css'
import { NavigationMobile } from '@/widgets/navigation'

export const HeaderMobile = () => {
	return (
		<header className={cn(styles.header, styles.isMobile)}>
			<div className={styles.top}>
				<Logo />
				<div className={styles.space} />
				<CartLinkWithIndicator />
				<BurgerMenuButton />
			</div>
			<Search />
			<NavigationMobile />
		</header>
	)
}
