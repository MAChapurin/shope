'use client'
import { Title } from '@/shared/ui'
import { CartList, FormOrder } from '@/widgets'

import { useCart } from '@/entities/cart'
import { EmptyCartContent } from './empty'

import styles from './page.module.css'

export default function CartPage() {
	const { cart } = useCart()
	return (
		<main className={styles.container}>
			<Title As='h1' align='center' className={styles.title}>
				Корзина
			</Title>
			{cart.length === 0 && <EmptyCartContent />}
			{cart.length > 0 && (
				<div className={styles.content}>
					<CartList />
					<FormOrder />
				</div>
			)}
		</main>
	)
}
