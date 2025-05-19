'use client'

import { ProductCard } from '@/entities'
import styles from './styles.module.css'
import { useEffect, useState } from 'react'
import { Icon } from '@/shared/ui'
import { ButtonToDetail, LikeButton } from '@/features'
import { ProductType } from '@/shared/types'
import { getProductBySku } from '../api/getProductBySku'

export const FavoritesItem = ({ sku }: { sku: number }) => {
	const [product, setProduct] = useState<ProductType | null>(null)
	useEffect(() => {
		getProductBySku(sku).then(setProduct)
	}, [])
	if (!product) {
		return (
			<div className={styles.skeleton}>
				<div className={styles.skeleton__img} datatype='skeleton'></div>
				<div className={styles.skeleton__title} datatype='skeleton'></div>
				<div className={styles.skeleton__price} datatype='skeleton'></div>
			</div>
		)
	}

	return (
		<li className={styles.list__item}>
			<ProductCard
				name={product.name}
				images={product.images}
				price={product.price}
				discount={product.discount}
				sku={product.sku}
				actions={
					<>
						<button>
							<Icon name='cart' />
						</button>
						<ButtonToDetail sku={product.sku} />
						<LikeButton sku={product.sku} />
					</>
				}
			/>
		</li>
	)
}
