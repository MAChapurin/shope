import { cn } from '@/shared/lib'
import { TitleProps } from './title.props'

import styles from './styles.module.css'

export const Title = ({
	align = 'left',
	children,
	As = 'h2',
	size,
	className
}: Partial<TitleProps>) => {
	return (
		<As
			className={cn(
				{
					[styles.left]: align === 'left',
					[styles.center]: align === 'center',
					[styles.right]: align === 'right',
					[styles.sm]: size === 'sm',
					[styles.md]: size === 'md',
					[styles.lg]: size === 'lg',
					[styles.xl]: size === 'xl'
				},
				className
			)}
		>
			{children}
		</As>
	)
}
