"use client"

import { useRef, useState, useEffect } from "react"
import useScrollProgress from "../../lib/useScrollProgress"
import { useT } from "../../context/LanguageContext"

export default function AboutSection() {
  const t = useT()
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
  const isMobile = vw < 640
  const initW = isMobile ? Math.min(240, vw * 0.78) : Math.min(420, vw * 0.38)
  const initH = initW / aspect
  const padX = isMobile ? 20 : 48
  const padY = isMobile ? 20 : 48
  const finalW2 = isMobile ? Math.min(vw - padX * 2, 320) : Math.min(vw * 0.8, (vh - navH - 64) * aspect)
  const finalH2 = finalW2 / aspect

  const initX = isMobile ? (vw - initW) / 2 : vw * 0.5 + (vw * 0.25 - initW / 2)
  const initY = isMobile ? vh * 0.54 : (vh - initH) / 2
  const finalX = isMobile ? (vw - finalW2) / 2 : (vw - finalW2) / 2
  const finalY = isMobile ? (vh - finalH2) / 2 + 4 : navH + (vh - navH - finalH2) / 2

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
            <div className="max-w-xl px-1 sm:px-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight relative">
                {t.about.h1}
                <br />
                <span className="text-gradient">{t.about.h2}</span>
              </h2>
              <p className="mt-6 text-white/50 text-lg leading-relaxed">
                {t.about.p1}
              </p>
              <p className="mt-4 text-white/40 text-base leading-relaxed">
                {t.about.p2}
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { labelKey: "platform" as const, valueKey: "platformVal" as const },
                  { labelKey: "engine" as const, valueKey: "engineVal" as const },
                  { labelKey: "license" as const, valueKey: "licenseVal" as const },
                  { labelKey: "status" as const, valueKey: "statusVal" as const },
                ].map((item) => (
                  <div key={item.labelKey} className="flex flex-wrap items-center gap-3 sm:gap-4">
                    <div className="w-2 h-2 rounded-full bg-mate-500 shrink-0" />
                    <span className="text-white/40 text-sm w-24 sm:w-28">{t.about[item.labelKey]}</span>
                    <span className="text-white/80 font-medium">{t.about[item.valueKey]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Video — hidden on small screens */}
        {!isMobile && (
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
        )}
      </div>
    </section>
  )
}

function smoothstep(progress: number, start: number, end: number): number {
  const t = Math.max(0, Math.min(1, (progress - start) / (end - start)))
  return t * t * (3 - 2 * t)
}
