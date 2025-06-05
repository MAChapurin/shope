import {
	getProfile,
	loginUser,
	registerUser,
	saveToken,
	TypeUserData,
	useProfile
} from '@/entities'
import { emitter } from '@/shared/lib'
import {
	CUSTOM_EVENTS,
	INPUT_NAMES,
	PATH_NAMES,
	VALIDATION_SETTING
} from '@/shared/settings'
import { isValidEmail, removePropertyAndReturn } from '@/shared/utils'
import { useRouter } from 'next/navigation'
import { ChangeEvent, FormEvent, useState } from 'react'

const defaultValue: TypeUserData = {
	email: '',
	password: '',
	password_repeat: '',
	name: '',
	address: '',
	phone: ''
}

export const useAuth = () => {
	const router = useRouter()
	const { setUser } = useProfile()

	const [error, setError] = useState<TypeUserData>(defaultValue)
	const [values, setValues] = useState<TypeUserData>(defaultValue)
	const [isPending, setIsPending] = useState(false)

	const [isKeepToken, setIsKeepToken] = useState(false)
	const onKeepToken = () => {
		setIsKeepToken(prev => !prev)
	}

	const [isAgreePersonalData, setIsAgreePersonalData] = useState(false)
	const onPersonalData = () => {
		setIsAgreePersonalData(prev => !prev)
	}

	const onError = (name: string, value: string) => {
		setError(prev => ({ ...prev, [name]: value }))
	}

	const onValue = (name: string, value: string) => {
		setValues(prev => ({ ...prev, [name]: value }))
	}

	const resetInputError = (e: FormEvent<HTMLFormElement>) => {
		if (e.target instanceof HTMLInputElement) {
			const name = e.target.name
			onError(name, '')
		}
	}

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name
		onError(name, '')
		onValue(name, e.target.value)
	}

	const checkValidEmail = () => {
		if (values.email.length < VALIDATION_SETTING.MIN_EMAIL_LENGTH) {
			onError(INPUT_NAMES.EMAIL, VALIDATION_SETTING.MIN_EMAIL_LENGTH_MESSAGE)
			setIsPending(false)
			return false
		}
		if (!isValidEmail(values.email.toString())) {
			onError(INPUT_NAMES.EMAIL, VALIDATION_SETTING.EMAIL_NO_VALID_MESSAGE)
			setIsPending(false)
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
			setIsPending(false)
			return false
		}
		if (values.password.length > VALIDATION_SETTING.MAX_PASSWORD_LENGTH) {
			onError(
				INPUT_NAMES.PASSWORD,
				VALIDATION_SETTING.MAX_PASSWORD_LENGTH__MESSAGE
			)
			setIsPending(false)
			return false
		}

		if (values.password.includes(' ')) {
			onError(INPUT_NAMES.PASSWORD, VALIDATION_SETTING.SPACE_PASSWORD_MESSAGE)
			setIsPending(false)
			return false
		}
		return true
	}

	const checkValidPasswordEquality = () => {
		if (values.password !== values.password_repeat) {
			onError(
				INPUT_NAMES.PASSWORD_REPEAT,
				VALIDATION_SETTING.PASSWORD_REPEAT_ERROR
			)
			setIsPending(false)
			return false
		}
		return true
	}

	const handlerLogin = async () => {
		let token = ''
		try {
			token = await loginUser(
				removePropertyAndReturn(values, INPUT_NAMES.PASSWORD_REPEAT)
			)
			return token
		} catch (error) {
			console.log(error)
			return null
		}
	}

	const handlerRegister = async () => {
		let token = ''
		try {
			token = await registerUser(
				removePropertyAndReturn(values, INPUT_NAMES.PASSWORD_REPEAT)
			)

			return token
		} catch (error) {
			console.log(error)
			return null
		}
	}

	const onLogin = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsPending(true)
		const isValidationFields = checkValidEmail() && checkValidPassword()

		if (isValidationFields) {
			const token = await handlerLogin()
			if (token) {
				saveToken(token)
			} else {
				onError(INPUT_NAMES.PASSWORD, VALIDATION_SETTING.PASSWORD_WRONG)
				setIsPending(false)
				return
			}

			const user = await getProfile()
			setUser(user)
			emitter.emit(CUSTOM_EVENTS.ADD_TOST, VALIDATION_SETTING.GREETING)
			setIsPending(false)
			router.push(PATH_NAMES.PROFILE)
		}
	}

	const onRegister = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsPending(true)
		const isValidationFields =
			checkValidEmail() && checkValidPassword() && checkValidPasswordEquality()

		if (isValidationFields) {
			const token = await handlerRegister()
			if (token) {
				saveToken(token)
			} else {
				onError(INPUT_NAMES.EMAIL, VALIDATION_SETTING.MAIL_EXIST)
				setIsPending(false)
				return
			}

			const user = await getProfile()
			setUser(user)
			console.log('token', token, 'user\n', user)
			emitter.emit(CUSTOM_EVENTS.ADD_TOST, VALIDATION_SETTING.GREETING)
			setIsPending(false)
			router.push(PATH_NAMES.PROFILE)
		}
	}

	const isDisabledLogin = isPending
	const isDisabledRegister = isPending || !isAgreePersonalData

	return {
		values,
		error,
		onInputChange,
		onLogin,
		onRegister,
		isDisabledLogin,
		isDisabledRegister,
		resetInputError,
		isKeepToken,
		onKeepToken,
		isAgreePersonalData,
		onPersonalData
	}
}
