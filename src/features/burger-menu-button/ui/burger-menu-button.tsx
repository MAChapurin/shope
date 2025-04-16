'use client'
import cn from 'clsx'
import styles from './styles.module.css'
import { useState } from 'react'

export const BurgerMenuButton = () => {
	const [open, setOpen] = useState(false)
	return (
		<button
			onClick={() => {
				setOpen(prev => !prev)
			}}
			className={styles.menuToggle}
		>
			<div
				className={cn(styles.hamburger, {
					[styles.close]: open
				})}
			>
				<span className={styles.top}></span>
				<span className={styles.center}></span>
				<span className={styles.bottom}></span>
			</div>
			<div
				className={cn(styles.cross, {
					[styles.close]: !open
				})}
			>
				<span></span>
				<span></span>
			</div>
		</button>
	)
}
