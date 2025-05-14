'use client'

import { FC } from 'react'
import { AddToCartProps } from '../types'

import { cn } from '@/shared/lib'
import { useAddToCart } from '../model/useAddToCart'

import { Button } from '@/shared/ui'

import { CART__TEXT } from '@/entities/cart'
import styles from './styles.module.css'

export const AddToCart: FC<AddToCartProps> = ({ sku, className }) => {
	const { onClick, isAdded } = useAddToCart(sku)
	return (
		<Button
			aria-label={isAdded ? CART__TEXT.REMOVE_TO_CART : CART__TEXT.ADD_TO_CART}
			onClick={onClick}
			className={cn(styles.button, className)}
			variant='outline'
		>
			<span
				aria-hidden={isAdded}
				style={{ transform: `translateY(${isAdded ? 0 : -100}px)` }}
				className={styles.button__text}
			>
				{CART__TEXT.REMOVE_TO_CART}
			</span>
			<span
				aria-hidden={!isAdded}
				style={{ transform: `translateY(${isAdded ? 100 : 0}px)` }}
				className={styles.button__text}
			>
				{CART__TEXT.ADD_TO_CART}
			</span>
		</Button>
	)
}
