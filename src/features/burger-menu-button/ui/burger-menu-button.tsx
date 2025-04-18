'use client'

import { useBurgerModel } from '../model/useBurgerModel'
import { cn } from '@/shared/lib'

import styles from './styles.module.css'

export const BurgerMenuButton = () => {
	const { isOpen, onClick } = useBurgerModel()
	return (
		<button onClick={onClick} className={styles.menuToggle}>
			<div
				className={cn(styles.hamburger, {
					[styles.close]: isOpen
				})}
			>
				<span className={styles.top}></span>
				<span className={styles.center}></span>
				<span className={styles.bottom}></span>
			</div>
			<div
				className={cn(styles.cross, {
					[styles.close]: !isOpen
				})}
			>
				<span></span>
				<span></span>
			</div>
		</button>
	)
}
