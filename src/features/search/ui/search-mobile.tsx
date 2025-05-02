'use client'
import { Icon } from '@/shared/ui'
import { useSearch } from '../model/useSearch'
import { cn } from '@/shared/lib'
import { Suspense } from 'react'

import styles from './styles.module.css'

export const SearchMobile = () => {
	const { id, ref, onSubmit } = useSearch()
	return (
		<Suspense>
			<search role='search' className={cn(styles.search, styles.mobile)}>
				<form className={styles.form} onSubmit={onSubmit}>
					<label className={styles.label} htmlFor={id}>
						<Icon name='search' className={styles.placeholderSearchIcon} />
						<input
							ref={ref}
							id={id}
							className={styles.input}
							placeholder='Поиск'
							type='text'
							name='search-text'
						/>
					</label>
				</form>
			</search>
		</Suspense>
	)
}
