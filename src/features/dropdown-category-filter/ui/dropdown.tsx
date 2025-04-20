'use client'

import { Icon } from '@/shared/ui'
import { cn } from '@/shared/lib'

import styles from './styles.module.css'
import { useDropdownFilterCategory } from '../model/useDropdownFilter'

export const DropdownCategoryFilter = () => {
	const { activeCategory, toogleDropdown, isOpen, ref, onClick } =
		useDropdownFilterCategory()
	return (
		<div className={styles.dropdown} ref={ref}>
			<button className={styles.dropdown__button} onClick={toogleDropdown}>
				Категории <Icon name='dropdown' />
			</button>
			<ul
				onClick={onClick}
				className={cn(styles.dropdown__list, {
					[styles['dropdown__list--open']]: isOpen
				})}
			>
				<li>
					<button className={styles.dropdown__button} data-value='ring'>
						Кольца{' '}
						<Icon
							name='success'
							className={cn(
								styles.dropdown__icon,
								styles['dropdown__icon--transparent'],
								{
									[styles['dropdown__icon--visible']]: activeCategory === 'ring'
								}
							)}
						/>
					</button>
				</li>
				<li>
					<button className={styles.dropdown__button} data-value='watch'>
						Часы{' '}
						<Icon
							name='success'
							className={cn(
								styles.dropdown__icon,
								styles['dropdown__icon--transparent'],
								{
									[styles['dropdown__icon--visible']]:
										activeCategory === 'watch'
								}
							)}
						/>
					</button>
				</li>
				<li>
					<button className={styles.dropdown__button} data-value='earrings'>
						Серьги{' '}
						<Icon
							name='success'
							className={cn(
								styles.dropdown__icon,
								styles['dropdown__icon--transparent'],
								{
									[styles['dropdown__icon--visible']]:
										activeCategory === 'earrings'
								}
							)}
						/>
					</button>
				</li>
				<li>
					<button className={styles.dropdown__button} data-value='pendants'>
						Подвески{' '}
						<Icon
							name='success'
							className={cn(
								styles.dropdown__icon,
								styles['dropdown__icon--transparent'],
								{
									[styles['dropdown__icon--visible']]:
										activeCategory === 'pendants'
								}
							)}
						/>
					</button>
				</li>
			</ul>
		</div>
	)
}
