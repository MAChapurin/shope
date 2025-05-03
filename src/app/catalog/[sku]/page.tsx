import { ProductType } from '@/shared/types'
import { Icon, Title, VisuallyHiddenTitle } from '@/shared/ui'
import { declareOfNumber } from '@/shared/utils'
import Link from 'next/link'
import { getFilters } from '@/widgets/filters/api/getFilters'
import { FiltersType } from '@/widgets/filters/types'

import { API_URLS } from '@/shared/settings'
import { Suspense } from 'react'

import styles from './page.module.css'
import { Paragraph } from '@/shared/ui/paragraph/paragraph'

type Params = Promise<{ sku: string }>

export default async function ProductPage({ params }: { params: Params }) {
	const { sku } = await params
	const data = await fetch(API_URLS.PRODUCT_SKU + sku)
	const product: ProductType = await data.json()
	const { categories } = await getFilters<FiltersType>()
	const categoryName = categories.find(
		category => category.id === product.categoryId
	)?.name

	return (
		<Suspense>
			<main className={styles.detail}>
				<section className={styles.detail__product}>
					<VisuallyHiddenTitle>
						Купить {categoryName} {product.name}
					</VisuallyHiddenTitle>
					<div>Galery</div>
					<div className={styles.product}>
						<Title As='h2' className={styles.product__title} size='lg'>
							{product.name}
						</Title>
						<Paragraph className={styles.product__price} color='primary'>
							$ {product.price}
						</Paragraph>
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
					<p>Категория: {categoryName}</p>
				</section>
			</main>
		</Suspense>
	)
}
