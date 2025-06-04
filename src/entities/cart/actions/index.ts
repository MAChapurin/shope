'use server'

import { ACCESS_TOKEN } from "@/shared/constants"
import { cookies } from "next/headers"

export async function getAccessToken() {
  const cookieStore = await cookies()
  const token = cookieStore.get(ACCESS_TOKEN)
  return token?.value
}