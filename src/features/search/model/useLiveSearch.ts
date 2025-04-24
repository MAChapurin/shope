import { useQueryString } from "@/shared/hooks"
import { PATH_NAMES, SEARCH_PARAMS } from "@/shared/settings"
import { useRouter, useSearchParams } from "next/navigation"
import { ChangeEvent, useId, useRef, useState } from "react"

export const useLiveSearch = () => {
  const id = useId()
  const ref = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const search = searchParams.get('search')
  const [searchValue, setSearchValue] = useState(search || '')

  const createQueryString = useQueryString()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
    router.push(PATH_NAMES.CATALOG + '?' + createQueryString(SEARCH_PARAMS.SEARCH, e.target.value))
  }

  return {
    id,
    ref,
    search,
    searchValue,
    onChange
  }
}