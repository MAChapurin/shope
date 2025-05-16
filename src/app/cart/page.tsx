import { Title } from '@/shared/ui'
import { CartList, FormOrder } from '@/widgets'

import styles from './page.module.css'

export default function CartPage() {
	return (
		<main className={styles.container}>
			<Title As='h1' align='center' className={styles.title}>
				Корзина
			</Title>
			<div className={styles.content}>
				<CartList />
				<FormOrder />
			</div>
		</main>
	)
}
