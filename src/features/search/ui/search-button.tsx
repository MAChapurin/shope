'use client'

import { emitter } from '@/shared/lib'
import { CUSTOM_EVENTS } from '@/shared/settings'
import { Button, Icon } from '@/shared/ui'

import styles from './styles.module.css'

export const SearchButtonOpen = () => {
	const onClick = () => emitter.emit(CUSTOM_EVENTS.OPEN_SEARCH)
	return (
		<Button className={styles.openSearch} onClick={onClick} variant='filled'>
			Поиск <Icon name='search' />
		</Button>
	)
}
