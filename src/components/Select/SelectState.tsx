import { Select, SelectTrigger, SelectContent, SelectValue } from '../ui/select'
import { SelectGroupState } from './SelectGroupState'

export function SelectState() {
  return (
    <Select>
      <SelectTrigger className="flex h-14 w-16 items-center justify-center rounded-2xl border bg-transparent text-lg font-bold text-white">
        <SelectValue placeholder="PA" />
      </SelectTrigger>

      <SelectContent className="bg-zinc-900/60 text-white">
        <SelectGroupState />
      </SelectContent>
    </Select>
  )
}
