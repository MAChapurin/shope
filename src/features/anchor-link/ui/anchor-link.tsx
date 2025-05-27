'use client'
import { useAnchor } from '../model/useAnchor'
import { FC } from 'react'
import { AnchorLinkProps } from '../types'
import { cn } from '@/shared/lib'

import styles from './styles.module.css'

export const AnchorLink: FC<AnchorLinkProps> = ({
	children,
	className,
	params,
	value,
	id,
	href,
	...props
}) => {
	const onClick = useAnchor(params, value, id)
	return (
		<a
			className={cn(styles.link, className)}
			onClick={onClick}
			href={href}
			{...props}
		>
			{children}
		</a>
	)
}
