import { FC } from 'react'
import { TimeTextProps } from './time-text.props'
import { cn } from '@/shared/lib'
import { formatDate } from '@/shared/utils'

import styles from './styles.module.css'

export const TimeText: FC<TimeTextProps> = ({ date, className, ...props }) => {
	return (
		<time
			itemProp='datePublished'
			dateTime={date.toString()}
			className={cn(styles.time, className)}
			{...props}
		>
			{formatDate(date)}
		</time>
	)
}
