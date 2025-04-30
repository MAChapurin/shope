import { SVGProps } from "react"

export type IconType = 'arrow' | 'cart' | 'dropdown' | 'eye' | 'facebook' | 'filters' | 'in' | 'instagram' | 'like' | 'logout' | 'profile' | 'search' | 'star' | 'success' | 'twitter'

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconType
}