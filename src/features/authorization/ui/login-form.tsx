'use client'

import { Checkbox, PasswordInput } from '@/shared/ui'
import { INPUT_NAMES, INPUT_PLACEHOLDERS, PATH_NAMES } from '@/shared/settings'
import { Button, Input } from '@/shared/ui'

import Link from 'next/link'

import { useAuth } from '../model/useAuth'
import styles from './styles.module.css'

export const LoginForm = () => {
	const {
		values,
		error,
		onInputChange,
		isDisabledLogin,
		onLogin,
		resetInputError,
		isKeepToken,
		onKeepToken
	} = useAuth()
	return (
		<form className={styles.form} onSubmit={onLogin} onChange={resetInputError}>
			<Input
				className={styles.form__input}
				name={INPUT_NAMES.EMAIL}
				type='email'
				placeholder={INPUT_PLACEHOLDERS.EMAIL}
				value={values.email}
				onChange={onInputChange}
				errorMessage={error?.email}
				required
			/>
			<PasswordInput
				className={styles.form__input}
				name={INPUT_NAMES.PASSWORD}
				value={values.password}
				onChange={onInputChange}
				errorMessage={error?.password}
				placeholder={INPUT_PLACEHOLDERS.PASSWORD}
				required
			/>
			<Checkbox
				className={styles.form__checkbox}
				checked={isKeepToken}
				onChange={onKeepToken}
				text={'Запомнить меня'}
			/>
			<Button
				className={styles.form__button}
				disabled={isDisabledLogin}
				type='submit'
				variant='filled'
				fullWidth
			>
				Вход
			</Button>
			<Link className={styles.form__link} href={PATH_NAMES.RESTORE}>
				Забыли пароль ?
			</Link>
		</form>
	)
}
