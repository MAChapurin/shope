'use client'
import { FC, useId } from 'react'
import { InputProps } from '../types'

import styles from './styles.module.css'

export const CheckboxUserData: FC<InputProps> = ({
	checked,
	className,
	...props
}) => {
	const id = useId()
	return (
		<label htmlFor={id} className={styles.label}>
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
