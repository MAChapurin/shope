import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

export interface InputProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	checked: boolean
	className?: string
}
