import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQItemProps {
  question: string
  answer: string
  icon?: string
}

function FAQItem({ question, answer, icon }: FAQItemProps) {
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

export default function FAQ() {
  const faqs = [
    {
      icon: '💰',
      q: 'How much does StudySync AI cost?',
      a: 'We offer a free tier with unlimited notes and AI analysis. Premium plans start at $9.99/month for advanced features like collaborative study rooms and analytics.',
    },
    {
      icon: '📄',
      q: 'What file types can I upload?',
      a: 'StudySync supports PDFs, Word documents, Google Docs, lecture slides, and audio/video recordings. Simply upload and our AI instantly begins analysis.',
    },
    {
      icon: '🔒',
      q: 'Is my data secure and private?',
      a: 'Yes. All your study materials are encrypted with military-grade security, and we&apos;re FERPA and GDPR compliant. Your data is never used to train models.',
    },
    {
      icon: '💻',
      q: 'Do I need to install anything?',
      a: 'No software required! StudySync works in any modern browser. We also have iOS and Android apps for studying on the go.',
    },
    {
      icon: '👥',
      q: 'How many people can study together?',
      a: 'Our collaborative study rooms support unlimited participants. Invite your entire class, club, or study group to share notes and study together in real-time.',
    },
  ]

  return (
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
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.q} answer={faq.a} icon={faq.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}
