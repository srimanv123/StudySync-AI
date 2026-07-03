import { Upload, Zap, BookMarked, MessageCircle } from 'lucide-react'

export default function QuickActions() {
  const actions = [
    { icon: Upload, label: 'Upload Notes', color: 'from-blue-500 to-cyan-500' },
    { icon: Zap, label: 'Generate Quiz', color: 'from-purple-500 to-pink-500' },
    { icon: BookMarked, label: 'Study Flashcards', color: 'from-indigo-500 to-blue-500' },
    { icon: MessageCircle, label: 'Ask AI', color: 'from-cyan-500 to-blue-500' },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {actions.map((action) => (
        <button
          key={action.label}
          className="glass-card group flex flex-col items-center justify-center py-8 rounded-[28px] border border-white/10 shadow-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:bg-white/20 active:scale-[0.98]"
        >
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} p-0.5 mb-4 shadow-lg`}>
            <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
              <action.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <span className="font-medium text-sm">{action.label}</span>
        </button>
      ))}
    </div>
  )
}
