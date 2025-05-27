'use client'

import { useLikeCount } from '../model/useLikeCount'
import styles from './styles.module.css'

export const LikeCount = () => {
	const count = useLikeCount()
	return count > 0 && <div className={styles.count}>{count}</div>
}
