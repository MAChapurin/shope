'use client'
import { CUSTOM_EVENTS, INPUT_PLACEHOLDERS } from '@/shared/settings'
import { Button, Input, Paragraph, Title } from '@/shared/ui'

import styles from './page.module.css'
import { emitter } from '@/shared/lib'
import { useState } from 'react'

export default function RestorePage() {
	const [value, setValue] = useState('')

	return (
		<main className={styles.main}>
			<div className={styles.content}>
				<Title align='center'>Забыли пароль?</Title>
				<Paragraph align='center'>
					Если вы&nbsp;забыли пароль, то&nbsp;введите свой email
					и&nbsp;мы&nbsp;отправим вам ссылку на&nbsp;восстановление
				</Paragraph>
				<form
					className={styles.form}
					onSubmit={e => {
						e.preventDefault()
						setValue('')
						emitter.emit(CUSTOM_EVENTS.ADD_TOST, 'Заявка на сброс отправлена')
					}}
				>
					<Input
						value={value}
						onChange={e => {
							setValue(e.target.value)
						}}
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
