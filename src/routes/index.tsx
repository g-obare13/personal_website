import { createFileRoute } from '@tanstack/react-router'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Partners from '@/components/Partners'
import AboutIntro from '@/components/AboutIntro'
import PainPoints from '@/components/PainPoints'
import Podcast from '@/components/Podcast'
import Movement from '@/components/Movement'
import Testimonials from '@/components/Testimonials'
import BookingForm from '@/components/BookingForm'
import Footer from '@/components/Footer'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <Partners />
      <AboutIntro />
      <PainPoints />
      <Podcast />
      <Movement />
      <Testimonials />
      <BookingForm />
      <Footer />
    </div>
  )
}
