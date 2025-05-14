import { HTMLAttributes, ReactNode } from 'react'

export interface TabButtonProps extends HTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	className?: string
	tabId: string
}

export interface TabControlsProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	className?: string
}

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	className?: string
	tabId: string
}

export interface TabContentProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	className?: string
}
