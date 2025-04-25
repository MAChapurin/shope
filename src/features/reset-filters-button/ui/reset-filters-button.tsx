'use client'

import { cn } from '@/shared/lib'
import styles from './styles.module.css'
import { useResetFilters } from '../model/useResetFilters'

export const ResetFiltersButton = () => {
	const { onClick, isVisible } = useResetFilters()
	return (
		<button
			aria-label='Сбросить фильтры'
			className={cn(styles.btn, {
				[styles.isVisible]: !!isVisible
			})}
			onClick={onClick}
		>
			Сбросить фильтры
		</button>
	)
}
