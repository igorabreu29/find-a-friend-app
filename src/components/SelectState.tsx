import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectValue,
} from './ui/select'

export function SelectState() {
  return (
    <Select>
      <SelectTrigger className="flex h-14 w-16 items-center justify-center rounded-2xl border bg-transparent text-lg font-bold text-white">
        <SelectValue placeholder="PA" />
      </SelectTrigger>

      <SelectContent className="bg-zinc-900/60 text-white">
        <SelectGroup>
          <SelectItem value="PA">PA</SelectItem>
          <SelectItem value="RJ">RJ</SelectItem>
          <SelectItem value="SP">SP</SelectItem>
          <SelectItem value="MG">MG</SelectItem>
          <SelectItem value="RG">RG</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
