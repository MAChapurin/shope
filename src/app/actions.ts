'use server'

import { ACCESS_TOKEN } from '@/shared/constants'
import { cookies } from 'next/headers'

export async function createToken(token: string) {
	const cookieStore = await cookies()
	cookieStore.set(ACCESS_TOKEN, token)
}

export async function getToken() {
	const cookieStore = await cookies()
	const token = cookieStore.get(ACCESS_TOKEN)
	return token?.value
}

export async function deleteToken() {
	;(await cookies()).set(ACCESS_TOKEN, '', { maxAge: 0 })
}
