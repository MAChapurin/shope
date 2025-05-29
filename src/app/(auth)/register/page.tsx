import { RegisterForm } from '@/features'
import { VisuallyHiddenTitle } from '@/shared/ui'
export default function RegisterPage() {
	return (
		<>
			<VisuallyHiddenTitle>Регистрация</VisuallyHiddenTitle>
			<RegisterForm />
		</>
	)
}
