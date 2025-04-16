import { NavigationDesktop } from '@/widgets'
import { CartLinkWithIndicator, FloatNavIndicator } from '@/features'
import { Logo } from '@/shared/ui'

import styles from './styles.module.css'
import { BurgerMenuButton } from '@/features/burger-menu-button/ui/burger-menu-button'

export const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<Logo />
				<NavigationDesktop />
				<div className={styles.isMobile}>
					<CartLinkWithIndicator />
					<BurgerMenuButton />
				</div>
			</header>
			<FloatNavIndicator />
		</>
	)
}
