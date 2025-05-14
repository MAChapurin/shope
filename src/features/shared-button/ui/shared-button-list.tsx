'use client'
import { Icon } from '@/shared/ui'
import { FC } from 'react'
import { PLATFORM, SharedButtonProps } from '../types'
import { useShared } from '../model/useShared'

import { cn } from '@/shared/lib'
import { SHARED_TEXT } from '../constants'
import styles from './styles.module.css'

export const SharedButtonList: FC<SharedButtonProps> = ({ className }) => {
	const { onClick } = useShared()
	return (
		<div className={cn(styles.shared, className)} onClick={onClick}>
			<button
				aria-label={SHARED_TEXT.ARIA_LABEL_MAIL}
				data-value={PLATFORM.MAIL}
				className={styles.shared__button}
			>
				<Icon name='mail' className={styles.shared__link} />
			</button>
			<button
				aria-label={SHARED_TEXT.ARIA_LABEL_FACEBOOK}
				data-value={PLATFORM.FACEBOOK}
				className={styles.shared__button}
			>
				<Icon name='facebook' className={styles.shared__link} />
			</button>
			<button
				aria-label={SHARED_TEXT.ARIA_LABEL_TWITTER}
				data-value={PLATFORM.TWITTER}
				className={styles.shared__button}
			>
				<Icon name='twitter' className={styles.shared__link} />
			</button>
			<button
				aria-label={SHARED_TEXT.ARIA_LABEL_INSTAGRAM}
				data-value={PLATFORM.INSTAGRAM}
				className={styles.shared__button}
			>
				<Icon name='instagram' className={styles.shared__link} />
			</button>
		</div>
	)
}
