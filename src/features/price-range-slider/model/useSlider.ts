import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { SEARCH_PARAMS } from '@/shared/settings'
import { useQueryDelete, useQueryString } from '@/shared/hooks'

export const useSlider = (min: number, max: number) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useQueryString()
  const deleteQueryString = useQueryDelete()

  const searchParamMinValue = searchParams.get(SEARCH_PARAMS.PRICE_MIN)
  const searchParamMaxValue = searchParams.get(SEARCH_PARAMS.PRICE_MAX)

  const [minValue, setMinValue] = useState(min)
  const [maxValue, setMaxValue] = useState(max)

  const minValueRef = useRef<HTMLInputElement>(null)
  const maxValueRef = useRef<HTMLInputElement>(null)
  const rangeRef = useRef<HTMLDivElement>(null)

  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  )

  const onChangeLeft = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(+event.target.value, maxValue - 1)
    setMinValue(value)
    event.target.value = value.toString()
    router.push(pathname + '?' + createQueryString(SEARCH_PARAMS.PRICE_MIN, event.target.value))
  }

  const onChangeRight = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(+event.target.value, minValue + 1)
    setMaxValue(value)
    event.target.value = value.toString()
    router.push(pathname + '?' + createQueryString(SEARCH_PARAMS.PRICE_MAX, value.toString()))
  }

  useEffect(() => {
    if (maxValueRef.current) {
      const minPercent = getPercent(minValue)
      const maxPercent = getPercent(+maxValueRef.current.value)

      if (rangeRef.current) {
        rangeRef.current.style.left = `${minPercent}%`
        rangeRef.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [minValue, getPercent])

  useEffect(() => {
    if (minValueRef.current) {
      const minPercent = getPercent(+minValueRef.current.value)
      const maxPercent = getPercent(maxValue)

      if (rangeRef.current) {
        rangeRef.current.style.width = `${maxPercent - minPercent}%`
      }
    }
  }, [maxValue, getPercent])

  useEffect(() => {
    if (searchParamMinValue && minValueRef.current) {
      setMinValue(+searchParamMinValue)
      minValueRef.current.value = searchParamMinValue
    }
    if (searchParamMaxValue && maxValueRef.current) {
      setMaxValue(+searchParamMaxValue)
      maxValueRef.current.value = searchParamMaxValue
    }
  }, [])

  useEffect(() => {
    if (!searchParamMaxValue) {
      router.push(pathname + '?' + deleteQueryString(SEARCH_PARAMS.PRICE_MAX))
      setMaxValue(max)
    }
    if (!searchParamMinValue) {
      router.push(pathname + '?' + deleteQueryString(SEARCH_PARAMS.PRICE_MIN))
      setMinValue(min)
    }
  }, [deleteQueryString, max, min, pathname, router, searchParamMaxValue, searchParamMinValue])

  return {
    min,
    max,
    minValue,
    minValueRef,
    maxValue,
    maxValueRef,
    rangeRef,
    onChangeLeft,
    onChangeRight
  }
}
