'use client'

import { STORAGE_KEYS } from '@/shared/settings'
import { useEffect, useSyncExternalStore } from 'react'

type FavoritesType = number[]

let favorites: FavoritesType = []
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
	},

	setFavoritesList(list: FavoritesType) {
		favorites = list
	}
}

export const useFavorites = () => {
	const favoritesList = useSyncExternalStore(
		favoritesStore.subscribe,
		favoritesStore.getSnapshot,
		favoritesStore.getServerSnapshot
	)

	const { onClickHandler, getIsLikedBySku, setFavoritesList } = favoritesStore

	useEffect(() => {
		if (typeof window !== 'undefined' && favoritesList.length > 0) {
			localStorage.setItem(
				STORAGE_KEYS.FAVORITES,
				JSON.stringify(favoritesList)
			)
		}
	}, [favoritesList])

	return {
		getIsLikedBySku,
		favorites: favoritesList,
		onClickHandler,
		setFavoritesList
	}
}
