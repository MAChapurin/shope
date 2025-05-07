'use client'

import { cn } from '@/shared/lib'
import { useTab } from '../model/useTab'
import { FC } from 'react'
import { TabButtonProps } from '../types'

import styles from './styles.module.css'

export const TabButton: FC<TabButtonProps> = ({
	children,
	className,
	tabId,
	...props
}) => {
	const { isActive, onClick } = useTab(tabId)
	return (
		<button
			aria-selected={isActive}
			role='tab'
			className={cn(
				styles.button,
				{
					[styles['button--active']]: isActive
				},
				className
			)}
			onClick={onClick}
			{...props}
		>
			{children}
		</button>
	)
}
