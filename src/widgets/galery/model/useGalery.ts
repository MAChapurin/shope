import { UIEvent, useEffect, useRef, useState } from 'react'

export const useGalery = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)

  const listRef = useRef<HTMLUListElement>(null)
  const swiperRef = useRef<HTMLDivElement>(null)
  const swiperWidth = swiperRef.current?.clientWidth || 541

  const timeoutId = useRef<NodeJS.Timeout | null>(null)

  const onScroll = (e: UIEvent<HTMLDivElement, globalThis.UIEvent>) => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current)
    }

    timeoutId.current = setTimeout(() => {
      if (e.target instanceof HTMLDivElement && swiperRef.current) {
        const newActiveSlideIndex = Math.round(
          swiperRef.current.scrollLeft / swiperWidth
        )
        setActiveSlideIndex(newActiveSlideIndex)
      }
    }, 100)
  }

  useEffect(() => {
    const nodeList = listRef.current?.querySelectorAll('li')
    if (nodeList) {
      nodeList[activeSlideIndex].scrollIntoView(false)
    }
  }, [activeSlideIndex])

  return {
    activeSlideIndex,
    setActiveSlideIndex,
    listRef,
    swiperRef,
    onScroll
  }
}
