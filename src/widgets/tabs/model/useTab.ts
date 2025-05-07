'use client'
import { useQueryString } from '@/shared/hooks'
import { SEARCH_PARAMS } from '@/shared/settings'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'


export const useTab = (tabId: string) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const isActive = searchParams.get(SEARCH_PARAMS.ACTIVE_TAB) === tabId

  const createQueryString = useQueryString()

  const onClick = () =>
    router.push(
      pathname + '?' + createQueryString(SEARCH_PARAMS.ACTIVE_TAB, tabId),
      { scroll: false }
    )

  return {
    isActive, onClick
  }
}