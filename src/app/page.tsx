import { Hero } from '@/widgets/hero'
import styles from './page.module.css'

export default function Home() {
	return (
		<main className={styles.main} role='main'>
			<h1 className='visually-hidden'>Магазин Shoppe</h1>
			<Hero />
		</main>
	)
}
