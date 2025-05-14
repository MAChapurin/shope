'use client'

import { FC } from 'react'
import { TabPanelProps } from '../types'
import { cn } from '@/shared/lib'
import { useTab } from '../model/useTab'

import styles from './styles.module.css'

export const TabPanel: FC<TabPanelProps> = ({ children, className, tabId }) => {
	const { isActive } = useTab(tabId)

	return (
		<div
			role='tabpanel'
			className={cn(
				styles.panel,
				{
					[styles['panel--active']]: isActive
				},
				className
			)}
		>
			{children}
		</div>
	)
}
