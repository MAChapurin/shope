import { ReactNode } from 'react'
import styles from './styles.module.css'

export const VisuallyHiddenTitle = ({ children }: { children: ReactNode }) => {
	return <h1 className={styles['visually-hidden']}>{children}</h1>
}
