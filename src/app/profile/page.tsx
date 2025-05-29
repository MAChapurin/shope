import { LoginForm } from '@/features/authorization/ui/login-form'
import { RegisterForm } from '@/features/authorization/ui/register-form'
import { VisuallyHiddenTitle } from '@/shared/ui'
import { CurrentOrder } from '@/widgets'

export default function ProfilePage() {
	return (
		<main>
			<VisuallyHiddenTitle>Профиль</VisuallyHiddenTitle>
			<CurrentOrder />
			<LoginForm />
			<RegisterForm />
		</main>
	)
}
