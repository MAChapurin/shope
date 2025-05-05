'use client'
import { FC } from 'react'
import { SwiperProps } from '../types'
import { cn } from '@/shared/lib'
import Image from 'next/image'

import styles from './styles.module.css'

export const Swiper: FC<SwiperProps> = ({
	images,
	swiperRef,
	listRef,
	className,
	name,
	...props
}) => {
	return (
		<div ref={swiperRef} className={cn(styles.swiper, className)} {...props}>
			<ul
				aria-label='Изображения товара'
				ref={listRef}
				className={styles.swiper__list}
			>
				{images?.map((image, index) => {
					return (
						<li key={index} className={styles.swiper__item}>
							<Image
								title={`${name} фото номер ${index}`}
								className={styles.swiper__image}
								width={400}
								height={400}
								alt={`${name} фото номер ${index}`}
								src={image}
							/>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
