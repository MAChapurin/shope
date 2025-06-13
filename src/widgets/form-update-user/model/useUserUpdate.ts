'use client'

import { TypeUserData, updateProfile, useProfile } from '@/entities'
import { emitter } from '@/shared/lib'
import {
	CUSTOM_EVENTS,
	INPUT_NAMES,
	VALIDATION_SETTING
} from '@/shared/settings'
import { ChangeEvent, FormEvent, useState } from 'react'
import { EditFieldNameType } from '../types'

const defaultValue: TypeUserData = {
	name: '',
	email: '',
	address: '',
	password: '',
	phone: ''
}

export const useUserUpdate = (
	user: TypeUserData,
	name: EditFieldNameType,
	successMessage: string
) => {
	const { setUser } = useProfile()

	const [error, setError] = useState<TypeUserData>(defaultValue)
	const [values, setValues] = useState<TypeUserData>(user)

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

	const onAddressDropdown = (value: string) => {
		const name = INPUT_NAMES.ADDRESS
		onError(name, '')
		onValue(name, value)
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

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const isValidationFields =
			checkValidName() && checkValidPhone() && checkValidAddress()
		if (!isValidationFields) {
			return
		}
		const res = await updateProfile({ [name]: values[name] })
		setUser(res)
		emitter.emit(CUSTOM_EVENTS.CLOSE_MODAL)
		emitter.emit(CUSTOM_EVENTS.ADD_TOST, successMessage)
		setTimeout(() => {
			window.location.reload()
		}, 300)
	}

	return {
		onSubmit,
		onError,
		onInputChange,
		onAddressDropdown,
		resetInputError,
		values,
		error
	}
}
