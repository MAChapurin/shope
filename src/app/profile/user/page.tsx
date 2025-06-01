import { getProfile } from '@/entities'
import { getPhoneMask } from '@/shared/utils'
import { UserDataItemProps } from '@/widgets/current-order/types'

import styles from './styles.module.css'
import { UserDataItem } from '@/widgets/current-order/ui/user-data-item'

export default async function UserPage() {
	const user = await getProfile()
	if (!user) {
		return null
	}
	const { name, email, address, phone } = user

	const userDataList: UserDataItemProps[] = [
		{ title: 'Имя', description: name || '' },
		{ title: 'EMAIL', description: email },
		{ title: 'Адрес доставки', description: address || '' },
		{ title: 'Телефон', description: getPhoneMask(phone) as string }
	]
	return (
		<>
			<ul className={styles.data}>
				{userDataList.map(el => (
					<li key={el.title}>
						<UserDataItem title={el.title} description={el.description} />
					</li>
				))}
			</ul>
		</>
	)
}
