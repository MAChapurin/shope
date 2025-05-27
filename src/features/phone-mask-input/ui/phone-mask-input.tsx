'use client'

import { InputProps } from '@/shared/ui/input/input.types'
import { FC } from 'react'
import { getPhoneMask } from '../utils/getPhoneMask'
import { Input } from '@/shared/ui'

export const PhoneInputMask: FC<InputProps> = ({
	value,
	onChange,
	...props
}) => {
	return (
		<Input
			value={getPhoneMask(value)}
			onChange={onChange}
			type='tel'
			{...props}
		/>
	)
}
