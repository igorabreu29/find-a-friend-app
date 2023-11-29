import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
    <div className="bg-primary-light flex min-h-screen flex-col items-start justify-start gap-20 p-24">
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}
