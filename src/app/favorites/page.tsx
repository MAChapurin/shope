import { delay } from '@/shared/utils'
import { FavoritesList } from '@/widgets'

export default async function FavoritesPage() {
	await delay(3000)
	return (
		<main>
			<h1>Избранное</h1>
			<FavoritesList />
		</main>
	)
}
