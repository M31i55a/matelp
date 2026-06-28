export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mate-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-mate-500/10 rounded-full blur-[80px]" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight relative">
              Built for the
              <br />
              <span className="text-gradient">next generation</span>
            </h2>
            <p className="mt-6 text-white/50 text-lg leading-relaxed">
              Mate started as a vision to make powerful AI accessible to everyone.
              Today, it&apos;s a thriving open-source ecosystem driven by a global
              community of developers, creators, and innovators.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { label: "Founded", value: "2024" },
                { label: "Open Source", value: "MIT License" },
                { label: "Built With", value: "TypeScript, Rust, Python" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-mate-500" />
                  <span className="text-white/40 text-sm w-28">{item.label}</span>
                  <span className="text-white/80 font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px]" />
            <div className="relative glow-card p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "50k+", label: "Lines of Code" },
                  { value: "200+", label: "Contributors" },
                  { value: "30+", label: "Integrations" },
                  { value: "99.9%", label: "Uptime" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                    <div className="text-sm text-white/40 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
