import { getToken } from '@/app/actions'
import { API_URLS } from '@/shared/settings'

export const getUserOrders = async () => {
	const token = await getToken()
	const request = await fetch(API_URLS.ORDER_MY, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	const orders = await request.json()
	return orders
}
