const options: Intl.DateTimeFormatOptions = {
	year: 'numeric',
	month: 'long',
	day: 'numeric'
}

export function formatDate(date: Date) {
	let result = new Date(date)
	if (!(result instanceof Date) || isNaN(result.getTime())) {
		result = new Date()
	}

	return result.toLocaleDateString('ru-RU', options).replace('г.', '').trim()
}
