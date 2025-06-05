import { ProductType } from '@/shared/types'
import { formatDate } from '@/shared/utils'
import { Button, Paragraph } from '@/shared/ui'
import { PATH_NAMES } from '@/shared/settings'

import Link from 'next/link'

import { getUserOrders } from '../api'
import styles from './styles.module.css'

type OrderItem = Pick<ProductType, 'name' | 'count' | 'price'>

type UserOrder = {
	status: string
	createdAt: string
	data: OrderItem[]
	id: number
}

export const OrdersList = async () => {
	const orders: UserOrder[] = await getUserOrders()
	if (!orders) {
		return null
	}

	if (orders.length === 0) {
		return (
			<div className={styles.empty}>
				<Paragraph align='center' color='secondary'>
					История заказов пуста
				</Paragraph>
				<Paragraph align='center' color='secondary'>
					Перейдите в каталог или завершите оформление в корзине
				</Paragraph>
				<div className={styles.empty__nav}>
					<Link href={PATH_NAMES.CATALOG}>
						<Button variant='filled'>Перейти в каталог</Button>
					</Link>
					<Link href={PATH_NAMES.CATALOG}>
						<Button variant='filled'>Перейти в корзину</Button>
					</Link>
				</div>
			</div>
		)
	}

	return (
		<div className={styles.container}>
			<table className={styles.table}>
				<thead>
					<tr className={styles.table__header}>
						<th className={styles.table__th}>Номер заказа</th>
						<th className={styles.table__th}>Дата</th>
						<th className={styles.table__th}>Статус</th>
						<th className={styles.table__th}>Итог</th>
					</tr>
				</thead>
				<tbody>
					{orders
						.sort((a, b) => {
							return (
								new Date(b.createdAt).getTime() -
								new Date(a.createdAt).getTime()
							)
						})
						.map((el, index) => {
							return (
								<tr key={el.id}>
									<td className={styles.table__td}>{index + 1}</td>
									<td className={styles.table__td}>
										{formatDate(new Date(el.createdAt))}
									</td>
									<td className={styles.table__td}>Оформление</td>
									<td className={styles.table__td}>
										${' '}
										{el.data.reduce((acc, el) => {
											return acc + el.price * (el.count || 1)
										}, 0)}
									</td>
								</tr>
							)
						})}
				</tbody>
			</table>
		</div>
	)
}
