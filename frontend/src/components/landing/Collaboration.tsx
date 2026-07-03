import { CheckCircle } from 'lucide-react'

export default function Collaboration() {
  return (
    <section id="collaboration" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-cyan-50/30 to-white">
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
  )
}
