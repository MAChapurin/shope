import { useFavorites } from "@/entities"

export const useLikeCount = () => {
  const { favorites } = useFavorites()
  const count = favorites.length
  return count
}