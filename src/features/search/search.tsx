'use client'

import { Icon } from '@/shared/ui'

import cn from 'clsx'

import { useSearch } from './model/useSearch'
import styles from './styles.module.css'

export const Search = () => {
	const { id, isVisible, onOpen, onClose, ref } = useSearch()
	return (
		<div className={styles.root}>
			<search
				role='search'
				className={cn(styles.search, {
					[styles.searchHidden]: !isVisible
				})}
			>
				<form
					className={styles.form}
					onSubmit={e => {
						e.preventDefault()
						onClose()
					}}
				>
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
