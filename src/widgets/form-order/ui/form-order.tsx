'use client'

import {
	AddressAutoComplete,
	PasswordInput,
	PhoneInputMask,
	SumOrder
} from '@/features'
import { Button, Input } from '@/shared/ui'
import { INPUT_NAMES, INPUT_PLACEHOLDERS } from '@/shared/settings'

import { useFormOrder } from '../model/useFormOrder'
import styles from './styles.module.css'

export const FormOrder = () => {
	const {
		onSubmit,
		values,
		onInputChange,
		error,
		isDisabled,
		resetInputError
	} = useFormOrder()
	return (
		<form
			className={styles.form}
			onSubmit={onSubmit}
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
			<AddressAutoComplete
				errorMessage={error?.address}
				value={values.address}
				onChange={onInputChange}
				setValue={() => {}}
			/>
			<Input
				name={INPUT_NAMES.NAME}
				type='text'
				placeholder={INPUT_PLACEHOLDERS.NAME}
				errorMessage={error?.name}
				value={values.name}
				onChange={onInputChange}
				required
			/>
			<PhoneInputMask
				name={INPUT_NAMES.PHONE}
				placeholder={INPUT_PLACEHOLDERS.PHONE}
				errorMessage={error?.tel}
				value={values.tel}
				onChange={onInputChange}
				required
			/>
			<SumOrder />
			<Button
				disabled={isDisabled}
				type='submit'
				className={styles.form__button}
				variant='filled'
			>
				Оплатить
			</Button>
		</form>
	)
}
