import { FC } from 'react'
import { IconProps } from './icon.types'
import {
	ArrowDropdownIcon,
	ArrowIcon,
	CartIcon,
	CloseIcon,
	EyeIcon,
	FacebookIcon,
	FilterIcon,
	InIcon,
	InstagramIcon,
	LikeFilledIcon,
	LikeIcon,
	MailIcon,
	LogoutIcon,
	ProfileIcon,
	SearchIcon,
	SharedIcon,
	StarIcon,
	SuccessIcon,
	TwitterIcon
} from './icons'

const config = {
	arrow: ArrowIcon,
	cart: CartIcon,
	close: CloseIcon,
	dropdown: ArrowDropdownIcon,
	eye: EyeIcon,
	facebook: FacebookIcon,
	filters: FilterIcon,
	in: InIcon,
	instagram: InstagramIcon,
	likeFilled: LikeFilledIcon,
	like: LikeIcon,
	logout: LogoutIcon,
	mail: MailIcon,
	profile: ProfileIcon,
	search: SearchIcon,
	shared: SharedIcon,
	star: StarIcon,
	success: SuccessIcon,
	twitter: TwitterIcon
}

export const Icon: FC<IconProps> = ({ name, ...props }) => {
	const SVGIcon = config[name]
	return <SVGIcon {...props} />
}
