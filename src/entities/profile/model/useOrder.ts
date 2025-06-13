'use client'

import { useSyncExternalStore } from 'react'

import { NewOrderType } from '../types'

let order: NewOrderType | null = null
const subscribers: Set<() => void> = new Set()

const emitChange = () => {
	subscribers.forEach(callback => {
		callback()
	})
}

const serverSnapshot: NewOrderType | null = null

const newOrderStore = {
	getSnapshot: (): NewOrderType | null => order,

	getServerSnapshot: (): NewOrderType | null => {
		return serverSnapshot
	},

	subscribe(callback: () => void) {
		subscribers.add(callback)
		return () => subscribers.delete(callback)
	},

	setNewOrder(newOrder: NewOrderType) {
		order = newOrder
		emitChange()
	},

	removeOrder() {
		order = null
	}
}

export const useNewOrder = () => {
	const order = useSyncExternalStore(
		newOrderStore.subscribe,
		newOrderStore.getSnapshot,
		newOrderStore.getServerSnapshot
	)

	const { setNewOrder, removeOrder } = newOrderStore

	return {
		order,
		setNewOrder,
		removeOrder
	}
}
