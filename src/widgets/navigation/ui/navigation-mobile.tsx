'use client'
import { PATH_NAMES } from '@/shared/settings'
import { Container, Icon } from '@/shared/ui'
import { cn } from '@/shared/lib'
import Link from 'next/link'

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
								style={{ transitionDelay: '0.13s' }}
								className={styles.linkMobile}
								href={PATH_NAMES.MAIN}
							>
								Главная
							</Link>
						</li>
						<li>
							<Link
								style={{ transitionDelay: '0.17s' }}
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
								style={{ transitionDelay: '0.23s' }}
								className={styles.linkMobile}
								href={PATH_NAMES.PROFILE}
							>
								<Icon name='profile' />
								Профиль
							</Link>
						</li>
						<li>
							<Link
								style={{ transitionDelay: '0.27s' }}
								className={styles.linkMobile}
								href={PATH_NAMES.FAVORITES}
							>
								<Icon name='like' /> Избранное
							</Link>
						</li>
						<li>
							<button
								style={{ transitionDelay: '0.3s' }}
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
