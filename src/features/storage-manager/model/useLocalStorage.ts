'use client'
import { useCart, useFavorites } from '@/entities'

import { STORAGE_KEYS } from '@/shared/settings'
import { useLayoutEffect } from 'react'

export const useLocalStorage = () => {
	const { setFavoritesList } = useFavorites()
	const { addToCartList } = useCart()

	useLayoutEffect(() => {
		const initialFavorites = localStorage.getItem(STORAGE_KEYS.FAVORITES)
		if (initialFavorites) {
			setFavoritesList(JSON.parse(initialFavorites))
		}
		const initialCart = localStorage.getItem(STORAGE_KEYS.CART)
		if (initialCart) {
			addToCartList(JSON.parse(initialCart))
		}
	}, [setFavoritesList, addToCartList])
}
