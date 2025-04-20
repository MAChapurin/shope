'use client'

import { MENU_BAR_VALUES } from "@/features/burger-menu-button/constants/search-params-values"
import { SEARCH_PARAMS } from "@/shared/settings"
import { useSearchParams } from "next/navigation"

export const useMobileNavigation = () => {
  const searchParams = useSearchParams()
  const isOpen =
    searchParams.get(SEARCH_PARAMS.MENU_BAR) === MENU_BAR_VALUES.OPEN
  return { isOpen }
}