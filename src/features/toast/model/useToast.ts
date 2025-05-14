import { emitter } from '@/shared/lib/emitter'
import { CUSTOM_EVENTS } from '@/shared/settings'
import { useEffect, useState } from 'react'

export const useToast = () => {
	const [isVisible, setIsVisible] = useState(false)
	const [message, setMessage] = useState('')

	const showToast = () => {
		setIsVisible(true)
	}
	setTimeout(() => {
		setIsVisible(false)
	}, 3000)
	useEffect(() => {
		const unsubscribe = emitter.subscribe(CUSTOM_EVENTS.ADD_TOST, showToast)
		return () => {
			unsubscribe()
		}
	}, [])

	useEffect(() => {
		const unsubscribe = emitter.subscribe(
			CUSTOM_EVENTS.ADD_TOST,
			(data: string) => {
				setMessage(data)
				showToast()
			}
		)
		return () => {
			unsubscribe()
		}
	}, [])
	return { isVisible, message }
}
