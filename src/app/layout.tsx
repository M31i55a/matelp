import type { Metadata } from "next"
import "./globals.css"
import SmoothScroll from "./components/SmoothScroll"
import { LanguageProvider } from "./context/LanguageContext"
import { ThemeProvider } from "./context/ThemeContext"

export const metadata: Metadata = {
  title: "Mate 2.0 — Your Intelligent Companion",
  description: "Mate 2.0 redefines how you interact with intelligent systems. Fast, open, and built for everyone.",
  icons: {
    icon: "/images/thuki-logo.png",
  },
  openGraph: {
    title: "Mate 2.0",
    description: "Your Intelligent Companion",
    type: "website",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className="min-h-screen bg-[color:var(--bg-page)] text-[color:var(--text-primary)] transition-colors duration-300"><ThemeProvider><LanguageProvider><SmoothScroll>{children}</SmoothScroll></LanguageProvider></ThemeProvider></body>
    </html>
  )
}
