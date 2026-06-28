import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mate 2.0 — Your Intelligent Companion",
  description: "Mate 2.0 redefines how you interact with intelligent systems. Fast, open, and built for everyone.",
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
      <body className="min-h-screen bg-[#0a0a0f] text-white">{children}</body>
    </html>
  )
}
