'use client'

import { SEARCH_PARAMS } from '@/shared/settings'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export const useResetFilters = () => {
	const pathname = usePathname()
	const router = useRouter()
	const searchParams = useSearchParams()

	const isSearch = searchParams.get(SEARCH_PARAMS.SEARCH)
	const isCategory = searchParams.get(SEARCH_PARAMS.CATEGORY)
	const isMaxPrice = searchParams.get(SEARCH_PARAMS.PRICE_MAX)
	const isMinPrice = searchParams.get(SEARCH_PARAMS.PRICE_MIN)
	const isDiscount = searchParams.get(SEARCH_PARAMS.DISCOUNT)

	const isVisible =
		isSearch || isCategory || isMaxPrice || isMinPrice || isDiscount

	const onClick = () => {
		router.push(pathname)
	}

	return { onClick, isVisible }
}
