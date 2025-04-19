'use client'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/shared/lib'
import { Title } from '@/shared/ui'
import { useHero } from '../model/useHero'
import { SETTING_HERO } from '../setting/setting'

import styles from './styles.module.css'

export const Hero = () => {
	const { activeSlide, onClick, startAnimation, stopAnimation } = useHero()
	return (
		<div
			className={styles.hero}
			onMouseOver={stopAnimation}
			onMouseLeave={startAnimation}
		>
			<div className={styles.pagination}>
				{SETTING_HERO.data.map(slide => (
					<button
						key={slide.id}
						className={styles.pagination__button}
						onClick={() => onClick(slide.id)}
					>
						<div
							className={cn(styles.pagination__point, {
								[styles['pagination__point--active']]: slide.id === activeSlide
							})}
						/>
					</button>
				))}
			</div>
			<div className={styles.content}>
				{SETTING_HERO.data.map(
					slide =>
						slide.id === activeSlide && (
							<div key={slide.id} className={styles.content__container}>
								<div className={styles.content__info}>
									<Title className={styles.content__title} size='xl'>
										{slide.content}
									</Title>
									<p className={styles.content__price}>
										$ {slide.price.toFixed(2)}
									</p>
									<Link className={styles.content__link} href={'/'}>
										Смотреть
									</Link>
								</div>

								<Image
									className={styles.content__img}
									width={670}
									height={300}
									src={slide.img}
									alt='Изображение руки с бусами'
									title='Тренды в украшениях'
								/>
							</div>
						)
				)}
			</div>
		</div>
	)
}
