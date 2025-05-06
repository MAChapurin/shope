import { cn } from '@/shared/lib'
import { ParagraphProps } from './paragraph.props'
import styles from './styles.module.css'

export const Paragraph = ({
	align = 'left',
	children,
	className,
	color = 'default',
	...props
}: Partial<ParagraphProps>) => {
	return (
		<p
			className={cn(
				styles.paragraph,
				{
					[styles.left]: align === 'left',
					[styles.center]: align === 'center',
					[styles.right]: align === 'right',
					[styles.default]: color === 'default',
					[styles.primary]: color === 'primary',
					[styles.secondary]: color === 'secondary',
					[styles.error]: color === 'error'
				},
				className
			)}
			{...props}
		>
			{children}
		</p>
	)
}
