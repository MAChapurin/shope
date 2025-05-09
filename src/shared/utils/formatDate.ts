const options: Intl.DateTimeFormatOptions = {
	year: 'numeric',
	month: 'long',
	day: 'numeric'
}

/**
 * Formats a date into text representation.
 * @param {string} date - The date to be formatted.
 * @returns {string} Text representation of the date in the format "day month year".
 *
 * @example
 * const date = new Date('2023-05-10T00:00:00.000Z');
 * console.log(formatDate(date)); // "10 мая 2023 г."
 */
export function formatDate(date: Date) {
	let result = new Date(date)
	if (!(result instanceof Date) || isNaN(result.getTime())) {
		result = new Date()
	}

	return result.toLocaleDateString('ru-RU', options).replace('г.', '').trim()
}
