'use client'

import { Icon } from '@/shared/ui'
import styles from './styles.module.css'

export const SubscriptionForm = () => {
	return (
		<form action='#' className={styles.form}>
			<input
				className={styles.input}
				type='email'
				placeholder='Ваш email для акций и предложений'
			/>
			<button className={styles.button} type='submit'>
				<Icon name='arrow' />
			</button>
		</form>
	)
}
