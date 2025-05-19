import { FC } from 'react'
import Image from 'next/image'
import { ClickLimiter, Title } from '@/shared/ui'
import { PATH_NAMES } from '@/shared/settings'
import { cn } from '@/shared/lib'

import { ProductCardInterface } from '../types/product.types'

import Link from 'next/link'

import styles from './styles.module.css'

export const ProductCard: FC<ProductCardInterface> = ({
	sku,
	images,
	name,
	price,
	discount,
	actions,
	topRightSlot
}) => {
	return (
		<article className={styles.product}>
			<div className={styles.product__container}>
				{actions && (
					<ClickLimiter className={styles.product__overlay}>
						{actions}
					</ClickLimiter>
				)}
				<Image
					className={styles.product__img}
					src={images[0]}
					alt={name}
					title={name}
					width={380}
					height={380}
				/>
			</div>
			<Link
				href={PATH_NAMES.CATALOG + '/' + sku}
				className={styles.product__link}
			>
				<Title className={styles.product__title} As='h3'>
					{name}
				</Title>
				<div className={styles.product__priceWrapper}>
					{discount ? (
						<>
							<p
								className={cn(
									styles.product__price,
									styles['product__price--old']
								)}
							>
								$ {price.toFixed(2)}
							</p>
							<p className={styles.product__price}>
								$ {((price / 100) * (100 - discount)).toFixed(2)}
							</p>
						</>
					) : (
						<p className={styles.product__price}>$ {price.toFixed(2)}</p>
					)}
				</div>
				{discount && <p className={styles.product__discount}>- {discount}%</p>}
				{topRightSlot && (
					<div className={styles.product__topRightSlot}>{topRightSlot}</div>
				)}
			</Link>
		</article>
	)
}
