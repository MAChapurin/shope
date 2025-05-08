'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { SEARCH_PARAMS, TAB_VALUES } from '@/shared/settings'
import { useEffect } from 'react'
import { useQueryString } from '@/shared/hooks'

export const useIndicator = () => {
	const router = useRouter()
	const searchparams = useSearchParams()
	const pathname = usePathname()

	const createQueryString = useQueryString()

	const isDescriptionTabActive =
		searchparams.get(SEARCH_PARAMS.ACTIVE_TAB) === TAB_VALUES.DESCRIPTION
	const isReviewTabActive =
		searchparams.get(SEARCH_PARAMS.ACTIVE_TAB) === TAB_VALUES.REVIEWS

	useEffect(() => {
		if (!isDescriptionTabActive && !isReviewTabActive) {
			router.push(
				pathname +
					'?' +
					createQueryString(SEARCH_PARAMS.ACTIVE_TAB, TAB_VALUES.DESCRIPTION)
			)
		}
	}, [
		createQueryString,
		isDescriptionTabActive,
		isReviewTabActive,
		pathname,
		router
	])

	return {
		isDescriptionTabActive,
		isReviewTabActive
	}
}
