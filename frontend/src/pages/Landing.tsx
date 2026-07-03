

import Navbar from '../components/landing/Navbar'
import Hero from '../components/landing/Hero'
import Features from '../components/landing/Features'
import HowItWorks from '../components/landing/HowItWorks'
import AIChatDemo from '../components/landing/AIChatDemo'
import Collaboration from '../components/landing/Collaboration'
import Testimonials from '../components/landing/Testimonials'
import FAQ from '../components/landing/FAQ'
import CTA from '../components/landing/CTA'
import Footer from '../components/landing/Footer'

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-cyan-50">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <AIChatDemo />
      <Collaboration />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
