import { Card } from '@/components/Card'
import { SideBar } from '@/components/SideBar'

export default function pets() {
  return (
    <div className="bg-back flex min-h-screen w-full items-start">
      <SideBar />
      <section className="flex flex-col gap-8 px-8 pt-28">
        <div className="flex items-center justify-between">
          <p className="text-blue-900">
            Encontre <span className="font-bold text-blue-950">324 amigos</span>{' '}
            na sua cidade
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8">
          <Card url="#" />
          <Card url="#" />
        </div>
      </section>
    </div>
  )
}
