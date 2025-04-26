'use client'

import { useSearchParams } from "next/navigation"
import { useCallback } from "react"
import { SEARCH_PARAMS } from "../settings"


export const useQueryString = () => {
  const searchParams = useSearchParams()
  const createQueryString = useCallback(
    (name: string, value: string, resetOffset: boolean = false) => {
      const params = new URLSearchParams(searchParams.toString())
      if (resetOffset) {
        params.delete(SEARCH_PARAMS.OFFSET)
      }
      params.set(name, value)
      return params.toString()
    },
    [searchParams]
  )
  return createQueryString
}