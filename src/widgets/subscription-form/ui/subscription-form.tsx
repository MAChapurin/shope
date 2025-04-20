'use client'

import { Icon } from '@/shared/ui'
import styles from './styles.module.css'
import { useSubscribe } from '../model/useSubscribe'

export const SubscriptionForm = () => {
	const { onSubmit } = useSubscribe()
	return (
		<form action='#' className={styles.form} onSubmit={onSubmit}>
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
