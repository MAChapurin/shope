'use client'
import cn from 'clsx'
import styles from './styles.module.css'
import { useBurgerModel } from '../model/useBurgerModel'

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
