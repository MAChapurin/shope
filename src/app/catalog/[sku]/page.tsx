import { ProductType } from '@/shared/types'
import {
	API_URLS,
	PAGES_ID,
	SEARCH_PARAMS,
	TAB_VALUES
} from '@/shared/settings'

import {
	Title,
	Paragraph,
	VisuallyHiddenTitle,
	Button,
	Accordion
} from '@/shared/ui'

import { calculateAverage, declareOfNumber } from '@/shared/utils'
import { cn } from '@/shared/lib'

import {
	AnchorLink,
	CartCounter,
	FloatTabIndicator,
	LikeButton,
	Rating,
	SharedButton,
	SharedButtonList
} from '@/features'

import {
	getFilters,
	FiltersType,
	Galery,
	ReviewList,
	Tabs,
	FormReview
} from '@/widgets'

import { Metadata } from 'next'

import styles from './page.module.css'

type Params = Promise<{ sku: string }>

export async function generateMetadata({
	params
}: {
	params: Params
}): Promise<Metadata> {
	const { sku } = await params
	const data = await fetch(API_URLS.PRODUCT_SKU + sku)
	const product: ProductType = await data.json()

	return {
		title: `Купить ${product.name}`,
		description: product.description
	}
}

// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default async function ProductPage({ params }: { params: Params }) {
	// await delay(10000)
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

	const Description = () => (
		<div className={styles.description}>
			<Title As='h2' size='lg' align='center'>
				{`${categoryName} ${product.name}`}
			</Title>
			<Paragraph align='center' color='secondary'>
				{product.description}
			</Paragraph>
		</div>
	)

	const ReviewContent = () => (
		<>
			<ReviewList reviews={product.reviews} />
			<FormReview />
		</>
	)

	return (
		<main className={styles.detail}>
			<section className={styles.detail__product}>
				<VisuallyHiddenTitle>
					{`Купить ${categoryName} ${product.name}`}
				</VisuallyHiddenTitle>
				<div className={styles.detail__galery}>
					<Galery images={product.images.slice(0, 4)} name={product.name} />
				</div>
				<div className={styles.product}>
					<Title As='h2' className={styles.product__title} size='lg'>
						{product.name}
					</Title>
					<div className={cn(styles.product__price, styles.product__row)}>
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
						<SharedButton className={styles.product__shared} />
					</div>
					<div className={styles.desktop}>
						<AnchorLink
							className={cn(styles['product__review-link'])}
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
							className={cn(
								styles['product__description-link'],
								styles.desktop
							)}
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
					</div>
					<div className={styles.product__cart}>
						<div className={styles.product__counter}>
							<CartCounter sku={product.sku} />
						</div>
						<Button className={styles.product__button} variant='outline'>
							Добавить в корзину
						</Button>
					</div>
					<div className={styles.product__actions}>
						<LikeButton sku={+sku} />
						<SharedButtonList className={styles.product__socials} />
					</div>
					<div
						className={cn(styles.product__property, styles.desktop)}
						role='table'
					>
						<Paragraph className={styles.product__rowProperty} role='rowgroup'>
							<span role='cell'>SKU: </span>
							<span role='cell' className={styles['product__property-value']}>
								{product.sku}
							</span>
						</Paragraph>
						<Paragraph className={styles.product__rowProperty} role='rowgroup'>
							<span role='cell'>Категория: </span>
							<span role='cell' className={styles['product__property-value']}>
								{categoryName}
							</span>
						</Paragraph>
					</div>
				</div>
			</section>
			<section id={PAGES_ID.SKU_DETAIL} className={styles.detail__reviews}>
				<div className={styles.desktop}>
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
							<Description />
						</Tabs.TabPanel>
						<Tabs.TabPanel tabId={TAB_VALUES.REVIEWS}>
							<div className={styles.reviews}>
								<ReviewContent />
							</div>
						</Tabs.TabPanel>
					</Tabs.TabContent>
				</div>
				<div className={styles.mobile}>
					<Accordion title='Описание'>
						<Description />
					</Accordion>
					<Accordion title={`Отзывы (${reviewsLength})`}>
						<ReviewContent />
					</Accordion>
				</div>
			</section>
		</main>
	)
}
