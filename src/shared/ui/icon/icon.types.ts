import { SVGProps } from "react"

export type IconType = 'cart' | 'like' | 'logout' | 'profile' | 'search'

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconType
}