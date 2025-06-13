const ROOT_URL =
	process.env.NEXT_PUBLIC_API_URL || 'https://purpleschool.ru/api-demo/'

export const API_URLS = {
	PRODUCTS: ROOT_URL + 'products/',
	PRODUCT_SKU: ROOT_URL + 'products/sku/',
	FILTERS: ROOT_URL + 'products/get-filter',
	REGISTER: ROOT_URL + 'auth/register',
	LOGIN: ROOT_URL + 'auth/login',
	PROFILE: ROOT_URL + 'user/profile',
	ORDER: ROOT_URL + 'order',
	ORDER_MY: ROOT_URL + 'order/my'
} as const
