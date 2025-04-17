'use client'
import { PATH_NAMES } from '@/shared/settings'
import { Container, Icon } from '@/shared/ui'
import Link from 'next/link'
import cn from 'clsx'
import { useMobileNavigation } from '../model/useMobileNavigation'

import styles from './styles.module.css'

export const NavigationMobile = () => {
	const { isOpen } = useMobileNavigation()
	return (
		<div className={styles.containerMobile}>
			<nav
				className={cn(styles.navMobile, {
					[styles.mobileMenuOpen]: isOpen
				})}
				datatype={String(isOpen)}
			>
				<Container>
					<ul className={styles.listMobile}>
						<li>
							<Link
								style={{ transitionDelay: '0s' }}
								className={styles.linkMobile}
								href={PATH_NAMES.MAIN}
							>
								Главная
							</Link>
						</li>
						<li>
							<Link
								style={{ transitionDelay: '0.1s' }}
								className={styles.linkMobile}
								href={PATH_NAMES.CATALOG}
							>
								Магазин
							</Link>
						</li>
						<li>
							<Link
								style={{ transitionDelay: '0.2s' }}
								className={styles.linkMobile}
								href={PATH_NAMES.ABOUT}
							>
								О нас
							</Link>
						</li>
					</ul>
					<div className={styles.dividerMobile} />
					<ul className={styles.listMobile}>
						<li>
							<Link
								style={{ transitionDelay: '0.3s' }}
								className={styles.linkMobile}
								href={PATH_NAMES.PROFILE}
							>
								<Icon name='profile' />
								Профиль
							</Link>
						</li>
						<li>
							<Link
								style={{ transitionDelay: '0.4s' }}
								className={styles.linkMobile}
								href={PATH_NAMES.FAVORITES}
							>
								<Icon name='like' /> Избранное
							</Link>
						</li>
						<li>
							<button
								style={{ transitionDelay: '0.5s' }}
								className={styles.linkMobile}
							>
								<Icon name='logout' />
								Выйти
							</button>
						</li>
					</ul>
				</Container>
			</nav>
		</div>
	)
}
