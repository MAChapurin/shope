'use client'
import { useAnchor } from '../model/useAnchor'
import { FC } from 'react'
import { AnchorLinkProps } from '../types'
import { cn } from '@/shared/lib'

import styles from './styles.module.css'

/**
 * Component AnchorLink.
 *
 * This component creates an anchor link that uses the useAnchor hook to handle clicks,
 * when clicked, the corresponding search parameter is set and scrolls to the target section according to the passed id.
 *
 * @property {React.ReactNode} children - children of components.
 * @property {string} [className] - additional class for styles.
 * @property {SEARCH_PARAMS} [params] - Parameters passed to the useAnchor hook.
 * @property {string} [value] - The value passed to the useAnchor hook.
 * @property {string} [id] - The element ID for the anchor link.
 * @property {string} [href] - The URL of the link (can be used for navigation, but is not recommended as it is a regular link and not a Link component from Next).
 * @property {...React.AnchorHTMLAttributes<HTMLAnchorElement>} props - The remaining props are for the <a> element.
 */

export const AnchorLink: FC<AnchorLinkProps> = ({
	children,
	className,
	params,
	value,
	id,
	href,
	...props
}) => {
	const onClick = useAnchor(params, value, id)
	return (
		<a
			className={cn(styles.link, className)}
			onClick={onClick}
			href={href}
			{...props}
		>
			{children}
		</a>
	)
}
