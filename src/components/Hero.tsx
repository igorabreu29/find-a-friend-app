import { Animals } from './images/Animals'

export function Hero() {
  return (
    <div className="flex w-full items-center justify-between">
      <h1 className="w-[30rem] text-7xl font-bold">
        Leve a felicidade para o seu lar
      </h1>
      <Animals />
    </div>
  )
}
