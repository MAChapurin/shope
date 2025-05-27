import { Loader } from '@/shared/ui'
import styles from './page.module.css'

export default function Loading() {
	return (
		<div className={styles.loading}>
			<Loader />
		</div>
	)
}
