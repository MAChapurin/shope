'use client'
import { cn } from '@/shared/lib'
import { useNewOrder } from '@/entities'

import styles from './styles.module.css'

export const OrderTable = () => {
	const { order } = useNewOrder()
	if (!order) {
		return null
	}

	const sum = order.data
		.map(el => el.price * (el.count || 1))
		.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
		.toFixed()

	return (
		<div className={styles.table}>
			<table className={styles.table__table}>
				<thead>
					<tr className={styles.table__header}>
						<th className={styles.table__th}>Продукты</th>
						<th className={styles.table__th}>Количество</th>
						<th className={styles.table__th}>Итог</th>
					</tr>
				</thead>
				<tbody>
					{order.data.map(el => {
						return (
							<tr key={el.name}>
								<td className={styles.table__td}>{el.name}</td>
								<td
									className={cn(styles.table__td, styles['table__td--right'])}
								>
									{el.count}
								</td>
								<td className={styles.table__td}>{el.price}$</td>
							</tr>
						)
					})}
				</tbody>
				<tfoot>
					<tr className={styles.table__footer}>
						<td colSpan={2}>Итог</td>
						<td>{sum} $</td>
					</tr>
				</tfoot>
			</table>
		</div>
	)
}
