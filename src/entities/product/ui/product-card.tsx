import { FC } from 'react'
import { ProductCardInterface } from '../types/product.types'
import Link from 'next/link'
import Image from 'next/image'
import { PATH_NAMES } from '@/shared/settings'
import { Title } from '@/shared/ui'

import styles from './styles.module.css'
import { cn } from '@/shared/lib'

export const ProductCard: FC<ProductCardInterface> = ({
	images,
	name,
	price,
	discount,
	actions
}) => {
	return (
		<Link className={styles.product} href={PATH_NAMES.CATALOG + '/'}>
			<div className={styles.product__container}>
				{actions && <div className={styles.product__overlay}>{actions}</div>}
				<Image
					className={styles.product__img}
					src={images[0]}
					alt={name}
					title={name}
					width={380}
					height={380}
				/>
			</div>
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
		</Link>
	)
}
