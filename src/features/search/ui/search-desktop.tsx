'use client'

import { Icon } from '@/shared/ui'

import { cn } from '@/shared/lib'
import { useSearch } from '../model/useSearch'

import styles from './styles.module.css'

export const SearchDesktop = () => {
	const { id, isVisible, onOpen, onSubmit, onClose, ref } = useSearch()
	return (
		<div className={cn(styles.root, styles.desktop)}>
			<search
				role='search'
				className={cn(styles.search, {
					[styles.searchHidden]: !isVisible
				})}
			>
				<form className={styles.form} onSubmit={onSubmit}>
					<label className={styles.label} htmlFor={id}>
						<Icon name='search' className={styles.placeholderSearchIcon} />
						<input
							ref={ref}
							id={id}
							className={styles.input}
							onBlur={onClose}
							placeholder='Поиск'
							type='text'
							name='search-text'
						/>
					</label>
				</form>
			</search>
			<button
				onClick={onOpen}
				className={cn(styles.button, {
					[styles.buttonHidden]: isVisible
				})}
			>
				<Icon name='search' className={styles.buttonSearchIcon} />
			</button>
		</div>
	)
}
