import { ProductCard } from '@/entities/product'

import { Title } from '@/shared/ui'

import { getProducts } from '../api'
import { ButtonToDetail } from '@/features/button-to-detail'

import { AddToCartAction, LikeButton, LikeFlag } from '@/features'

import styles from './styles.module.css'

export const NewProductList = async () => {
	const products = await getProducts()

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
								topRightSlot={<LikeFlag sku={el.sku} />}
								actions={
									<>
										<AddToCartAction product={el} />
										<ButtonToDetail sku={el.sku} />
										<LikeButton sku={el.sku} />
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
