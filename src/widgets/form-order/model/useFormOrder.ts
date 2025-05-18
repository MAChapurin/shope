'use client'

import { ChangeEvent, FormEvent, useState } from 'react'

import { isValidEmail } from '@/shared/utils'

import {
	CUSTOM_EVENTS,
	INPUT_NAMES,
	PATH_NAMES,
	VALIDATION_SETTING
} from '@/shared/settings'
import { emitter } from '@/shared/lib'
import { useRouter } from 'next/navigation'

const defaultValue = {
	name: '',
	email: '',
	address: '',
	password: '',
	tel: ''
}

export const useFormOrder = () => {
	const [error, setError] = useState<Record<string, string>>(defaultValue)
	const [values, setValues] = useState<Record<string, string>>(defaultValue)

	const router = useRouter()

	const navigateToProfile = () => {
		router.push(PATH_NAMES.PROFILE)
	}

	const onError = (name: string, value: string) => {
		setError(prev => ({ ...prev, [name]: value }))
	}

	const onValue = (name: string, value: string) => {
		setValues(prev => ({ ...prev, [name]: value }))
	}

	// const resetForm = () => {
	//   setValues(defaultValue)
	// }

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name
		onError(name, '')
		onValue(name, e.target.value)
	}

	const resetInputError = (e: FormEvent<HTMLFormElement>) => {
		if (e.target instanceof HTMLInputElement) {
			const name = e.target.name
			onError(name, '')
		}
	}

	const checkValidName = () => {
		if (values.name.trim().length < VALIDATION_SETTING.MIN_NAME_LENGTH) {
			onError(INPUT_NAMES.NAME, VALIDATION_SETTING.MIN_NAME_LENGTH__MESSAGE)
			return false
		}
		if (values.name.length > VALIDATION_SETTING.MAX_NAME_LENGTH) {
			onError(INPUT_NAMES.NAME, VALIDATION_SETTING.MAX_NAME_LENGTH_MESSAGE)
			return false
		}
		return true
	}

	const checkValidEmail = () => {
		if (values.email.length < VALIDATION_SETTING.MIN_EMAIL_LENGTH) {
			onError(INPUT_NAMES.EMAIL, VALIDATION_SETTING.MIN_EMAIL_LENGTH_MESSAGE)
			return false
		}
		if (!isValidEmail(values.email.toString())) {
			onError(INPUT_NAMES.EMAIL, VALIDATION_SETTING.EMAIL_NO_VALID_MESSAGE)
			return false
		}
		return true
	}

	const checkValidPassword = () => {
		if (
			values.password.trim().length < VALIDATION_SETTING.MIN_PASSWORD_LENGTH
		) {
			onError(
				INPUT_NAMES.PASSWORD,
				VALIDATION_SETTING.MIN_PASSWORD_LENGTH__MESSAGE
			)
			return false
		}
		if (values.password.length > VALIDATION_SETTING.MAX_PASSWORD_LENGTH) {
			onError(
				INPUT_NAMES.PASSWORD,
				VALIDATION_SETTING.MAX_PASSWORD_LENGTH__MESSAGE
			)
			return false
		}

		if (values.password.includes(' ')) {
			onError(INPUT_NAMES.PASSWORD, VALIDATION_SETTING.SPACE_PASSWORD_MESSAGE)
			return false
		}
		return true
	}

	const checkValidAddress = () => {
		if (values.address.trim().length < VALIDATION_SETTING.MIN_ADDRESS_LENGTH) {
			onError(
				INPUT_NAMES.ADDRESS,
				VALIDATION_SETTING.MIN_ADDRESS_LENGTH_MESSAGE
			)
			return false
		}
		if (values.address.length > VALIDATION_SETTING.MAX_ADDRESS_LENGTH) {
			onError(
				INPUT_NAMES.ADDRESS,
				VALIDATION_SETTING.MAX_ADDRESS_LENGTH_MESSAGE
			)
			return false
		}
		return true
	}

	const isErrorField = Object.values(error).some(el => el.trim().length > 0)

	const isEmptyField = Object.values(values).some(el => el.trim().length === 0)
	const isDisabled = isEmptyField || isErrorField

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const isValidationFields =
			checkValidName() &&
			checkValidEmail() &&
			checkValidAddress() &&
			checkValidPassword()

		if (isValidationFields) {
			emitter.emit(
				CUSTOM_EVENTS.ADD_TOST,
				VALIDATION_SETTING.SUCCESS_MESSAGE_ORDER
			)
			console.log(values)
			// resetForm()
			setTimeout(navigateToProfile, 200)
		}
	}

	return {
		resetInputError,
		onSubmit,
		values,
		onInputChange,
		error,
		isDisabled,
		onError
	}
}
