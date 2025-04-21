'use client'

import { SEARCH_PARAMS } from "@/shared/settings"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { useCallback, useEffect, useId, useState } from "react"

export const useDiscount = () => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const isDiscount = searchParams.get(SEARCH_PARAMS.DISCOUNT)

  const id = useId()
  const [isChecked, setIsChecked] = useState(false)

  const toogleDiscount = () => {
    setIsChecked(prev => !prev)
    router.push(pathname + '?' + createQueryString(SEARCH_PARAMS.DISCOUNT, String(isChecked)))
  }

  useEffect(() => {
    if (isDiscount === 'true') {
      setIsChecked(true)
    }
  }, [])

  return {
    id,
    isChecked,
    toogleDiscount
  }
}