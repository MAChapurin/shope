'use client'

import { useEffect, useRef, useState } from 'react'
import { Place, SetValueType } from '../types'
import { useClickOutside } from '@/shared/hooks'

export const useAutoComplete = (value: string, setValue: SetValueType) => {
	const [suggestions, setSuggestions] = useState<Place[]>([])
	const [isLoading, setIsLoading] = useState(false)

	const dropdownRef = useRef<HTMLDivElement>(null!)
	const [isOpen, setIsOpen] = useState(true)

	const onOpen = () => {
		setIsOpen(true)
	}

	const onClose = () => {
		setIsOpen(false)
	}

	useClickOutside(dropdownRef, onClose)

	useEffect(() => {
		if (value.length < 3) {
			setSuggestions([])
			return
		}

		const delayDebounceFn = setTimeout(() => {
			fetchSuggestions(value)
		}, 300)

		return () => clearTimeout(delayDebounceFn)
	}, [value])

	const fetchSuggestions = async (searchTerm: string): Promise<void> => {
		setIsLoading(true)
		try {
			const response = await fetch(
				`https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${encodeURIComponent(searchTerm)}&limit=10`
			)
			if (!response.ok) {
				throw new Error('Network response was not ok')
			}
			const data: Place[] = await response.json()
			setSuggestions(data)
		} catch (error) {
			console.error('Ошибка при получении данных:', error)
			setSuggestions([])
		} finally {
			setIsLoading(false)
		}
	}

	const onClick = (place: Place): void => {
		setValue(place.display_name)
		setSuggestions([])
	}
	return {
		isOpen,
		suggestions,
		onClick,
		onOpen,
		onClose,
		isLoading,
		dropdownRef
	}
}
