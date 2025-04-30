import { FC } from 'react'
import { IconProps } from './icon.types'
import {
	ArrowDropdownIcon,
	ArrowIcon,
	CartIcon,
	EyeIcon,
	FacebookIcon,
	FilterIcon,
	InIcon,
	InstagramIcon,
	LikeIcon,
	LogoutIcon,
	ProfileIcon,
	SearchIcon,
	StarIcon,
	SuccessIcon,
	TwitterIcon
} from './icons'

const config = {
	arrow: ArrowIcon,
	cart: CartIcon,
	dropdown: ArrowDropdownIcon,
	eye: EyeIcon,
	facebook: FacebookIcon,
	filters: FilterIcon,
	in: InIcon,
	instagram: InstagramIcon,
	like: LikeIcon,
	logout: LogoutIcon,
	profile: ProfileIcon,
	search: SearchIcon,
	star: StarIcon,
	success: SuccessIcon,
	twitter: TwitterIcon
}

export const Icon: FC<IconProps> = ({ name, ...props }) => {
	const SVGIcon = config[name]
	return <SVGIcon {...props} />
}
