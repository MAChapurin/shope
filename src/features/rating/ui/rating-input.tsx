'use client'
import { Icon } from '@/shared/ui'
import { cn } from '@/shared/lib'
import { declareOfNumber } from '@/shared/utils'

import { RatingInputProps } from '../types'

import { FC } from 'react'

import styles from './styles.module.css'

const placeholderArray = [1, 2, 3, 4, 5]

export const RatingInput: FC<RatingInputProps> = ({
	rating,
	setRating,
	errorMessage = '',
	errorValueHandler
}) => {
	const roundValue = Math.round(rating)

	return (
		<div
			className={cn(styles.rating, styles['rating--column'])}
			role='group'
			aria-labelledby='rating-label'
		>
			<label className={styles.rating__label}>Рейтинг*:</label>
			<ul
				className={cn(styles.rating__list)}
				aria-label={`Поле установки рейтинга. Текущее значение: ${declareOfNumber(
					rating,
					['звезда', 'звезды', 'звёзд'],
					true
				)}`}
			>
				{placeholderArray.map(star => (
					<li
						key={star}
						onClick={() => {
							errorValueHandler('')
							setRating(prev => (prev === star ? 0 : star))
						}}
						onKeyDown={e => {
							if (e.key === 'Enter') {
								errorValueHandler('')
								setRating(prev => (prev === star ? 0 : star))
							}
						}}
						tabIndex={0}
						role='button'
						aria-pressed={star <= rating}
					>
						<Icon
							name='star'
							className={cn(
								styles.rating__star,
								styles['rating__star--hover'],
								{
									[styles['rating__star--transparent']]: roundValue < star
								}
							)}
						/>
					</li>
				))}
			</ul>
			<span
				className={cn(styles.rating__error, {
					[styles['rating__error--visible']]: errorMessage.length > 0
				})}
				role='alert'
			>
				{errorMessage}
			</span>
		</div>
	)
}
