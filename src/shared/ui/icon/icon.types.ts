import { SVGProps } from "react"

export type IconType = 'arrow' | 'cart' | 'facebook' | 'in' | 'instagram' | 'like' | 'logout' | 'profile' | 'search' | 'twitter'

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconType
}