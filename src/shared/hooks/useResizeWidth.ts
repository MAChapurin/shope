'use client'
import { useState, useEffect } from 'react'
// import { useDebounce } from './useDebounce'

export function useResizeWidth(): number {
  const [width, setWidth] = useState<number>(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWidth(window.innerWidth)
      }
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return width
}
