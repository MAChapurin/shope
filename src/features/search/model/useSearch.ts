'use client'

import { useEffect, useId, useRef, useState } from "react"

export const useSearch = () => {
  const [isVisible, setIsVisible] = useState(false)
  const id = useId()
  const ref = useRef<HTMLInputElement>(null)

  const onOpen = () => {
    setIsVisible(true)
  }

  const onClose = () => {
    setIsVisible(false)
  }

  useEffect(() => {
    if (isVisible) {
      ref.current?.focus()
    }
  }, [isVisible])

  return {
    id,
    isVisible,
    onOpen,
    onClose,
    ref
  }
}