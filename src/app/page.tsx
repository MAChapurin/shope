import { VisuallyHiddenTitle } from '@/shared/ui'
import { Hero, NewProductList } from '@/widgets'

export default function Home() {
	return (
		<main role='main'>
			<VisuallyHiddenTitle>Магазин Shoppe</VisuallyHiddenTitle>
			<Hero />
			<NewProductList />
		</main>
	)
}
