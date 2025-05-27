'use client'
import { INPUT_NAMES, INPUT_PLACEHOLDERS } from '@/shared/settings'
import { Input } from '@/shared/ui'
import { FC } from 'react'

import { cn } from '@/shared/lib'
import { AddressAutoCompleteProps } from '../types'
import { AddressDropdown } from './address-dropdown'
import { useAutoComplete } from '../model/useAutoComplete'

import styles from './styles.module.css'

export const AddressAutoComplete: FC<AddressAutoCompleteProps> = ({
	value,
	onChange,
	setValue,
	className,
	errorMessage,
	...props
}) => {
	const { isOpen, suggestions, onClick, onOpen, isLoading, dropdownRef } =
		useAutoComplete(value, setValue)
	return (
		<div className={styles.root} ref={dropdownRef}>
			<Input
				onFocus={onOpen}
				name={INPUT_NAMES.ADDRESS}
				className={cn(styles.root__input, className)}
				type='text'
				placeholder={INPUT_PLACEHOLDERS.ADDRESS}
				value={value}
				onChange={onChange}
				errorMessage={errorMessage}
				autoComplete='off'
				required
				{...props}
			/>

			<AddressDropdown
				isOpen={isOpen}
				suggestions={suggestions}
				onClick={onClick}
				isLoading={isLoading}
			/>
		</div>
	)
}
