import { BookOpen, Zap, MessageSquare } from 'lucide-react'

export default function AIChatDemo() {
  return (
    <>
      <section id="ai-chat" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
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
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">AI Tutor</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Get instant, context-aware answers to any question. Our AI tutor explains complex concepts in simple terms and provides personalized recommendations based on your learning pace.
                </p>
                <ul className="space-y-3">
                  {['24/7 Doubt Solver', 'Context-aware Answers', 'Concept Explanations'].map(benefit => (
                    <li key={benefit} className="flex items-center gap-3 text-gray-700">
                      <span className="w-5 h-5 text-green-500 flex-shrink-0">✔</span>
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
                      <span className="w-5 h-5 text-green-500 flex-shrink-0">✔</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="px-6 py-3 bg-indigo-100 text-indigo-600 rounded-xl font-semibold hover:bg-indigo-200 transition">
                  Learn More →
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="order-2 md:order-1 space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Quiz Generator</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Transform your study materials into comprehensive quizzes. Test yourself and identify weak areas instantly.
                </p>
                <ul className="space-y-3">
                  {['Multiple Question Types', 'Instant Feedback', 'Performance Analytics'].map(benefit => (
                    <li key={benefit} className="flex items-center gap-3 text-gray-700">
                      <span className="w-5 h-5 text-green-500 flex-shrink-0">✔</span>
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
    </>
  )
}
