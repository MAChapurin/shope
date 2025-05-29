'use client'
import { FC, useId } from 'react'
import { cn } from '@/shared/lib'

import { CheckBoxProps } from './checkbox.types'
import styles from './styles.module.css'

export const Checkbox: FC<CheckBoxProps> = ({
	checked,
	className,
	text,
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
			<span className={styles.text}>{text}</span>
		</label>
	)
}
