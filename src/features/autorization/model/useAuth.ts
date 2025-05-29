import {
  getProfile,
  loginUser,
  registerUser,
  TypeUserData,
  useProfile
} from '@/entities'
import { emitter } from '@/shared/lib'
import {
  CUSTOM_EVENTS,
  INPUT_NAMES,
  STORAGE_KEYS,
  VALIDATION_SETTING
} from '@/shared/settings'
import { isValidEmail } from '@/shared/utils'
import { ChangeEvent, FormEvent, useState } from 'react'

const defaultValue: TypeUserData = {
  name: '',
  email: '',
  address: '',
  password: '',
  phone: ''
}

export const useAuth = () => {
  const { setUser } = useProfile()

  const [error, setError] = useState<TypeUserData>(defaultValue)
  const [values, setValues] = useState<TypeUserData>(defaultValue)

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

  const handlerLogin = async () => {
    let token = ''
    try {
      token = await loginUser(values)
      return token
    } catch (error) {
      console.log(error)
      return null
    }
  }

  const handlerRegister = async () => {
    let token = ''
    try {
      token = await registerUser(values)
      return token
    } catch (error) {
      console.log(error)
      return null
    }
  }

  const onLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isValidationFields = checkValidEmail() && checkValidPassword()

    if (isValidationFields) {
      const token = await handlerLogin()
      if (token) {
        localStorage.setItem(STORAGE_KEYS.TOKEN, token)
      }

      const user = await getProfile()
      setUser(user)
      console.log('token', token, 'user\n', user)
      emitter.emit(CUSTOM_EVENTS.ADD_TOST, VALIDATION_SETTING.GREETING)
    }
  }

  const onRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isValidationFields = checkValidEmail() && checkValidPassword()

    if (isValidationFields) {
      const token = await handlerRegister()
      if (token) {
        localStorage.setItem(STORAGE_KEYS.TOKEN, token)
      }

      const user = await getProfile()
      setUser(user)
      console.log('token', token, 'user\n', user)
      emitter.emit(CUSTOM_EVENTS.ADD_TOST, VALIDATION_SETTING.GREETING)
    }
  }

  const isDisabledLogin = false
  const isDisabledRegister = false

  return {
    values,
    error,
    onInputChange,
    onLogin,
    onRegister,
    isDisabledLogin,
    isDisabledRegister,
    resetInputError
  }
}
