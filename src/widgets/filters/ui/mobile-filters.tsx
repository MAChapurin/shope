'use client'
import { cn } from '@/shared/lib'
import { Icon } from '@/shared/ui'
import { useState } from 'react'

import styles from './styles.module.css'

export const MobileFilters = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className={styles.sidebar}>
			<button
				aria-label={isOpen ? 'Показать фильтры' : 'Скрыть фильтры'}
				className={cn(styles.sidebar__button, styles['sidebar__button--fixed'])}
				onClick={() => {
					setIsOpen(prev => !prev)
				}}
			>
				<Icon name='filters' />
				<span
					aria-hidden={isOpen ? false : true}
					className={cn({
						[styles['sidebar--open']]: isOpen,
						[styles['sidebar--hidden']]: !isOpen
					})}
				>
					Закрыть
				</span>{' '}
				Фильтры
			</button>
			<div className={styles.sidebar__container}>
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
		</div>
	)
}
