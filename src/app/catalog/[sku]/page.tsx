import { ProductType } from '@/shared/types'
import { API_URLS } from '@/shared/settings'
import { Title, Paragraph, VisuallyHiddenTitle, Button } from '@/shared/ui'
import { declareOfNumber } from '@/shared/utils'
import { LikeButton, Rating } from '@/features'
import { getFilters, FiltersType, SocialsList, Galery } from '@/widgets'

import Link from 'next/link'
import { Suspense } from 'react'

import styles from './page.module.css'

type Params = Promise<{ sku: string }>

const SECTION_ID = 'review-section'

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
						{`Купить ${categoryName} ${product.name}`}
					</VisuallyHiddenTitle>
					<div>
						<Galery images={product.images.slice(0, 4)} name={product.name} />
					</div>
					<div className={styles.product}>
						<Title As='h2' className={styles.product__title} size='lg'>
							{product.name}
						</Title>
						<Paragraph className={styles.product__price} color='primary'>
							$ {product.price.toFixed(2)}
						</Paragraph>
						<Link href={`#${SECTION_ID}`} className={styles.product__rating}>
							<Rating value={3} />
							<span>
								{declareOfNumber(
									product.reviews.length,
									['отзыв', 'отзыва', 'отзывов'],
									true
								)}
							</span>
						</Link>
						<Paragraph
							className={styles.product__description}
							color='secondary'
						>
							{product.description}
						</Paragraph>
						<div className={styles.product__cart}>
							<div className={styles.product__counter}>
								<button>-</button>
								<div>1</div>
								<button>+</button>
							</div>
							<Button className={styles.product__button} variant='outline'>
								Добавить в корзину
							</Button>
						</div>
						<div className={styles.product__actions}>
							<LikeButton sku={+sku} />
							<SocialsList className={styles.product__socials} />
						</div>
						<div className={styles.product__property} role='table'>
							<Paragraph className={styles.product__row} role='rowgroup'>
								<span role='cell'>SKU: </span>
								<span role='cell' className={styles['product__property-value']}>
									{product.sku}
								</span>
							</Paragraph>
							<Paragraph className={styles.product__row} role='rowgroup'>
								<span role='cell'>Категория: </span>
								<span role='cell' className={styles['product__property-value']}>
									{categoryName}
								</span>
							</Paragraph>
						</div>
					</div>
				</section>
				<section id={SECTION_ID}>
					<h2>Отзывы</h2>
				</section>
			</main>
		</Suspense>
	)
}
