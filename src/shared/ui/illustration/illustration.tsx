import { FC } from 'react'
import { IllustrationProps } from './illustration.types'
import { Hand } from './illustrations'

const config = {
	hand: Hand
}

export const Illustration: FC<IllustrationProps> = ({ name, ...props }) => {
	const SVGIllustration = config[name]
	return <SVGIllustration {...props} />
}
