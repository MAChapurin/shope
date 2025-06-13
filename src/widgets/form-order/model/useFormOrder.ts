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
import {
	createOrder,
	getProfile,
	registerUser,
	TypeUserData,
	useCart,
	useProfile,
	saveToken
} from '@/entities'

const defaultValue: TypeUserData = {
	name: '',
	email: '',
	address: '',
	password: '',
	phone: ''
}

export const useFormOrder = (user: TypeUserData | null) => {
	const initialDataValues = {
		name: user?.name ? user.name : '',
		email: user?.email ? user.email : '',
		address: user?.address ? user.address : '',
		password: '',
		phone: user?.phone ? user.phone : ''
	}

	const isAuth = user ? true : false

	const { cart, clearCart } = useCart()
	const { setUser } = useProfile()

	const [error, setError] = useState<TypeUserData>(defaultValue)
	const [values, setValues] = useState<TypeUserData>(
		user ? initialDataValues : defaultValue
	)

	const router = useRouter()

	const navigateToProfile = () => {
		router.push(PATH_NAMES.PROFILE_ORDER)
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
		if (
			values.name &&
			values.name.trim().length < VALIDATION_SETTING.MIN_NAME_LENGTH
		) {
			onError(INPUT_NAMES.NAME, VALIDATION_SETTING.MIN_NAME_LENGTH__MESSAGE)
			return false
		}
		if (
			values.name &&
			values.name.length > VALIDATION_SETTING.MAX_NAME_LENGTH
		) {
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
		if (
			values.address &&
			values.address.trim().length < VALIDATION_SETTING.MIN_ADDRESS_LENGTH
		) {
			onError(
				INPUT_NAMES.ADDRESS,
				VALIDATION_SETTING.MIN_ADDRESS_LENGTH_MESSAGE
			)
			return false
		}
		if (
			values.address &&
			values.address.length > VALIDATION_SETTING.MAX_ADDRESS_LENGTH
		) {
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
			values.phone &&
			values.phone.replace(/\D/g, '').length < VALIDATION_SETTING.PHONE_LENGTH
		) {
			onError(INPUT_NAMES.PHONE, VALIDATION_SETTING.PHONE_ERROR_MESSAGE)
			return false
		}
		return true
	}

	const isErrorField = Object.values(error).some(el => el.trim().length > 0)
	const isEmptyField = Object.values(
		isAuth
			? { name: values.name, address: values.address, phone: values.phone }
			: values
	).some(el => el?.trim().length === 0)
	const isDisabled = isEmptyField || isErrorField

	const getToken = async () => {
		let token = ''
		try {
			token = await registerUser(values)
			return token
		} catch (error) {
			if (error instanceof Error) {
				onError(INPUT_NAMES.EMAIL, error.message)
			}
			return null
		}
	}

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const order = cart.map(({ name, price, count }) => {
			return { name, price, count }
		})

		if (isAuth) {
			const isValidUpdateUserFields =
				checkValidName() && checkValidAddress() && checkValidPhone()

			if (isValidUpdateUserFields) {
				const newOrder = await createOrder({ items: order })
				emitter.emit(CUSTOM_EVENTS.ADD_ORDER, newOrder)
				emitter.emit(
					CUSTOM_EVENTS.ADD_TOST,
					VALIDATION_SETTING.SUCCESS_MESSAGE_ORDER
				)
				resetForm()
				setTimeout(navigateToProfile, 200)
				clearCart()
			}
		} else {
			const isValidationFieldsRegister =
				checkValidName() &&
				checkValidEmail() &&
				checkValidAddress() &&
				checkValidPassword() &&
				checkValidPhone()

			const token = await getToken()
			if (isValidationFieldsRegister && token) {
				saveToken(token)
				const newOrder = await createOrder({ items: order })
				const user = await getProfile()
				setUser(user)
				emitter.emit(CUSTOM_EVENTS.ADD_ORDER, newOrder)
				emitter.emit(
					CUSTOM_EVENTS.ADD_TOST,
					VALIDATION_SETTING.SUCCESS_MESSAGE_ORDER
				)
				resetForm()
				setTimeout(navigateToProfile, 200)
				clearCart()
			}
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
		onAddressDropdown,
		isAuth
	}
}
