'use client'

import { cn } from '@/shared/lib'
import { FC, useRef, useState } from 'react'
import { ModalProps } from './modal.types'
import { useClickOutside } from '@/shared/hooks'
import { Icon } from '../icon/icon'

import styles from './styles.module.css'

export const Modal: FC<ModalProps> = ({
	className,
	buttonChildrenSlot,
	children
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const onOpen = () => {
		setIsOpen(true)
	}

	const onClose = () => {
		setIsOpen(false)
	}

	const ref = useRef<HTMLDivElement>(null!)

	useClickOutside(ref, onClose)
	return (
		<div className={cn(styles.modal, className)}>
			<button onClick={onOpen}>{buttonChildrenSlot}</button>
			<div
				className={cn(styles.modal__overlay, {
					[styles['modal__content--open']]: isOpen
				})}
			>
				<button className={styles.modal__close}>
					<Icon name='close' />
				</button>
				<div ref={ref} className={styles.modal__content}>
					{children}
				</div>
			</div>
		</div>
	)
}
