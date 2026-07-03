export default function Features() {
  return (
    <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-indigo-50/30 to-white" id="features">
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
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur" />
            <div className="relative bg-white rounded-2xl border border-gray-100 p-8 h-full hover:border-indigo-200 transition duration-300 shadow-sm group-hover:shadow-xl">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl blur opacity-20" />
                <div className="relative w-14 h-14 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition transform duration-300">
                  <span className="text-2xl">🧠</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI-Powered Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Generate summaries, explanations, and personalized study plans instantly.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur" />
            <div className="relative bg-white rounded-2xl border border-gray-100 p-8 h-full hover:border-cyan-200 transition duration-300 shadow-sm group-hover:shadow-xl">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl blur opacity-20" />
                <div className="relative w-14 h-14 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition transform duration-300">
                  <span className="text-2xl">📝</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Study Tools</h3>
              <p className="text-gray-600 leading-relaxed">
                Create notes, flashcards, quizzes, and revision material from any study content.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          </div>

          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur" />
            <div className="relative bg-white rounded-2xl border border-gray-100 p-8 h-full hover:border-cyan-200 transition duration-300 shadow-sm group-hover:shadow-xl">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl blur opacity-20" />
                <div className="relative w-14 h-14 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition transform duration-300">
                  <span className="text-2xl">🤝</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaborative Learning</h3>
              <p className="text-gray-600 leading-relaxed">
                Study together with shared notes, live whiteboards, AI chat, and real-time collaboration.
              </p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
