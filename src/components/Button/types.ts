export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'
export type ButtonSize = 'large' | 'default' | 'small'
export type NativeType = 'button' | 'submit' | 'reset'
export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  disabled?: boolean
  icon?: string
  loading?: boolean
  round?: boolean
  circle?: boolean
  plain?: boolean
  text?: boolean
  href?: string
  target?: string
  nativeType?: NativeType
  autofocus?: boolean
  block?: boolean
  onClick?: (event: Event) => void
}

export interface ButtonInstance {
  ref: HTMLButtonElement
}