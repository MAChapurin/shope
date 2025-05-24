import { CART__SETTINGS, CART_MESSAGES, useCart } from '@/entities/cart'
import { useClickOutside } from '@/shared/hooks'
import { emitter } from '@/shared/lib'
import { CUSTOM_EVENTS } from '@/shared/settings'
import { useEffect, useRef, useState } from 'react'

export const useCounter = (sku: number) => {
	const { cart, incrementBySku, decrementBySku, isInCartBySku } = useCart()
	const value = cart.find(el => el.sku === sku)?.count
	const increment = () => incrementBySku(sku)
	const decrement = () => decrementBySku(sku)
	const isAdded = isInCartBySku(sku)

	const [mounted, setMounted] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	const onClose = () => {
		setIsOpen(false)
	}

	const onToogle = () => {
		setIsOpen(prev => !prev)
	}

	const ref = useRef<HTMLDivElement>(null!)
	useClickOutside(ref, onClose)

	useEffect(() => {
		if (value === CART__SETTINGS.MAX) {
			emitter.emit(CUSTOM_EVENTS.ADD_TOST, CART_MESSAGES.MAX_ALERT)
		}
	}, [value])

	useEffect(() => {
		setMounted(true)
	}, [])

	return {
		value,
		increment,
		decrement,
		isAdded,
		ref,
		isOpen,
		onToogle,
		mounted
	}
}
