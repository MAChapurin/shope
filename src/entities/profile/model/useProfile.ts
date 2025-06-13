'use client'

import { useEffect, useSyncExternalStore } from 'react'
import { TypeUserData } from '../types'
import { STORAGE_KEYS } from '@/shared/settings'

let user: TypeUserData | null = null
const subscribers: Set<() => void> = new Set()

const emitChange = () => {
	subscribers.forEach(callback => {
		callback()
	})
}

const serverSnapshot: TypeUserData | null = null

const userStore = {
	getSnapshot: (): TypeUserData | null => user,

	getServerSnapshot: (): TypeUserData | null => {
		return serverSnapshot
	},

	subscribe(callback: () => void) {
		subscribers.add(callback)
		return () => subscribers.delete(callback)
	},

	setUser(userData: TypeUserData) {
		user = userData
		emitChange()
	},

	logout() {
		user = null
	}
}

export const useProfile = () => {
	const user = useSyncExternalStore(
		userStore.subscribe,
		userStore.getSnapshot,
		userStore.getServerSnapshot
	)

	const { setUser, logout } = userStore

	useEffect(() => {
		if (user) {
			localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user))
		}
	}, [user])

	return {
		user,
		logout,
		setUser
	}
}
