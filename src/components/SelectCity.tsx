import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from './ui/select'

export function SelectCity() {
  return (
    <Select>
      <SelectTrigger className="flex h-14 w-52 items-center justify-center gap-2 rounded-2xl border-none bg-zinc-900/10 text-sm font-bold text-white">
        <SelectValue placeholder="Select a City" />
      </SelectTrigger>

      <SelectContent className="bg-zinc-900/60 text-white">
        <SelectGroup>
          <SelectLabel>Cities</SelectLabel>
          <SelectItem value="Guanaraba">Guanaraba</SelectItem>
          <SelectItem value="Santarém">Santarém</SelectItem>
          <SelectItem value="Abaetetuba">Abaetetuba</SelectItem>
          <SelectItem value="Marabá">Marabá</SelectItem>
          <SelectItem value="Marudá">Marudá</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
