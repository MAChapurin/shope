'use client'

import { useNewOrder, useProfile } from '@/entities'
import { Title } from '@/shared/ui'

import { OrderTable } from './table-order'
import { UserDataList } from './user-data-list'
import { OrderAlert } from './order-alert'

import styles from './styles.module.css'

export const CurrentOrder = () => {
	const { order } = useNewOrder()
	const { user } = useProfile()

	if (!order || !user) {
		return null
	}

	return (
		<div className={styles.root}>
			<OrderAlert />
			<div className={styles.root__user}>
				<Title className={styles.root__title}>Детали заказа</Title>
				<UserDataList />
			</div>
			<div className={styles.root__order}>
				<Title className={styles.root__title}>Данные заказа</Title>
				<OrderTable />
			</div>
		</div>
	)
}
