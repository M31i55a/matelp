"use client"

import { useRef, useState, useEffect } from "react"
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

  const featureIndex = Math.min(Math.floor(textProgress * features.length), features.length - 1)
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
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#0a0a0f]">
        {/* The whole scene: "How i" + white rect + "t works" */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center relative" style={{ width: rectW + 600, maxWidth: rectGrowX2 > 0.5 ? "100%" : "90vw" }}>
            {/* "How i" - positioned to the left of the rect */}
            <span
              className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight select-none whitespace-nowrap transition-colors"
              style={{
                transform: `translateX(-${splitX}px)`,
                color: splitDone > 0.5 ? "#a78bfa" : "white",
                opacity: (1 - rectGrowX2) * (1 - demoReveal * 0.6),
              }}
            >
              How i
            </span>

            {/* The white element — starts as a thin vertical line, grows into the full rectangle */}
            <div
              className="bg-white rounded-[32px] flex items-center justify-center overflow-hidden transition-shadow duration-500 relative shrink-0"
              style={{
                width: `${rectW}px`,
                height: `${rectH}px`,
                margin: `0 ${Math.max(4, fullGrowX * 40)}px`,
                opacity: progress > 0.03 ? 1 : 0,
                borderRadius: rectGrowX2 > 0.9 ? "0px" : "32px",
                boxShadow: rectGrowY > 0.5
                  ? "0 0 80px rgba(90, 45, 255, 0.2)"
                  : "0 0 0px transparent",
              }}
            >
              {/* "Let's dive in" - centered inside the rect */}
              <span
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a0a0f] whitespace-nowrap absolute"
                style={{
                  opacity: diveIn * (1 - demoReveal),
                  transform: `scale(${0.8 + diveIn * 0.2})`,
                  pointerEvents: demoReveal > 0.5 ? "none" : "auto",
                }}
              >
                Let&apos;s dive in
              </span>
            </div>

            {/* "t works" - positioned to the right of the rect */}
            <span
              className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight select-none whitespace-nowrap transition-colors"
              style={{
                transform: `translateX(${splitX}px)`,
                color: splitDone > 0.5 ? "#a78bfa" : "white",
                opacity: (1 - rectGrowX2) * (1 - demoReveal * 0.6),
              }}
            >
              t works
            </span>
          </div>
        </div>

        {/* Demo content overlay - appears inside the white rect after it's big enough */}
        <div
          className="absolute inset-0 flex items-center justify-center p-6 sm:p-10"
          style={{ opacity: demoReveal }}
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 w-full h-full items-center pointer-events-auto">
            {/* Left: Video placeholder */}
            <div className="relative aspect-video lg:aspect-auto lg:h-full rounded-2xl bg-[#0a0a0f]/5 border border-[#0a0a0f]/10 flex items-center justify-center overflow-hidden min-h-[200px]">
              <video
                className="w-full h-full object-cover"
                poster="/images/thuki-logo.png"
                muted
                playsInline
                loop
              >
                <source src="#" type="video/mp4" />
              </video>
              <div className="absolute inset-0 flex items-center justify-center text-[#0a0a0f]/30 text-sm pointer-events-none">
                Demo video
              </div>
            </div>

            {/* Right: Auto-scrolling AI features */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest text-[#0a0a0f]/40">Features</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0a0a0f]">
                  {features[featureIndex].title}
                </h3>
              </div>
              <p className="text-[#0a0a0f]/60 leading-relaxed text-sm sm:text-base">
                {features[featureIndex].desc}
              </p>
              <div className="flex gap-2 pt-4">
                {features.map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "h-1 rounded-full transition-all duration-500",
                      i === featureIndex
                        ? "w-8 bg-mate-500"
                        : i < featureIndex
                        ? "w-2 bg-[#0a0a0f]/30"
                        : "w-2 bg-[#0a0a0f]/10"
                    )}
                  />
                ))}
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
