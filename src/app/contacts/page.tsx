import { Paragraph, Title } from '@/shared/ui'
import styles from './page.module.css'

export default function ContactsPage() {
	return (
		<main className={styles.main} role='main'>
			<Title As='h1' size='xl'>
				Контакты
			</Title>

			<Paragraph>
				Мы всегда рады помочь вам! Если у вас есть вопросы, предложения или
				пожелания, не стесняйтесь обращаться к нам. Вот как вы можете связаться
				с нашей командой:
			</Paragraph>

			<Title>Наши контактные данные</Title>
			<Paragraph>
				<strong>Телефон:</strong> <a href='tel:+79031233232'>+79031233232</a>
			</Paragraph>
			<Paragraph>
				<strong>Электронная почта:</strong>{' '}
				<a href='mailto:examle@mail.com'>examle@mail.com</a>
			</Paragraph>
			<Paragraph>
				<strong>Адрес:</strong> г. Москва Варшавское шоссе, 87Б
			</Paragraph>

			<iframe
				className='invert grayscale'
				src='https://maps.google.com/maps?width=100%&height=250&hl=ru&q=Москва,+Варшавское+шоссе+87Б&ie=UTF8&t=&z=14&iwloc=B&output=embed'
				width='100%'
				height='480'
				allowFullScreen={true}
				loading='lazy'
			/>

			<Title>Часы работы</Title>
			<Paragraph>
				Пн - Пт: 9:00 - 18:00
				<br />
				Сб: 10:00 - 15:00
				<br />
				Вс: Выходной
			</Paragraph>

			<Paragraph align='center'>
				Спасибо за ваш интерес к <b>SHOPPE</b>! Мы ценим ваше время и
				постараемся ответить на ваш запрос как можно быстрее.
			</Paragraph>
		</main>
	)
}
