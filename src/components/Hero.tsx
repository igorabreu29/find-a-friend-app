import Image from 'next/image'
import Animals from '../assets/animals.png'
export function Hero() {
  return (
    <div className="flex w-full items-center justify-between">
      <h1 className="w-[30rem] text-7xl font-bold">
        Leve a felicidade para o seu lar
      </h1>
      <Image
        src={Animals}
        width={600}
        alt="Image about animals of differents kinds"
      />
    </div>
  )
}
