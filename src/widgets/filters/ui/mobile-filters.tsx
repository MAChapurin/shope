'use client'
import { cn } from '@/shared/lib'
import { Icon } from '@/shared/ui'
import { useState } from 'react'
import { Filters } from './filters'

import styles from './styles.module.css'

export const MobileFilters = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className={styles.sidebar}>
			<button
				className={styles.sidebar__button}
				onClick={() => {
					setIsOpen(prev => !prev)
				}}
			>
				<Icon name='filters' />
				Фильтры
			</button>
			<aside
				className={cn(styles.sidebar__aside, {
					[styles['sidebar__aside--open']]: isOpen
				})}
			>
				{children}
				<button
					onClick={() => {
						setIsOpen(false)
					}}
					className={styles.sidebar__button}
				>
					<Icon name='arrow' className={styles.rotate180} /> Назад
				</button>
			</aside>
		</div>
	)
}
