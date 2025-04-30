import { ProductType } from '@/shared/types'
import { Icon } from '@/shared/ui'
import { declareOfNumber } from '@/shared/utils'
import Link from 'next/link'
import { getFilters } from '@/widgets/filters/api/getFilters'
import { FiltersType } from '@/widgets/filters/types'

import styles from './page.module.css'

type Params = { sku: string }

export default async function ProductPage({ params }: { params: Params }) {
	const { sku } = params
	const data = await fetch(
		'https://purpleschool.ru/api-demo/products/sku/' + sku
	)
	const product: ProductType = await data.json()
	const { categories } = await getFilters<FiltersType>()

	console.log(product)

	return (
		<main className={styles.detail}>
			<section className={styles.detail__product}>
				<div>Galery</div>
				<div className={styles.product}>
					<h1 className={styles.product__title}>{product.name}</h1>
					<p className={styles.product__price}>$ {product.price}</p>
					<div className={styles.product__rating}>
						<Icon name='star' />
						<Icon name='star' />
						<Icon name='star' />
						<Icon name='star' />
						<Icon name='star' />
						<span>
							{declareOfNumber(
								product.reviews.length,
								['отзыв', 'отзыва', 'отзывов'],
								true
							)}
						</span>
					</div>
					<p className={styles.product__description}>{product.description}</p>
					<div className={styles.product__cart}>
						<div className={styles.product__counter}>
							<button>-</button>
							<div>1</div>
							<button>+</button>
						</div>
						<button>Добавить в корзину</button>
					</div>
					<div className={styles.product__actions}>
						<Icon name='like' />
						<Link href={'/'}>
							<Icon name='in' />
						</Link>
						<Link href={'/'}>
							<Icon name='facebook' />
						</Link>
						<Link href={'/'}>
							<Icon name='instagram' />
						</Link>
						<Link href={'/'}>
							<Icon name='twitter' />
						</Link>
					</div>
				</div>
				<p>SKU: {product.sku}</p>
				<p>
					Категория:
					{
						categories.find(category => category.id === product.categoryId)
							?.name
					}
				</p>
			</section>
		</main>
	)
}
