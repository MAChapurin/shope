'use client'

import { useEffect, useRef, useState } from 'react'
import { SETTING_HERO } from '../setting/setting'

export const useHero = () => {
	const [activeSlide, setActiveSlide] = useState(SETTING_HERO.data[0].id)

	const onClick = (tabId: number) => {
		if (document.startViewTransition) {
			document.startViewTransition(() => {
				setActiveSlide(tabId)
			})
		} else {
			setActiveSlide(tabId)
		}
	}

	const nextSlide = () => {
		if (document.startViewTransition) {
			document.startViewTransition(() => {
				setActiveSlide(prev =>
					prev === SETTING_HERO.data.length ? 1 : prev + 1
				)
			})
		} else {
			setActiveSlide(prev => (prev === SETTING_HERO.data.length ? 1 : prev + 1))
		}
	}

	const timerId = useRef<number | null>(null)

	const stopAnimation = () => {
		if (timerId.current) {
			clearInterval(timerId.current)
		}
	}

	const startAnimation = () => {
		stopAnimation()
		timerId.current = window.setInterval(nextSlide, SETTING_HERO.duration)
	}

	useEffect(() => {
		startAnimation()
		return () => {
			stopAnimation()
		}
	}, [])

	return {
		activeSlide,
		onClick,
		startAnimation,
		stopAnimation
	}
}
