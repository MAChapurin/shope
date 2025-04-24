'use client'
import { SEARCH_PARAMS } from '@/shared/settings'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { MENU_BAR_VALUES } from '../constants/search-params-values'
import { useQueryString } from '@/shared/hooks'

export const useBurgerModel = () => {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const isOpen =
		searchParams.get(SEARCH_PARAMS.MENU_BAR) === MENU_BAR_VALUES.OPEN

	const createQueryString = useQueryString()

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
