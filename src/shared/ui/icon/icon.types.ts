import { SVGProps } from "react"

export type IconType = 'arrow' | 'cart' | 'dropdown' | 'facebook' | 'in' | 'instagram' | 'like' | 'logout' | 'profile' | 'search' | 'success' | 'twitter'

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconType
}