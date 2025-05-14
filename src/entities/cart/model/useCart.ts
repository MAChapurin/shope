'use client'

import { useSyncExternalStore } from 'react'
import { CartType } from '../types'



let cart: CartType = []
const subscribers: Set<() => void> = new Set()

const emitChange = () => {
  subscribers.forEach(callback => {
    callback()
  })
}

let serverSnapshot: [] | null = null

const cartStore = {
  getSnapshot: (): CartType => cart,

  getServerSnapshot: (): CartType => {
    if (serverSnapshot === null) {
      serverSnapshot = []
    }
    return serverSnapshot
  },

  subscribe(callback: () => void) {
    subscribers.add(callback)
    return () => subscribers.delete(callback)
  },

  addToCartBySku(sku: number) {
    console.log('before', cart)
    if (!cart.some(el => el.sku === sku)) {
      cart = [...cart, { sku, count: 1 }]
    }
    emitChange()
    console.log('after', cart)
  },

  removeFromCartBySku(sku: number) {
    cart = cart.filter(el => el.sku !== sku)
    emitChange()
  },

  isInCartBySku(sku: number): boolean {
    return cart.some(el => el.sku === sku)
  }
}

export const useCart = () => {
  const cartList = useSyncExternalStore(
    cartStore.subscribe,
    cartStore.getSnapshot,
    cartStore.getServerSnapshot
  )

  const { addToCartBySku, isInCartBySku, removeFromCartBySku } = cartStore

  return {
    addToCartBySku,
    cart: cartList,
    isInCartBySku,
    removeFromCartBySku
  }
}
