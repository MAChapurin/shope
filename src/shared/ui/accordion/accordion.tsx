'use client'
import React, { ReactNode, useId, useState } from 'react'
import { Title } from '../title'

interface AccordionProps {
	title: string
	children: ReactNode
}

import styles from './styles.module.css'

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
	const [isOpen, setIsOpen] = useState(false)
	const id = useId()

	const toggleAccordion = () => {
		setIsOpen(prev => !prev)
	}

	return (
		<div
			role='tablist'
			aria-label={`${isOpen ? 'Открыть' : 'Закрыть'} вкладку ${title}`}
		>
			<Title As='h2'>
				<button
					onClick={toggleAccordion}
					aria-expanded={isOpen}
					aria-controls={`content-${id}`}
					id={`header-${id}`}
				>
					{title}
				</button>
			</Title>
			<div
				className={styles.test}
				id={`content-${id}`}
				role='region'
				aria-labelledby={`header-${id}`}
				style={{
					overflow: 'hidden',
					maxHeight: isOpen ? '400px' : '0'
				}}
			>
				{children}
			</div>
		</div>
	)
}
