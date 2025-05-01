'use client'
import { useFavorites } from "@/entities"

export const useFlag = (sku: number) => {
  const { getIsLikedBySku } = useFavorites()
  const isLiked = getIsLikedBySku(sku)
  return isLiked
}