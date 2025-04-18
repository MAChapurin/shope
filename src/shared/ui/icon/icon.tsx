import { FC } from 'react'
import { IconProps } from './icon.types'
import {
	ArrowIcon,
	CartIcon,
	FacebookIcon,
	InIcon,
	InstagramIcon,
	LikeIcon,
	LogoutIcon,
	ProfileIcon,
	SearchIcon,
	SuccessIcon,
	TwitterIcon
} from './icons'

const config = {
	arrow: ArrowIcon,
	cart: CartIcon,
	facebook: FacebookIcon,
	in: InIcon,
	instagram: InstagramIcon,
	like: LikeIcon,
	logout: LogoutIcon,
	profile: ProfileIcon,
	search: SearchIcon,
	success: SuccessIcon,
	twitter: TwitterIcon
}

export const Icon: FC<IconProps> = ({ name, ...props }) => {
	const SVGIcon = config[name]
	return <SVGIcon {...props} />
}
