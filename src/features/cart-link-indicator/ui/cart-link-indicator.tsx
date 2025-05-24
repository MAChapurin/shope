'use client'
import Link from 'next/link'

import { Icon } from '@/shared/ui'

import { useIndicator } from '../model/useIndicator'

import { cn } from '@/shared/lib'
import styles from './styles.module.css'

export const CartLinkWithIndicator = () => {
	const { count } = useIndicator()
	return (
		<Link href={'/cart'} className={styles.link}>
			<div
				className={cn(styles.indicator, {
					[styles.hidden]: count === 0 || !count
				})}
			>
				{count}
			</div>
			<Icon name='cart' />
		</Link>
	)
}
