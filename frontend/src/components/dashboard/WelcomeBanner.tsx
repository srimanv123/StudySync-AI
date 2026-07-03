export default function WelcomeBanner() {
  return (
    <div className="glass-card">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Welcome back!</span>
          </h1>
          <p className="text-muted-foreground mt-2">
            Continue your AI-powered learning journey.
          </p>
        </div>

        <div className="hidden lg:block">
          <div className="w-32 h-32 rounded-full bg-gradient-accent opacity-20 blur-3xl" />
        </div>
      </div>
    </div>
  )
}
