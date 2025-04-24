import { Title } from '@/shared/ui'
import { ProductType } from '@/shared/types'
import { Filters } from '@/widgets/filters/ui/filters'
import { ProductCard } from '@/entities/product'

import styles from './page.module.css'

type SearchParams = Promise<{ [key: string]: string | undefined }>
type ResponseType = {
	limit: number
	offset: number
	products: ProductType[]
	totalProduct: number
}

export default async function CatalogPage(props: {
	searchParams: SearchParams
}) {
	const searchParams = await props.searchParams
	const { name, priceMin, priceMax, discounted, categoryId } = searchParams

	const data = await fetch(
		`https://purpleschool.ru/api-demo/products?limit=6&offset=0&name=${name ? name : ''}` +
			(categoryId ? `&categoryId=${categoryId}` : '') +
			(priceMin ? `&priceMin=${priceMin}` : '') +
			(priceMax ? `&priceMax=${priceMax}` : '') +
			(discounted === 'true' ? `&discounted=true` : '')
	)
	const res: ResponseType = await data.json()
	console.log(res)
	return (
		<main className={styles.catalog}>
			<Title className={styles.catalog__title} As='h1' size='xl'>
				Каталог товаров
			</Title>
			<div className={styles.catalog__container}>
				<aside className={styles.catalog__filters}>
					<Filters />
				</aside>

				<ul className={styles.list}>
					{res.products?.map((el, index) => {
						return (
							<li key={index}>
								<ProductCard
									name={el.name}
									images={el.images}
									price={el.price}
									discount={el.discount}
								/>
							</li>
						)
					})}
				</ul>
			</div>
		</main>
	)
}
