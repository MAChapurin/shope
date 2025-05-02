import { useQueryString } from '@/shared/hooks'
import { SEARCH_PARAMS } from '@/shared/settings'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { MouseEvent } from 'react'

export const usePagination = (limit: number) => {
	const pathname = usePathname()
	const router = useRouter()
	const searchParams = useSearchParams()

	const offset = searchParams.get(SEARCH_PARAMS.OFFSET) || 0
	const createQueryString = useQueryString()

	const onClick = (e: MouseEvent<HTMLUListElement>) => {
		if (e.target instanceof HTMLButtonElement) {
			const newOffset = Number(e.target.dataset.value || 0) * limit
			router.push(
				pathname +
					'?' +
					createQueryString(SEARCH_PARAMS.OFFSET, newOffset.toString())
			)
		}
	}

	return { offset, onClick }
}
