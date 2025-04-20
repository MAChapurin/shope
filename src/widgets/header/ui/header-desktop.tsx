import { NavigationDesktop } from '@/widgets'
import { FloatNavIndicator } from '@/features'
import { Logo } from '@/shared/ui'
import { cn } from '@/shared/lib'

import styles from './styles.module.css'

export const HeaderDesktop = () => {
	return (
		<>
			<header className={cn(styles.header, styles.isDesktop)}>
				<Logo />
				<NavigationDesktop />
			</header>
			<FloatNavIndicator />
		</>
	)
}
