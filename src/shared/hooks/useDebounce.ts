import { useRef } from 'react'
import { DEBOUNCE_DELAY } from '../constants'

interface DebouncedFunction {
	(...args: unknown[]): void
	cancel?: () => void
}

export function useDebounce<Func extends (...args: unknown[]) => void>(
	func: Func,
	wait: number = DEBOUNCE_DELAY
): DebouncedFunction {
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

	const debouncedFunction = (...args: Parameters<Func>) => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current)
		}
		timeoutRef.current = setTimeout(() => {
			func(...args)
		}, wait)
	}

	debouncedFunction.cancel = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current)
		}
	}

	return debouncedFunction as DebouncedFunction
}
