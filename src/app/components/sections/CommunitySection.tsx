"use client"

import { useT } from "../../context/LanguageContext"

const links = [
  { label: "GitHub", href: "https://github.com/M31i55a", icon: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" },
  { label: "Twitter / X", href: "https://x.com/c0de_artist", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
]

export default function CommunitySection() {
  const t = useT()
  return (
    <section id="community" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {t.community.title}{" "}
            <span className="text-gradient">{t.community.accent}</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            {t.community.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-lg mx-auto mb-16">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="glow-card p-6 flex items-center gap-4 hover:border-mate-500/30 transition-all group"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white/30 group-hover:text-mate-400 transition-colors shrink-0"
              >
                <path d={link.icon} />
              </svg>
              <span className="font-medium">{link.label}</span>
            </a>
          ))}
        </div>

        <div className="mt-16 glow-card p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold">
            {t.community.contribute}
          </h3>
          <p className="mt-3 text-white/50 max-w-lg mx-auto">
            {t.community.contributeDesc}
          </p>
          <a
            href="https://github.com/M31i55a/windowsMate-Thuki"
            className="inline-block mt-6 px-8 py-3.5 rounded-xl bg-gradient-to-r from-mate-500 to-purple-600 hover:from-mate-400 hover:to-purple-500 text-white font-medium transition-all shadow-lg shadow-mate-500/25"
          >
            {t.community.viewOnGh}
          </a>
        </div>
      </div>
    </section>
  )
}
