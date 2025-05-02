'use client'

import { useDiscount } from '../model/useDiscount'

import styles from './styles.module.css'

export const DiscountSwitch = () => {
	const { id, isChecked, toogleDiscount } = useDiscount()
	return (
		<form className={styles.form} onSubmit={e => e.preventDefault}>
			<label className={styles.form__label} htmlFor={id}>
				Со скидкой
			</label>
			<input
				className={styles.form__input}
				type='checkbox'
				id={id}
				checked={isChecked}
				onChange={toogleDiscount}
			/>
		</form>
	)
}
