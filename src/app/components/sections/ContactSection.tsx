"use client"

import { useState } from "react"
import { useT } from "../../context/LanguageContext"

export default function ContactSection() {
  const t = useT()
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
            {t.contact.title}{" "}
            <span className="text-gradient">{t.contact.accent}</span>
          </h2>
          <p className="mt-4 text-[color:var(--text-secondary)] text-lg">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="glow-card p-5 sm:p-8">
          {submitted ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-mate-500/20 border border-mate-500/30 flex items-center justify-center mx-auto">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-mate-400">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{t.contact.sentTitle}</h3>
              <p className="mt-2 text-white/50">{t.contact.sentDesc}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm text-[color:var(--text-secondary)] mb-2">{t.contact.name}</label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full bg-[color:var(--bg-elevated)] border border-[color:var(--border-color)] rounded-xl px-4 py-3 text-[color:var(--text-primary)] placeholder:[color:var(--text-muted)] focus:outline-none focus:border-mate-500/50 transition-all"
                    placeholder={t.contact.namePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-[color:var(--text-secondary)] mb-2">{t.contact.email}</label>
                  <input
                    id="email"
                    type="email"
                    required
                    className="w-full bg-[color:var(--bg-elevated)] border border-[color:var(--border-color)] rounded-xl px-4 py-3 text-[color:var(--text-primary)] placeholder:[color:var(--text-muted)] focus:outline-none focus:border-mate-500/50 transition-all"
                    placeholder={t.contact.emailPlaceholder}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm text-[color:var(--text-secondary)] mb-2">{t.contact.subject}</label>
                <input
                  id="subject"
                  type="text"
                  required
                  className="w-full bg-[color:var(--bg-elevated)] border border-[color:var(--border-color)] rounded-xl px-4 py-3 text-[color:var(--text-primary)] placeholder:[color:var(--text-muted)] focus:outline-none focus:border-mate-500/50 transition-all"
                  placeholder={t.contact.subjectPlaceholder}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-[color:var(--text-secondary)] mb-2">{t.contact.message}</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full bg-[color:var(--bg-elevated)] border border-[color:var(--border-color)] rounded-xl px-4 py-3 text-[color:var(--text-primary)] placeholder:[color:var(--text-muted)] focus:outline-none focus:border-mate-500/50 transition-all resize-none"
                  placeholder={t.contact.messagePlaceholder}
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-mate-500 to-purple-600 hover:from-mate-400 hover:to-purple-500 text-white font-medium transition-all shadow-lg shadow-mate-500/25"
              >
                {t.contact.send}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
