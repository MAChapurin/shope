'use client'
import { FC, useState } from 'react'
import { CartCounterProps } from '../types'
import { cn } from '@/shared/lib'
import styles from './styles.module.css'

export const CartCounter: FC<CartCounterProps> = ({ sku, className }) => {
	const [value, setValue] = useState(1)
	const onIncrement = () => {
		setValue(prev => prev + 1)
	}

	const onDecrement = () => {
		setValue(prev => (prev === 1 ? 1 : prev - 1))
	}
	return (
		<div id={sku.toString()} className={cn(styles.counter, className)}>
			<button onClick={onDecrement} className={styles.counter__button}>
				-
			</button>
			<div className={styles.counter__value}>{value}</div>
			<button onClick={onIncrement} className={styles.counter__button}>
				+
			</button>
		</div>
	)
}
