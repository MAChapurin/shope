import { ProductType } from '@/shared/types'

export type TypeUserData = {
	email: string
	password: string
	password_repeat?: string
	name?: string
	address?: string
	phone?: string
}

export type OrderItem = Required<Pick<ProductType, 'name' | 'count' | 'price'>>

export type NewOrderType = {
	createdAt: string
	data: OrderItem[]
	id: number
	status: string
	userId: number
}
