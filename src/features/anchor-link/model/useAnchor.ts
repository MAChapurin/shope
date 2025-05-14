'use client'

import { useQueryString } from '@/shared/hooks'
import { SEARCH_PARAMS } from '@/shared/settings'
import { usePathname, useRouter } from 'next/navigation'

export const useAnchor = (params: SEARCH_PARAMS, value: string, id: string) => {
	const router = useRouter()
	const pathname = usePathname()

	const createQueryString = useQueryString()
	const onClick = () => {
		router.push(pathname + '?' + createQueryString(params, value) + '#' + id)
	}

	return onClick
}
