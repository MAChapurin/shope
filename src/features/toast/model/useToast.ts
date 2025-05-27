import { emitter } from '@/shared/lib/emitter'
import { CUSTOM_EVENTS } from '@/shared/settings'
import { generateRandomId } from '@/shared/utils'
import { useEffect, useRef, useState } from 'react'

type ToastMessage = {
	message: string
	id: string
}

export const useToast = () => {
	const [messages, setMessages] = useState<ToastMessage[]>([])

	const intervalId = useRef<NodeJS.Timeout>(undefined)

	const startReduceMessagesInterval = () => {
		if (intervalId.current) {
			clearInterval(intervalId.current)
		}
		intervalId.current = setInterval(() => {
			setMessages(prev => {
				if (prev.length === 0) {
					clearInterval(intervalId.current)
					return prev
				}
				const [, ...rest] = prev
				return rest
			})
		}, 1000)
	}

	useEffect(() => {
		const unsubscribe = emitter.subscribe(
			CUSTOM_EVENTS.ADD_TOST,
			(message: string) => {
				setMessages(prev => [
					...prev,
					{ message: message, id: generateRandomId() }
				])
				startReduceMessagesInterval()
			}
		)
		return () => {
			unsubscribe()
		}
	}, [])
	return { messages }
}
