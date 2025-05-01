import { Icon, Title } from '@/shared/ui'
import { ProductType } from '@/shared/types'
import { Filters } from '@/widgets/filters/ui/filters'
import { ProductCard } from '@/entities/product'
import {
	ButtonToDetail,
	LikeButton,
	LikeFlag,
	Pagination,
	ResetFiltersButton
} from '@/features'
import { MobileFilters } from '@/widgets/filters'

import { API_URLS, SEARCH_PARAMS } from '@/shared/settings'
import styles from './page.module.css'

type SearchParams = Promise<{ [key: string]: string | undefined }>
type ResponseType = {
	limit: number
	offset: number
	products: ProductType[]
	totalProducts: number
}

export default async function CatalogPage(props: {
	searchParams: SearchParams
}) {
	const searchParams = await props.searchParams
	const { name, priceMin, priceMax, discounted, categoryId, offset } =
		searchParams

	const data = await fetch(
		API_URLS.PRODUCTS +
			`?${SEARCH_PARAMS.LIMIT}=6&${SEARCH_PARAMS.OFFSET}=${offset || 0}` +
			(name ? `&${SEARCH_PARAMS.SEARCH}=${name}` : '') +
			(categoryId ? `&${SEARCH_PARAMS.CATEGORY}=${categoryId}` : '') +
			(priceMin ? `&${SEARCH_PARAMS.PRICE_MIN}=${priceMin}` : '') +
			(priceMax ? `&${SEARCH_PARAMS.PRICE_MAX}=${priceMax}` : '') +
			(discounted === 'true' ? `&${SEARCH_PARAMS.DISCOUNT}=true` : '')
	)
	const res: ResponseType = await data.json()

	return (
		<main className={styles.catalog}>
			<Title className={styles.catalog__title} As='h1' size='xl'>
				Каталог товаров
			</Title>
			<MobileFilters>
				<Filters />
			</MobileFilters>
			<div className={styles.catalog__container}>
				<aside className={styles.catalog__filters}>
					<Filters />
				</aside>
				{res.products?.length > 0 && (
					<section className={styles.catalog__products}>
						<ul className={styles.list}>
							{res.products?.map((el, index) => {
								return (
									<li key={index}>
										<ProductCard
											name={el.name}
											images={el.images}
											price={el.price}
											discount={el.discount}
											sku={el.sku}
											topRightSlot={<LikeFlag sku={el.sku} />}
											actions={
												<>
													<button>
														<Icon name='cart' />
													</button>
													<ButtonToDetail sku={el.sku} />
													<LikeButton sku={el.sku} />
												</>
											}
										/>
									</li>
								)
							})}
						</ul>
						<Pagination
							totalProducts={res.totalProducts}
							limit={res.limit}
							// limit={5}
						/>
					</section>
				)}

				{res.products.length === 0 && (
					<div className={styles.catalog__alert}>
						<p className={styles.catalog__text}>
							По важему запросу ничего не найдено
						</p>
						<p className={styles.catalog__text}>
							Попробуйте выставить другие параметры поиска или сбросить
							установленные фильтры
						</p>
						<ResetFiltersButton />
					</div>
				)}
			</div>
			<div>
				<LikeButton sku={1} />
				<LikeButton sku={2} />
				<LikeButton sku={3} />
				<LikeButton sku={4} />
				<LikeButton sku={5} />
				<LikeButton sku={6} />
			</div>
		</main>
	)
}
