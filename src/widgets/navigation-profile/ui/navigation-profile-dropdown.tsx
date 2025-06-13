'use client'
import Link from 'next/link'
import { PATH_NAMES } from '@/shared/settings'
import { cn } from '@/shared/lib'
import { LogoutButton } from '@/features'
import { Button, Icon } from '@/shared/ui'

import { LINK_NAMES } from '../constants'
import { useProfileNavigation } from '../model/useProfileNavigation'
import styles from './styles.module.css'

export const NavigationProfileMobile = () => {
	const {
		isOrdersPage,
		isCurrentOrderPage,
		isUserPage,
		isOpen,
		dropdownValue,
		onToogle,
		ref
	} = useProfileNavigation()

	return (
		<div className={styles.root}>
			<div className={styles.mobile} ref={ref}>
				<Button
					aria-label={`${isOpen ? 'Закрыть' : 'Открыть'} меню навигации профиля`}
					onClick={onToogle}
					role='button'
					aria-haspopup='listbox'
					aria-controls='dropdown-list'
					aria-expanded={isOpen}
					className={styles.mobile__button}
					variant='outline'
				>
					{dropdownValue}{' '}
					<Icon
						name='dropdown'
						className={cn(styles.mobile__icon, {
							[styles['mobile__icon--rotate-180']]: isOpen
						})}
					/>
				</Button>
				<div
					role='listbox'
					className={cn(styles.nav, {
						[styles['nav--open']]: isOpen
					})}
				>
					<Link
						role='option'
						aria-selected={isOrdersPage}
						className={cn(styles.nav__item, {
							[styles['nav__item--active']]: isOrdersPage
						})}
						href={PATH_NAMES.PROFILE_HISTORY}
					>
						<Button fullWidth variant='outline'>
							{LINK_NAMES.HISTORY}
							<Icon
								name='success'
								className={cn(
									styles.mobile__icon,
									styles['mobile__icon--transparent'],
									{
										[styles['mobile__icon--visible']]: isOrdersPage
									}
								)}
							/>
						</Button>
					</Link>
					<Link
						role='option'
						aria-selected={isCurrentOrderPage}
						className={cn(styles.nav__item, {
							[styles['nav__item--active']]: isCurrentOrderPage
						})}
						href={PATH_NAMES.PROFILE_ORDER}
					>
						<Button fullWidth variant='outline'>
							{LINK_NAMES.CURRENT_ORDER}
							<Icon
								name='success'
								className={cn(
									styles.mobile__icon,
									styles['mobile__icon--transparent'],
									{
										[styles['mobile__icon--visible']]: isCurrentOrderPage
									}
								)}
							/>
						</Button>
					</Link>
					<Link
						role='option'
						aria-selected={isUserPage}
						className={cn(styles.nav__item, {
							[styles['nav__item--active']]: isUserPage
						})}
						href={PATH_NAMES.PROFILE_USER}
					>
						<Button fullWidth variant='outline'>
							{LINK_NAMES.PROFILE}
							<Icon
								name='success'
								className={cn(
									styles.mobile__icon,
									styles['mobile__icon--transparent'],
									{
										[styles['mobile__icon--visible']]: isUserPage
									}
								)}
							/>
						</Button>
					</Link>
				</div>
			</div>
			<LogoutButton className={styles.nav__item} />
		</div>
	)
}
