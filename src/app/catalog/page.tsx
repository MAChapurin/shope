import { Title } from '@/shared/ui'
import { Filters } from '@/widgets/filters/ui/filters'

import styles from './page.module.css'

export default function CatalogPage() {
	return (
		<main className={styles.catalog}>
			<Title className={styles.catalog__title} As='h1' size='xl'>
				Каталог товаров
			</Title>
			<div className={styles.catalog__filters}>
				<Filters />
			</div>
		</main>
	)
}
