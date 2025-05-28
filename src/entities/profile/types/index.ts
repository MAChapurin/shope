import { ProductType } from '@/shared/types'

export type TypeUserData = {
	name: string
	email: string
	address: string
	password: string
	phone: string
}

export type OrderItem = Required<Pick<ProductType, 'name' | 'count' | 'price'>>

export type NewOrderType = {
	createdAt: string
	data: OrderItem[]
	id: number
	status: string
	userId: number
}
