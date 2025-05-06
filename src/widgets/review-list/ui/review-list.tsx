import { FC } from 'react'
import { ReviewsListProps } from '../types'
import { ReviewEmptyAlert } from './review-alert'
import { ReviewItem } from './review-item'

import styles from './styles.module.css'

export const ReviewList: FC<ReviewsListProps> = ({ reviews }) => {
	if (reviews.length === 0) {
		return <ReviewEmptyAlert />
	}

	return (
		<ul
			className={styles.list}
			aria-label='Отзывы'
			itemScope
			itemType='http://schema.org/Review'
		>
			{reviews.map((review, index) => {
				return (
					<li key={index} className={styles.list__item}>
						<ReviewItem {...review} />
					</li>
				)
			})}
		</ul>
	)
}
