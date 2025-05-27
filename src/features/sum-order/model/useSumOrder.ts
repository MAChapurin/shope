'use client'

import { useCart } from '@/entities/cart'

export const useSumOrder = () => {
	const { cart } = useCart()
	return cart
		.map(item => {
			if (item.discount) {
				return (item.price / 100) * (100 - item.discount) * item.count
			}
			return item.price * item.count
		})
		.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}
