export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
	As: 'h1' | 'h2' | 'h3' | 'h4'
	children: React.ReactNode
	size: 'sm' | 'md' | 'lg' | 'xl'
	className: string
	align: 'left' | 'center' | 'right'
}
