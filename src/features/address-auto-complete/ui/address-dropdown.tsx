'use client'
import { FC } from 'react'
import { AddressDropdownProps } from '../types'
import { Loader } from '@/shared/ui'
import { cn } from '@/shared/lib'

import styles from './styles.module.css'

export const AddressDropdown: FC<AddressDropdownProps> = ({
	suggestions,
	isLoading,
	onClick,
	isOpen
}) => {
	if (isLoading) {
		return (
			<div
				className={cn(styles.loader, {
					[styles['loader--open']]: isOpen
				})}
			>
				<div className={styles.loader__container}>
					<Loader />
				</div>
			</div>
		)
	}

	if (suggestions.length > 0) {
		return (
			<ul
				className={cn(styles.dropdown, {
					[styles['dropdown--open']]: isOpen
				})}
			>
				{suggestions.map(place => (
					<li className={styles.dropdown__item} key={place.place_id}>
						<button
							className={styles.dropdown__button}
							onClick={() => onClick(place)}
						>
							{place.display_name}
						</button>
					</li>
				))}
			</ul>
		)
	}
	return null
}
