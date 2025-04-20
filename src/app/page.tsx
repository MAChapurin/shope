import { Hero } from '@/widgets/hero'
import styles from './page.module.css'
import { NewProductList } from '@/widgets/new-product-list'

export default function Home() {
	return (
		<main className={styles.main} role='main'>
			<h1 className='visually-hidden'>Магазин Shoppe</h1>
			<Hero />
			<NewProductList />
		</main>
	)
}
