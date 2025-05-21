'use client'

import { FC } from 'react'
import { AddToCartProps } from '../types'
import { CART__TEXT } from '@/entities/cart'
import { useAddToCart } from '../model/useAddToCart'
import { cn } from '@/shared/lib'
import { Icon } from '@/shared/ui'
import styles from './styles.module.css'

export const AddToCartAction: FC<AddToCartProps> = ({ product, className }) => {
	const { onClick, isAdded, mounted } = useAddToCart(product)
	return (
		<>
			{mounted && (
				<button
					aria-label={
						isAdded ? CART__TEXT.REMOVE_TO_CART : CART__TEXT.ADD_TO_CART
					}
					className={cn(styles.action, className)}
					onClick={onClick}
				>
					<Icon name='cart' />
					<Icon
						name='success'
						className={cn(styles.action__success, {
							[styles['action__success--visible']]: isAdded
						})}
					/>
				</button>
			)}
		</>
	)
}
