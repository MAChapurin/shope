'use client'
import { useFavorites } from '@/entities'
import { useEffect, useState } from 'react'

export const useFlag = (sku: number) => {
	const { getIsLikedBySku } = useFavorites()
	const isLiked = getIsLikedBySku(sku)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	return { mounted, isLiked }
}
