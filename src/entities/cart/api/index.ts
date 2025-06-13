import { API_URLS } from '@/shared/settings'
import { OrderType } from '../types'
import { getAccessToken } from '../actions'

export const createOrder = async (order: OrderType) => {
	const token = await getAccessToken()
	const response = await fetch(API_URLS.ORDER, {
		headers: {
			Authorization: `Bearer ${token}`,
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify(order)
	})

	const result = response.json()
	return result
}
