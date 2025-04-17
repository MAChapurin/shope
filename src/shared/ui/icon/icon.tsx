import { FC } from 'react'
import { IconProps } from './icon.types'
import {
	CartIcon,
	LikeIcon,
	LogoutIcon,
	ProfileIcon,
	SearchIcon
} from './icons'

const config = {
	cart: CartIcon,
	like: LikeIcon,
	logout: LogoutIcon,
	profile: ProfileIcon,
	search: SearchIcon
}

export const Icon: FC<IconProps> = ({ name, ...props }) => {
	const SVGIcon = config[name]
	return <SVGIcon {...props} />
}
