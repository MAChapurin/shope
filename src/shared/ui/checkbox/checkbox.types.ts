import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

export interface CheckBoxProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	checked: boolean
	className?: string
	text: string
}
