'use client'

import { FC } from 'react'
import { Icon } from '@/shared/ui'
import { cn } from '@/shared/lib'
import { LikeButtonProps } from '../types'
import { useLikeButton } from '../model/useLikeButton'

import styles from './styles.module.css'

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
