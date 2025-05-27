'use client'

import { Paragraph, Title } from '@/shared/ui'
import { useSumOrder } from '../model/useSumOrder'

import styles from './styles.module.css'

export const SumOrder = () => {
	const sum = useSumOrder()
	return (
		<div className={styles.sum}>
			<div className={styles.sum__top}>
				<Title As='h3'>Итог</Title>
			</div>
			<div className={styles.sum__footer}>
				<Paragraph>Стоимость</Paragraph>
				<Paragraph>$ {sum}</Paragraph>
			</div>
		</div>
	)
}
