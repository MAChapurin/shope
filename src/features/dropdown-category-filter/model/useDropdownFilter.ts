'use client'

import { useClickOutside, useQueryDelete, useQueryString } from '@/shared/hooks'
import { PATH_NAMES, SEARCH_PARAMS } from '@/shared/settings'
import { useRouter, useSearchParams } from 'next/navigation'
import { MouseEvent, useRef, useState } from 'react'


export const useDropdownFilterCategory = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const activeCategory = searchParams.get(SEARCH_PARAMS.CATEGORY)

  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => {
    setIsOpen(false)
  }

  const ref = useRef<HTMLDivElement>(null!)
  useClickOutside(ref, onClose)

  const createQueryString = useQueryString()
  const deleteQueryString = useQueryDelete()

  const toogleDropdown = () => {
    setIsOpen(prev => !prev)
  }

  const onClick = (e: MouseEvent<HTMLUListElement>) => {
    if (e.target instanceof HTMLButtonElement) {
      if (activeCategory === e.target?.dataset?.value) {
        router.push(PATH_NAMES.CATALOG + '?' + deleteQueryString(SEARCH_PARAMS.CATEGORY))
      } else {
        router.push(PATH_NAMES.CATALOG + '?' + createQueryString(SEARCH_PARAMS.CATEGORY, e.target?.dataset?.value || '', true))
      }
    }
  }

  return { activeCategory, toogleDropdown, isOpen, ref, onClick }
}

