'use client'
import { useFavorites } from '@/entities'
import styles from './styles.module.css'

export const LikeCount = () => {
	const { favorites } = useFavorites()
	return (
		favorites.length > 0 && (
			<div className={styles.count}>{favorites.length}</div>
		)
	)
}
