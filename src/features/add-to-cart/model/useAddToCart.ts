import { CART_MESSAGES, useCart } from '@/entities/cart'
import { emitter } from '@/shared/lib'
import { CUSTOM_EVENTS } from '@/shared/settings'
import { ProductType } from '@/shared/types'

export const useAddToCart = (product: ProductType) => {
  const { addToCartBySku, removeFromCartBySku, isInCartBySku } = useCart()

  const isAdded = isInCartBySku(product.sku)

  const onClick = () => {
    if (isAdded) {
      removeFromCartBySku(product.sku)
      emitter.emit(CUSTOM_EVENTS.ADD_TOST, CART_MESSAGES.DELETED)
    } else {
      addToCartBySku(product)
      emitter.emit(CUSTOM_EVENTS.ADD_TOST, CART_MESSAGES.ADDED)
    }
  }

  return { onClick, isAdded }
}
