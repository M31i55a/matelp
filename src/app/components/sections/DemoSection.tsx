"use client"

import { useRef } from "react"
import useScrollProgress from "../../lib/useScrollProgress"
import { cn } from "../../lib/utils"

const features = [
  {
    title: "Natural Language Understanding",
    desc: "Mate comprehends context, nuance, and intent — not just keywords. It understands what you mean, not just what you say.",
  },
  {
    title: "Multi-Modal Processing",
    desc: "Analyze text, images, code, and audio simultaneously. One model, endless possibilities.",
  },
  {
    title: "Real-Time Responses",
    desc: "Streaming inference delivers answers as they're generated. No more waiting for the full response.",
  },
  {
    title: "Context-Aware Memory",
    desc: "Remembers your preferences and conversation history. Every interaction builds on the last.",
  },
  {
    title: "Developer-First API",
    desc: "REST & GraphQL endpoints with SDKs for Python, JavaScript, Rust, and Go. Integrate in minutes.",
  },
]

export default function DemoSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const progress = useScrollProgress(sectionRef)

  const lineGrow = smoothstep(progress, 0.05, 0.25)
  const splitOffset = smoothstep(progress, 0.10, 0.25)
  const diveIn = smoothstep(progress, 0.25, 0.38)
  const expand = smoothstep(progress, 0.35, 0.55)
  const demoReveal = smoothstep(progress, 0.50, 0.70)
  const textProgress = smoothstep(progress, 0.70, 1.00)

  const featureIndex = Math.min(Math.floor(textProgress * features.length), features.length - 1)

  const lineWidth = Math.max(4, 4 + lineGrow * 300)
  const splitX = splitOffset * 180

  return (
    <section
      ref={sectionRef}
      id="demo"
      className="relative"
      style={{ height: "500vh" }}
    >
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#0a0a0f]">
        {/* Stage 1 & 2: Split animation */}
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center transition-opacity duration-500",
            demoReveal > 0.9 ? "pointer-events-none" : ""
          )}
          style={{ opacity: 1 - demoReveal }}
        >
          <div className="flex items-center gap-0">
            <span
              className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight select-none transition-colors"
              style={{
                transform: `translateX(-${splitX}px)`,
                color: splitOffset > 0.5 ? "#a78bfa" : "white",
              }}
            >
              How i
            </span>

            <div
              className="bg-white rounded-full transition-all duration-100"
              style={{
                width: `${lineWidth}px`,
                height: `${Math.max(4, 60 - splitOffset * 20)}px`,
                opacity: splitOffset > 0.1 ? 1 : 0,
                margin: `0 ${lineGrow * 8}px`,
              }}
            />

            <span
              className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight select-none transition-colors"
              style={{
                transform: `translateX(${splitX}px)`,
                color: splitOffset > 0.5 ? "#a78bfa" : "white",
              }}
            >
              t works
            </span>
          </div>
        </div>

        {/* Stage 3 & 4: Expanding div overlay with "Let's dive in" and demo content */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-[32px] transition-shadow duration-500 flex items-center justify-center overflow-hidden"
          style={{
            width: `${Math.max(60, 60 + expand * (100 - 60))}%`,
            maxWidth: "1200px",
            height: `${Math.max(60, 60 + expand * (100 - 60))}%`,
            maxHeight: "800px",
            opacity: expand,
            boxShadow: expand > 0.5
              ? "0 0 80px rgba(90, 45, 255, 0.15)"
              : "0 0 0px transparent",
          }}
        >
          {/* "Let's dive in" text inside the rectangle */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              opacity: diveIn * (1 - demoReveal),
              transform: `scale(${0.9 + diveIn * 0.1})`,
              pointerEvents: demoReveal > 0.5 ? "none" : "auto",
            }}
          >
            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gradient">
              Let&apos;s dive in
            </p>
          </div>

          {/* Demo content inside */}
          <div
            className="w-full h-full flex items-center justify-center p-6 sm:p-10"
            style={{ opacity: demoReveal }}
          >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 w-full h-full items-center">
              {/* Left: Video placeholder */}
              <div className="relative aspect-video lg:aspect-auto lg:h-full rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-center overflow-hidden min-h-[200px]">
                <video
                  className="w-full h-full object-cover"
                  poster="/images/thuki-logo.png"
                  muted
                  playsInline
                  loop
                >
                  <source src="#" type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex items-center justify-center text-white/20 text-sm pointer-events-none">
                  Demo video
                </div>
              </div>

              {/* Right: Auto-scrolling AI features */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-widest text-white/30">Features</p>
                  <h3 className="text-2xl sm:text-3xl font-bold">
                    {features[featureIndex].title}
                  </h3>
                </div>
                <p className="text-white/50 leading-relaxed text-sm sm:text-base">
                  {features[featureIndex].desc}
                </p>
                <div className="flex gap-2 pt-4">
                  {features.map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "h-1 rounded-full transition-all duration-500",
                        i === featureIndex
                          ? "w-8 bg-mate-400"
                          : i < featureIndex
                          ? "w-2 bg-white/30"
                          : "w-2 bg-white/10"
                      )}
                    />
                  ))}
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
          <span className="text-xs text-white/30">Scroll to continue</span>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-white/50 animate-float" />
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
