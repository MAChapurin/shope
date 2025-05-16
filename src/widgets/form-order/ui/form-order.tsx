'use client'

import { Paragraph, Title } from '@/shared/ui'
import { useCart } from '@/entities/cart'

import styles from './styles.module.css'

export const FormOrder = () => {
	const { cart } = useCart()
	return (
		<form className={styles.form}>
			<div className={styles.sum}>
				<div className={styles.sum__top}>
					<Title As='h3'>Итог</Title>
				</div>
				<div className={styles.sum__footer}>
					<Paragraph>Стоимость</Paragraph>
					<Paragraph>
						${' '}
						{cart
							.map(item => {
								if (item.discount) {
									return (item.price / 100) * (100 - item.discount) * item.count
								}
								return item.price * item.count
							})
							.reduce(
								(accumulator, currentValue) => accumulator + currentValue,
								0
							)}
					</Paragraph>
				</div>
			</div>
		</form>
	)
}
