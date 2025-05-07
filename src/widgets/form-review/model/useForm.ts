'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { isValidEmail } from '@/shared/utils/isValidMail'
import { INPUT_NAMES, VALIDATION_SETTING } from '../setting'

const defaultValue = {
  name: '',
  email: '',
  review: ''
}


export const useForm = () => {
  const [error, setError] = useState<Record<INPUT_NAMES, string>>(defaultValue)
  const [values, setValues] =
    useState<Record<INPUT_NAMES, string>>(defaultValue)

  const errorValueHandler = (name: string, value: string) => {
    setError(prev => ({ ...prev, [name]: value }))
  }

  const resetForm = () => {
    setValues(defaultValue)
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name
    errorValueHandler(name, e.target.value)
  }

  const resetInputError = (e: FormEvent<HTMLFormElement>) => {
    if (e.target instanceof HTMLInputElement) {
      const name = e.target.name
      errorValueHandler(name, e.target.value)
    }
  }

  const checkValidReview = () => {
    if (values.review.trim().length < VALIDATION_SETTING.MIN_REVIEW_LENGTH) {
      errorValueHandler(INPUT_NAMES.REVIEW, VALIDATION_SETTING.MIN_REVIEW_LENGTH_MESSAGE)
    }
    if (values.review.trim().length < VALIDATION_SETTING.MAX_REVIEW_LENGTH) {
      errorValueHandler(INPUT_NAMES.REVIEW, VALIDATION_SETTING.MAX_REVIEW_LENGTH_MESSAGE)
    }
  }

  const checkValidName = () => {
    if (values.name.trim().length < VALIDATION_SETTING.MIN_NAME_LENGTH) {
      errorValueHandler(INPUT_NAMES.NAME, VALIDATION_SETTING.MIN_NAME_LENGTH__MESSAGE)
    }
    if (values.name.length > VALIDATION_SETTING.MAX_NAME_LENGTH) {
      errorValueHandler(INPUT_NAMES.NAME, VALIDATION_SETTING.MAX_NAME_LENGTH_MESSAGE)
    }
  }

  const checkValidEmail = () => {
    if (values.email.length < VALIDATION_SETTING.MIN_EMAIL_LENGTH) {
      errorValueHandler(INPUT_NAMES.EMAIL, VALIDATION_SETTING.MIN_EMAIL_LENGTH_MESSAGE)
    }
    if (!isValidEmail(values.email.toString())) {
      errorValueHandler(INPUT_NAMES.EMAIL, VALIDATION_SETTING.EMAIL_NO_VALID_MESSAGE)
    }
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    checkValidReview()
    checkValidName()
    checkValidEmail()
    console.log('submit!!!')
    resetForm()
  }

  const isDisabled = Object.values(values).some(el => el.trim().length === 0) || Object.values(error).some(el => el.trim().length > 0)

  return {
    resetInputError, onSubmit, values, onInputChange, error, isDisabled
  }
}