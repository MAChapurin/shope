import { cn } from '@/shared/lib'
import styles from './_styles/skeleton.module.css'

export default function Loading() {
	return (
		<div className={styles.root}>
			<div className={styles.root__top}>
				<div className={styles.galery}>
					<div className={styles.galery__btnColumn}>
						<div datatype='skeleton' className={styles.galery__button}></div>
						<div datatype='skeleton' className={styles.galery__button}></div>
						<div datatype='skeleton' className={styles.galery__button}></div>
						<div datatype='skeleton' className={styles.galery__button}></div>
					</div>
					<div datatype='skeleton' className={styles.galery__img}></div>
				</div>
				<div className={styles.detail}>
					<div datatype='skeleton' className={styles.detail__title}></div>
					<div datatype='skeleton' className={styles.detail__price}></div>
					<div datatype='skeleton' className={styles.detail__rating}></div>
					<div datatype='skeleton' className={styles.detail__description}></div>
					<div datatype='skeleton' className={styles.detail__button}></div>
					<div className={cn(styles.detail__actions, styles.actions)}>
						<div datatype='skeleton' className={styles.actions__item}></div>
						<div datatype='skeleton' className={styles.actions__item}></div>
						<div datatype='skeleton' className={styles.actions__item}></div>
						<div datatype='skeleton' className={styles.actions__item}></div>
						<div datatype='skeleton' className={styles.actions__item}></div>
					</div>
					<div datatype='skeleton' className={styles.detail__tableRow}></div>
					<div datatype='skeleton' className={styles.detail__tableRow}></div>
				</div>
			</div>
			<div className={styles.bottom}>
				<div className={cn(styles.bottom__header, styles.header)}>
					<div datatype='skeleton' className={styles.header__title}></div>
					<div datatype='skeleton' className={styles.header__title}></div>
				</div>
				<div className={cn(styles.bottom__tab, styles.tab)}>
					<div datatype='skeleton' className={styles.tab__title}></div>
					<div datatype='skeleton' className={styles.tab__description}></div>
				</div>
			</div>
		</div>
	)
}
