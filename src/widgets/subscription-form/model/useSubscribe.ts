import { emitter } from '@/shared/lib/emitter'
import { CUSTOM_EVENTS } from '@/shared/settings'
import { FormEvent } from 'react'

export const useSubscribe = () => {
	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		emitter.emit(
			CUSTOM_EVENTS.ADD_TOST,
			'Ваш email подписан на новости и уведомления'
		)
	}
	return { onSubmit }
}
