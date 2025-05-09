import { Icon } from '@/shared/ui'
import { cn } from '@/shared/lib'
import { declareOfNumber } from '@/shared/utils'

import { RatingProps } from '../types'

import styles from './styles.module.css'

const placeholderArray = Array.from({ length: 5 })

export const Rating = ({ value, className }: RatingProps) => {
	const roundValue = Math.round(value)
	return (
		<div
			className={styles.rating}
			itemProp='reviewRating'
			itemScope
			itemType='http://schema.org/Rating'
		>
			<meta itemProp='worstRating' content='1' />
			<meta itemProp='bestRating' content='5' />
			<span className={styles.rating__value} itemProp='ratingValue'>
				{value}
			</span>
			<ul
				className={cn(styles.rating__list, className)}
				aria-label={`Рейтинг ${declareOfNumber(
					value,
					['звезда', 'звезды', 'звёзд'],
					true
				)}`}
			>
				{placeholderArray.map((_, index) => {
					return (
						<li key={index}>
							<Icon
								name='star'
								className={cn(styles.rating__star, {
									[styles['rating__star--transparent']]: roundValue <= index
								})}
							/>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
