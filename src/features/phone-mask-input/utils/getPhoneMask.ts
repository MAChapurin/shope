export const getPhoneMask = (
	value: string | number | readonly string[] | undefined
) => {
	if (typeof value === 'string') {
		let input = value.replace(/\D/g, '')
		if (input.length === 0) return ''
		if (input.length > 11) input = input.slice(0, 11)

		let formatted = ''

		if (input.startsWith('8')) {
			formatted = '+7 '
			input = input.slice(1)
		} else if (input.startsWith('7')) {
			formatted = '+7 '
			input = input.slice(1)
		} else {
			formatted = '+7 '
		}

		if (input.length > 0) {
			formatted += '(' + input.slice(0, 3)
		}
		if (input.length >= 4) {
			formatted += ') ' + input.slice(3, 6)
		}
		if (input.length >= 7) {
			formatted += '-' + input.slice(6, 8)
		}
		if (input.length >= 9) {
			formatted += '-' + input.slice(8, 10)
		}

		return formatted
	}
	return value
}
