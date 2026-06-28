const stats = [
  { label: "GitHub Stars", value: "12.5k+" },
  { label: "Discord Members", value: "8.2k+" },
  { label: "Contributors", value: "200+" },
  { label: "npm Downloads", value: "500k+" },
]

const links = [
  { label: "GitHub", href: "#", icon: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" },
  { label: "Discord", href: "#", icon: "M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2914a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" },
  { label: "Twitter / X", href: "#", icon: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
  { label: "npm", href: "#", icon: "M0 21.06V8.94h6.922l2.582 2.58 2.58-2.58h6.922v12.12H12.1v-8.496l-2.597 2.58-2.58-2.58v8.496H0zM24 8.94l-6.914 6.912h-4.183v4.194L24 8.94z" },
]

export default function CommunitySection() {
  return (
    <section id="community" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Join the{" "}
            <span className="text-gradient">community</span>
          </h2>
          <p className="mt-4 text-white/50 text-lg">
            Mate is built by developers, for developers. Be part of something bigger.
          </p>
        </div>

        <div className="grid sm:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glow-card p-6 text-center"
            >
              <div className="text-2xl font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-white/40 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
            Want to contribute?
          </h3>
          <p className="mt-3 text-white/50 max-w-lg mx-auto">
            Check out our contribution guidelines and make your first PR today.
            Every contribution counts, no matter how small.
          </p>
          <a
            href="#"
            className="inline-block mt-6 px-8 py-3.5 rounded-xl bg-gradient-to-r from-mate-500 to-purple-600 hover:from-mate-400 hover:to-purple-500 text-white font-medium transition-all shadow-lg shadow-mate-500/25"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
