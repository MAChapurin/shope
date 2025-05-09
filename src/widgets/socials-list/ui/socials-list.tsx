import { Icon } from '@/shared/ui'
import { cn } from '@/shared/lib'

import Link from 'next/link'
import { FC } from 'react'

import { SOCIALS_LINKS } from '../settings'
import { SocialsListProps } from '../types'

import styles from './styles.module.css'

export const SocialsList: FC<SocialsListProps> = ({ className, ...props }) => {
	return (
		<ul className={cn(styles.list, className)} {...props}>
			{SOCIALS_LINKS.map(({ href, icon }, index) => (
				<li key={index}>
					<Link href={href} className={styles.list__link}>
						<Icon name={icon} />
					</Link>
				</li>
			))}
		</ul>
	)
}
