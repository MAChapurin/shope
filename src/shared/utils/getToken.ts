import { STORAGE_KEYS } from '../settings'

export const getToken = () => {
	return localStorage.getItem(STORAGE_KEYS.TOKEN)
}
