'use client'

import { cn, emitter } from '@/shared/lib'
import { FC, useEffect, useRef, useState } from 'react'
import { ModalProps } from './modal.types'
import { useClickOutside } from '@/shared/hooks'
import { Icon } from '../icon/icon'
import { Button } from '../button'
import { CUSTOM_EVENTS } from '@/shared/settings'

import styles from './styles.module.css'

export const Modal: FC<ModalProps> = ({
	className,
	buttonChildrenSlot,
	disabled = false,
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

	useEffect(() => {
		const unsubscribe = emitter.subscribe(CUSTOM_EVENTS.CLOSE_MODAL, onClose)
		return () => unsubscribe()
	}, [])
	return (
		<div
			className={cn(styles.modal, className)}
			data-modal={isOpen ? 'open' : 'close'}
		>
			<Button disabled={disabled} onClick={onOpen}>
				{buttonChildrenSlot}
			</Button>
			<div
				className={cn(styles.modal__overlay, {
					[styles['modal__content--open']]: isOpen
				})}
			>
				<div className={styles.modal__header}>
					<button className={styles.modal__close}>
						<Icon name='close' />
					</button>
				</div>
				<div ref={ref} className={styles.modal__content}>
					{children}
				</div>
			</div>
		</div>
	)
}
