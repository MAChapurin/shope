import { Icon, Title } from '@/shared/ui'
import { ProductType } from '@/shared/types'
import { Filters } from '@/widgets/filters/ui/filters'
import { ProductCard } from '@/entities/product'
import { Pagination, ResetFiltersButton } from '@/features'

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
		`https://purpleschool.ru/api-demo/products?limit=6&offset=${offset || 0}` +
			(name ? `&name=${name}` : '') +
			(categoryId ? `&categoryId=${categoryId}` : '') +
			(priceMin ? `&priceMin=${priceMin}` : '') +
			(priceMax ? `&priceMax=${priceMax}` : '') +
			(discounted === 'true' ? `&discounted=true` : '')
	)
	const res: ResponseType = await data.json()

	return (
		<main className={styles.catalog}>
			<Title className={styles.catalog__title} As='h1' size='xl'>
				Каталог товаров
			</Title>
			<div className={styles.catalog__container}>
				<aside className={styles.catalog__filters}>
					<Filters />
				</aside>
				{res.products?.length > 0 && (
					<section>
						<ul className={styles.list}>
							{res.products?.map((el, index) => {
								return (
									<li key={index}>
										<ProductCard
											name={el.name}
											images={el.images}
											price={el.price}
											discount={el.discount}
											actions={
												<>
													<button>
														<Icon name='cart' />
													</button>
													<button>
														<Icon name='eye' />
													</button>
													<button>
														<Icon name='like' />
													</button>
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
		</main>
	)
}
