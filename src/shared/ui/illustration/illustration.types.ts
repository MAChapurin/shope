import { SVGProps } from 'react'

export type IllustrationType = 'hand'

export interface IllustrationProps extends SVGProps<SVGSVGElement> {
	name: IllustrationType
}
