import { RefObject } from "react"

export interface GalleryProps {
  images: string[]
  className?: string
  name: string
}

export interface SwiperProps extends React.HTMLAttributes<HTMLDivElement> {
  listRef: RefObject<HTMLUListElement | null>
  swiperRef: RefObject<HTMLDivElement | null>
  images: string[]
  className?: string
  name: string
}