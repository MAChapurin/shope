const ROOT_URL =
	process.env.NEXT_PUBLIC_API_URL || 'https://purpleschool.ru/api-demo/'

export const API_URLS = {
	PRODUCTS: ROOT_URL + 'products/',
	PRODUCT_SKU: ROOT_URL + 'products/sku/',
	FILTERS: ROOT_URL + 'products/get-filter'
}
