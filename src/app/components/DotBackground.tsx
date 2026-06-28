"use client"

import { useRef, useEffect } from "react"

interface Dot {
  x: number
  y: number
  size: number
  transparency: number
}

export default function DotBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dotSize = 3.5
    const spacing = dotSize * 3
    const minTransp = 30
    const areaOfEffect = 50

    let dots: Dot[] = []
    let mouseX = -9999
    let mouseY = -9999
    let mouseActive = false
    let mouseTimeout: ReturnType<typeof setTimeout> | null = null
    let animId: number

    function resize() {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
      dots = []
      for (let i = 0; i < canvas!.width; i += spacing * 2) {
        for (let j = 0; j < canvas!.height; j += spacing * 2) {
          dots.push({ x: i + spacing, y: j + spacing, size: dotSize, transparency: minTransp })
        }
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)

      dots.forEach((dot) => {
        const dist = Math.hypot(mouseX - dot.x, mouseY - dot.y)
        if (dist < areaOfEffect && mouseActive) {
          dot.transparency = 255
        } else {
          dot.transparency = Math.max(minTransp, dot.transparency - 10)
        }
        ctx!.fillStyle = `rgba(200, 100, 250, ${dot.transparency / 255})`
        ctx!.beginPath()
        ctx!.arc(dot.x, dot.y, dot.size / 2, 0, Math.PI * 2)
        ctx!.fill()
      })

      animId = requestAnimationFrame(draw)
    }

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX
      mouseY = e.clientY
      mouseActive = true
      if (mouseTimeout) clearTimeout(mouseTimeout)
      mouseTimeout = setTimeout(() => { mouseActive = false }, 1500)
    }

    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", onMouseMove)
    resize()
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMouseMove)
      if (mouseTimeout) clearTimeout(mouseTimeout)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}
