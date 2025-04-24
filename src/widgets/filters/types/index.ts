export type CategoryType = {
  id: number,
  name: string
}

export type FiltersType = {
  categories: CategoryType[]
  maxPrice: number
  minPrice: number
}