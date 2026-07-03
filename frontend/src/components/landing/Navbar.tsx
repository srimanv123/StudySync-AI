import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'backdrop-blur-md bg-white/70 shadow-sm border-b border-indigo-100/30'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              StudySync AI
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-600 hover:text-indigo-600 transition">
              Home
            </a>
            <a href="#features" className="text-gray-600 hover:text-indigo-600 transition">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition">
              How It Works
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition">
              Testimonials
            </a>
            <a href="#faq" className="text-gray-600 hover:text-indigo-600 transition">
              FAQ
            </a>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <Link to="/login" className="text-gray-600 hover:text-indigo-600 transition px-4 py-2">
              Login
            </Link>
            <Link to="/signup" className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl">
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden p-2 text-gray-600 hover:text-indigo-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <a href="#home" className="block text-gray-600 hover:text-indigo-600 py-2" onClick={() => setMobileMenuOpen(false)}>
              Home
            </a>
            <a href="#features" className="block text-gray-600 hover:text-indigo-600 py-2" onClick={() => setMobileMenuOpen(false)}>
              Features
            </a>
            <a href="#how-it-works" className="block text-gray-600 hover:text-indigo-600 py-2" onClick={() => setMobileMenuOpen(false)}>
              How It Works
            </a>
            <a href="#testimonials" className="block text-gray-600 hover:text-indigo-600 py-2" onClick={() => setMobileMenuOpen(false)}>
              Testimonials
            </a>
            <a href="#faq" className="block text-gray-600 hover:text-indigo-600 py-2" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </a>
            <Link
              to="/signup"
              className="block w-full px-4 py-2 bg-indigo-600 text-white rounded-full text-sm text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
