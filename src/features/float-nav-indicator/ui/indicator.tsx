'use client'
import cn from 'clsx'
import { useIndicator } from '../model/useIndicator'
import styles from './styles.module.css'

export const FloatIndicator = () => {
	const { isAbout, isCart, isCatalog, isFavorites, isMain, isProfile } =
		useIndicator()
	return (
		<div
			className={cn(styles.indicator, {
				[styles.isAbout]: isAbout,
				[styles.isCart]: isCart,
				[styles.isCatalog]: isCatalog,
				[styles.isFavorites]: isFavorites,
				[styles.isMain]: isMain,
				[styles.isProfile]: isProfile
			})}
		/>
	)
}
