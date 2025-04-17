'use client'
import { SEARCH_PARAMS } from '@/shared/settings'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { useCallback } from 'react'
import { MENU_BAR_VALUES } from '../constants/search-params-values'

export const useBurgerModel = () => {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const isOpen =
		searchParams.get(SEARCH_PARAMS.MENU_BAR) === MENU_BAR_VALUES.OPEN

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString())
			params.set(name, value)
			return params.toString()
		},
		[searchParams]
	)

	const onOpen = () =>
		router.push(
			pathname +
				'?' +
				createQueryString(SEARCH_PARAMS.MENU_BAR, MENU_BAR_VALUES.OPEN)
		)

	const onClose = () =>
		router.push(
			pathname +
				'?' +
				createQueryString(SEARCH_PARAMS.MENU_BAR, MENU_BAR_VALUES.CLOSE)
		)

	const onClick = () => (isOpen ? onClose() : onOpen())

	return {
		isOpen,
		onClick
	}
}
