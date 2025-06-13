import { Paragraph, Title } from '@/shared/ui'
import { FC } from 'react'
import { UserDataItemProps } from '../types'

import styles from './styles.module.css'

export const UserDataItem: FC<UserDataItemProps> = ({ title, description }) => {
	return (
		<div className={styles.item}>
			<Title As='h3' size='sm'>
				{title}
			</Title>
			<Paragraph color='secondary'>{description}</Paragraph>
		</div>
	)
}
