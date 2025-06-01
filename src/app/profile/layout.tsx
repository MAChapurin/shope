import { Title } from '@/shared/ui'
import { NavigationProfile } from '@/widgets'

import styles from './page.module.css'

export default function AuthLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<main className={styles.profile}>
			<Title align='center' As='h1' className={styles.profile__title}>
				Мой аккаунт
			</Title>
			<NavigationProfile />
			<div className={styles.profile__children}>{children}</div>
		</main>
	)
}
