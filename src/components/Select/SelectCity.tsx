import { Select, SelectTrigger, SelectValue, SelectContent } from '../ui/select'
import { SelectGroupCity } from './SelectGroupCity'

export function SelectCity() {
  return (
    <Select>
      <SelectTrigger className="flex h-14 w-52 items-center justify-center gap-2 rounded-2xl border-none bg-zinc-900/10 text-sm font-bold text-white">
        <SelectValue placeholder="Select a City" />
      </SelectTrigger>

      <SelectContent className="bg-zinc-900/60 text-white">
        <SelectGroupCity />
      </SelectContent>
    </Select>
  )
}
