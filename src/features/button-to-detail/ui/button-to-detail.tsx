'use client'

import { Icon } from '@/shared/ui'
import { ButtonToDetailProps } from '../types'
import { useButtonDetail } from '../model/useButtonDetail'

export const ButtonToDetail = ({ sku }: ButtonToDetailProps) => {
	const onClick = useButtonDetail(sku)
	return (
		<button onClick={onClick}>
			<Icon name='eye' />
		</button>
	)
}
