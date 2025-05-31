'use client'
import { OrdersList, useProfile } from '@/entities'
import { PATH_NAMES } from '@/shared/settings'
import { Button, Paragraph, Title, VisuallyHiddenTitle } from '@/shared/ui'
import { CurrentOrder } from '@/widgets'
import Link from 'next/link'
import styles from './page.module.css'

export default function ProfilePage() {
	const { user } = useProfile()
	if (!user) {
		return (
			<main className={styles.main}>
				<VisuallyHiddenTitle>Профиль</VisuallyHiddenTitle>
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
			</main>
		)
	}

	return (
		<main className={''}>
			<VisuallyHiddenTitle>Профиль</VisuallyHiddenTitle>
			<CurrentOrder />
			<OrdersList />
		</main>
	)
}
