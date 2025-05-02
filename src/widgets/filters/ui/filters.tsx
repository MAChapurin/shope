import {
	DiscountSwitch,
	DropdownCategoryFilter,
	LiveSearch,
	PriceRangeSlider,
	ResetFiltersButton
} from '@/features'

import styles from './styles.module.css'
import { getFilters } from '../api/getFilters'
import { FiltersType } from '../types'
import { Suspense } from 'react'

export const Filters = async () => {
	const { minPrice, maxPrice, categories } = await getFilters<FiltersType>()
	return (
		<Suspense>
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
				<li>
					<ResetFiltersButton />
				</li>
			</ul>
		</Suspense>
	)
}
