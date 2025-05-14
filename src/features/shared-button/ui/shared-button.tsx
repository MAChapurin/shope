'use client'
import { Icon } from '@/shared/ui'
import { cn } from '@/shared/lib'
import { useClickOutside } from '@/shared/hooks'

import { FC, useRef, useState } from 'react'

import { SharedButtonList } from './shared-button-list'
import { SharedButtonProps } from '../types'
import { SHARED_TEXT } from '../constants'

import styles from './styles.module.css'

export const SharedButton: FC<SharedButtonProps> = ({ className }) => {
	const [isOpen, setIsOpen] = useState(false)
	const ref = useRef<HTMLDivElement>(null!)
	const onClose = () => {
		setIsOpen(false)
	}
	useClickOutside(ref, onClose)
	return (
		<div className={cn(styles.shared, className)}>
			<div
				ref={ref}
				className={cn(styles.shared__list, {
					[styles.open]: isOpen
				})}
			>
				<SharedButtonList />
			</div>
			<button
				aria-label={SHARED_TEXT.ARIA_LABEL_SHARED}
				className={cn(styles.shared__button, {
					[styles.open]: isOpen
				})}
				onClick={() => {
					setIsOpen(true)
				}}
			>
				<Icon name='shared' />
			</button>
		</div>
	)
}
