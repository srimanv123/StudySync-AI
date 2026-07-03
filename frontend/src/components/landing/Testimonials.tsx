export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Chen',
      course: 'CS 109 (Data Science)',
      avatar: '👩‍🎓',
      rating: 5,
      text: 'Went from struggling with concepts to acing the midterm. StudySync turned my 30-page notes into perfect study guides in minutes. Game changer!',
    },
    {
      name: 'Marcus Johnson',
      course: 'Biology 101',
      avatar: '👨‍🎓',
      rating: 5,
      text: 'The AI-generated quizzes are actually challenging. My study group went from 3 hours of cramming to just 1 focused hour with StudySync.',
    },
    {
      name: 'Emma Rodriguez',
      course: 'Organic Chemistry',
      avatar: '👩‍💻',
      rating: 5,
      text: 'I was about to drop this class. StudySync&apos;s AI tutor explained mechanisms better than my professor. Saved my GPA!',
    },
  ]

  return (
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
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative animate-in fade-in slide-in-from-bottom-4 duration-700"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 blur" />
              <div className="relative bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-indigo-200 hover:shadow-xl transition h-full">
                <div className="flex items-center gap-1 mb-4">
                  {Array(testimonial.rating)
                    .fill(0)
                    .map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">
                        ★
                      </span>
                    ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">{`"${testimonial.text}"`}</p>
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
  )
}
