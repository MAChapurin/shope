import {
	DiscountSwitch,
	DropdownCategoryFilter,
	LiveSearch,
	PriceRangeSlider
} from '@/features'

import styles from './styles.module.css'
import { getFilters } from '../api/getFilters'
import { FiltersType } from '../types'

export const Filters = async () => {
	const { minPrice, maxPrice, categories } = await getFilters<FiltersType>()
	return (
		<ul className={styles.list} aria-label='Фильтры'>
			<li>
				<LiveSearch />
			</li>
			<li>
				<DropdownCategoryFilter categories={categories} />
			</li>
			<li>
				<PriceRangeSlider priceMax={maxPrice} priceMin={minPrice} />
			</li>
			<li>
				<DiscountSwitch />
			</li>
		</ul>
	)
}
