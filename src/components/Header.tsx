import { Logo } from './images/Logo'

export function Header() {
  return (
    <header className="flex w-full items-center gap-2">
      <Logo />
      <span className="text-xl font-medium">FindAFriend</span>
    </header>
  )
}
