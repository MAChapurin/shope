import { Title } from '@/shared/ui'

import styles from './page.module.css'
import Link from 'next/link'
import { PATH_NAMES } from '@/shared/settings'

export default function Page404() {
	return (
		<main className={styles.main404}>
			<Title align='center' size='xl'>
				404 Ошибка
			</Title>
			<p className={styles.paragraph}>
				Страница не&nbsp;найдена, попробуйте перейти на&nbsp;главную страницу
			</p>
			<Link className={styles.link} href={PATH_NAMES.MAIN}>
				Главная страница
			</Link>
		</main>
	)
}
