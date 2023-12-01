import { Search } from 'lucide-react'
import { SelectCity } from './Select/SelectCity'
import { SelectState } from './Select/SelectState'

export function Footer() {
  return (
    <footer className="mt-10 flex w-full items-center justify-between">
      <p className="w-[22rem] text-lg font-semibold">
        Encontre o animal de estimação ideal para seu estilo de vida!
      </p>

      <form className="flex items-center justify-center gap-4">
        <span>Busque um amigo: </span>
        <SelectState />
        <SelectCity />
        <button
          type="button"
          aria-label="button"
          className="rounded-2xl bg-yellow-300 px-4 py-4"
        >
          <Search className="h-6 w-6 font-medium text-blue-800" />
        </button>
      </form>
    </footer>
  )
}
