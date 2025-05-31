'use client'

import { ChangeEvent, FormEvent, useState } from 'react'

import { isValidEmail } from '@/shared/utils'

import {
	CUSTOM_EVENTS,
	INPUT_NAMES,
	PATH_NAMES,
	STORAGE_KEYS,
	VALIDATION_SETTING
} from '@/shared/settings'
import { emitter } from '@/shared/lib'
import { useRouter } from 'next/navigation'
import {
	createOrder,
	getProfile,
	loginUser,
	registerUser,
	TypeUserData,
	useCart,
	useProfile
} from '@/entities'

const defaultValue: TypeUserData = {
	name: '',
	email: '',
	address: '',
	password: '',
	phone: ''
}

export const useFormOrder = () => {
	const { cart } = useCart()
	const { setUser } = useProfile()

	const [error, setError] = useState<TypeUserData>(defaultValue)
	const [values, setValues] = useState<TypeUserData>(defaultValue)

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

	const resetForm = () => {
		setValues(defaultValue)
	}

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name
		onError(name, '')
		onValue(name, e.target.value)
	}

	const onAddressDropdown = (value: string) => {
		const name = INPUT_NAMES.ADDRESS
		onError(name, '')
		onValue(name, value)
	}

	const resetInputError = (e: FormEvent<HTMLFormElement>) => {
		if (e.target instanceof HTMLInputElement) {
			const name = e.target.name
			onError(name, '')
		}
	}

	const checkValidName = () => {
		if (values.name && values.name.trim().length < VALIDATION_SETTING.MIN_NAME_LENGTH) {
			onError(INPUT_NAMES.NAME, VALIDATION_SETTING.MIN_NAME_LENGTH__MESSAGE)
			return false
		}
		if (values.name && values.name.length > VALIDATION_SETTING.MAX_NAME_LENGTH) {
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
		if (values.address && values.address.trim().length < VALIDATION_SETTING.MIN_ADDRESS_LENGTH) {
			onError(
				INPUT_NAMES.ADDRESS,
				VALIDATION_SETTING.MIN_ADDRESS_LENGTH_MESSAGE
			)
			return false
		}
		if (values.address && values.address.length > VALIDATION_SETTING.MAX_ADDRESS_LENGTH) {
			onError(
				INPUT_NAMES.ADDRESS,
				VALIDATION_SETTING.MAX_ADDRESS_LENGTH_MESSAGE
			)
			return false
		}
		return true
	}

	const checkValidPhone = () => {
		if (
			values.phone && values.phone.replace(/\D/g, '').length < VALIDATION_SETTING.PHONE_LENGTH
		) {
			onError(INPUT_NAMES.PHONE, VALIDATION_SETTING.PHONE_ERROR_MESSAGE)
			return false
		}
		return true
	}

	const isErrorField = Object.values(error).some(el => el.trim().length > 0)
	const isEmptyField = Object.values(values).some(el => el.trim().length === 0)
	const isDisabled = isEmptyField || isErrorField

	const getToken = async (values: TypeUserData) => {
		let token = ''
		try {
			const access_token = await registerUser(values)
			if (access_token) {
				token = access_token
				return token
			} else {
				token = await loginUser(values)
				return token
			}
		} catch (error) {
			console.log(error)
			return null
		}
	}

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const isValidationFields =
			checkValidName() &&
			checkValidEmail() &&
			checkValidAddress() &&
			checkValidPassword() &&
			checkValidPhone()

		if (isValidationFields) {
			const token = await getToken(values)
			if (token) {
				localStorage.setItem(STORAGE_KEYS.TOKEN, token)
			}

			const order = cart.map(({ name, price, count }) => {
				return { name, price, count }
			})
			const newOrder = await createOrder({ items: order })
			const user = await getProfile()
			setUser(user)
			emitter.emit(CUSTOM_EVENTS.ADD_ORDER, newOrder)
			console.log('token', token, 'user\n', user, 'order\n', newOrder)
			emitter.emit(
				CUSTOM_EVENTS.ADD_TOST,
				VALIDATION_SETTING.SUCCESS_MESSAGE_ORDER
			)
			resetForm()
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
		onError,
		onAddressDropdown
	}
}
