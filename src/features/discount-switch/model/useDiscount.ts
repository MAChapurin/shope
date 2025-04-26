'use client'

import { useQueryDelete, useQueryString } from "@/shared/hooks"
import { SEARCH_PARAMS } from "@/shared/settings"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { useCallback, useEffect, useId, useState } from "react"

export const useDiscount = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const createQueryString = useQueryString()
  const deleteQueryString = useQueryDelete()

  const isDiscount = searchParams.get(SEARCH_PARAMS.DISCOUNT)

  const id = useId()
  const [isChecked, setIsChecked] = useState(false)



  const updateSearchParams = useCallback(() => {
    router.push(pathname + '?' + createQueryString(SEARCH_PARAMS.DISCOUNT, String(isChecked), true))
  }, [createQueryString, isChecked, pathname, router])

  const toogleDiscount = () => {
    setIsChecked(prev => !prev)
    updateSearchParams()
  }

  useEffect(() => {
    if (isChecked) {
      updateSearchParams()
    } else {
      router.push(pathname + '?' + deleteQueryString(SEARCH_PARAMS.DISCOUNT))
    }
  }, [deleteQueryString, isChecked, pathname, router, updateSearchParams])

  useEffect(() => {
    if (isDiscount === 'true') {
      setIsChecked(true)
    } else {
      setIsChecked(false)
    }
  }, [isDiscount])

  return {
    id,
    isChecked,
    toogleDiscount
  }
}