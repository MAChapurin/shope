import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import { Container } from '@/shared/ui'
import { Footer, Header } from '@/widgets'
import { Toast } from '@/features/toast/ui/toast'

const dmSans = DM_Sans({
	variable: '--font-main',
	subsets: ['latin']
})

export const metadata: Metadata = {
	title: 'Магазин Shope',
	description: 'Лучшие украшения из драгоценных металлов'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={dmSans.className}>
				<Container>
					<Header />
					{children}
					<Footer />
					<Toast />
				</Container>
			</body>
		</html>
	)
}
