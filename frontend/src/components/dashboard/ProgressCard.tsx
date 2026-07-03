import { Zap } from 'lucide-react'

export default function ProgressCard() {
  const progress = 72
  const circumference = 2 * Math.PI * 45
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="glass-card flex flex-col items-center">
      <h2 className="text-lg font-semibold mb-6">Learning Progress</h2>

      {/* Circular Progress */}
      <div className="relative w-40 h-40 mb-6">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
          {/* Background circle */}
          <circle
            cx="60"
            cy="60"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            className="text-border"
          />

          {/* Progress circle with gradient */}
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(264, 85%, 55%)" />
              <stop offset="100%" stopColor="hsl(200, 100%, 50%)" />
            </linearGradient>
          </defs>

          <circle
            cx="60"
            cy="60"
            r="45"
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 1s ease' }}
          />
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold">{progress}%</span>
          <span className="text-xs text-muted-foreground mt-1">This week</span>
        </div>
      </div>

      {/* Stats */}
      <div className="w-full space-y-3">
        <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
          <span className="text-sm text-muted-foreground">Streak</span>
          <span className="flex items-center gap-2 font-semibold">
            <Zap className="w-4 h-4 text-yellow-500" />
            7 days
          </span>
        </div>

        <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
          <span className="text-sm text-muted-foreground">Hours studied</span>
          <span className="font-semibold">14.5h</span>
        </div>

        <div className="flex justify-between items-center p-3 rounded-lg bg-white/5">
          <span className="text-sm text-muted-foreground">Topics mastered</span>
          <span className="font-semibold">12</span>
        </div>
      </div>

      <button className="w-full mt-6 px-4 py-2 rounded-lg bg-gradient-accent text-white font-medium text-sm hover:opacity-90 transition-opacity">
        View detailed stats
      </button>
    </div>
  )
}
