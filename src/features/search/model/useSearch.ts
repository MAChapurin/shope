'use client'

import { emitter } from '@/shared/lib'
import { CUSTOM_EVENTS, PATH_NAMES, SEARCH_PARAMS } from '@/shared/settings'
import { useRouter, useSearchParams } from 'next/navigation'
import {
	FormEvent,
	useCallback,
	useEffect,
	useId,
	useRef,
	useState
} from 'react'

export const useSearch = () => {
	const router = useRouter()
	const searchParams = useSearchParams()
	const [isVisible, setIsVisible] = useState(false)

	const id = useId()

	const ref = useRef<HTMLInputElement>(null)

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams.toString())
			params.set(name, value)

			return params.toString()
		},
		[searchParams]
	)

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

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		router.push(
			PATH_NAMES.CATALOG +
			'?' +
			createQueryString(SEARCH_PARAMS.SEARCH, ref.current?.value || '')
		)
		onClose()
	}

	useEffect(() => {
		const unsubscribe = emitter.subscribe(
			CUSTOM_EVENTS.OPEN_SEARCH,
			onOpen
		)
		return () => {
			unsubscribe()
		}
	}, [])

	return {
		id,
		isVisible,
		onOpen,
		onClose,
		onSubmit,
		ref
	}
}
