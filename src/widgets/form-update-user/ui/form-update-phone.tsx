'use client'

import { Button, PhoneInputMask, Title } from '@/shared/ui'
import {
	INPUT_NAMES,
	INPUT_PLACEHOLDERS,
	VALIDATION_SETTING
} from '@/shared/settings'
import { useUserUpdate } from '../model/useUserUpdate'
import { FC } from 'react'
import { FormUpdateUserProps } from '../types'
import styles from './styles.module.css'

export const FormUpdateUserPhone: FC<FormUpdateUserProps> = ({
	user,
	...props
}) => {
	const { values, error, onSubmit, onInputChange, resetInputError } =
		useUserUpdate(
			user,
			INPUT_NAMES.PHONE,
			VALIDATION_SETTING.SUCCESS_MESSAGE_EDIT_TEL
		)
	return (
		<form
			className={styles.form}
			onSubmit={onSubmit}
			onChange={resetInputError}
			{...props}
		>
			<Title align='center' As='h3'>
				{user.phone ? 'Изменить номер телефона' : 'Добавить номер телефона'}
			</Title>
			<PhoneInputMask
				name={INPUT_NAMES.PHONE}
				placeholder={INPUT_PLACEHOLDERS.PHONE}
				errorMessage={error?.phone}
				value={values.phone}
				onChange={onInputChange}
				required
			/>
			<Button fullWidth variant='filled'>
				Сохранить
			</Button>
		</form>
	)
}
