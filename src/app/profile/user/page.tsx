import { getProfile } from '@/entities'
import { getPhoneMask } from '@/shared/utils'
import { UserDataItemProps } from '@/widgets/current-order/types'
import { FormUpdateUserName } from '@/widgets/form-update-user/ui/form-update-name'
import { Icon, Modal, Paragraph, Title } from '@/shared/ui'
import { ReactNode } from 'react'
import {
	FormUpdateUserAddress,
	FormUpdateUserPhone
} from '@/widgets/form-update-user'
import styles from './styles.module.css'

export default async function UserPage() {
	const user = await getProfile()
	if (!user) {
		return null
	}
	const { name, email, address, phone } = user

	const userDataList: (UserDataItemProps & { form: ReactNode })[] = [
		{
			title: 'Имя',
			description: name || '',
			form: <FormUpdateUserName user={user} />
		},
		{
			title: 'EMAIL',
			description: email,
			form: null
		},
		{
			title: 'Телефон',
			description: getPhoneMask(phone) as string,
			form: <FormUpdateUserPhone user={user} />
		},
		{
			title: 'Адрес доставки',
			description: address || '',
			form: <FormUpdateUserAddress user={user} />
		}
	]
	return (
		<>
			<Title>Ваши данные</Title>
			<ul className={styles.data}>
				{userDataList.map(el => (
					<li key={el.title}>
						<div className={styles.item}>
							<Title className={styles.item__title} As='h3' size='sm'>
								{el.title}
							</Title>
							<div className={styles.item__data}>
								<Paragraph className={styles.item__desc} color='secondary'>
									{el.description}
								</Paragraph>
								<Modal
									disabled={el.title === 'EMAIL'}
									buttonChildrenSlot={
										<>
											{' '}
											{el.description ? '' : 'Добавить'} <Icon name='edit' />
										</>
									}
								>
									{el.form}
								</Modal>
							</div>
						</div>
					</li>
				))}
			</ul>
		</>
	)
}
