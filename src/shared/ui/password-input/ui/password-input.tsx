'use client'
import { Icon, Input } from '@/shared/ui'
import { FC, useState } from 'react'

import { InputProps } from '@/shared/ui/input/input.types'
import { cn } from '@/shared/lib'
import styles from './styles.module.css'

export const PasswordInput: FC<InputProps> = ({
	value,
	className,
	errorMessage,
	...props
}) => {
	const [type, setType] = useState<'password' | 'text'>('password')
	const onClick = () => {
		setType(prev => (prev === 'password' ? 'text' : 'password'))
	}
	const isShow = typeof value === 'string' && value.length > 0
	return (
		<div className={styles.root}>
			<Input
				type={type}
				className={cn(styles.root__input, className)}
				errorMessage={errorMessage}
				{...props}
			/>
			<button
				style={{ opacity: isShow ? 1 : 0 }}
				type='button'
				aria-label={type === 'password' ? 'Показать пароль' : 'Скрыть пароль'}
				datatype={type}
				className={styles.root__button}
				onClick={onClick}
			>
				<span className={styles.root__cross} />
				<Icon name='eye' className={styles.root__icon} />
			</button>
		</div>
	)
}
