import { cn } from '@/shared/lib'
import styles from './_styles/loading.module.css'

const placeholderCardArray = Array.from({ length: 6 })
const placeholderPaginationArray = Array.from({ length: 4 })

const SkeletonItem = () => {
	return (
		<div className={cn(styles.content__item, styles.item)}>
			<div datatype='skeleton' className={styles.item__img}></div>
			<div datatype='skeleton' className={styles.item__title}></div>
			<div datatype='skeleton' className={styles.item__price}></div>
		</div>
	)
}

export default function Loading() {
	return (
		<div className={styles.catalog}>
			<div className={styles.catalog__mobileHeader}>
				<div datatype='skeleton' className={styles.catalog__title}></div>
				<div datatype='skeleton' className={styles.catalog__price}></div>
			</div>
			<div className={styles.catalog__filters}>
				<div datatype='skeleton' className={styles.catalog__title}></div>
				<div datatype='skeleton' className={styles.catalog__search}></div>
				<div datatype='skeleton' className={styles.catalog__dropdown}></div>
				<div datatype='skeleton' className={styles.catalog__slider}></div>
				<div datatype='skeleton' className={styles.catalog__price}></div>
				<div className={cn(styles.catalog__discount, styles.discount)}>
					<div datatype='skeleton' className={styles.discount__label}></div>
					<div datatype='skeleton' className={styles.discount__checkbox}></div>
				</div>
			</div>
			<div className={cn(styles.catalog__content, styles.content)}>
				<div className={styles.content__list}>
					{placeholderCardArray.map((_, index) => (
						<SkeletonItem key={index} />
					))}
				</div>
				<div className={cn(styles.catalog__pagination, styles.pagination)}>
					{placeholderPaginationArray.map((_, index) => (
						<div
							key={index}
							datatype='skeleton'
							className={styles.pagination__item}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
