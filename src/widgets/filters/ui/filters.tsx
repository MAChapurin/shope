import {
	DropdownCategoryFilter,
	LiveSearch,
	PriceRangeSlider
} from '@/features'

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
				<PriceRangeSlider />
			</li>
		</ul>
	)
}
