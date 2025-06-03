'use client'
import { useRouter } from 'next/navigation'
import { deleteToken } from '@/app/actions'
import { PATH_NAMES } from '@/shared/settings'
import { useState } from 'react'
import { useProfile } from '@/entities'

export const useLogout = () => {
	const [isDisabled, setIsDisabled] = useState(false)

	const router = useRouter()
	const { logout } = useProfile()

	const onClick = () => {
		setIsDisabled(true)
		deleteToken()
			.then(() => {
				logout()
				router.push(PATH_NAMES.LOGIN)
			})
			.finally(() => setIsDisabled(false))
	}

	return { onClick, isDisabled }
}
