import { DetailedHTMLProps, InputHTMLAttributes } from 'react'

export interface InputProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	className?: string
	errorMessage?: string
}
