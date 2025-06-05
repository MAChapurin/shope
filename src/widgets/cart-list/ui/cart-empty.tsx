import Link from 'next/link'
import { Button, Paragraph, Title } from '@/shared/ui'
import { PATH_NAMES } from '@/shared/settings'
import { SearchButtonOpen } from '@/features/search'

import styles from './cart-empty.module.css'

export const EmptyCart = () => {
	return (
		<div className={styles.empty}>
			<Title As='h2'>Похоже, вы еще не добавили товары в корзину.</Title>
			<div className={styles.empty__divider} />
			<Title As='h3'>Что вы можете сделать?</Title>
			<Paragraph role='list' color='secondary'>
				<span role='listitem'>
					1. Вы&nbsp;можете просмотреть наш ассортимент ювелирных украшений
					и&nbsp;выбрать понравившиеся изделия.
				</span>
				<br />
				<span role='listitem'>
					2. Вернуться на&nbsp;главную страницу или страницу каталога
					и&nbsp;начать покупки.
				</span>
				<br />
				3. Использовать поиск, чтобы быстро найти нужный товар.
			</Paragraph>
			<div className={styles.empty__divider} />
			<Title As='h3'>Советы</Title>
			<Paragraph role='list' color='secondary'>
				<span role='listitem'>
					1. Добавляйте украшения в&nbsp;корзину, чтобы оформить заказ позже.
				</span>
				<br />
				<span role='listitem'>
					2. Следите за&nbsp;новинками и&nbsp;акциями&nbsp;&mdash; возможно,
					именно сейчас самое время сделать покупку!
				</span>
			</Paragraph>
			<div className={styles.empty__divider} />
			<div className={styles.empty__navigation}>
				<Link className={styles.empty__link} href={PATH_NAMES.MAIN}>
					<Button variant='filled'>На&nbsp;главную</Button>
				</Link>
				<Link className={styles.empty__link} href={PATH_NAMES.CATALOG}>
					<Button variant='filled'>В&nbsp;каталог</Button>
				</Link>
				<SearchButtonOpen />
			</div>
		</div>
	)
}
