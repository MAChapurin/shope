import { ProductType } from '@/shared/types'
import {
	API_URLS,
	PAGES_ID,
	SEARCH_PARAMS,
	TAB_VALUES
} from '@/shared/settings'
import { Title, Paragraph, VisuallyHiddenTitle, Button } from '@/shared/ui'
import { calculateAverage, declareOfNumber } from '@/shared/utils'
import { cn } from '@/shared/lib'

import { AnchorLink, FloatTabIndicator, LikeButton, Rating } from '@/features'
import {
	getFilters,
	FiltersType,
	SocialsList,
	Galery,
	ReviewList,
	Tabs
} from '@/widgets'

import { Suspense } from 'react'

import styles from './page.module.css'
import { FormReview } from '@/widgets/form-review'

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

	const reviewsLength = product.reviews.length

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
						<AnchorLink
							className={styles['product__review-link']}
							href={'#' + PAGES_ID.SKU_DETAIL}
							id={PAGES_ID.SKU_DETAIL}
							params={SEARCH_PARAMS.ACTIVE_TAB}
							value={TAB_VALUES.REVIEWS}
						>
							<Rating value={averageRating} />
							<span>
								{declareOfNumber(
									reviewsLength,
									['отзыв', 'отзыва', 'отзывов'],
									true
								)}
							</span>
						</AnchorLink>
						<AnchorLink
							className={styles['product__description-link']}
							href={'#' + PAGES_ID.SKU_DETAIL}
							id={PAGES_ID.SKU_DETAIL}
							params={SEARCH_PARAMS.ACTIVE_TAB}
							value={TAB_VALUES.DESCRIPTION}
						>
							<Paragraph
								className={styles['product--truncate-text']}
								color='secondary'
							>
								{product.description}
							</Paragraph>
						</AnchorLink>

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
				<section id={PAGES_ID.SKU_DETAIL} className={styles.detail__reviews}>
					<Tabs.TabControls>
						<Tabs.TabButton tabId={TAB_VALUES.DESCRIPTION}>
							Описание
						</Tabs.TabButton>
						<Tabs.TabButton tabId={TAB_VALUES.REVIEWS}>
							Отзывы {`(${reviewsLength})`}
						</Tabs.TabButton>
					</Tabs.TabControls>
					<FloatTabIndicator />
					<Tabs.TabContent>
						<Tabs.TabPanel tabId={TAB_VALUES.DESCRIPTION}>
							<div className={styles.description}>
								<Title As='h2' size='lg' align='center'>
									{`${categoryName} ${product.name}`}
								</Title>
								<Paragraph align='center' color='secondary'>
									{product.description}
								</Paragraph>
							</div>
						</Tabs.TabPanel>
						<Tabs.TabPanel tabId={TAB_VALUES.REVIEWS}>
							<div className={styles.reviews}>
								<ReviewList reviews={product.reviews} />
								<FormReview />
							</div>
						</Tabs.TabPanel>
					</Tabs.TabContent>
				</section>
			</main>
		</Suspense>
	)
}
