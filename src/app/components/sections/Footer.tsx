export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-mate-500 to-purple-500 flex items-center justify-center text-xs font-bold">
                M
              </div>
              <span className="font-semibold">Mate 2.0</span>
            </div>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Your intelligent companion. Open source, privacy-first, and built for the future.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {["Features", "API", "Pricing", "Changelog"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/40 hover:text-mate-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Community</h4>
            <ul className="space-y-2">
              {["GitHub", "Discord", "Twitter", "npm"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/40 hover:text-mate-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms of Service", "License"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-white/40 hover:text-mate-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">&copy; {currentYear} Mate. All rights reserved.</p>
          <p className="text-xs text-white/20">Built with care by the Mate Team</p>
        </div>
      </div>
    </footer>
  )
}
