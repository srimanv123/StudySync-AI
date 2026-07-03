import { TrendingUp } from 'lucide-react'
import { ResponsiveContainer, BarChart, Bar, XAxis, Tooltip, CartesianGrid, Cell } from 'recharts'

const data = [
  { name: 'Mon', minutes: 65 },
  { name: 'Tue', minutes: 85 },
  { name: 'Wed', minutes: 72 },
  { name: 'Thu', minutes: 90 },
  { name: 'Fri', minutes: 78 },
  { name: 'Sat', minutes: 88 },
  { name: 'Sun', minutes: 95 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload || payload.length === 0) return null

  return (
    <div className="rounded-2xl border border-border bg-card/95 p-3 text-sm text-foreground shadow-xl">
      <p className="font-semibold">{label}</p>
      <p className="text-muted-foreground">{payload[0].value} min</p>
    </div>
  )
}

export default function WeeklyStats() {
  return (
    <div className="glass-card animate-fade-in-up">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Weekly Statistics</h2>
        <div className="flex items-center gap-2 text-accent text-sm">
          <TrendingUp className="w-4 h-4" />
          <span>+12% from last week</span>
        </div>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 12, right: 0, left: -12, bottom: 0 }}>
            <defs>
              <linearGradient id="weeklyGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity={1} />
                <stop offset="100%" stopColor="var(--secondary)" stopOpacity={0.9} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(148, 163, 184, 0.18)" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'var(--muted-foreground)', fontSize: 12 }} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
            <Bar dataKey="minutes" fill="url(#weeklyGradient)" radius={[16, 16, 0, 0]} barSize={32}>
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl bg-white/5">
          <p className="text-xs text-muted-foreground">Total Study Time</p>
          <p className="text-2xl font-bold mt-1">573 min</p>
        </div>
        <div className="p-4 rounded-2xl bg-white/5">
          <p className="text-xs text-muted-foreground">Avg per Day</p>
          <p className="text-2xl font-bold mt-1">81.9 min</p>
        </div>
        <div className="p-4 rounded-2xl bg-white/5">
          <p className="text-xs text-muted-foreground">Best Day</p>
          <p className="text-2xl font-bold mt-1">Sunday</p>
        </div>
      </div>
    </div>
  )
}
