import { cookies } from 'next/headers'

export default async function CookiePage() {
	const cookieStore = await cookies()
	return (
		<div>
			<h1>Cookie test page</h1>
			{cookieStore.getAll().map(cookie => (
				<div key={cookie.name}>
					<p>Name: {cookie.name}</p>
					<p>Value: {cookie.value}</p>
				</div>
			))}
		</div>
	)
}
