'use client'

import { useFavorites } from '@/entities'
import { Button, Icon, Illustration, Paragraph } from '@/shared/ui'

import { FavoritesItem } from './favorites-item'
import Link from 'next/link'
import { PATH_NAMES } from '@/shared/settings'

import styles from './styles.module.css'

export const FavoritesList = () => {
	const { favorites } = useFavorites()
	return (
		<section className={styles.favorites}>
			<ul className={styles.list}>
				{favorites.map(sku => {
					return <FavoritesItem sku={sku} key={sku} />
				})}
			</ul>
			{favorites.length === 0 && (
				<div className={styles.favorites__empty}>
					<div className={styles.illustration}>
						<div className={styles.illustration__top}>
							<Icon name='likeFilled' />0
						</div>
						<Illustration name='hand' />
					</div>
					<Paragraph color='secondary'>Здесь пока ничего нет</Paragraph>
					<Link href={PATH_NAMES.CATALOG}>
						<Button variant='filled'>Перейти в каталог</Button>
					</Link>
				</div>
			)}
		</section>
	)
}
