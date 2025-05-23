import { ProductCard } from '@/entities/product'

import { Icon, Title } from '@/shared/ui'

import { getProducts } from '../api'
import { ButtonToDetail } from '@/features/button-to-detail'

import styles from './styles.module.css'
import { LikeButton, LikeFlag } from '@/features'
import { Suspense } from 'react'

export const NewProductList = async () => {
	const products = await getProducts()

	return (
		<Suspense>
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
			</section>
		</Suspense>
	)
}
