'use client'
import { Icon } from '@/shared/ui'
import { useLogout } from '../model/useLogout'

import styles from './styles.module.css'
import { cn } from '@/shared/lib'

export const LogoutButton = ({ className }: { className?: string }) => {
	const { onClick, isDisabled } = useLogout()
	return (
		<button
			className={cn(styles.button, className)}
			disabled={isDisabled}
			onClick={onClick}
		>
			<Icon className={styles.button__icon} name='logout' /> Выйти
		</button>
	)
}
