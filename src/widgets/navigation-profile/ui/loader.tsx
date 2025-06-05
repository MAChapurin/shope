import styles from './styles.module.css'

export const NavigationProfileLoader = () => {
	return (
		<div className={styles.skeleton}>
			<div className={styles.skeleton__left} datatype='skeleton'></div>
			<div className={styles.skeleton__right} datatype='skeleton'></div>
		</div>
	)
}
