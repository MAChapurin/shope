import { ProductCard } from '@/entities/product'

import { Title } from '@/shared/ui'

import styles from './styles.module.css'
import { getProducts } from '../api'

export const NewProductList = async () => {
	const products = await getProducts()
	console.log('from NewProductList', products)
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
