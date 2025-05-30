'use client'
import { Button, Checkbox, Input } from '@/shared/ui'
import { useAuth } from '../model/useAuth'
import { INPUT_NAMES, INPUT_PLACEHOLDERS } from '@/shared/settings'
import { PasswordInput } from '@/shared/ui'

import styles from './styles.module.css'

export const RegisterForm = () => {
	const {
		values,
		error,
		onInputChange,
		isDisabledRegister,
		onRegister,
		resetInputError
	} = useAuth()
	return (
		<form
			className={styles.form}
			onSubmit={onRegister}
			onChange={resetInputError}
		>
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
			<PasswordInput
				name={INPUT_NAMES.PASSWORD_REPEAT}
				value={values.password}
				onChange={onInputChange}
				errorMessage={error?.password_repeat}
				placeholder={INPUT_PLACEHOLDERS.PASSWORD_REPEAT}
				required
			/>
			<Checkbox
				checked={false}
				onChange={() => {}}
				text='Согласен на обработку персональных данных'
			/>
			<Button
				disabled={isDisabledRegister}
				type='submit'
				className={styles.form__button}
				variant='filled'
				fullWidth
			>
				Зарегистрироваться
			</Button>
		</form>
	)
}
