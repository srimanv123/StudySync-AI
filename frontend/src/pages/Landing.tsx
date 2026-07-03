

import { useState, useEffect } from 'react'
import { ChevronDown, Sparkles, BookOpen, MessageSquare, FileText, Zap, Users, TrendingUp, CheckCircle, Menu, X } from 'lucide-react'

export default function Landing() {
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
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50 to-cyan-50">
      {/* Sticky Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md bg-white/70 shadow-sm border-b border-indigo-100/30' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 sm:w-10 sm:h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                StudySync AI
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-indigo-600 transition">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 transition">How It Works</a>
              <a href="#testimonials" className="text-gray-600 hover:text-indigo-600 transition">Testimonials</a>
              <a href="#faq" className="text-gray-600 hover:text-indigo-600 transition">FAQ</a>
            </div>

            {/* Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <button className="text-gray-600 hover:text-indigo-600 transition px-4 py-2">Login</button>
              <button className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition shadow-lg hover:shadow-xl">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-indigo-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
              <a href="#features" className="block text-gray-600 hover:text-indigo-600 py-2">Features</a>
              <a href="#how-it-works" className="block text-gray-600 hover:text-indigo-600 py-2">How It Works</a>
              <a href="#testimonials" className="block text-gray-600 hover:text-indigo-600 py-2">Testimonials</a>
              <a href="#faq" className="block text-gray-600 hover:text-indigo-600 py-2">FAQ</a>
              <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-full text-sm">Get Started</button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 sm:pt-40 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-left-4 duration-700">
              <div className="inline-block">
                <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-100 text-indigo-700 rounded-full text-xs sm:text-sm font-semibold">
                  ✨ AI-Powered Learning Platform
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent">
                  Turn Any Study Material Into Perfect Quizzes
                </span>
                <span className="block text-gray-900 mt-2">in Seconds with AI</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-xl">
                Upload your notes, PDFs, or lecture recordings. StudySync AI instantly generates flashcards, quizzes, and summaries. Master any subject faster with AI-powered learning.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group px-8 py-3 sm:py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition shadow-lg hover:shadow-2xl transform hover:scale-105 duration-200">
                  Get Started Free
                </button>
                <button className="group px-8 py-3 sm:py-4 border-2 border-indigo-200 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition flex items-center justify-center gap-2">
                  <span>Watch Demo</span>
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition" />
                </button>
              </div>
            </div>

            {/* Right - Floating Dashboard Illustration */}
            <div className="relative h-96 sm:h-[500px] hidden md:block animate-in fade-in slide-in-from-right-4 duration-700">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-3xl blur-3xl" />
              
              {/* Card Stack Animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Bottom card - Quiz */}
                <div className="absolute w-72 h-48 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 transform -rotate-6 -translate-y-12 hover:shadow-2xl transition">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="font-semibold text-gray-900">Quiz Generator</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-purple-200 rounded-full w-3/4" />
                    <div className="h-2 bg-purple-100 rounded-full w-1/2" />
                  </div>
                </div>

                {/* Middle card - Flashcards */}
                <div className="absolute w-72 h-48 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 transform rotate-3 hover:shadow-2xl transition z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-cyan-600" />
                    </div>
                    <span className="font-semibold text-gray-900">Flashcards</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-cyan-200 rounded-full w-3/4" />
                    <div className="h-2 bg-cyan-100 rounded-full w-1/2" />
                  </div>
                </div>

                {/* Top card - AI Chat */}
                <div className="absolute w-72 h-48 bg-white rounded-2xl shadow-xl p-6 border border-gray-100 transform rotate-6 translate-y-12 hover:shadow-2xl transition">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <MessageSquare className="w-5 h-5 text-indigo-600" />
                    </div>
                    <span className="font-semibold text-gray-900">AI Tutor</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-indigo-200 rounded-full w-3/4" />
                    <div className="h-2 bg-indigo-100 rounded-full w-1/2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-indigo-50/30 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Everything You Need to Study Smarter
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Powerful AI tools designed to make learning faster, easier, and more effective.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AI-Powered Learning */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur" />
              <div className="relative bg-white rounded-2xl border border-gray-100 p-8 h-full hover:border-indigo-200 transition duration-300 shadow-sm group-hover:shadow-xl">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl blur opacity-20" />
                  <div className="relative w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition transform duration-300">
                    <span className="text-2xl">🧠</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Learning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Generate summaries, explanations, and personalized study plans instantly.
                </p>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </div>

            {/* Smart Study Tools */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur" />
              <div className="relative bg-white rounded-2xl border border-gray-100 p-8 h-full hover:border-cyan-200 transition duration-300 shadow-sm group-hover:shadow-xl">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl blur opacity-20" />
                  <div className="relative w-14 h-14 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition transform duration-300">
                    <span className="text-2xl">📝</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Study Tools</h3>
                <p className="text-gray-600 leading-relaxed">
                  Create notes, flashcards, quizzes, and revision material from any study content.
                </p>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </div>

            {/* Collaborative Learning */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur" />
              <div className="relative bg-white rounded-2xl border border-gray-100 p-8 h-full hover:border-cyan-200 transition duration-300 shadow-sm group-hover:shadow-xl">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl blur opacity-20" />
                  <div className="relative w-14 h-14 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition transform duration-300">
                    <span className="text-2xl">🤝</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaborative Learning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Study together with shared notes, live whiteboards, AI chat, and real-time collaboration.
                </p>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              From Lecture to Learning in Minutes
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Watch how StudySync AI transforms your raw study materials into professional study content in seconds.
            </p>
          </div>

          <div className="grid md:grid-cols-6 gap-4 relative">
            {/* Arrow connectors */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 -translate-y-1/2" style={{ zIndex: 0 }} />
            
            {[
              { step: '1', title: 'Upload', desc: 'Your PDF, notes, or recording', icon: '📄', gradient: 'from-indigo-600 to-purple-600' },
              { step: '2', title: 'AI Reads', desc: 'Intelligent content analysis', icon: '🧠', gradient: 'from-purple-600 to-pink-600' },
              { step: '3', title: 'Auto-Generate', desc: 'Smart summaries created', icon: '✨', gradient: 'from-pink-600 to-red-600' },
              { step: '4', title: 'Flashcards', desc: 'Instantly ready to study', icon: '📚', gradient: 'from-red-600 to-orange-600' },
              { step: '5', title: 'Take Quiz', desc: 'Test your knowledge', icon: '✅', gradient: 'from-orange-600 to-cyan-600' },
              { step: '6', title: 'Master', desc: 'Ace your exam', icon: '🏆', gradient: 'from-cyan-600 to-blue-600' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center relative" style={{ zIndex: 1 }}>
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center text-2xl sm:text-3xl shadow-lg mb-4 ring-4 ring-white`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-center mb-1">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 text-center">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition shadow-lg hover:shadow-xl">
              Start Your First Upload
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Features That Transform Learning
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every tool you need to study smarter, collaborate better, and understand concepts faster.
            </p>
          </div>

          <div className="space-y-16 sm:space-y-24">
            {/* Feature 1 - AI Tutor */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">AI Tutor</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Get instant, context-aware answers to any question. Our AI tutor explains complex concepts in simple terms and provides personalized recommendations based on your learning pace.
                </p>
                <ul className="space-y-3">
                  {['24/7 Doubt Solver', 'Context-aware Answers', 'Concept Explanations'].map(benefit => (
                    <li key={benefit} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="px-6 py-3 bg-indigo-100 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-200 transition">
                  Learn More →
                </button>
              </div>
              <div className="order-1 md:order-2 h-80 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl flex items-center justify-center shadow-lg">
                <MessageSquare className="w-32 h-32 text-indigo-300" />
              </div>
            </div>

            {/* Feature 2 - Flashcards */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="h-80 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-32 h-32 text-cyan-300" />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Smart Flashcards</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Automatically generate flashcards from your notes and PDFs. Our spacing algorithm ensures you study smarter, not harder.
                </p>
                <ul className="space-y-3">
                  {['Auto-generated from Notes', 'Spaced Repetition', 'Progress Tracking'].map(benefit => (
                    <li key={benefit} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="px-6 py-3 bg-indigo-100 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-200 transition">
                  Learn More →
                </button>
              </div>
            </div>

            {/* Feature 3 - Quiz Generator */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Quiz Generator</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Transform your study materials into comprehensive quizzes. Test yourself and identify weak areas instantly.
                </p>
                <ul className="space-y-3">
                  {['Multiple Question Types', 'Instant Feedback', 'Performance Analytics'].map(benefit => (
                    <li key={benefit} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="px-6 py-3 bg-indigo-100 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-200 transition">
                  Learn More →
                </button>
              </div>
              <div className="order-1 md:order-2 h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl flex items-center justify-center shadow-lg">
                <Zap className="w-32 h-32 text-purple-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Animated Timeline */}
      <section id="how-it-works" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 sm:mb-28">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Your Personal Learning Workflow
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From notes to mastery in 6 simple steps. Designed for maximum learning efficiency.
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16 relative">
            {/* Vertical timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-300 via-purple-300 to-cyan-300 -translate-x-1/2" />

            {[
              { icon: FileText, title: 'Upload Your Materials', desc: 'Share PDFs, notes, slides, or recordings with one click', color: 'from-indigo-600 to-purple-600', delay: '0s' },
              { icon: Sparkles, title: 'AI Analysis', desc: 'Our AI reads and understands every word of your content', color: 'from-purple-600 to-pink-600', delay: '0.1s' },
              { icon: BookOpen, title: 'Smart Flashcards', desc: 'Automatically generate contextual flashcards for recall practice', color: 'from-pink-600 to-red-600', delay: '0.2s' },
              { icon: Zap, title: 'Interactive Quizzes', desc: 'Test yourself with AI-generated questions that match your level', color: 'from-red-600 to-orange-600', delay: '0.3s' },
              { icon: MessageSquare, title: 'AI Chat Tutor', desc: 'Get instant answers and explanations from your personal AI tutor', color: 'from-orange-600 to-cyan-600', delay: '0.4s' },
              { icon: TrendingUp, title: 'Track & Improve', desc: 'Monitor progress with detailed analytics and personalized insights', color: 'from-cyan-600 to-blue-600', delay: '0.5s' },
            ].map((step, index) => (
              <div key={index} className={`flex items-center gap-8 md:gap-12 animate-in fade-in slide-in-from-left-4 duration-700`} style={{ animationDelay: step.delay }}>
                {/* Timeline item - alternates left and right on desktop */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:order-last'}`}>
                  <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 hover:shadow-xl hover:border-gray-300 transition duration-300">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Step {index + 1}</h3>
                    <h4 className="text-lg sm:text-xl font-semibold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                {/* Center circle */}
                <div className="hidden md:flex flex-shrink-0 relative z-10 w-16 h-16 items-center justify-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white text-xl shadow-lg ring-4 ring-white`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                </div>

                {/* Mobile timeline circle */}
                <div className="md:hidden flex-shrink-0 w-12 h-12 -ml-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white shadow-lg ring-4 ring-gray-50`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition shadow-lg hover:shadow-xl transform hover:scale-105 duration-200">
              Experience the Full Workflow
            </button>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-cyan-50/30 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 md:order-1 space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                Study Together in Real-Time
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Invite friends to your study session. Work together with shared notes, live whiteboards, and instant messaging. See who&apos;s studying with real-time presence indicators.
              </p>
              <ul className="space-y-4">
                {[
                  'Real-time Collaborative Whiteboard',
                  'Shared Notes & Annotations',
                  'Live Presence Indicators',
                  'Integrated Chat & Voice',
                ].map(feature => (
                  <li key={feature} className="flex items-center gap-3 text-gray-700 text-lg">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition shadow-lg hover:shadow-xl transform hover:scale-105 duration-200">
                Join a Study Group
              </button>
            </div>
            <div className="order-1 md:order-2 relative h-96 sm:h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-blue-600/20 rounded-3xl blur-3xl" />
              <div className="relative h-full bg-gradient-to-br from-cyan-100 to-blue-100 rounded-3xl flex items-center justify-center shadow-lg overflow-hidden">
                {/* Animated student avatars */}
                <div className="flex items-center justify-center gap-4">
                  {['👨‍🎓', '👩‍🎓', '👨‍💼', '👩‍💻'].map((avatar, idx) => (
                    <div 
                      key={idx}
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-full flex items-center justify-center text-3xl sm:text-4xl shadow-lg border-4 border-indigo-200 animate-bounce"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      {avatar}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Loved by Students
            </h2>
            <p className="text-lg text-gray-600">
              See what real students have to say about StudySync AI
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Chen', course: 'CS 109 (Data Science)', avatar: '👩‍🎓', rating: 5, text: 'Went from struggling with concepts to acing the midterm. StudySync turned my 30-page notes into perfect study guides in minutes. Game changer!' },
              { name: 'Marcus Johnson', course: 'Biology 101', avatar: '👨‍🎓', rating: 5, text: 'The AI-generated quizzes are actually challenging. My study group went from 3 hours of cramming to just 1 focused hour with StudySync.' },
              { name: 'Emma Rodriguez', course: 'Organic Chemistry', avatar: '👩‍💻', rating: 5, text: 'I was about to drop this class. StudySync&apos;s AI tutor explained mechanisms better than my professor. Saved my GPA!' },
            ].map((testimonial, index) => (
              <div key={index} className="group relative animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur" />
                <div className="relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-indigo-200 hover:shadow-xl transition h-full">
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    {`"${testimonial.text}"`}
                  </p>
                  
                  {/* Author with avatar */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-xl flex-shrink-0">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.course}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-gray-600">
              Everything you need to know about StudySync AI
            </p>
          </div>

          <div className="space-y-4">
            {[
              { icon: '💰', q: 'How much does StudySync AI cost?', a: 'We offer a free tier with unlimited notes and AI analysis. Premium plans start at $9.99/month for advanced features like collaborative study rooms and analytics.' },
              { icon: '📄', q: 'What file types can I upload?', a: 'StudySync supports PDFs, Word documents, Google Docs, lecture slides, and audio/video recordings. Simply upload and our AI instantly begins analysis.' },
              { icon: '🔒', q: 'Is my data secure and private?', a: 'Yes. All your study materials are encrypted with military-grade security, and we&apos;re FERPA and GDPR compliant. Your data is never used to train models.' },
              { icon: '💻', q: 'Do I need to install anything?', a: 'No software required! StudySync works in any modern browser. We also have iOS and Android apps for studying on the go.' },
              { icon: '👥', q: 'How many people can study together?', a: 'Our collaborative study rooms support unlimited participants. Invite your entire class, club, or study group to share notes and study together in real-time.' },
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.q} answer={faq.a} icon={faq.icon} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8">
            Your Next Breakthrough is Minutes Away
          </h2>
          <p className="text-lg sm:text-xl text-indigo-100 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            Stop wasting hours on ineffective study methods. StudySync AI transforms how you learn—faster, smarter, and with better results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 sm:px-10 py-4 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-gray-50 transition shadow-lg hover:shadow-2xl transform hover:scale-105 duration-200">
              Start Free Trial
            </button>
            <button className="px-8 sm:px-10 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white/10 transition transform hover:scale-105 duration-200">
              View Pricing
            </button>
          </div>
          <p className="text-indigo-100 text-sm mt-6">No credit card required. Full access for 14 days.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-white">StudySync AI</span>
              </div>
              <p className="text-sm text-gray-400">Learn together. Study smarter.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 flex justify-between items-center text-sm text-gray-400">
            <p>&copy; 2025 StudySync AI. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition">GitHub</a>
              <a href="#" className="hover:text-white transition">LinkedIn</a>
              <a href="#" className="hover:text-white transition">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FAQItem({ question, answer, icon }: { question: string; answer: string; icon?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden hover:border-indigo-200 hover:shadow-lg transition duration-300 bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-6 sm:px-8 py-4 sm:py-6 flex justify-between items-start gap-4 hover:bg-indigo-50/30 transition duration-200"
      >
        <div className="flex items-start gap-4 flex-1 text-left">
          {icon && <span className="text-2xl flex-shrink-0 mt-1">{icon}</span>}
          <span className="font-semibold text-gray-900 text-lg">{question}</span>
        </div>
        <ChevronDown className={`w-5 h-5 text-indigo-600 transition-transform flex-shrink-0 mt-1 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-6 sm:px-8 py-4 bg-indigo-50/50 border-t border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}
