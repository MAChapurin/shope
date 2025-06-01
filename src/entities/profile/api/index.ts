import { API_URLS } from '@/shared/settings'
import { TypeUserData } from '../types'
import { getToken } from '@/app/actions'

export const registerUser = async (data: TypeUserData) => {
	const request = await fetch(`${API_URLS.REGISTER}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})

	const res = await request.json()
	if (res.statusCode === 401) {
		throw Error(res.message)
	}
	return res.access_token
}

export const loginUser = async (
	data: Pick<TypeUserData, 'email' | 'password'>
) => {
	const request = await fetch(`${API_URLS.LOGIN}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	})

	const { access_token } = await request.json()
	return access_token
}

export const getProfile = async () => {
	const token = await getToken()
	const request = await fetch(API_URLS.PROFILE, {
		headers: {
			Authorization: `Bearer ${token}`
		}
	})

	const user = request.json()
	return user
}
