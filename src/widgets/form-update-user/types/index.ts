import { TypeUserData } from '@/entities'
import { INPUT_NAMES } from '@/shared/settings'
import { HTMLAttributes } from 'react'

export type EditFieldNameType =
	| INPUT_NAMES.NAME
	| INPUT_NAMES.EMAIL
	| INPUT_NAMES.PHONE
	| INPUT_NAMES.ADDRESS

export interface FormUpdateUserProps extends HTMLAttributes<HTMLFormElement> {
	user: TypeUserData
}
