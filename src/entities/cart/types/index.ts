import { ProductType } from '@/shared/types'

export interface CartItem extends ProductType {
	count: number
}

export type CartType = CartItem[]
