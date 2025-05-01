'use client'

import { useFavorites } from '@/entities/favorites'
import { Icon } from '@/shared/ui'

import styles from './styles.module.css'
import { cn } from '@/shared/lib'
import { LikeButtonProps } from '../types'
import { FC } from 'react'
import { useLikeButton } from '../model/useLikeButton'

export const LikeButton: FC<LikeButtonProps> = ({ sku, ...props }) => {
	const { isLiked, onClick } = useLikeButton(sku)
	return (
		<button
			className={styles.btn}
			data-value={sku}
			onClick={onClick}
			{...props}
		>
			<Icon
				className={cn(styles.btn__icon, {
					[styles['btn__icon--liked']]: isLiked
				})}
				name='like'
			/>{' '}
		</button>
	)
}
