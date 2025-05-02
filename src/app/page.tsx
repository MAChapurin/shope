import { Hero } from '@/widgets/hero'
import { NewProductList } from '@/widgets/new-product-list'

export default function Home() {
	return (
		<main role='main'>
			<h1 className='visually-hidden'>Магазин Shoppe</h1>
			<Hero />
			<NewProductList />
		</main>
	)
}
