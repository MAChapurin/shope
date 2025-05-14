import { ReactNode } from 'react'

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'filled' | 'outline' | 'default'
	children: ReactNode
	className?: string
	fullWidth?: boolean
}
