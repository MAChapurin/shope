'use client'
import { Icon } from '@/shared/ui'
import { cn } from '@/shared/lib'
import { useToast } from '../model/useToast'

import styles from './styles.module.css'

export const Toast = () => {
	const { isVisible, message } = useToast()
	return (
		<div className={styles.root}>
			<div
				className={cn(styles.toast, {
					[styles.show]: isVisible
				})}
			>
				<Icon name='success' className={styles.icon} />{' '}
				<p className={styles.text}>{message}</p>
			</div>
		</div>
	)
}
