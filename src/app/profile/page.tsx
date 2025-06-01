import { OrdersList } from '@/entities'
import styles from './page.module.css'

export default async function ProfilePage() {
	return (
		<main className={styles.profile}>
			<OrdersList />
		</main>
	)
}
