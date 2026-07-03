import { FileText, CheckSquare, Sparkles, Calendar } from 'lucide-react'

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: 'notes',
      icon: FileText,
      title: 'Quantum Physics Notes',
      subtitle: 'Chapter 3-5 uploaded',
      timestamp: '2 hours ago',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      type: 'quiz',
      icon: CheckSquare,
      title: 'Linear Algebra Quiz',
      subtitle: 'Completed with 87% score',
      timestamp: '5 hours ago',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      id: 3,
      type: 'flashcards',
      icon: Sparkles,
      title: 'Biology Flashcards',
      subtitle: '42 cards created',
      timestamp: '1 day ago',
      color: 'from-purple-500 to-pink-500',
    },
  ]

  return (
    <div className="glass-card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Recent Activity</h2>
        <button className="text-sm font-medium text-accent hover:text-accent/80 transition-colors">
          View all
        </button>
      </div>

      <div className="space-y-3">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center gap-4 p-4 rounded-[28px] bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${activity.color} p-0.5 flex-shrink-0`}>
              <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                <activity.icon className="w-6 h-6 text-white" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm">{activity.title}</h3>
              <p className="text-xs text-muted-foreground">{activity.subtitle}</p>
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground flex-shrink-0 min-w-[90px] justify-end">
              <Calendar className="w-3 h-3" />
              <span>{activity.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
