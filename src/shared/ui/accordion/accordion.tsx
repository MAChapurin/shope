'use client'
import React, { useEffect, useId, useRef, useState } from 'react'
import { Icon } from '@/shared/ui'
import { cn } from '@/shared/lib'

import { AccordionProps } from './accordion.types'

import styles from './styles.module.css'

const SCALE_COMPENSATION_FACTOR = 1.25

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false)
	const id = useId()
	const ref = useRef<HTMLDivElement>(null)
	const heightObserverRef = useRef<HTMLDivElement>(null)

	const toggleAccordion = () => {
		setIsOpen(prev => !prev)
	}

	const height = heightObserverRef.current?.getBoundingClientRect().height || 0

	useEffect(() => {
		if (isOpen) {
			setTimeout(() => {
				ref.current?.scrollIntoView(true)
			}, 100)
		}
	}, [isOpen])

	return (
		<div
			aria-label={`${isOpen ? 'Открыть' : 'Закрыть'} вкладку ${title}`}
			className={styles.accordion}
			role='tablist'
		>
			<button
				className={styles.accordion__button}
				onClick={toggleAccordion}
				aria-expanded={isOpen}
				aria-controls={`content-${id}`}
				id={`header-${id}`}
			>
				{title}
				<Icon
					name='dropdown'
					className={cn(styles.accordion__icon, {
						[styles['accordion__icon--rotate180']]: isOpen
					})}
				/>
			</button>
			<div
				ref={ref}
				className={styles.accordion__content}
				style={{
					overflow: 'hidden',
					maxHeight: isOpen ? `${height * SCALE_COMPENSATION_FACTOR}px` : 0
				}}
			>
				<div
					className={styles['accordion__height-observer']}
					style={{
						transform: `scale(${isOpen ? 1 : 0.8})`,
						opacity: isOpen ? 1 : 0.8
					}}
					ref={heightObserverRef}
					id={`content-${id}`}
					role='region'
					aria-labelledby={`header-${id}`}
				>
					{children}
				</div>
			</div>
		</div>
	)
}
