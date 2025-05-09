import { Title } from '@/shared/ui'
import styles from './styles.module.css'

export const ReviewEmptyAlert = () => {
	return (
		<div className={styles.alert} role='alert'>
			<Title As='h3'>Здесь пока ничего нет</Title>
		</div>
	)
}
