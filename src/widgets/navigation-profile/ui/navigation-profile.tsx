'use client'

import { useResizeWidth } from '@/shared/hooks'

import { BREAKPOINT_MOBILE_BORDER_TOP } from '../constants'
import { NavigationProfileMobile } from './navigation-profile-dropdown'
import { NavigationProfileDesktop } from './navigation-profile-desktop'
import { NavigationProfileLoader } from './loader'

export const NavigationProfile = () => {
	const width = useResizeWidth()
	if (width === 0) {
		return <NavigationProfileLoader />
	}
	if (width < BREAKPOINT_MOBILE_BORDER_TOP) {
		return <NavigationProfileMobile />
	}
	return <NavigationProfileDesktop />
}
