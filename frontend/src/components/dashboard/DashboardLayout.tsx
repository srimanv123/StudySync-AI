import { useState } from 'react'
import Sidebar from './Sidebar'
import TopNavbar from './TopNavbar'
import WelcomeBanner from './WelcomeBanner'
import QuickActions from './QuickActions'
import RecentActivity from './RecentActivity'
import ProgressCard from './ProgressCard'
import WeeklyStats from './WeeklyStats'

export default function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-b from-card to-background border-r border-border transition-transform duration-300 ease-in-out md:static md:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <Sidebar onClose={() => setSidebarOpen(false)} />
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        <TopNavbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        {/* Scrollable content area */}
        <main className="flex-1 overflow-auto">
          <div className="h-full bg-gradient-to-br from-background via-background to-card/20">
            <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-6">
              {/* Welcome Section */}
              <WelcomeBanner />

              {/* Quick Actions */}
              <QuickActions />

              {/* Two Column Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Activity - Left */}
                <div className="lg:col-span-2">
                  <RecentActivity />
                </div>

                {/* Progress Card - Right */}
                <div>
                  <ProgressCard />
                </div>
              </div>

              {/* Weekly Statistics */}
              <WeeklyStats />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
