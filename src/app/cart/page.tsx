import { Suspense } from 'react'

export default function CartPage() {
	return (
		<Suspense fallback={<div>loading cart...</div>}>
			<main>
				<h1>CART PAGE</h1>
			</main>
		</Suspense>
	)
}
