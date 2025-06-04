import { getToken } from '@/entities/profile'
import { API_URLS } from '@/shared/settings'

export const getUserOrders = async () => {
	const token = await getToken()
	const response = await fetch(API_URLS.ORDER_MY, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	if (!response.ok) {
		return null
	}

	const orders = await response.json()
	return orders
}
