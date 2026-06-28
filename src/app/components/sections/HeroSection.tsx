export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mate-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto section-padding text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-mate-500/30 bg-mate-500/10 text-sm text-mate-300 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-mate-400 animate-pulse" />
          Now in Beta — v2.0
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] animate-slide-up">
          Your Intelligent
          <br />
          <span className="text-gradient">Companion</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Mate 2.0 redefines how you interact with intelligent systems.
          Fast, open, and built for everyone — from developers to creators.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
          <a
            href="#tryit"
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-mate-500 to-purple-600 hover:from-mate-400 hover:to-purple-500 text-white font-medium text-lg transition-all shadow-xl shadow-mate-500/30 hover:shadow-mate-500/50"
          >
            Try Mate Now
          </a>
          <a
            href="#features"
            className="px-8 py-3.5 rounded-xl border border-white/10 hover:border-white/20 text-white/80 hover:text-white font-medium text-lg transition-all"
          >
            Explore Features
          </a>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 sm:gap-12 text-white/30 animate-fade-in">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">10x</div>
            <div className="text-xs sm:text-sm mt-1">Faster Responses</div>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
            <div className="text-xs sm:text-sm mt-1">Open Source</div>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">5k+</div>
            <div className="text-xs sm:text-sm mt-1">Active Users</div>
          </div>
        </div>
      </div>
    </section>
  )
}
