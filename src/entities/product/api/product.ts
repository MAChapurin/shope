import { getSlugFromString } from "@/shared/utils";
import { ProductCardInterface } from "../types/product.types";

export const products: ProductCardInterface[] = [
  {
    id: getSlugFromString('Lira Earrings'),
    img: '/product-01.webp',
    price: 20,
    title: 'Lira Earrings'
  },
  {
    id: getSlugFromString('Hal Earrings'),
    img: '/product-02.webp',
    price: 25,
    title: 'Hal Earrings'
  },
  {
    id: getSlugFromString('Kaede Hair Pin Set Of 3 '),
    img: '/product-03.webp',
    price: 30,
    title: 'Kaede Hair Pin Set Of 3 '
  },
  {
    id: getSlugFromString('Hair Pin Set of 3'),
    img: '/product-04.webp',
    price: 30,
    title: 'Hair Pin Set of 3'
  },
  {
    id: getSlugFromString('Plaine Necklace'),
    img: '/product-05.webp',
    price: 19,
    title: 'Plaine Necklace'
  },
  {
    id: getSlugFromString('Yuki Hair Pin Set of 3'),
    img: '/product-06.webp',
    price: 29,
    title: 'Yuki Hair Pin Set of 3'
  }
]