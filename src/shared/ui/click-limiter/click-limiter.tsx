'use client'
import { FC } from 'react'
import { ClickLimiterProps } from './click-limiter.types'

export const ClickLimiter: FC<ClickLimiterProps> = ({ children, ...props }) => {
	return (
		<div
			onClick={e => {
				e.preventDefault()
				e.stopPropagation()
			}}
			{...props}
		>
			{children}
		</div>
	)
}
