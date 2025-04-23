import { ProductCard } from '@/entities/product'

import styles from './styles.module.css'
import { Title } from '@/shared/ui'
import { ProductCardInterface } from '@/entities/product/types/product.types'

export const NewProductList = async () => {
	const data = await fetch(
		'https://purpleschool.ru/api-demo/products?limit=6&offset=0'
	)
	const { products }: { products: ProductCardInterface[] } = await data.json()
	// console.log('from NewProductList', products)

	return (
		<section className={styles.new}>
			<Title className={styles.new__title}>Последние поступления</Title>
			<ul className={styles.list}>
				{products.map(el => {
					return (
						<li className={styles.list__item} key={el.name}>
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
		</section>
	)
}
