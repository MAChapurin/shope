'use client'

import { cn } from '@/shared/lib'
import { usePagination } from '../model/usePagination'
import { FC } from 'react'
import { PaginationProps } from '../types'

import styles from './styles.module.css'

export const Pagination: FC<PaginationProps> = ({ totalProducts, limit }) => {
	const { offset, onClick } = usePagination(limit)
	return (
		<ul
			role='navigation'
			aria-label='Пагинация'
			className={styles.pagination}
			onClick={onClick}
		>
			{Array.from({ length: totalProducts / limit }).map((_, index) => {
				const isActive = +offset === index * limit
				return (
					<li key={index}>
						<button
							aria-current={isActive ? 'page' : false}
							className={cn(styles.pagination__button, {
								[styles['pagination__button--active']]: isActive
							})}
							data-value={index}
						>
							{index + 1}
						</button>
					</li>
				)
			})}
		</ul>
	)
}
