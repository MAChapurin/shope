import styles from './styles.module.css'

export const Container = ({
	children
}: Readonly<{
	children: React.ReactNode
}>) => {
	return <div className={styles.container}>{children}</div>
}
