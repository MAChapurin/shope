import { API_URLS } from "@/shared/settings"

export async function getFilters<T>(): Promise<T> {
  const data = await fetch(
    API_URLS.FILTERS
  )
  const res = await data.json()
  return res
}