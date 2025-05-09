import { FC } from 'react'
import { TabContentProps } from '../types'
import { cn } from '@/shared/lib'

import styles from './styles.module.css'

export const TabContent: FC<TabContentProps> = ({ children, className }) => {
	return <div className={cn(styles.content, className)}>{children}</div>
}
