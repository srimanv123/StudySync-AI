export default function HowItWorks() {
  const steps = [
    { step: '1', title: 'Upload', desc: 'Your PDF, notes, or recording', icon: '📄', gradient: 'from-indigo-600 to-purple-600' },
    { step: '2', title: 'AI Reads', desc: 'Intelligent content analysis', icon: '🧠', gradient: 'from-purple-600 to-pink-600' },
    { step: '3', title: 'Auto-Generate', desc: 'Smart summaries created', icon: '✨', gradient: 'from-pink-600 to-red-600' },
    { step: '4', title: 'Flashcards', desc: 'Instantly ready to study', icon: '📚', gradient: 'from-red-600 to-orange-600' },
    { step: '5', title: 'Take Quiz', desc: 'Test your knowledge', icon: '✅', gradient: 'from-orange-600 to-cyan-600' },
    { step: '6', title: 'Master', desc: 'Ace your exam', icon: '🏆', gradient: 'from-cyan-600 to-blue-600' },
  ]

  return (
    <section id="how-it-works" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white">
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
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 -translate-y-1/2" style={{ zIndex: 0 }} />
          {steps.map((item, idx) => (
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
  )
}
