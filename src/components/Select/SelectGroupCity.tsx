import { SelectGroup, SelectLabel, SelectItem } from '../ui/select'

export function SelectGroupCity() {
  return (
    <SelectGroup>
      <SelectLabel>Cities</SelectLabel>
      <SelectItem value="Guanaraba">Guanaraba</SelectItem>
      <SelectItem value="Santarém">Santarém</SelectItem>
      <SelectItem value="Abaetetuba">Abaetetuba</SelectItem>
      <SelectItem value="Marabá">Marabá</SelectItem>
      <SelectItem value="Marudá">Marudá</SelectItem>
    </SelectGroup>
  )
}
