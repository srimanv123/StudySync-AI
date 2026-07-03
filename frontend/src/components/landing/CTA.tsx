export default function CTA() {
  return (
    <section id="cta" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-600 relative overflow-hidden">
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
  )
}
