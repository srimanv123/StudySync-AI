import { Search, Bell, Menu } from 'lucide-react'

interface TopNavbarProps {
  onMenuClick: () => void
}

export default function TopNavbar({ onMenuClick }: TopNavbarProps) {
  return (
    <nav className="h-16 border border-white/10 bg-white/10 backdrop-blur-xl sticky top-0 z-40 shadow-sm">
      <div className="h-full px-4 md:px-8 flex items-center justify-between">
        {/* Left - Menu button and search */}
        <div className="flex items-center gap-4 flex-1">
          <button
            onClick={onMenuClick}
            className="md:hidden p-2 rounded-full bg-card/30 hover:bg-card/60 transition-all duration-200 shadow-sm"
          >
            <Menu className="w-5 h-5 text-foreground" />
          </button>

          <div className="hidden md:flex items-center gap-3 max-w-md w-full bg-card/25 border border-border/40 rounded-full px-4 py-2 shadow-sm transition-colors duration-200">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search notes, quizzes..."
              className="bg-transparent border-none outline-none text-sm text-foreground placeholder-muted-foreground w-full"
            />
          </div>
        </div>

        {/* Right - Notifications and Avatar */}
        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-full bg-card/30 hover:bg-card/60 transition-all duration-200 shadow-sm">
            <Bell className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors duration-200" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full ring-1 ring-white/30" />
          </button>

          {/* Profile Avatar */}
          <button className="w-10 h-10 rounded-full bg-gradient-accent shadow-lg flex items-center justify-center text-sm font-bold text-white hover:scale-105 transition-transform duration-200 ring-1 ring-white/20">
            JD
          </button>
        </div>
      </div>
    </nav>
  )
}
