'use client'

import { useNewOrder } from '@/entities'
import { Button, Paragraph, Title } from '@/shared/ui'
import Link from 'next/link'
import { PATH_NAMES } from '@/shared/settings'

import { OrderAlert } from './order-alert'
import { OrderTable } from './table-order'
import { UserDataList } from './user-data-list'
import styles from './styles.module.css'

export const CurrentOrder = () => {
	const { order } = useNewOrder()

	if (!order) {
		return (
			<div className={styles.empty}>
				<Paragraph align='center' color='secondary'>
					В обработке заказов нет
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
