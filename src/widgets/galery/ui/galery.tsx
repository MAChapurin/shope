'use client'
import { FC, UIEvent, useEffect, useRef, useState } from 'react'
import { GalleryProps } from '../types'
import { Swiper } from './swiper'
import styles from './styles.module.css'
import Image from 'next/image'
import { cn } from '@/shared/lib'
import { useGalery } from '../model/useGalery'

export const Galery: FC<GalleryProps> = ({ images }) => {
	const {
		activeSlideIndex,
		setActiveSlideIndex,
		listRef,
		swiperRef,
		onScroll
	} = useGalery()
	return (
		<div className={styles.galery}>
			<div className={styles.galery__sidebar}>
				{images.map((image, index) => {
					return (
						<button
							className={cn(styles.galery__button, {
								[styles['galery__button--active']]: activeSlideIndex === index
							})}
							key={index}
							onClick={() => {
								setActiveSlideIndex(index)
							}}
						>
							<Image
								className={styles['galery__button-img']}
								alt=''
								src={image}
								width={120}
								height={120}
							/>
						</button>
					)
				})}
			</div>
			<div className={styles.galery__window}>
				<Swiper
					swiperRef={swiperRef}
					listRef={listRef}
					images={images}
					onScroll={onScroll}
				/>
			</div>
		</div>
	)
}
