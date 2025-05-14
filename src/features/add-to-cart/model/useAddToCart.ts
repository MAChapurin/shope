import { CART_MESSAGES, useCart } from "@/entities/cart"
import { emitter } from "@/shared/lib"
import { CUSTOM_EVENTS } from "@/shared/settings"

export const useAddToCart = (sku: number) => {
  const { addToCartBySku, cart, removeFromCartBySku, isInCartBySku } = useCart()

  const isAdded = isInCartBySku(sku)

  const onClick = () => {
    if (isAdded) {
      removeFromCartBySku(sku)
      emitter.emit(CUSTOM_EVENTS.ADD_TOST, CART_MESSAGES.DELETED)
    } else {
      addToCartBySku(sku)
      emitter.emit(CUSTOM_EVENTS.ADD_TOST, CART_MESSAGES.ADDED)
    }
  }


  return { onClick, isAdded }
}