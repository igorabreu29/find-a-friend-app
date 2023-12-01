import { SelectGroup, SelectItem } from '../ui/select'

export function SelectGroupState() {
  return (
    <SelectGroup>
      <SelectItem value="PA">PA</SelectItem>
      <SelectItem value="RJ">RJ</SelectItem>
      <SelectItem value="SP">SP</SelectItem>
      <SelectItem value="MG">MG</SelectItem>
      <SelectItem value="RG">RG</SelectItem>
    </SelectGroup>
  )
}
