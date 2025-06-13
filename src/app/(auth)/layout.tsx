import { Paragraph } from '@/shared/ui'
import { AuthNavigation } from '@/features'

import styles from './layout.module.css'

export default function AuthLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<main className={styles.container}>
			<div className={styles.content}>
				<Paragraph className={styles.title} align='center'>
					Мой аккаунт
				</Paragraph>
				<AuthNavigation />
				<div className={styles.children}>{children}</div>
			</div>
		</main>
	)
}
