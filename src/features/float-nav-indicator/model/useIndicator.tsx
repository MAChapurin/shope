'use client'
import { usePathname } from 'next/navigation'
import { PATH_NAMES } from '@/shared/settings'

export const useIndicator = () => {
	const pathname = usePathname()
	const isAbout = pathname === PATH_NAMES.ABOUT
	const isCart = pathname === PATH_NAMES.CART
	const isCatalog = pathname === PATH_NAMES.CATALOG
	const isFavorites = pathname === PATH_NAMES.FAVORITES
	const isMain = pathname === PATH_NAMES.MAIN
	const isProfile = pathname === PATH_NAMES.PROFILE
	return {
		isAbout,
		isCart,
		isCatalog,
		isFavorites,
		isMain,
		isProfile
	}
}
