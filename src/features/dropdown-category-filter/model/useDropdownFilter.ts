'use client'

import { useClickOutside, useQueryString } from '@/shared/hooks'
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

  const toogleDropdown = () => {
    setIsOpen(prev => !prev)
  }

  const onClick = (e: MouseEvent<HTMLUListElement>) => {
    if (e.target instanceof HTMLButtonElement) {
      router.push(PATH_NAMES.CATALOG + '?' + createQueryString(SEARCH_PARAMS.CATEGORY, e.target?.dataset?.value || ''))
    }
  }

  return { activeCategory, toogleDropdown, isOpen, ref, onClick }
}