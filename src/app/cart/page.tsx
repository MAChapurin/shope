import { Title } from '@/shared/ui'
import { CartList, FormOrder } from '@/widgets'

import styles from './page.module.css'
import { getProfile } from '@/entities'

export default async function CartPage() {
	const user = await getProfile()
	return (
		<main className={styles.container}>
			<Title As='h1' align='center' className={styles.title}>
				Корзина
			</Title>
			<div className={styles.content}>
				<CartList />
				<FormOrder user={user} />
			</div>
		</main>
	)
}
