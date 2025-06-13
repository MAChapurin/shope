'use client'

import { Button, Input, Title } from '@/shared/ui'
import {
	INPUT_NAMES,
	INPUT_PLACEHOLDERS,
	VALIDATION_SETTING
} from '@/shared/settings'
import { useUserUpdate } from '../model/useUserUpdate'
import { FC } from 'react'
import { FormUpdateUserProps } from '../types'
import styles from './styles.module.css'

export const FormUpdateUserName: FC<FormUpdateUserProps> = ({
	user,
	...props
}) => {
	const { values, onSubmit, onInputChange } = useUserUpdate(
		user,
		INPUT_NAMES.NAME,
		VALIDATION_SETTING.SUCCESS_MESSAGE_EDIT_NAME
	)
	return (
		<form className={styles.form} onSubmit={onSubmit} {...props}>
			<Title align='center' As='h3'>
				{user.name ? 'Изменить имя' : 'Добавить имя'}
			</Title>
			<Input
				name={INPUT_NAMES.NAME}
				placeholder={INPUT_PLACEHOLDERS.NAME}
				onChange={onInputChange}
				type='text'
				value={values.name}
			/>
			<Button fullWidth variant='filled'>
				Сохранить
			</Button>
		</form>
	)
}
