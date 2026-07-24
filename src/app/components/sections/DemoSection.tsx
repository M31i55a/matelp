"use client"

import { useRef, useState, useEffect } from "react"
import useScrollProgress from "../../lib/useScrollProgress"
import { cn } from "../../lib/utils"
import { useT } from "../../context/LanguageContext"
import { useTheme } from "../../context/ThemeContext"
import GridBackground from "../GridBackground"

export default function DemoSection() {
  const t = useT()
  const sectionRef = useRef<HTMLElement>(null)
  const progress = useScrollProgress(sectionRef)
  const [vw, setVw] = useState(1200)
  const [vh, setVh] = useState(800)

  useEffect(() => {
    setVw(window.innerWidth)
    setVh(window.innerHeight)
  }, [])

  const splitDone = smoothstep(progress, 0.05, 0.18)
  const rectGrowX1 = smoothstep(progress, 0.05, 0.22)
  const diveIn = smoothstep(progress, 0.24, 0.35)
  const rectGrowY = smoothstep(progress, 0.32, 0.50)
  const rectGrowX2 = smoothstep(progress, 0.45, 0.62)
  const demoReveal = smoothstep(progress, 0.62, 0.76)
  const textProgress = smoothstep(progress, 0.76, 1.00)

  const { theme } = useTheme()
  const totalFeatures = Math.max(1, t.demo.items.length)
  const featureIndex = Math.min(
    Math.round(textProgress * (totalFeatures - 1)),
    totalFeatures - 1,
  )
  const splitX = splitDone * 180

  const fullGrowX = Math.max(rectGrowX1, rectGrowX2)
  const rectW = Math.max(4, 4 + fullGrowX * vw)
  const rectH = Math.max(50, 50 + rectGrowY * vh)

  return (
    <section
      ref={sectionRef}
      id="demo"
      className="relative"
      style={{ height: "500vh" }}
    >
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[color:var(--bg-page)]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-mate-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-[120px]" />
        <GridBackground />
        {/* The whole scene: "How i" + white rect + "t works" */}
        <div className="absolute inset-0">
          {/* "How i" - absolute positioned, slides left */}
          <span
            className="absolute text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight select-none whitespace-nowrap transition-colors z-10"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(calc(-100% - ${splitX + rectW / 2}px), -50%)`,
              color:
                theme === "dark"
                  ? splitDone > 0.5
                    ? "#a78bfa"
                    : "white"
                  : splitDone > 0.5
                  ? "#7c3aed"
                  : "var(--text-primary)",
              opacity: (1 - rectGrowX2) * (1 - demoReveal * 0.6),
            }}
          >
            How i
          </span>

          {/* "t works" - absolute positioned, slides right */}
          <span
            className="absolute text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight select-none whitespace-nowrap transition-colors z-10"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(${splitX + rectW / 2}px, -50%)`,
              color:
                theme === "dark"
                  ? splitDone > 0.5
                    ? "#a78bfa"
                    : "white"
                  : splitDone > 0.5
                  ? "#7c3aed"
                  : "var(--text-primary)",
              opacity: (1 - rectGrowX2) * (1 - demoReveal * 0.6),
            }}
          >
            t works
          </span>

          {/* The white element — starts as a thin vertical line, grows to fill the entire screen */}
          <div
            className="bg-[#f1eff8] dark:bg-[#16131f] flex items-center justify-center overflow-hidden transition-shadow duration-500 absolute z-0"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: rectGrowX2 > 0.99 ? "100vw" : `${rectW}px`,
              height: rectGrowY > 0.99 ? "100vh" : `${rectH}px`,
              borderRadius: rectGrowX2 > 0.9 && rectGrowY > 0.9 ? "0px" : "32px",
              opacity: progress > 0.03 ? 1 : 0,
              boxShadow: rectGrowY > 0.5
                ? "0 0 80px rgba(90, 45, 255, 0.2)"
                : "0 0 0px transparent",
            }}
          >
            {/* "Let's dive in" - centered inside the rect */}
            <span
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a0a0f] dark:text-[#f7f4ff] whitespace-nowrap absolute"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) scale(${0.8 + diveIn * 0.2})`,
                opacity: diveIn * (1 - demoReveal),
                pointerEvents: demoReveal > 0.5 ? "none" : "auto",
              }}
            >
              Let&apos;s dive in
            </span>
          </div>
        </div>

        {/* Demo content overlay - appears inside the white rect after it's big enough */}
        <div
          className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8"
          style={{ opacity: demoReveal }}
        >
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
              {/* Left: Demo video */}
              <div className="relative rounded-2xl bg-[color:var(--bg-elevated)] border border-[color:var(--border-color)] overflow-hidden shadow-[0_0_40px_rgba(90,45,255,0.12)]" style={{ aspectRatio: "16/9" }}>
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  poster="/images/thuki-logo.png"
                  src="/images/demo.mp4"
                  autoPlay
                  muted
                  playsInline
                  loop
                />
              </div>

              {/* Right: Scroll timeline features */}
              <div className="flex flex-col justify-center">
                <div className="flex gap-4 sm:gap-6 lg:gap-8">
                  {/* Vertical timeline */}
                  <div className="relative flex flex-col items-center shrink-0 pt-1">
                    <div className="w-0.5 bg-[color:var(--border-color)] rounded-full flex-1 min-h-[140px] sm:min-h-[200px]" />
                    {t.demo.items.map((_, i) => {
                      const dotPos = t.demo.items.length > 1 ? i / (t.demo.items.length - 1) : 0.5
                      return (
                        <div
                          key={i}
                          className="absolute flex items-center justify-center"
                          style={{
                            top: `${dotPos * 100}%`,
                            transform: "translateY(-50%)",
                          }}
                        >
                          <div
                            className={cn(
                              "rounded-full transition-all duration-700",
                              i === featureIndex
                                ? "w-3 h-3 bg-mate-500 shadow-[0_0_8px_rgba(139,92,246,0.4)]"
                                : i < featureIndex
                                ? "w-2 h-2 bg-[color:var(--text-secondary)]"
                                : "w-2 h-2 bg-[color:var(--border-color)]"
                            )}
                          />
                        </div>
                      )
                    })}
                  </div>

                  {/* Feature content */}
                  <div className="flex-1 space-y-4 sm:space-y-5 min-w-0">
                    <p className="text-xs uppercase tracking-widest text-[color:var(--text-muted)]">{t.demo.features}</p>

                    {/* Command badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[color:var(--bg-elevated)] border border-[color:var(--border-color)] font-mono text-sm text-[color:var(--text-secondary)]">
                      <kbd className="text-mate-600 dark:text-mate-400 font-semibold">{t.demo.items[featureIndex].cmd}</kbd>
                    </div>

                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-mate-600 dark:text-mate-400 leading-tight">
                      {t.demo.items[featureIndex].title}
                    </h3>

                    <p
                      className="leading-relaxed text-sm sm:text-base"
                      style={{
                        color: theme === "light"
                          ? "rgba(255, 255, 255, 0.85)"
                          : "rgba(255, 255, 255, 0.8)",
                      }}
                    >
                      {t.demo.items[featureIndex].desc}
                    </p>

                    {/* Feature counter */}
                    <p className="text-xs text-[color:var(--text-muted)] font-mono">
                      {String(featureIndex + 1).padStart(2, "0")} / {String(t.demo.items.length).padStart(2, "0")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-500"
          style={{ opacity: Math.max(0, 1 - progress * 3) }}
        >
          <span className="text-xs text-[color:var(--text-muted)]">Scroll to continue</span>
          <div className="w-5 h-8 rounded-full border border-[color:var(--border-color)] flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-[color:var(--text-secondary)] animate-float" />
          </div>
        </div>
      </div>
    </section>
  )
}

function smoothstep(progress: number, start: number, end: number): number {
  const t = Math.max(0, Math.min(1, (progress - start) / (end - start)))
  return t * t * (3 - 2 * t)
}
