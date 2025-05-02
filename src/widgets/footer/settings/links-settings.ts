import { PATH_NAMES } from '@/shared/settings'
import { IconType } from '@/shared/ui/icon/icon.types'

export const FOOTER_NAV_LINKS = [
	{
		href: PATH_NAMES.CONTACTS,
		text: 'КОНТАКТЫ'
	},
	{
		href: PATH_NAMES.TERMS,
		text: 'УСЛОВИЯ ПОКУПКИ'
	},
	{
		href: PATH_NAMES.DELIVERY,
		text: 'ДОСТАВКА И ВОЗВРАТ'
	}
]

export const FOOTER_SOCIALS_LINKS: { href: string; icon: IconType }[] = [
	{
		href: PATH_NAMES.MAIN,
		icon: 'in'
	},
	{
		href: PATH_NAMES.MAIN,
		icon: 'facebook'
	},
	{
		href: PATH_NAMES.MAIN,
		icon: 'instagram'
	},
	{
		href: PATH_NAMES.MAIN,
		icon: 'twitter'
	}
]
