import { HeaderDesktop } from './header-desktop'
import { HeaderMobile } from './header-mobile'

import styles from './styles.module.css'

export const Header = () => {
	return (
		<div className={styles.container}>
			<HeaderDesktop />
			<HeaderMobile />
		</div>
	)
}
