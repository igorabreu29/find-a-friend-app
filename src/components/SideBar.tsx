import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from './ui/select'
import { MiniLogo } from './images/MiniLogo'

export function SideBar() {
  return (
    <aside className="h-screen w-full max-w-[30rem]">
      <div className="bg-primary-dark flex h-64 w-full flex-col items-start justify-center gap-4 px-12 py-20">
        <div>
          <MiniLogo />
        </div>
        <div className="flex items-center justify-start gap-2">
          <Select>
            <SelectTrigger className="flex h-14 w-[58px] items-center justify-center rounded-2xl border border-white/20 bg-transparent font-bold text-white">
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
        </div>
      </div>
      <div className="bg-primary-light h-full w-full"></div>
    </aside>
  )
}
