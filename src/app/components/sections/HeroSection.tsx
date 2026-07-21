"use client"

import { useT } from "../../context/LanguageContext"
import DotBackground from "../DotBackground"

export default function HeroSection() {
  const t = useT()
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <DotBackground />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mate-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto section-padding text-center">
        <div className="text-sm text-mate-300 mb-6 sm:mb-8 animate-fade-in">
          {t.hero.beta}
        </div>

        <h1 className="text-3xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.9] animate-slide-up">
          {t.hero.title1}
          <br />
          <span className="text-gradient">{t.hero.title2}</span>
        </h1>

        <p className="mt-5 sm:mt-6 text-base sm:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          {t.hero.subtitle}
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 animate-slide-up">
          <a
            href="/try-it"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-mate-500 to-purple-600 hover:from-mate-400 hover:to-purple-500 text-white font-medium text-lg transition-all shadow-xl shadow-mate-500/30 hover:shadow-mate-500/50 text-center"
          >
            {t.hero.tryNow}
          </a>
          <a
            href="https://github.com/M31i55a/windowsMate-Thuki"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-white/10 hover:border-white/20 text-white/80 hover:text-white font-medium text-lg transition-all text-center"
          >
            Source code
          </a>
        </div>

        <div className="mt-12 sm:mt-16 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-white/30 animate-fade-in">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">10x</div>
            <div className="text-xs sm:text-sm mt-1">{t.hero.stat1}</div>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
            <div className="text-xs sm:text-sm mt-1">{t.hero.stat2}</div>
          </div>
          <div className="w-px h-12 bg-white/10" />
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold text-white">5k+</div>
            <div className="text-xs sm:text-sm mt-1">{t.hero.stat3}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
