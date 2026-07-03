import { ChevronDown, BookOpen, MessageSquare, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section id="home" className="pt-32 sm:pt-40 pb-20 sm:pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="inline-block">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-100 text-indigo-700 rounded-full text-xs sm:text-sm font-semibold">
                AI-Powered Learning Platform
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
              <Link
                to="/signup"
                className="group px-8 py-3 sm:py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition shadow-lg hover:shadow-2xl transform hover:scale-105 duration-200 text-center"
              >
                Get Started Free
              </Link>
              <a
                href="#how-it-works"
                className="group px-8 py-3 sm:py-4 border-2 border-indigo-200 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition flex items-center justify-center gap-2"
              >
                <span>Watch Demo</span>
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition" />
              </a>
            </div>
          </div>

          <div className="relative h-96 sm:h-[500px] hidden md:block animate-in fade-in slide-in-from-right-4 duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-3xl blur-3xl" />

            <div className="absolute inset-0 flex items-center justify-center">
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
  )
}
