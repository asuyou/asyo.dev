export interface Route {
  href: string
  text: string
  Icon?: any
  ariaLabel?: string
  type?: "dropdown" | "link"
  readonly uid?: string
}
