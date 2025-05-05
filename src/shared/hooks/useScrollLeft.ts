'use client'
import { RefObject, useEffect, useState } from "react";

export const useScrollLeft = (ref: RefObject<HTMLElement>) => {
  const [] = useState(ref.current?.scrollLeft || 0)
  useEffect(() => {

  }, [])
}