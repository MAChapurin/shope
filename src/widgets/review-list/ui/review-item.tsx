import { FC } from 'react'
import { ReviewType } from '@/shared/types'

import { Rating } from '@/features'
import { Paragraph, TimeText, Title } from '@/shared/ui'

import styles from './styles.module.css'

export const ReviewItem: FC<ReviewType> = ({
	date,
	name,
	rating,
	description
}) => {
	return (
		<article
			className={styles.review}
			itemScope
			itemType='http://schema.org/Review'
		>
			<header className={styles.review__header}>
				<Title
					As='h3'
					className={styles.review__author}
					itemProp='author'
					size='md'
				>
					{name}
				</Title>
				<TimeText date={new Date(date)} className={styles.review__time} />
			</header>
			<Rating value={rating} className={styles.review__rating} />
			<Paragraph
				itemProp='reviewBody'
				className={styles.review__description}
				color='secondary'
			>
				{description}
			</Paragraph>
		</article>
	)
}
