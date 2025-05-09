import { VisuallyHiddenTitle } from '@/shared/ui'
import { Hero } from '@/widgets/hero'
import { NewProductList } from '@/widgets/new-product-list'

export default function Home() {
	return (
		<main role='main'>
			<VisuallyHiddenTitle>Магазин Shoppe</VisuallyHiddenTitle>
			<Hero />
			<NewProductList />
		</main>
	)
}
