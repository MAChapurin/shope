import { API_URLS } from '@/shared/settings'
import { OrderType } from '../types'
import { getToken } from '@/shared/utils/getToken'

export const createOrder = async (order: OrderType) => {
	const response = await fetch(API_URLS.ORDER, {
		headers: {
			Authorization: `Bearer ${getToken()}`,
			'Content-Type': 'application/json'
		},
		method: 'POST',
		body: JSON.stringify(order)
	})

	const result = response.json()
	return result
}
