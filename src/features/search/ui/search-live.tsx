'use client'
import { Icon } from '@/shared/ui'
import { cn } from '@/shared/lib'

import styles from './styles.module.css'
import { useLiveSearch } from '../model/useLiveSearch'

export const LiveSearch = () => {
	const { id, ref, onChange, searchValue } = useLiveSearch()
	return (
		<search role='search' className={cn(styles.live)}>
			<form className={styles.form} onSubmit={e => e.preventDefault()}>
				<label className={styles.live__label} htmlFor={id}>
					<input
						value={searchValue}
						onChange={onChange}
						ref={ref}
						id={id}
						className={cn(styles.input, styles.live__input)}
						placeholder='Поиск'
						type='text'
						name='search-text'
					/>
					<Icon name='search' className={styles.live__icon} />
				</label>
			</form>
		</search>
	)
}
