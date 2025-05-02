'use client'
import { useFavorites } from '@/entities'

export const useLikeButton = (sku: number) => {
	const { getIsLikedBySku, onClickHandler } = useFavorites()
	const isLiked = getIsLikedBySku(sku)
	const onClick = () => onClickHandler(sku)

	return {
		isLiked,
		onClick
	}
}
