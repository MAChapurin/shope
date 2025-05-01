import { PATH_NAMES } from '@/shared/settings'
import { Icon } from '@/shared/ui'
import Link from 'next/link'
import { LikeCount } from './like-count'

import styles from './styles.module.css'

export const LikeLinkIndicator = ({ As }: { As?: 'div' }) => {
	if (As)
		return (
			<As className={styles.link}>
				<Icon name='like' />
				<LikeCount />
			</As>
		)
	return (
		<Link className={styles.link} href={PATH_NAMES.FAVORITES}>
			<Icon name='like' />
			<LikeCount />
		</Link>
	)
}
