import Image from 'next/image'

import styles from './page.module.css'

export default function AboutPage() {
	return (
		<main className={styles.main}>
			<h1 className={styles.title}>О нас</h1>
			<p className={styles.subtitle}>Мы делаем шикарные украшения для вас</p>
			<p className={styles.description}>
				Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
				sollicitudin ante&nbsp;a, gravida arcu. Nam fringilla molestie velit,
				eget pellentesque risus scelerisque&nbsp;a. Nam ac&nbsp;urna maximus,
				tempor magna&nbsp;et, placerat urna. Curabitur eu&nbsp;magna enim. Proin
				placerat tortor lacus, ac&nbsp;sodales lectus placerat quis.
			</p>
			<article className={styles.article}>
				<h2 className={styles.article__title}>Тренды в украшениях</h2>
				<Image
					className={styles.article__img}
					width={670}
					height={300}
					src={'/img-01.webp'}
					alt='Изображение руки с бусами'
					title='Тренды в украшениях'
				/>
				<p className={styles.article__paragraph}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
					placerat, augue a&nbsp;volutpat hendrerit, sapien tortor faucibus
					augue, a&nbsp;maximus elit ex&nbsp;vitae libero. Sed quis mauris eget
					arcu facilisis consequat sed eu&nbsp;felis.
				</p>
				<ul className={styles.article__list}>
					<li className={styles.article__item}>
						● Consectetur adipiscing elit. Aliquam placerat{' '}
					</li>
					<li className={styles.article__item}>
						● Lorem ipsum dolor sit amet consectetur
					</li>
				</ul>
			</article>
			<article className={styles.article}>
				<h2 className={styles.article__title}>Сделано с любовью</h2>
				<Image
					className={styles.article__img}
					width={670}
					height={300}
					src={'/img-02.webp'}
					alt='Изображение руки с золотыми часами'
					title='Сделано с любовью'
				/>
				<p className={styles.article__paragraph}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
					placerat, augue a&nbsp;volutpat hendrerit, sapien tortor faucibus
					augue, a&nbsp;maximus elit ex&nbsp;vitae libero. Sed quis mauris eget
					arcu facilisis consequat sed eu&nbsp;felis. Nunc sed porta augue.
					Morbi porta tempor odio, in&nbsp;molestie diam bibendu.
				</p>
			</article>
		</main>
	)
}
