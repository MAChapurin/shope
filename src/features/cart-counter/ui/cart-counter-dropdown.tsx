'use client'

import { FC } from 'react'
import { CartCounterProps } from '../types'
import { cn } from '@/shared/lib'
import { useCounter } from '../model/useCounter'
import { Icon } from '@/shared/ui'
import { CART__SETTINGS } from '@/entities/cart'

import styles from './styles.module.css'

export const CartCounterDropdown: FC<CartCounterProps> = ({
	sku,
	className
}) => {
	const { value, isAdded, ref, onToogle, increment, decrement, isOpen } =
		useCounter(sku)
	return (
		<div ref={ref} className={cn(styles.count, className)}>
			<button
				disabled={!isAdded}
				className={styles.count__button}
				onClick={onToogle}
			>
				{value}
				<Icon
					name='dropdown'
					width={10}
					height={10}
					className={cn(styles.count__icon, {
						[styles['count__icon--rotate180']]: isOpen
					})}
				/>
			</button>
			<div
				className={cn(styles.count__dropdown, {
					[styles['count__dropdown--open']]: isOpen
				})}
			>
				<button
					disabled={value === 1}
					className={styles.count__button}
					onClick={decrement}
				>
					-
				</button>
				<button
					disabled={value === CART__SETTINGS.MAX}
					className={styles.count__button}
					onClick={increment}
				>
					+
				</button>
			</div>
		</div>
	)
}
