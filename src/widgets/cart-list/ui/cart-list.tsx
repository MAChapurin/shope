'use client'

import { useCart } from '@/entities/cart'
import Image from 'next/image'
import { cn } from '@/shared/lib'
import { ClickLimiter, Icon, Paragraph, Title } from '@/shared/ui'
import { CartCounter, CartCounterDropdown } from '@/features'

import Link from 'next/link'
import { PATH_NAMES } from '@/shared/settings'

import styles from './styles.module.css'

export const CartList = () => {
	const { cart, removeFromCartBySku } = useCart()
	return (
		<ul className={styles.cart}>
			{cart.map(el => (
				<li className={styles.cart__item} key={el.sku}>
					<Link
						href={PATH_NAMES.CATALOG + '/' + el.sku}
						className={cn(styles.cart__link, styles.link)}
					>
						<div className={styles.link__left}>
							<Image
								src={el.images[0]}
								width={136}
								height={136}
								alt={el.description}
								title={el.name}
							/>
						</div>
						<div className={styles.link__right}>
							<Title>{el.name}</Title>
							<Paragraph color='primary'>$ {el.price}</Paragraph>
							<ClickLimiter className={styles.link__counter}>
								{/* <CartCounter sku={el.sku} /> */}
								<CartCounterDropdown sku={el.sku} />
							</ClickLimiter>
						</div>
					</Link>
					<div className={styles.cart__actions}>
						<CartCounter sku={el.sku} className={styles.cart__counter} />
						<button
							onClick={() => removeFromCartBySku(el.sku)}
							className={styles.cart__delete}
						>
							<Icon name='close' />
						</button>
					</div>
				</li>
			))}
		</ul>
	)
}
