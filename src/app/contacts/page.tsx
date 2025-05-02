import { Suspense } from 'react'
import styles from './page.module.css'

export default function ContactsPage() {
	return (
		<Suspense>
			<main className={styles.main}>
				<h1>Контакты</h1>

				<p>
					Мы всегда рады помочь вам! Если у вас есть вопросы, предложения или
					пожелания, не стесняйтесь обращаться к нам. Вот как вы можете
					связаться с нашей командой:
				</p>

				<h2>Наши контактные данные</h2>
				<p>
					<strong>Телефон:</strong> <a href='tel:+79031233232'>+79031233232</a>
				</p>
				<p>
					<strong>Электронная почта:</strong>{' '}
					<a href='mailto:examle@mail.com'>examle@mail.com</a>
				</p>
				<p>
					<strong>Адрес:</strong> г. Москва Варшавское шоссе, 87Б
				</p>

				<iframe
					className='invert grayscale'
					src='https://maps.google.com/maps?width=100%&height=250&hl=ru&q=Москва,+Варшавское+шоссе+87Б&ie=UTF8&t=&z=14&iwloc=B&output=embed'
					width='100%'
					height='480'
					allowFullScreen={true}
					loading='lazy'
				/>

				<h2>Часы работы</h2>
				<p>
					Пн - Пт: 9:00 - 18:00
					<br />
					Сб: 10:00 - 15:00
					<br />
					Вс: Выходной
				</p>

				<p style={{ textAlign: 'center' }}>
					Спасибо за ваш интерес к <b>SHOPPE</b>! Мы ценим ваше время и
					постараемся ответить на ваш запрос как можно быстрее.
				</p>
			</main>
		</Suspense>
	)
}
