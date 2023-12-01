import { Select, SelectTrigger, SelectValue, SelectContent } from './ui/select'
import { Search } from 'lucide-react'
import { SelectGroupCity } from './Select/SelectGroupCity'
import { SelectGroupState } from './Select/SelectGroupState'
import Logo from '../assets/logo.svg'
import Image from 'next/image'

export function SideBarContentTop() {
  return (
    <div className="flex h-64 w-full flex-col items-start justify-center gap-8 bg-primary-dark px-12 py-20">
      <div>
        <Image src={Logo} width={40} alt="" />
      </div>
      <div className="flex items-center justify-start gap-4">
        <Select>
          <SelectTrigger className="flex h-14 w-[58px] items-center justify-center rounded-2xl border border-white/20 bg-transparent font-bold text-white">
            <SelectValue placeholder="PA" />
          </SelectTrigger>

          <SelectContent className="bg-zinc-900/60 text-white">
            <SelectGroupState />
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="flex h-14 w-52 items-center justify-center gap-2 rounded-2xl border-none bg-zinc-900/10 text-sm font-bold text-white">
            <SelectValue placeholder="Select a City" />
          </SelectTrigger>

          <SelectContent className="bg-zinc-900/60 text-white">
            <SelectGroupCity />
          </SelectContent>
        </Select>
        <button
          type="button"
          aria-label="button"
          className="rounded-2xl bg-yellow-300 px-4 py-4"
        >
          <Search className="h-6 w-6 font-medium text-blue-800" />
        </button>
      </div>
    </div>
  )
}
