'use client'
import { PATH_NAMES } from '@/shared/settings'
import { Icon } from '@/shared/ui'
import { cn } from '@/shared/lib'
import Link from 'next/link'
import { useMobileNavigation } from '../model/useMobileNavigation'
import { LikeLinkIndicator } from '@/features'
import styles from './styles.module.css'

export const NavigationMobile = () => {
	const { isOpen, ref } = useMobileNavigation()

	return (
		<div className={styles.containerMobile}>
			<nav
				className={cn(styles.navMobile, {
					[styles.mobileMenuOpen]: isOpen
				})}
				aria-label='Мобильное меню навигации'
			>
				<div ref={ref}>
					<ul className={styles.listMobile}>
						<li>
							<Link
								style={{ transitionDelay: '0.13s' }}
								className={styles.linkMobile}
								href={PATH_NAMES.MAIN}
								title='Перейти на главную страницу'
							>
								Главная
							</Link>
						</li>
						<li>
							<Link
								style={{ transitionDelay: '0.17s' }}
								className={styles.linkMobile}
								href={PATH_NAMES.CATALOG}
								title='Перейти в магазин'
							>
								Магазин
							</Link>
						</li>
						<li>
							<Link
								style={{ transitionDelay: '0.2s' }}
								className={styles.linkMobile}
								href={PATH_NAMES.ABOUT}
								title='Узнать о нас'
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
								title='Перейти в профиль'
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
								title='Перейти в избранное'
							>
								<LikeLinkIndicator As='div' /> Избранное
							</Link>
						</li>
						<li>
							<button
								style={{ transitionDelay: '0.3s' }}
								className={styles.linkMobile}
								aria-label='Выйти из аккаунта'
							>
								<Icon name='logout' />
								Выйти
							</button>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	)
}
