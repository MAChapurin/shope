'use client'

import { useEffect, useSyncExternalStore } from 'react'

const STORAGE_KEY = 'favorites_key'

type FavoritesType = number[]

const getInitialFavorites = (): FavoritesType => {
	if (typeof window !== 'undefined') {
		const favoritesFromLocalStorage = localStorage.getItem(STORAGE_KEY)
		return favoritesFromLocalStorage
			? JSON.parse(favoritesFromLocalStorage)
			: []
	}
	return []
}

let favorites: FavoritesType = getInitialFavorites()
const subscribers: Set<() => void> = new Set()

const emitChange = () => {
	subscribers.forEach(callback => {
		callback()
	})
}

let serverSnapshot: FavoritesType | null = null

const favoritesStore = {
	getSnapshot: (): FavoritesType => favorites,

	getServerSnapshot: (): FavoritesType => {
		if (serverSnapshot === null) {
			serverSnapshot = []
		}
		return serverSnapshot
	},

	subscribe(callback: () => void) {
		subscribers.add(callback)
		return () => subscribers.delete(callback)
	},

	onClickHandler(sku: number) {
		if (favorites.includes(sku)) {
			favorites = favorites.filter(el => el !== sku)
		} else {
			favorites = [...favorites, sku]
		}
		emitChange()
	},

	getIsLikedBySku(sku: number): boolean {
		return favorites.includes(sku)
	}
}

export const useFavorites = () => {
	const favoritesList = useSyncExternalStore(
		favoritesStore.subscribe,
		favoritesStore.getSnapshot,
		favoritesStore.getServerSnapshot
	)

	const { onClickHandler, getIsLikedBySku } = favoritesStore

	useEffect(() => {
		if (typeof window !== 'undefined') {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(favoritesList))
		}
	}, [favoritesList])

	return {
		getIsLikedBySku,
		favorites: favoritesList,
		onClickHandler
	}
}
