import { Dispatch, SetStateAction } from 'react'

export interface RatingProps {
	value: number
	className?: string
}

export interface RatingInputProps {
	rating: number
	setRating: Dispatch<SetStateAction<number>>
	errorMessage: string
	errorValueHandler: (value: string) => void
}
