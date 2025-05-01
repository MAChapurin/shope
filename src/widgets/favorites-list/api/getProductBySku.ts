import { API_URLS } from "@/shared/settings"
import { ProductType } from "@/shared/types"

export const getProductBySku = async (sku: number) => {
  const data = await fetch(API_URLS.PRODUCT_SKU + sku)
  const product: ProductType = await data.json()
  return product
}