'use client'
import { useFavorites } from '@/entities'
import { STORAGE_KEYS } from '@/shared/settings'
import { useLayoutEffect } from 'react'


export const useLocalStorage = () => {
  const { setFavoritesList } = useFavorites()

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      const initialData = localStorage.getItem(STORAGE_KEYS.FAVORITES)
      if (initialData) {
        console.log('StorageManager =>', initialData)
        setFavoritesList(JSON.parse(initialData))
      }
    }
  }, [setFavoritesList])
}