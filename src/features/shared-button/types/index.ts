export interface SharedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
}

export enum PLATFORM {
  FACEBOOK = 'facebook',
  TWITTER = 'twitter',
  MAIL = 'mail',
  INSTAGRAM = 'instagram'
}