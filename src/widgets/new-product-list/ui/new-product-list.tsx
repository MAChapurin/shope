import { ProductCard, products } from '@/entities/product'

import styles from './styles.module.css'
import { Title } from '@/shared/ui'

export const NewProductList = () => {
	return (
		<section className={styles.new}>
			<Title className={styles.new__title}>Последние поступления</Title>
			<ul className={styles.list}>
				{products.map(el => {
					return (
						<li className={styles.list__item} key={el.id}>
							<ProductCard {...el} />
						</li>
					)
				})}
			</ul>
		</section>
	)
}
