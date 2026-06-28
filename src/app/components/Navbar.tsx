"use client"

import { useState, useEffect } from "react"
import { cn } from "../lib/utils"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Try It", href: "#tryit" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-mate-500 to-purple-500 flex items-center justify-center text-sm font-bold">
              M
            </div>
            <span className="text-lg font-semibold tracking-tight">
              Mate <span className="text-mate-400">2.0</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#tryit"
              className="ml-4 px-5 py-2 text-sm font-medium rounded-xl bg-gradient-to-r from-mate-500 to-purple-600 hover:from-mate-400 hover:to-purple-500 text-white transition-all shadow-lg shadow-mate-500/25"
            >
              Get Started
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0a0a0f]/95 backdrop-blur-xl">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm text-white/70 hover:text-white rounded-lg hover:bg-white/5 transition-all"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#tryit"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-center text-sm font-medium rounded-xl bg-gradient-to-r from-mate-500 to-purple-600 text-white mt-3"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
