'use server'

import { ACCESS_TOKEN } from '@/shared/constants'
import { cookies } from 'next/headers'

export async function saveToken(token: string, isSave: boolean = false) {
	const cookieStore = await cookies()
	const maxAge = isSave
		? 30 * 24 * 60 * 60 // месяц
		: 30 * 60 // 30 минут
	cookieStore.set(ACCESS_TOKEN, token, { maxAge })
}

export async function getToken() {
	const cookieStore = await cookies()
	const token = cookieStore.get(ACCESS_TOKEN)
	return token?.value
}

export async function deleteToken() {
	;(await cookies()).set(ACCESS_TOKEN, '', { maxAge: 0 })
}
