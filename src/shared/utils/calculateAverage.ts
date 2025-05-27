export function calculateAverage(numbers: number[]): number {
	if (!Array.isArray(numbers)) {
		throw new Error('Input must be an array')
	}

	if (numbers.length === 0) {
		throw new Error('Array must not be empty')
	}

	for (const num of numbers) {
		if (typeof num !== 'number') {
			throw new Error('All elements in the array must be numbers')
		}
	}

	const sum = numbers.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		0
	)
	return sum / numbers.length
}
