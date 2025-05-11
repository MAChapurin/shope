'use client'

import { MENU_BAR_VALUES } from '@/features/burger-menu-button/constants/search-params-values'
import { useClickOutside } from '@/shared/hooks'
import { SEARCH_PARAMS } from '@/shared/settings'
import { useRouter, useSearchParams } from 'next/navigation'
import { useRef } from 'react'

export const useMobileNavigation = () => {
	const searchParams = useSearchParams()
	const router = useRouter()
	const isOpen =
		searchParams.get(SEARCH_PARAMS.MENU_BAR) === MENU_BAR_VALUES.OPEN
	const onBack = () => {
		if (isOpen) {
			router.back()
		}
	}

	const ref = useRef<HTMLDivElement>(null!)
	useClickOutside(ref, onBack)
	return { isOpen, ref }
}
