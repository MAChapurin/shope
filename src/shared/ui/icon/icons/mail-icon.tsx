import { FC, SVGProps } from 'react'

export const MailIcon: FC<SVGProps<SVGSVGElement>> = props => {
	return (
		<svg
			aria-hidden={true}
			width='22'
			height='18'
			viewBox='0 0 22 18'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			{...props}
		>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M19.125 0.946594H2.125C0.951395 0.946594 0 1.84796 0 2.95985V15.0394C0 16.1513 0.951395 17.0527 2.125 17.0527H19.125C20.2986 17.0527 21.25 16.1513 21.25 15.0394V2.95985C21.25 1.84796 20.2986 0.946594 19.125 0.946594ZM19.125 2.96063V5.87985L11.3156 11.064C10.9003 11.3371 10.3497 11.3371 9.93437 11.064L2.125 5.87985V2.96063H19.125ZM2.125 7.99377V15.0402H19.125V7.99377L12.3781 12.4632C11.3252 13.1605 9.92476 13.1605 8.87187 12.4632L2.125 7.99377Z'
				fill='currentColor'
			/>
		</svg>
	)
}
