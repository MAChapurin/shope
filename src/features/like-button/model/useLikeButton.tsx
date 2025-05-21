'use client'
import { useFavorites } from '@/entities'
import { useEffect, useState } from 'react'

export const useLikeButton = (sku: number) => {
	const { getIsLikedBySku, onClickHandler } = useFavorites()
	const isLiked = getIsLikedBySku(sku)
	const onClick = () => onClickHandler(sku)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	return {
		isLiked,
		onClick,
		mounted
	}
}
