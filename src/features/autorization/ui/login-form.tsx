'use client'

import { Checkbox, PasswordInput } from '@/shared/ui'
import { INPUT_NAMES, INPUT_PLACEHOLDERS, PATH_NAMES } from '@/shared/settings'
import { Button, Input } from '@/shared/ui'
import { useAuth } from '../model/useAuth'

import Link from 'next/link'
import styles from './styles.module.css'

export const LoginForm = () => {
	const {
		values,
		error,
		onInputChange,
		isDisabledLogin,
		onLogin,
		resetInputError
	} = useAuth()
	return (
		<form onSubmit={onLogin} onChange={resetInputError}>
			<Input
				name={INPUT_NAMES.EMAIL}
				type='email'
				placeholder={INPUT_PLACEHOLDERS.EMAIL}
				value={values.email}
				onChange={onInputChange}
				errorMessage={error?.email}
				required
			/>
			<PasswordInput
				name={INPUT_NAMES.PASSWORD}
				value={values.password}
				onChange={onInputChange}
				errorMessage={error?.password}
				placeholder={INPUT_PLACEHOLDERS.PASSWORD}
				required
			/>
			<Checkbox checked={false} onChange={() => {}} text={'Запомнить меня'} />
			<Button
				disabled={isDisabledLogin}
				type='submit'
				className={styles.form__button}
				variant='filled'
			>
				Вход
			</Button>
			<Link href={PATH_NAMES.MAIN}>Забыли пароль ?</Link>
		</form>
	)
}
