import { ProductType } from '@/shared/types'

export interface CartItem extends ProductType {
	count: number
}

export type CartType = CartItem[]

export type OrderItem = Pick<ProductType, 'name' | 'count' | 'price'>

export type OrderType = {
	items: OrderItem[]
}

export type NewOrderType = {
	createdAt: string
	data: OrderItem[]
	id: number
	status: string
	userId: number
}
