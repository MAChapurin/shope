import Image from 'next/image'

import styles from './page.module.css'

export default function AboutPage() {
	return (
		<main className={styles.main}>
			<h1 className={styles.title}>О нас</h1>
			<p className={styles.subtitle}>
				Добро пожаловать в&nbsp;Shope&nbsp;&mdash; ваш надежный магазин
				ювелирных украшений, где каждый найдет что-то особенное!
			</p>
			<article className={styles.article}>
				<h2 className={styles.article__title}>
					<h2 className={styles.article__title}>Наша история</h2>
				</h2>
				<p className={styles.description}>
					Магазин Shope был основан с&nbsp;любовью к&nbsp;красоте
					и&nbsp;стремлением создавать уникальные украшения, которые
					подчеркивают индивидуальность каждого клиента. Мы&nbsp;работаем
					на&nbsp;рынке ювелирных изделий уже более 10&nbsp;лет, постоянно
					расширяя ассортимент и&nbsp;совершенствуя качество.
				</p>
			</article>
			<article className={styles.article}>
				<h2 className={styles.article__title}>Наши ценности</h2>
				<Image
					className={styles.article__img}
					width={670}
					height={300}
					src={'/img-01.webp'}
					alt='Изображение руки с бусами'
					title='Тренды в украшениях'
				/>
				<ul className={styles.article__list}>
					<li className={styles.article__item}>
						● <b>Качество и&nbsp;оригинальность:</b> Вся наша продукция
						создается из&nbsp;высококачественных материалов
						и&nbsp;с&nbsp;вниманием к&nbsp;деталям.
					</li>
					<li className={styles.article__item}>
						● <b>Индивидуальный подход:</b> Мы&nbsp;ценим каждого клиента
						и&nbsp;готовы помочь подобрать украшение, которое идеально подойдет
						именно вам.
					</li>
					<li className={styles.article__item}>
						● <b>Доверие и&nbsp;надежность:</b> Для нас важно, чтобы каждый
						покупатель остался доволен своей покупкой и&nbsp;возвращался
						к&nbsp;нам снова.
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
					В&nbsp;Shope мы&nbsp;объединяем традиции мастерства и&nbsp;современные
					тенденции моды. Наши украшения&nbsp;&mdash; это не&nbsp;просто
					аксессуары, а&nbsp;выражение вашей индивидуальности. Мы&nbsp;заботимся
					о&nbsp;каждом клиенте и&nbsp;делаем все возможное, чтобы ваше
					впечатление от&nbsp;покупки было максимально приятным.
				</p>
			</article>
		</main>
	)
}
