import { PATH_NAMES } from "@/shared/settings"
import { useRouter } from "next/navigation"

export const useButtonDetail = (sku: number) => {
  const router = useRouter()
  const onClick = () => { router.push(PATH_NAMES.CATALOG + '/' + sku) }
  return onClick
}