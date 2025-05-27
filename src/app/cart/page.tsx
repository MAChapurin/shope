'use client'
import { Loader, Title } from '@/shared/ui'
import { CartList, FormOrder } from '@/widgets'

import { useCart } from '@/entities/cart'
import { EmptyCartContent } from './empty'

import { useEffect, useState } from 'react'
import styles from './page.module.css'

export default function CartPage() {
	const { cart } = useCart()
	const [isLoading, setIsLoading] = useState(true)
	useEffect(() => {
		const id = setTimeout(() => {
			setIsLoading(false)
		}, 1000)
		return () => {
			clearTimeout(id)
		}
	}, [])
	return (
		<main className={styles.container}>
			<Title As='h1' align='center' className={styles.title}>
				Корзина
			</Title>
			{isLoading && (
				<div className={styles.loader}>
					<Loader />
				</div>
			)}
			{cart.length === 0 && !isLoading && <EmptyCartContent />}
			{cart.length > 0 && !isLoading && (
				<div className={styles.content}>
					<CartList />
					<FormOrder />
				</div>
			)}
		</main>
	)
}
