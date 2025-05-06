import { ProductType } from '@/shared/types'
import { API_URLS, PAGES_ID } from '@/shared/settings'
import { Title, Paragraph, VisuallyHiddenTitle, Button } from '@/shared/ui'
import { calculateAverage, declareOfNumber } from '@/shared/utils'
import { LikeButton, Rating } from '@/features'
import {
	getFilters,
	FiltersType,
	SocialsList,
	Galery,
	ReviewList
} from '@/widgets'

import Link from 'next/link'
import { Suspense } from 'react'

import styles from './page.module.css'
import { cn } from '@/shared/lib'

type Params = Promise<{ sku: string }>

export default async function ProductPage({ params }: { params: Params }) {
	const { sku } = await params
	const data = await fetch(API_URLS.PRODUCT_SKU + sku)
	const product: ProductType = await data.json()
	const { categories } = await getFilters<FiltersType>()
	const categoryName = categories.find(
		category => category.id === product.categoryId
	)?.name

	const ratingValues = product.reviews
		.map(review => review.rating)
		.filter(el => typeof el === 'number')

	const averageRating =
		ratingValues.length > 0 ? calculateAverage(ratingValues) : 5

	const productPriceWithDiscount = (
		(product.price / 100) *
		(100 - product.discount)
	).toFixed(2)

	const isDiscount = !isNaN(+productPriceWithDiscount)

	const productPrice = isDiscount ? productPriceWithDiscount : product.price

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
						<div
							className={cn(
								styles.product__price,
								styles['product__price-wrapper']
							)}
						>
							{isDiscount && (
								<Paragraph
									className={styles['product__price--old']}
									color='error'
								>
									$ {product.price.toFixed(2)}
								</Paragraph>
							)}
							<Paragraph className={styles.product__price} color='primary'>
								$ {productPrice}
							</Paragraph>
						</div>
						<Link
							href={'#' + PAGES_ID.SKU_DETAIL}
							className={styles.product__rating}
						>
							<Rating value={averageRating} />
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
				<section id={PAGES_ID.SKU_DETAIL}>
					<nav role='tablist'>
						<Link role='tab' href={'#' + PAGES_ID.REVIEWS}>
							Отзывы
						</Link>
						<Link role='tab' href={'#' + PAGES_ID.DESCRIPTION}>
							Описание
						</Link>
					</nav>
					<ReviewList reviews={product.reviews} />
				</section>
			</main>
		</Suspense>
	)
}
