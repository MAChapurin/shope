import {
	DetailedHTMLProps,
	Dispatch,
	InputHTMLAttributes,
	SetStateAction
} from 'react'

export type SetValueType = Dispatch<SetStateAction<string>>

export interface AddressAutoCompleteProps
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	value: string
	setValue: SetValueType
	className?: string
	errorMessage?: string
}

export interface Place {
	place_id: string
	display_name: string
}

export interface AddressDropdownProps {
	suggestions: Place[]
	isLoading: boolean
	onClick: (place: Place) => void
	isOpen: boolean
}
