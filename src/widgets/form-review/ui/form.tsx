'use client'
import { Button, Input, Paragraph, Title } from '@/shared/ui'

import { useForm } from '../model/useForm'
import { INPUT_NAMES, VALIDATION_SETTING } from '../setting'
import { RatingInput } from '@/features'

import styles from './styles.module.css'

export const FormReview = () => {
	const {
		resetInputError,
		onSubmit,
		values,
		onInputChange,
		error,
		isDisabled,
		rating,
		setRating,
		ratingErrorMessage,
		setRatingErrorMessage
	} = useForm()

	return (
		<form
			onChange={resetInputError}
			className={styles.form}
			onSubmit={onSubmit}
		>
			<Title As='h2'>Добавить отзыв</Title>
			<Paragraph className={styles.root__subtitle} color='secondary'>
				{VALIDATION_SETTING.LABEL_ALERT}
			</Paragraph>
			<Input
				name={INPUT_NAMES.REVIEW}
				type='text'
				placeholder='Ваш отзыв*'
				value={values.review}
				onChange={onInputChange}
				errorMessage={error?.review}
				required
			/>
			<Input
				name={INPUT_NAMES.NAME}
				type='text'
				placeholder='Ваше имя*'
				errorMessage={error?.name}
				value={values.name}
				onChange={onInputChange}
				required
			/>
			<Input
				name={INPUT_NAMES.EMAIL}
				type='email'
				placeholder='Ваш email*'
				value={values.email}
				onChange={onInputChange}
				errorMessage={error?.email}
				required
			/>
			<RatingInput
				rating={rating}
				setRating={setRating}
				errorMessage={ratingErrorMessage}
				errorValueHandler={setRatingErrorMessage}
			/>
			<Button disabled={isDisabled} variant='filled' type='submit'>
				Отправить
			</Button>
		</form>
	)
}
