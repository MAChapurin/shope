import { ProductType } from "@/shared/types"

export const getProducts = async () => {
  const data = await fetch(
    'https://purpleschool.ru/api-demo/products?limit=6&offset=0'
  )
  const { products }: { products: ProductType[] } = await data.json()
  return products
}

