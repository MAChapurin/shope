import { API_URLS } from '@/shared/settings'
import { getToken } from '@/shared/utils'

export const getUserOrders = async () => {
	const request = await fetch(API_URLS.ORDER_MY, {
		headers: {
			Authorization: `Bearer ${getToken()}`
		}
	})

	const orders = await request.json()
	return orders
}
