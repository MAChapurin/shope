'use client'

import { Icon } from '@/shared/ui'
import { cn } from '@/shared/lib'

import { useDropdownFilterCategory } from '../model/useDropdownFilter'

import styles from './styles.module.css'

export const DropdownCategoryFilter = ({
	categories
}: {
	categories: { id: number; name: string }[]
}) => {
	const { activeCategory, toogleDropdown, isOpen, ref, onClick } =
		useDropdownFilterCategory()
	return (
		<div className={styles.dropdown} ref={ref}>
			<button
				aria-label={(isOpen ? 'Закрыть' : 'Открыть') + ' меню выбора категории'}
				className={styles.dropdown__button}
				onClick={toogleDropdown}
			>
				Категории{' '}
				<Icon
					name='dropdown'
					className={cn(styles.dropdown__icon, {
						[styles['dropdown__icon--rotate180']]: isOpen
					})}
				/>
			</button>
			<ul
				aria-label='Список вариантов сортировки по категориям'
				onClick={onClick}
				className={cn(styles.dropdown__list, {
					[styles['dropdown__list--open']]: isOpen
				})}
			>
				{categories.map(category => {
					return (
						<li key={category.id}>
							<button
								className={styles.dropdown__button}
								data-value={category.id}
							>
								{category.name}{' '}
								<Icon
									name='success'
									className={cn(
										styles.dropdown__icon,
										styles['dropdown__icon--transparent'],
										{
											[styles['dropdown__icon--visible']]:
												activeCategory === category.id.toString()
										}
									)}
								/>
							</button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
