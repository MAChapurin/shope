import { LoginForm } from '@/features'
import { VisuallyHiddenTitle } from '@/shared/ui'
export default function LoginPage() {
	return (
		<>
			<VisuallyHiddenTitle>Вход</VisuallyHiddenTitle>
			<LoginForm />
		</>
	)
}
