'use client'

import { FC } from 'react'
import { ProductOverlayType } from '../types/product.types'

export const ProductOverlay: FC<ProductOverlayType> = ({
	children,
	...props
}) => {
	return (
		<div onClick={e => e.stopPropagation()} {...props}>
			{children}
		</div>
	)
}
