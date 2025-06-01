'use client'
import { OrdersList, useProfile } from '@/entities'
import { PATH_NAMES } from '@/shared/settings'
import { Button, Paragraph, Title } from '@/shared/ui'
import Link from 'next/link'
import styles from './page.module.css'

export default function ProfilePage() {
	const { user } = useProfile()
	if (!user) {
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
			<OrdersList />
		</main>
	)
}
