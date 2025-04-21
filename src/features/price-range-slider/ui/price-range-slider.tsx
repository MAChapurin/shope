'use client'

import { useSlider } from '../model/useSlider'

import { cn } from '@/shared/lib'
import styles from './styles.module.css'

export const PriceRangeSlider = () => {
	const {
		min,
		max,
		minValue,
		minValueRef,
		maxValue,
		maxValueRef,
		rangeRef,
		onChangeLeft,
		onChangeRight
	} = useSlider()

	return (
		<div className={styles.container}>
			<input
				aria-label='Изменить минимальную цену'
				type='range'
				min={min}
				max={max}
				value={minValue}
				ref={minValueRef}
				onChange={onChangeLeft}
				className={cn(styles.thumb, styles['thumb--zindex-3'], {
					[styles['thumb--zindex-5']]: minValue > max - 100
				})}
			/>
			<input
				aria-label='Изменить максимальную цену'
				type='range'
				min={min}
				max={max}
				value={maxValue}
				ref={maxValueRef}
				onChange={onChangeRight}
				className={cn(styles.thumb, styles['thumb--zindex-4'])}
			/>

			<div className={styles.slider}>
				<div className={styles.slider__track} />
				<div ref={rangeRef} className={styles.slider__range} />
				<div className={styles['slider__left-value']}>
					Цена ${minValue} - ${maxValue}
				</div>
			</div>
		</div>
	)
}
