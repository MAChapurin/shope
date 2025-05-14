import { CART__SETTINGS, CART_MESSAGES, useCart } from '@/entities/cart'
import { emitter } from '@/shared/lib'
import { CUSTOM_EVENTS } from '@/shared/settings'
import { useEffect } from 'react'

export const useCounter = (sku: number) => {
	const { cart, incrementBySku, decrementBySku, isInCartBySku } = useCart()

	const value = cart.find(el => el.sku === sku)?.count
	const increment = () => incrementBySku(sku)
	const decrement = () => decrementBySku(sku)
	const isAdded = isInCartBySku(sku)

	useEffect(() => {
		if (value === CART__SETTINGS.MAX) {
			emitter.emit(CUSTOM_EVENTS.ADD_TOST, CART_MESSAGES.MAX_ALERT)
		}
	}, [value])

	return {
		value,
		increment,
		decrement,
		isAdded
	}
}
