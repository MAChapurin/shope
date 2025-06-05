import { Button, Paragraph, Title } from '@/shared/ui'
import { NavigationProfile } from '@/widgets'

import { cookies } from 'next/headers'
import { ACCESS_TOKEN } from '@/shared/constants'
import Link from 'next/link'
import { PATH_NAMES } from '@/shared/settings'
import styles from './page.module.css'

export default async function AuthLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const cookieStore = await cookies()
	const token = cookieStore.get(ACCESS_TOKEN)?.value
	if (!token) {
		return (
			<div className={styles.main}>
				<Title align='center'>Вы не авторизованы</Title>
				<Paragraph align='center'>
					Если у вас есть аккаунт, то выполните вход, если нет то пройдите
					процедуру регистрации
				</Paragraph>
				<nav className={styles.nav}>
					<Link href={PATH_NAMES.LOGIN}>
						<Button variant='filled'>Войти</Button>
					</Link>
					<Link href={PATH_NAMES.REGISTER}>
						<Button variant='filled'>Зарегистрироваться</Button>
					</Link>
				</nav>
			</div>
		)
	}
	return (
		<main className={styles.profile}>
			<Title align='center' As='h1' className={styles.profile__title}>
				Мой аккаунт
			</Title>
			<div className={styles.profile__nav}>
				<NavigationProfile />
			</div>
			<div className={styles.profile__children}>{children}</div>
		</main>
	)
}
