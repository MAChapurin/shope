import { DropdownCategoryFilter } from '@/features/dropdown-category-filter'
import { LiveSearch } from '@/features/search'

import styles from './styles.module.css'

export const Filters = () => {
	return (
		<ul className={styles.list} aria-label='Фильтры'>
			<li>
				<LiveSearch />
			</li>
			<li>
				<DropdownCategoryFilter />
			</li>
			<li>
				<input type='range' min={0} max={100} />
			</li>
		</ul>
	)
}
