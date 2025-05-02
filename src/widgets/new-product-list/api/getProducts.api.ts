import { API_URLS, SEARCH_PARAMS } from '@/shared/settings'
import { ProductType } from '@/shared/types'

export const getProducts = async () => {
	const data = await fetch(
		API_URLS.PRODUCTS +
			'?' +
			`${SEARCH_PARAMS.LIMIT}=6&${SEARCH_PARAMS.OFFSET}=0`
	)
	const { products }: { products: ProductType[] } = await data.json()
	return products
}
