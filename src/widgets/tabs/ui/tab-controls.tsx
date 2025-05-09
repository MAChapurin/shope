import { FC } from 'react'
import styles from './styles.module.css'
import { TabControlsProps } from '../types'
import { cn } from '@/shared/lib'

export const TabControls: FC<TabControlsProps> = ({ children, className }) => {
	return (
		<div
			className={cn(styles.tabs, className)}
			role='tablist'
			aria-label='Вкладки табов'
		>
			{children}
		</div>
	)
}
