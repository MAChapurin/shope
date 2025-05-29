import { INPUT_PLACEHOLDERS } from '@/shared/settings'
import { Button, Input, Paragraph, Title } from '@/shared/ui'

import styles from './page.module.css'

export default function RestorePage() {
	return (
		<main className={styles.main}>
			<div className={styles.content}>
				<Title align='center'>Забыли пароль?</Title>
				<Paragraph align='center'>
					Если вы&nbsp;забыли пароль, то&nbsp;введите свой email
					и&nbsp;мы&nbsp;отправим вам ссылку на&nbsp;восстановление
				</Paragraph>
				<form className={styles.form}>
					<Input
						className={styles.input}
						type='email'
						placeholder={INPUT_PLACEHOLDERS.EMAIL}
					/>
					<Button variant='filled' type='submit'>
						Сбросить пароль
					</Button>
				</form>
			</div>
		</main>
	)
}
