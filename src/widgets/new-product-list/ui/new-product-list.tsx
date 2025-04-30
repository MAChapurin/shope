import { ProductCard } from '@/entities/product'

import { Icon, Title } from '@/shared/ui'

import { getProducts } from '../api'
import { ButtonToDetail } from '@/features/button-to-detail'

import styles from './styles.module.css'

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
								sku={el.sku}
								actions={
									<>
										<button>
											<Icon name='cart' />
										</button>
										<ButtonToDetail sku={el.sku} />
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
		</section>
	)
}
