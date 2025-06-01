'use client'
import { useEffect, useState } from 'react'
import { getUserOrders } from '../api'
import { ProductType } from '@/shared/types'
import { formatDate } from '@/shared/utils'

import styles from './styles.module.css'

type OrderItem = Pick<ProductType, 'name' | 'count' | 'price'>

type UserOrder = {
	status: string
	createdAt: string
	data: OrderItem[]
	id: number
}

export const OrdersList = () => {
	const [orders, setOrders] = useState<UserOrder[] | null>(null)
	useEffect(() => {
		const getData = async () => {
			try {
				const data = await getUserOrders()
				console.log('test', data)
				if (data?.statusCode === 401) {
					setOrders([])
				} else {
					setOrders(data)
				}
			} catch (error) {
				console.log(error)
			}
		}
		getData()
	}, [])

	if (!orders) {
		return null
	}

	if (orders.length === 0) {
		return <div>Вы еще ничего у нас не заказали</div>
	}

	return (
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
							new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
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
	)
}
