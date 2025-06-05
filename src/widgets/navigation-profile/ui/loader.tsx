import { Loader } from '@/shared/ui'
import styles from './styles.module.css'

export const NavigationProfileLoader = () => {
	return (
		<div className={styles.root} style={{ justifyContent: 'center' }}>
			<Loader />
		</div>
	)
}
