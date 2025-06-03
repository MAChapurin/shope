'use client'

import { Button, Title } from '@/shared/ui'
import { INPUT_NAMES, VALIDATION_SETTING } from '@/shared/settings'
import { useUserUpdate } from '../model/useUserUpdate'
import { FC } from 'react'
import { FormUpdateUserProps } from '../types'
import { AddressAutoComplete } from '@/features'
import styles from './styles.module.css'

export const FormUpdateUserAddress: FC<FormUpdateUserProps> = ({
	user,
	...props
}) => {
	const { values, error, onSubmit, onAddressDropdown, onInputChange } =
		useUserUpdate(
			user,
			INPUT_NAMES.ADDRESS,
			VALIDATION_SETTING.SUCCESS_MESSAGE_EDIT_NAME
		)
	return (
		<form className={styles.form} onSubmit={onSubmit} {...props}>
			<Title As='h3'>
				{user.address ? 'Изменить адрес' : 'Добавить адрес'}
			</Title>
			<AddressAutoComplete
				errorMessage={error?.address}
				value={values.address || ''}
				onChange={onInputChange}
				setValue={onAddressDropdown}
			/>
			<Button fullWidth variant='filled'>
				Сохранить
			</Button>
		</form>
	)
}
