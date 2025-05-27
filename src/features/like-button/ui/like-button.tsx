'use client'

import { FC } from 'react'
import { Icon } from '@/shared/ui'
import { cn } from '@/shared/lib'
import { LikeButtonProps } from '../types'
import { useLikeButton } from '../model/useLikeButton'

import styles from './styles.module.css'

export const LikeButton: FC<LikeButtonProps> = ({
	sku,
	className,
	...props
}) => {
	const { isLiked, onClick, mounted } = useLikeButton(sku)

	return (
		<>
			{mounted && (
				<button
					aria-label={isLiked ? 'Убрать из избранного' : 'Добавить в избранное'}
					className={cn(styles.btn, className)}
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
			)}
		</>
	)
}
