'use client'
import { useRouter } from 'next/navigation'
import { deleteToken } from '@/app/actions'
import { PATH_NAMES } from '@/shared/settings'
import { useState } from 'react'

export const useLogout = () => {
	const [isDisabled, setIsDisabled] = useState(false)
	const router = useRouter()
	const onClick = () => {
		setIsDisabled(true)
		deleteToken()
			.then(() => {
				router.push(PATH_NAMES.LOGIN)
			})
			.finally(() => setIsDisabled(false))
	}

	return { onClick, isDisabled }
}
