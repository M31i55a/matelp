"use client"

import { useState } from "react"

const examples = [
  "Explain quantum computing in simple terms",
  "Write a Python function to sort a list",
  "Summarize this article for me",
  "Translate this to Spanish",
]

export default function TryItSection() {
  const [input, setInput] = useState("")
  const [response, setResponse] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || loading) return
    setLoading(true)
    setResponse("")
    const words = input.split(/\s+/).length
    const simulated = `Mate processes your request in real-time. (Analyzed ${words} words, generating contextual response...)`
    setTimeout(() => {
      setResponse(simulated)
      setLoading(false)
    }, 1200)
  }

  return (
    <section id="tryit" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mate-500/5 to-transparent" />
      <div className="max-w-4xl mx-auto section-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Try Mate{" "}
            <span className="text-gradient">right now</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            See the power of Mate in action. Type anything below.
          </p>
        </div>

        <div className="glow-card p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Mate anything..."
                rows={4}
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-mate-500/50 focus:ring-1 focus:ring-mate-500/30 transition-all resize-none"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {examples.map((ex) => (
                <button
                  key={ex}
                  type="button"
                  onClick={() => setInput(ex)}
                  className="px-3 py-1.5 text-xs rounded-full border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-all"
                >
                  {ex}
                </button>
              ))}
            </div>

            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-mate-500 to-purple-600 hover:from-mate-400 hover:to-purple-500 text-white font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-mate-500/25"
            >
              {loading ? "Thinking..." : "Send"}
            </button>
          </form>

          {response && (
            <div className="mt-6 p-5 rounded-xl bg-white/[0.02] border border-white/5 animate-fade-in">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-6 rounded-md bg-gradient-to-br from-mate-500 to-purple-600 flex items-center justify-center text-[10px] font-bold">
                  M
                </div>
                <span className="text-sm font-medium">Mate</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">{response}</p>
            </div>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-white/30">
          This is a demo simulation. Connect to the real API for full functionality.
        </p>
      </div>
    </section>
  )
}
