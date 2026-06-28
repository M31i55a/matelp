"use client"

import { useState } from "react"

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-mate-500/5 to-transparent" />
      <div className="max-w-4xl mx-auto section-padding">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Get in{" "}
            <span className="text-gradient">touch</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            Have questions, ideas, or just want to say hi? We&apos;d love to hear from you.
          </p>
        </div>

        <div className="glow-card p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-mate-500/20 border border-mate-500/30 flex items-center justify-center mx-auto">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-mate-400">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold">Message sent!</h3>
              <p className="mt-2 text-white/50">We&apos;ll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/60 mb-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-mate-500/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-white/60 mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-mate-500/50 transition-all"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm text-white/60 mb-2">Subject</label>
                <input
                  id="subject"
                  type="text"
                  required
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-mate-500/50 transition-all"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-white/60 mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-mate-500/50 transition-all resize-none"
                  placeholder="Tell us more..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-mate-500 to-purple-600 hover:from-mate-400 hover:to-purple-500 text-white font-medium transition-all shadow-lg shadow-mate-500/25"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
