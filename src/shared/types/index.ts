export type ProductType = {
  categoryId: number,
  description: string,
  discount: number
  images: string[]
  name: string
  price: number,
  reviews: ReviewType[],
  sku: number
}

export type ReviewType = {
  date: string,
  description: string,
  name: string,
  rating: number
}