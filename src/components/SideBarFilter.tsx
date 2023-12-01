import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectLabel,
  SelectGroup,
  SelectContent,
} from './ui/select'

export function SideBarFilter() {
  return (
    <section className="flex h-full w-full flex-col justify-start gap-8 bg-primary-light px-12 py-10">
      <h2 className="text-lg font-bold">Filtros</h2>
      <div className="flex flex-col items-start justify-center gap-4">
        <span className="text-xs text-white/80">Idade</span>
        <Select>
          <SelectTrigger className="flex h-14 w-full items-center justify-center rounded-2xl border border-white/20 bg-transparent font-bold text-white">
            <SelectValue placeholder="Filhote" />
          </SelectTrigger>

          <SelectContent className="bg-zinc-900/60 text-white">
            <SelectGroup>
              <SelectLabel>Filhote</SelectLabel>
              <SelectItem value="Filhote">Filhote</SelectItem>
              <SelectItem value="Adolescente">Adolescente</SelectItem>
              <SelectItem value="Adulto">Adulto</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col items-start justify-center gap-4">
        <span className="text-xs text-white/80">Nível de Energia</span>
        <Select>
          <SelectTrigger className="flex h-14 w-full items-center justify-center rounded-2xl border border-white/20 bg-transparent font-bold text-white">
            <SelectValue placeholder="01" />
          </SelectTrigger>

          <SelectContent className="bg-zinc-900/60 text-white">
            <SelectGroup>
              <SelectLabel>Nível de Energia</SelectLabel>
              <SelectItem value="1">01</SelectItem>
              <SelectItem value="2">02</SelectItem>
              <SelectItem value="3">03</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col items-start justify-center gap-4">
        <span className="text-xs text-white/80">Porte do Animal</span>
        <Select>
          <SelectTrigger className="flex h-14 w-full items-center justify-center rounded-2xl border border-white/20 bg-transparent font-bold text-white">
            <SelectValue placeholder="Pequenino" />
          </SelectTrigger>

          <SelectContent className="bg-zinc-900/60 text-white">
            <SelectGroup>
              <SelectLabel>Porte do Animal</SelectLabel>
              <SelectItem value="Pequenino">Pequenino</SelectItem>
              <SelectItem value="Médio">Médio</SelectItem>
              <SelectItem value="Grande">Grande</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col items-start justify-center gap-4">
        <span className="text-xs text-white/80">Nível de Independência</span>
        <Select>
          <SelectTrigger className="flex h-14 w-full items-center justify-center rounded-2xl border border-white/20 bg-transparent font-bold text-white">
            <SelectValue placeholder="Médio" />
          </SelectTrigger>

          <SelectContent className="bg-zinc-900/60 text-white">
            <SelectGroup>
              <SelectLabel>Nível de Indepedência</SelectLabel>
              <SelectItem value="Pouco">Pouco</SelectItem>
              <SelectItem value="Médio">Médio</SelectItem>
              <SelectItem value="Muito">Muito</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </section>
  )
}
