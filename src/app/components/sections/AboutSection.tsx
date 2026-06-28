"use client"

import { useRef, useState, useEffect } from "react"
import useScrollProgress from "../../lib/useScrollProgress"

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const progress = useScrollProgress(sectionRef)
  const [vw, setVw] = useState(1200)
  const [vh, setVh] = useState(800)

  useEffect(() => {
    setVw(window.innerWidth)
    setVh(window.innerHeight)
  }, [])

  const textFade = 1 - smoothstep(progress, 0, 0.35)
  const anim = smoothstep(progress, 0, 0.5)

  const navH = 80
  const aspect = 16 / 9
  const initW = Math.min(420, vw * 0.38)
  const initH = initW / aspect
  const padX = 48
  const padY = 48
  const finalW = Math.min(vw - padX * 2, (vh - navH - padY * 2) * aspect)
  const finalH = finalW / aspect
  const finalW2 = Math.min(vw * 0.8, (vh - navH - 64) * aspect)
  const finalH2 = finalW2 / aspect

  const initX = vw * 0.5 + (vw * 0.25 - initW / 2)
  const initY = (vh - initH) / 2
  const finalX = (vw - finalW2) / 2
  const finalY = navH + (vh - navH - finalH2) / 2

  const x = initX + (finalX - initX) * anim
  const y = initY + (finalY - initY) * anim
  const w = initW + (finalW2 - initW) * anim
  const h = initH + (finalH2 - initH) * anim

  return (
    <section ref={sectionRef} id="about" className="relative" style={{ height: "300vh" }}>
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#0a0a0f]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mate-500/5 to-transparent" />
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-mate-500/10 rounded-full blur-[80px]" />
        <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px]" />

        {/* Text content — fades out */}
        <div
          className="absolute inset-0 flex items-center transition-opacity duration-300"
          style={{ opacity: textFade, pointerEvents: textFade < 0.5 ? "none" : "auto" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight relative">
                Local-first.
                <br />
                <span className="text-gradient">Privacy-first.</span>
              </h2>
              <p className="mt-6 text-white/50 text-lg leading-relaxed">
                Mate is a floating AI secretary for Windows — fully local with
                Ollama. No API keys, no subscriptions, no cloud, no telemetry.
                Free forever.
              </p>
              <p className="mt-4 text-white/40 text-base leading-relaxed">
                Your conversations stay on your machine in a local SQLite database.
                Once your model is pulled, Mate runs completely offline. Optionally
                connect OpenRouter if you need cloud models — you stay in control
                of what leaves your device.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { label: "Platform", value: "Windows 10 / 11" },
                  { label: "Engine", value: "Ollama (Local)" },
                  { label: "License", value: "Apache 2.0" },
                  { label: "Status", value: "In Development" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-mate-500" />
                    <span className="text-white/40 text-sm w-28">{item.label}</span>
                    <span className="text-white/80 font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Video — grows and centers */}
        <div
          className="absolute pointer-events-none"
          style={{
            left: x,
            top: y,
            width: w,
            height: h,
            borderRadius: anim > 0.99 ? 16 : 12 + 4 * (1 - anim),
            overflow: "hidden",
            border: anim < 0.95 ? "1px solid rgba(255,255,255,0.1)" : "none",
            transition: "border-radius 0.3s",
          }}
        >
          <video
            className="w-full h-full object-cover"
            src="/images/demo1.mp4"
            autoPlay
            muted
            playsInline
            loop
          />
        </div>
      </div>
    </section>
  )
}

function smoothstep(progress: number, start: number, end: number): number {
  const t = Math.max(0, Math.min(1, (progress - start) / (end - start)))
  return t * t * (3 - 2 * t)
}
