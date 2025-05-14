import { ButtonHTMLAttributes } from 'react'

export interface LikeButtonProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {
	sku: number
	className?: string
}
