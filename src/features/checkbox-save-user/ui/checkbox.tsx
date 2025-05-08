'use client'
import { FC, useId } from 'react'
import { InputProps } from '../types'

import styles from './styles.module.css'
import { cn } from '@/shared/lib'

export const CheckboxUserData: FC<InputProps> = ({
	checked,
	className,
	...props
}) => {
	const id = useId()
	return (
		<label htmlFor={id} className={cn(styles.label, className)}>
			<input
				checked={checked}
				id={id}
				type='checkbox'
				className={styles.checkbox}
				{...props}
			/>
			<span className={styles.text}>
				Сохранить данные для следующих отзывов
			</span>
		</label>
	)
}
