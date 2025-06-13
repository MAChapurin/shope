import { CUSTOM_EVENTS, PATH_NAMES } from '@/shared/settings'
import { usePathname } from 'next/navigation'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { LINK_NAMES } from '../constants'
import { useClickOutside } from '@/shared/hooks'
import { emitter } from '@/shared/lib'

export const useProfileNavigation = () => {
	const pathname = usePathname()

	const isOrdersPage =
		pathname === PATH_NAMES.PROFILE_HISTORY || pathname === PATH_NAMES.PROFILE

	const isCurrentOrderPage = pathname === PATH_NAMES.PROFILE_ORDER
	const isUserPage = pathname === PATH_NAMES.PROFILE_USER

	const ref = useRef<HTMLDivElement>(null!)
	const [dropdownValue, setDropdownValue] = useState<
		(typeof LINK_NAMES)[keyof typeof LINK_NAMES]
	>(LINK_NAMES.HISTORY)
	const [isOpen, setIsOpen] = useState(false)
	const onToogle = () => {
		setIsOpen(prev => !prev)
	}

	const onClose = () => {
		setIsOpen(false)
	}

	useClickOutside(ref, onClose)

	useLayoutEffect(() => {
		if (isOrdersPage) {
			setDropdownValue(LINK_NAMES.HISTORY)
		}
		if (isCurrentOrderPage) {
			setDropdownValue(LINK_NAMES.CURRENT_ORDER)
		}
		if (isUserPage) {
			setDropdownValue(LINK_NAMES.PROFILE)
		}
	}, [pathname])

	useEffect(() => {
		const unsubscribe = emitter.subscribe(CUSTOM_EVENTS.CLOSE_DROPDOWN, onClose)
		return () => {
			unsubscribe()
		}
	}, [])

	useEffect(() => {
		emitter.emit(CUSTOM_EVENTS.CLOSE_DROPDOWN)
	}, [pathname])

	return {
		isCurrentOrderPage,
		isOrdersPage,
		isUserPage,
		dropdownValue,
		isOpen,
		onToogle,
		ref
	}
}
