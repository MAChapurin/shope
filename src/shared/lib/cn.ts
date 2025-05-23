const checkNullString = (str: string) => {
	return !['undefined', 'null'].some(el => el === str)
}

export const cn = (
	...classNames: (string | undefined | { [key: string]: boolean } | string[])[]
): string => {
	const classList = [...classNames]
		.map(item => {
			if (!item || typeof item !== 'object') {
				return item
			} else {
				if (!Array.isArray(item)) {
					let row = ''
					Object.entries(item).forEach(el => {
						if (el[1] && checkNullString(el[0])) row += ` ${el[0]}`
					})

					return row.trim()
				} else {
					return item.join(' ').replace(/\s+/, ' ').trim()
				}
			}
		})
		.filter(
			item => typeof item === 'string' && item.trim() && checkNullString(item)
		)

	return classList.join(' ')
}
