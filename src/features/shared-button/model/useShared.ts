'use client'

import { MouseEvent } from 'react'
import { PLATFORM } from '../types'
import { SHARED_TEXT } from '../constants'

export const useShared = () => {
	const title = SHARED_TEXT.TITLE
	const handleShare = (platform: string) => {
		let shareUrl = ''
		const url = window.location?.href
		switch (platform) {
			case PLATFORM.FACEBOOK:
				shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
				break
			case PLATFORM.TWITTER:
				shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
				break
			case PLATFORM.MAIL:
				shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`
				break
			case PLATFORM.INSTAGRAM:
				alert(SHARED_TEXT.INSTAGRAM)
				return
			default:
				return
		}

		window.open(shareUrl, '_blank')
	}

	const onClick = (e: MouseEvent<HTMLDivElement>) => {
		const target = (e.target as HTMLElement).closest('button')
		if (target instanceof HTMLButtonElement) {
			const dataValue = target.dataset.value || ''
			console.log(dataValue)
			handleShare(dataValue)
		}
	}
	return {
		onClick
	}
}
