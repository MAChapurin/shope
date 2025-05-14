'use client'
import { cn } from '@/shared/lib'
import { Icon } from '@/shared/ui'
import { useClickOutside } from '@/shared/hooks'

import { useRef, useState } from 'react'

import styles from './styles.module.css'

export const MobileFilters = ({ children }: { children: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false)
	const ref = useRef<HTMLDivElement>(null!)
	const onClose = () => {
		setIsOpen(false)
	}
	useClickOutside(ref, onClose)
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
					<button
						aria-label='Закрыть фильтры'
						onClick={onClose}
						className={styles.sidebar__close}
					>
						<Icon name='close' className={styles.rotate180} />
					</button>
					<div
						className={cn(styles.sidebar__content, {
							[styles['sidebar__content--open']]: isOpen
						})}
						ref={ref}
					>
						<button onClick={onClose} className={styles.sidebar__button}>
							<Icon name='arrow' className={styles.rotate180} /> Назад
						</button>
						{children}
					</div>
				</aside>
			</div>
		</div>
	)
}
