import { VisuallyHiddenTitle } from '@/shared/ui'
import { Hero, NewProductList } from '@/widgets'
import { Suspense } from 'react'
import { LoadingHomes } from './loading'

export default function Home() {
	return (
		<Suspense fallback={<LoadingHomes />}>
			<main role='main'>
				<VisuallyHiddenTitle>Магазин Shoppe</VisuallyHiddenTitle>
				<Hero />
				<NewProductList />
			</main>
		</Suspense>
	)
}
