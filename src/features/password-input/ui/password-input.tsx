'use client'
import { Icon, Input } from '@/shared/ui'
import { FC, useState } from 'react'

import { InputProps } from '@/shared/ui/input/input.types'
import styles from './styles.module.css'
import { cn } from '@/shared/lib'

export const PasswordInput: FC<InputProps> = ({
	className,
	errorMessage,
	...props
}) => {
	const [type, setType] = useState<'password' | 'text'>('password')
	const onClick = () => {
		setType(prev => (prev === 'password' ? 'text' : 'password'))
	}
	return (
		<div className={styles.root}>
			<Input
				type={type}
				className={cn(styles.root__input, className)}
				errorMessage={errorMessage}
				{...props}
			/>
			<button
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
