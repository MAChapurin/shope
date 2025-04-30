import { ReactNode } from "react"

export interface ProductCardInterface {
  name: string
  price: number,
  discount: number,
  images: string[],
  actions?: ReactNode,
  sku: number
}
