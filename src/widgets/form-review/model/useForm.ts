'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { isValidEmail } from '@/shared/utils'
import { INPUT_NAMES, VALIDATION_SETTING } from '../setting'

const defaultValue = {
  name: '',
  email: '',
  review: ''
}

export const useForm = () => {
  const [error, setError] = useState<Record<string, string>>(defaultValue)
  const [values, setValues] = useState<Record<string, string>>(defaultValue)

  const [rating, setRating] = useState(0)
  const [ratingErrorMessage, setRatingErrorMessage] = useState('')

  const onError = (name: string, value: string) => {
    setError(prev => ({ ...prev, [name]: value }))
  }

  const onValue = (name: string, value: string) => {
    setValues(prev => ({ ...prev, [name]: value }))
  }

  const resetForm = () => {
    setValues(defaultValue)
    setRating(0)
  }

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

  const checkValidReview = () => {
    if (values.review.trim().length < VALIDATION_SETTING.MIN_REVIEW_LENGTH) {
      onError(INPUT_NAMES.REVIEW, VALIDATION_SETTING.MIN_REVIEW_LENGTH_MESSAGE)
      return false
    }
    if (values.review.trim().length > VALIDATION_SETTING.MAX_REVIEW_LENGTH) {
      onError(INPUT_NAMES.REVIEW, VALIDATION_SETTING.MAX_REVIEW_LENGTH_MESSAGE)
      return false
    }
    return true
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

  const checkRatingValue = () => {
    if (rating === 0) {
      setRatingErrorMessage(VALIDATION_SETTING.RATING_NO_VALID_MESSAGE)
      return false
    }
    return true
  }

  const isErrorField =
    Object.values(error).some(el => el.trim().length > 0) ||
    ratingErrorMessage.length > 0
  const isEmptyField =
    Object.values(values).some(el => el.trim().length === 0) || rating === 0
  const isDisabled = isEmptyField || isErrorField

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const isValidationFields =
      checkValidReview() &&
      checkValidName() &&
      checkValidEmail() &&
      checkRatingValue()

    if (isValidationFields) {
      console.log('submit!!!')
      resetForm()
    }
  }

  return {
    resetInputError,
    onSubmit,
    values,
    onInputChange,
    error,
    isDisabled,
    rating,
    setRating,
    ratingErrorMessage,
    setRatingErrorMessage,
    onError
  }
}
