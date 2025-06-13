import { Icon, Paragraph } from '@/shared/ui'
import styles from './styles.module.css'

export const OrderAlert = () => {
	return (
		<div className={styles.alert}>
			<div className={styles.alert__content}>
				<Icon name='success' />
				<Paragraph>Мы&nbsp;получили ваш заказ</Paragraph>
			</div>
		</div>
	)
}
