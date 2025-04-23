import { FC } from 'react'
import { ProductCardInterface } from '../types/product.types'
import Link from 'next/link'
import Image from 'next/image'
import { PATH_NAMES } from '@/shared/settings'

import styles from './styles.module.css'
import { Title } from '@/shared/ui'

export const ProductCard: FC<ProductCardInterface> = ({
	images,
	name,
	price,
	discount
}) => {
	return (
		<Link className={styles.product} href={PATH_NAMES.CATALOG + '/'}>
			<div className={styles.product__container}>
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
			<p className={styles.product__price}>$ {price.toFixed(2)}</p>
			{discount && <p className={styles.product__discount}>- {discount}%</p>}
		</Link>
	)
}
