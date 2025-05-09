'use client'

import { cn } from '@/shared/lib'
import { useIndicator } from '../model/useIndicator'

import styles from './styles.module.css'

export const FloatIndicator = () => {
	const { isDescriptionTabActive, isReviewTabActive } = useIndicator()
	return (
		<div
			className={cn(styles.indicator, {
				[styles.isDescription]: isDescriptionTabActive,
				[styles.isReview]: isReviewTabActive
			})}
		/>
	)
}
