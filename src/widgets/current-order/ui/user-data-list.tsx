'use client'

import { useNewOrder, useProfile } from '@/entities'
import { UserDataItem } from './user-data-item'
import { UserDataItemProps } from '../types'
import { formatDate, getPhoneMask } from '@/shared/utils'

import styles from './styles.module.css'

export const UserDataList = () => {
	const { order } = useNewOrder()
	const { user } = useProfile()

	if (!order || !user) {
		return null
	}

	const { name, email, address, phone } = user
	const { id, createdAt } = order

	const userDataList: UserDataItemProps[] = [
		{ title: 'Номер', description: id },
		{ title: 'Детали заказа', description: formatDate(new Date(createdAt)) },
		{ title: 'Имя', description: name },
		{ title: 'EMAIL', description: email },
		{ title: 'Адрес доставки', description: address },
		{ title: 'Телефон', description: getPhoneMask(phone) as string }
	]
	return (
		<ul className={styles.data}>
			{userDataList.map(el => (
				<li key={el.title}>
					<UserDataItem title={el.title} description={el.description} />
				</li>
			))}
		</ul>
	)
}
