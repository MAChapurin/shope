'use client'
import { useLogout } from '../model/useLogout'

export const LogoutButton = ({ className }: { className?: string }) => {
	const { onClick, isDisabled } = useLogout()
	return (
		<button className={className} disabled={isDisabled} onClick={onClick}>
			Выйти
		</button>
	)
}
