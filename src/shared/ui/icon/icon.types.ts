import { SVGProps } from "react"

export type IconType = 'cart' | 'like' | 'profile' | 'search'

export interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconType
}