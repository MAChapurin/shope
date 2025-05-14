import { SVGProps } from 'react'

export type IconType =
	| 'arrow'
	| 'cart'
	| 'close'
	| 'dropdown'
	| 'eye'
	| 'facebook'
	| 'filters'
	| 'in'
	| 'instagram'
	| 'likeFilled'
	| 'like'
	| 'logout'
	| 'mail'
	| 'profile'
	| 'search'
	| 'shared'
	| 'star'
	| 'success'
	| 'twitter'

export interface IconProps extends SVGProps<SVGSVGElement> {
	name: IconType
}
