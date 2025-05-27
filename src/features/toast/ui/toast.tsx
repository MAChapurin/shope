'use client'
import { Icon } from '@/shared/ui'
import { cn } from '@/shared/lib'
import { useToast } from '../model/useToast'

import styles from './styles.module.css'

export const Toast = () => {
	const { messages } = useToast()
	return (
		<ul className={styles.root}>
			{messages.map(message => {
				return (
					<li key={message.id} className={cn(styles.toast, styles.show)}>
						<Icon name='success' className={styles.icon} />{' '}
						<p className={styles.text}>{message.message}</p>
					</li>
				)
			})}
		</ul>
	)
}
