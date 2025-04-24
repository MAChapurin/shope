export async function getFilters<T>(): Promise<T> {
  const data = await fetch(
    `https://purpleschool.ru/api-demo/products/get-filter`
  )
  const res = await data.json()
  return res
}