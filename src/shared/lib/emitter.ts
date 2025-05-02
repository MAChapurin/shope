type EventCallback<T> = (data: T) => void

export class EventEmitter {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private events: { [key: string]: EventCallback<any>[] } = {}

	emit<T>(eventName: string, data?: T): void {
		const event = this.events[eventName]
		if (event) {
			event.forEach(fn => {
				fn.call(null, data)
			})
		}
	}

	subscribe<T>(eventName: string, fn: EventCallback<T>): () => void {
		if (!this.events[eventName]) {
			this.events[eventName] = []
		}

		this.events[eventName].push(fn)
		return () => {
			this.events[eventName] = this.events[eventName].filter(
				eventFn => fn !== eventFn
			)
		}
	}
}

export const emitter = new EventEmitter()
