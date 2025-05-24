'use client'
import { useCart } from '@/entities/cart'

export const useIndicator = () => {
	const { cart } = useCart()

	const count = cart.length
	return {
		count
	}
}
