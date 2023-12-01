import Image from 'next/image'
import Logo from '../assets/logo.svg'

export function Header() {
  return (
    <header className="flex w-full items-center gap-2">
      <Image src={Logo} alt="" />
      <span className="text-xl font-medium">FindAFriend</span>
    </header>
  )
}
