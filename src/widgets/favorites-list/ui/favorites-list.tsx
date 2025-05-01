'use client'

import { useFavorites } from '@/entities'
import { Title } from '@/shared/ui'

import { FavoritesItem } from './favorites-item'
import Link from 'next/link'
import { PATH_NAMES } from '@/shared/settings'

import styles from './styles.module.css'

export const FavoritesList = () => {
	const { favorites } = useFavorites()
	return (
		<section className={styles.favorites}>
			<Title className={styles.favorites__title}>
				Вам понравились эти товары
			</Title>
			<ul className={styles.list}>
				{favorites.map(sku => {
					return <FavoritesItem sku={sku} key={sku} />
				})}
			</ul>
			{favorites.length === 0 && (
				<div>
					<p>Здесь пока ничего нет</p>
					<Link href={PATH_NAMES.CATALOG}>Перейти в каталог</Link>
				</div>
			)}
		</section>
	)
}
