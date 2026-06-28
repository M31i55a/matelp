"use client"

import { useState, useEffect, useRef, type RefObject } from "react"

export default function useScrollProgress(ref: RefObject<HTMLElement | null>): number {
  const [progress, setProgress] = useState(0)
  const raf = useRef<number>(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onScroll = () => {
      raf.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        const scrollable = el.offsetHeight - window.innerHeight
        if (scrollable <= 0) {
          setProgress(1)
          return
        }
        const p = Math.max(0, Math.min(1, -rect.top / scrollable))
        setProgress(p)
      })
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(raf.current)
    }
  }, [ref])

  return progress
}
