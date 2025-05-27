import { Loader } from '@/shared/ui'
import styles from './loading.module.css'

const placeholderPaginationArray = Array.from({ length: 5 })
const placeholderCardArray = Array.from({ length: 6 })

export function LoadingHomes() {
	return (
		<div className={styles.root}>
			<div className={styles.hero}>
				<div datatype='skeleton' className={styles.hero__title}></div>
				<div datatype='skeleton' className={styles.hero__price}></div>
				<div datatype='skeleton' className={styles.hero__button}></div>
				<div className={styles.pagination}>
					{placeholderPaginationArray.map((_, index) => (
						<div
							datatype='skeleton'
							className={styles.pagination__item}
							key={index}
						></div>
					))}
				</div>
			</div>
			<div datatype='skeleton' className={styles.root__title}></div>
			<div className={styles.list}>
				{placeholderCardArray.map((_, index) => (
					<div key={index} className={styles.item}>
						<div datatype='skeleton' className={styles.item__img}></div>
						<div datatype='skeleton' className={styles.item__title}></div>
						<div datatype='skeleton' className={styles.item__price}></div>
					</div>
				))}
			</div>
		</div>
	)
}

export default function Loading() {
	return (
		<div className={styles.root}>
			<Loader />
		</div>
	)
}
