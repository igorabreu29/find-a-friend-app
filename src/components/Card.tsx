import Image from 'next/image'
import Logo from '../assets/logo.svg'
import Link from 'next/link'

interface CardProps {
  url: string
}
export function Card({ url }: CardProps) {
  return (
    <Link
      href={url}
      className="group flex w-72 flex-col items-center justify-center gap-1 rounded-[2rem] bg-white px-1 py-1 pb-4 transition-colors hover:bg-blue-950"
    >
      <div className="h-32 w-full rounded-[2rem] bg-zinc-400"></div>
      <div className="-mt-6 h-10 w-10 rounded-lg bg-white p-[2px] transition-colors group-hover:bg-blue-950">
        <div className="flex h-full w-full items-center justify-center rounded-lg bg-yellow-400">
          <Image src={Logo} width={12} alt="" />
        </div>
      </div>
      <span className="font-bold text-blue-950 transition-colors group-hover:text-white">
        Alfredo
      </span>
    </Link>
  )
}
