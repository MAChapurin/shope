import { VisuallyHiddenTitle } from '@/shared/ui'
import { CurrentOrder } from '@/widgets'

export default function ProfilePage() {
	return (
		<main>
			<VisuallyHiddenTitle>Профиль</VisuallyHiddenTitle>
			<CurrentOrder />
		</main>
	)
}
