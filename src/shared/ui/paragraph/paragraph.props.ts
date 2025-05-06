export interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
  className?: string
  align: 'left' | 'center' | 'right'
  color: 'secondary' | 'primary' | 'default' | 'error'
}
