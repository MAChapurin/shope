'use client'
import { useFlag } from '../model/useFlag'
import { FC } from 'react'
import { LikeFlagProps } from '../types'
import { Icon } from '@/shared/ui'
import { cn } from '@/shared/lib'

import styles from './styles.module.css'

export const LikeFlag: FC<LikeFlagProps> = ({ sku }) => {
	const { isLiked, mounted } = useFlag(sku)
	return (
		<>
			{mounted && (
				<Icon
					name='likeFilled'
					className={cn(styles.flag, {
						[styles['flag--visible']]: isLiked
					})}
				/>
			)}
		</>
	)
}
