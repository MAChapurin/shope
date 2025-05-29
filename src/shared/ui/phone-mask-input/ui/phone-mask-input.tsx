'use client'

import { InputProps } from '@/shared/ui/input/input.types'
import { FC } from 'react'
import { Input } from '@/shared/ui'
import { getPhoneMask } from '@/shared/utils'

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
