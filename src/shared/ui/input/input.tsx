'use client'
import { FC, useEffect, useId, useRef } from 'react'
import { InputProps } from './input.types'

import styles from './style.module.css'
import { cn } from '@/shared/lib'

export const Input: FC<InputProps> = ({
	className,
	errorMessage,
	type = 'text',
	...props
}) => {
	const id = useId()
	const inputId = 'input-' + id
	const isErrorMode =
		typeof errorMessage !== 'undefined' && errorMessage.length > 0

	const ref = useRef<HTMLInputElement>(null)

	useEffect(() => {
		if (typeof errorMessage !== 'undefined' && errorMessage.length > 0) {
			ref.current?.focus()
		}
	}, [errorMessage])

	return (
		<label htmlFor={inputId} className={cn(styles.root, className)}>
			<input
				ref={ref}
				id={inputId}
				className={cn(styles.root__input, {
					[styles['root__input--error']]: isErrorMode
				})}
				type={type}
				{...props}
			/>
			<span
				className={cn(styles.root__error, {
					[styles['root__error--visible']]: isErrorMode
				})}
				role='alert'
			>
				{errorMessage}
			</span>
		</label>
	)
}
