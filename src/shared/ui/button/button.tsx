'use client'

import { FC } from 'react'
import { cn } from '@/shared/lib'
import { ButtonProps } from './button.types'

import styles from './styles.module.css'

export const Button: FC<ButtonProps> = ({
	children,
	variant = 'default',
	fullWidth = false,
	className,
	...props
}) => {
	return (
		<button
			className={cn(
				styles.button,
				{
					[styles['button--default']]: variant === 'default',
					[styles['button--filled']]: variant === 'filled',
					[styles['button--outline']]: variant === 'outline',
					[styles['button--full-width']]: fullWidth
				},
				className
			)}
			{...props}
		>
			{children}
		</button>
	)
}
