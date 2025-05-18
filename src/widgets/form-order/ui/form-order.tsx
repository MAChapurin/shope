'use client'

import { PasswordInput, SumOrder } from '@/features'
import { Button, Input } from '@/shared/ui'
import { INPUT_NAMES, INPUT_PLACEHOLDERS } from '@/shared/settings'

import { AddressAutoComplete } from '@/features/address-auto-complete/ui/address-auto-complete'
import styles from './styles.module.css'
import { useState } from 'react'

export const FormOrder = () => {
	const [address, setAddress] = useState('')
	return (
		<form className={styles.form}>
			<Input
				name={INPUT_NAMES.EMAIL}
				type='email'
				placeholder={INPUT_PLACEHOLDERS.EMAIL}
				// value={values.email}
				// onChange={onInputChange}
				// errorMessage={error?.email}
				required
			/>
			<PasswordInput
				name={INPUT_NAMES.PASSWORD}
				placeholder={INPUT_PLACEHOLDERS.PASSWORD}
				required
			/>
			<AddressAutoComplete
				value={address}
				onChange={e => {
					setAddress(e.target.value)
				}}
				setValue={setAddress}
			/>
			<Input
				name={INPUT_NAMES.NAME}
				type='text'
				placeholder={INPUT_PLACEHOLDERS.NAME}
				// errorMessage={error?.name}
				// value={values.name}
				// onChange={onInputChange}
				required
			/>
			<Input
				name={INPUT_NAMES.PHONE}
				type='tel'
				placeholder={INPUT_PLACEHOLDERS.PHONE}
				// errorMessage={error?.name}
				// value={values.name}
				// onChange={onInputChange}
				required
			/>
			<SumOrder />
			<Button
				disabled
				type='submit'
				className={styles.form__button}
				variant='filled'
			>
				Оплатить
			</Button>
		</form>
	)
}
