'use client'
import { emitter } from '@/shared/lib'
import { CUSTOM_EVENTS, PATH_NAMES } from '@/shared/settings'
import { Icon } from '@/shared/ui'
import Link from 'next/link'
import { useEffect } from 'react'
import { NewOrderType } from '../types'
import { useNewOrder } from '../model/useOrder'
import { useProfile } from '../model/useProfile'
import { getFirstLetter } from '@/shared/utils'

import styles from './styles.module.css'

export const Avatar = () => {
	const { setNewOrder } = useNewOrder()
	const { user } = useProfile()
	useEffect(() => {
		const unsubscribe = emitter.subscribe(
			CUSTOM_EVENTS.ADD_ORDER,
			(newOrder: NewOrderType) => {
				setNewOrder(newOrder)
			}
		)
		return () => {
			unsubscribe()
		}
	}, [setNewOrder])
	return (
		<Link className={styles.avatar} href={PATH_NAMES.PROFILE}>
			{user ? getFirstLetter(user.name) : <Icon name='profile' />}
		</Link>
	)
}
