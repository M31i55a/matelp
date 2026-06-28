"use client"

import { useRef, useEffect } from "react"

interface Neighbor {
  row: number
  col: number
  opacity: number
}

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const CELL_SIZE = 40
    const COLOR_R = 30
    const COLOR_G = 14
    const COLOR_B = 100
    const STARTING_ALPHA = 100
    const AMT_FADE = 3
    const PROB = 0.5

    let numRows = 0
    let numCols = 0
    let currentRow = -1
    let currentCol = -1
    let allNeighbors: Neighbor[] = []
    let animId: number

    function resize() {
      canvas!.width = window.innerWidth
      canvas!.height = window.innerHeight
      numRows = Math.ceil(canvas!.height / CELL_SIZE)
      numCols = Math.ceil(canvas!.width / CELL_SIZE)
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height)

      const row = Math.floor(mouseY / CELL_SIZE)
      const col = Math.floor(mouseX / CELL_SIZE)

      if (row !== currentRow || col !== currentCol) {
        currentRow = row
        currentCol = col
        allNeighbors.push(...getRandomNeighbors(row, col))
        ctx!.strokeStyle = `rgba(${COLOR_R}, ${COLOR_G}, ${COLOR_B}, ${STARTING_ALPHA})`
        ctx!.lineWidth = 1
        ctx!.strokeRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE)
      }

      for (const n of allNeighbors) {
        n.opacity = Math.max(0, n.opacity - AMT_FADE)
        ctx!.strokeStyle = `rgba(${COLOR_R}, ${COLOR_G}, ${COLOR_B}, ${n.opacity})`
        ctx!.lineWidth = 1
        ctx!.strokeRect(n.col * CELL_SIZE, n.row * CELL_SIZE, CELL_SIZE, CELL_SIZE)
      }

      allNeighbors = allNeighbors.filter((n) => n.opacity > 0)
      animId = requestAnimationFrame(draw)
    }

    function getRandomNeighbors(row: number, col: number): Neighbor[] {
      const neighbors: Neighbor[] = []
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          const nr = row + dr
          const nc = col + dc
          const isCurrent = dr === 0 && dc === 0
          const inBounds = nr >= 0 && nr < numRows && nc >= 0 && nc < numCols
          if (!isCurrent && inBounds && Math.random() < PROB) {
            neighbors.push({ row: nr, col: nc, opacity: STARTING_ALPHA })
          }
        }
      }
      return neighbors
    }

    let mouseX = -9999
    let mouseY = -9999

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", onMouseMove)
    resize()
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
