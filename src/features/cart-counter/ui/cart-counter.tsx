'use client'
import { FC } from 'react'
import { CartCounterProps } from '../types'
import { cn } from '@/shared/lib'
import { useCounter } from '../model/useCounter'

import styles from './styles.module.css'
import { CART__SETTINGS } from '@/entities/cart'

export const CartCounter: FC<CartCounterProps> = ({ sku, className }) => {
	const { value, increment, decrement, isAdded } = useCounter(sku)
	return (
		<div id={sku.toString()} className={cn(styles.counter, className)}>
			<button
				disabled={!isAdded || value === 1}
				onClick={decrement}
				className={styles.counter__button}
			>
				-
			</button>
			<div
				className={cn(styles.counter__value, {
					[styles['counter__value--disabled']]: !isAdded
				})}
			>
				{isAdded ? value : 1}
			</div>
			<button
				disabled={!isAdded || value === CART__SETTINGS.MAX}
				onClick={increment}
				className={styles.counter__button}
			>
				+
			</button>
		</div>
	)
}
