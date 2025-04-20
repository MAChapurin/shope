import { FC } from 'react'
import { ProductCardInterface } from '../types/product.types'
import Link from 'next/link'
import Image from 'next/image'
import { PATH_NAMES } from '@/shared/settings'

import styles from './styles.module.css'
import { Title } from '@/shared/ui'

export const ProductCard: FC<ProductCardInterface> = ({
	img,
	title,
	price,
	id
}) => {
	return (
		<Link className={styles.product} href={PATH_NAMES.CATALOG + '/' + id}>
			<Image
				className={styles.product__img}
				src={img}
				alt={title}
				title={title}
				width={380}
				height={380}
			/>
			<Title className={styles.product__title} As='h3'>
				{title}
			</Title>
			<p className={styles.product__price}>$ {price.toFixed(2)}</p>
		</Link>
	)
}
