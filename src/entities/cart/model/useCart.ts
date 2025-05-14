'use client'

import { useSyncExternalStore } from 'react'
import { CartType } from '../types'
import { CART__SETTINGS } from '../settings'

let cart: CartType = []
const subscribers: Set<() => void> = new Set()

const emitChange = () => {
	subscribers.forEach(callback => {
		callback()
	})
}

let serverSnapshot: [] | null = null

const cartStore = {
	getSnapshot: (): CartType => cart,

	getServerSnapshot: (): CartType => {
		if (serverSnapshot === null) {
			serverSnapshot = []
		}
		return serverSnapshot
	},

	subscribe(callback: () => void) {
		subscribers.add(callback)
		return () => subscribers.delete(callback)
	},

	addToCartBySku(sku: number) {
		if (!cart.some(el => el.sku === sku)) {
			cart = [...cart, { sku, count: 1 }]
		}
		emitChange()
	},

	removeFromCartBySku(sku: number) {
		cart = cart.filter(el => el.sku !== sku)
		emitChange()
	},

	isInCartBySku(sku: number): boolean {
		return cart.some(el => el.sku === sku)
	},

	incrementBySku(sku: number) {
		cart = cart.map(el => {
			if (el.sku === sku) {
				return {
					sku,
					count: el.count >= CART__SETTINGS.MAX ? el.count : el.count + 1
				}
			}
			return el
		})
		emitChange()
	},

	decrementBySku(sku: number) {
		cart = cart.map(el => {
			if (el.sku === sku) {
				return { sku, count: el.count === 1 ? 1 : el.count - 1 }
			}
			return el
		})
		emitChange()
	}
}

export const useCart = () => {
	const cartList = useSyncExternalStore(
		cartStore.subscribe,
		cartStore.getSnapshot,
		cartStore.getServerSnapshot
	)

	const {
		addToCartBySku,
		isInCartBySku,
		removeFromCartBySku,
		incrementBySku,
		decrementBySku
	} = cartStore

	return {
		addToCartBySku,
		cart: cartList,
		isInCartBySku,
		removeFromCartBySku,
		incrementBySku,
		decrementBySku
	}
}
