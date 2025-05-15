import { ProductType } from "@/shared/types"

export interface AddToCartProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  product: ProductType
  className?: string
}
