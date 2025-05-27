import { Loader } from '@/shared/ui'
import styles from './styles.module.css'

export default function Loading() {
	return (
		<div className={styles.root}>
			<div className={styles.root__content}>
				<Loader />
			</div>
		</div>
	)
}
