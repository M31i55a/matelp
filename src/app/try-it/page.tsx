import Navbar from "../components/Navbar"
import Footer from "../components/sections/Footer"

export default function TryItPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Get Started with{" "}
              <span className="text-gradient">Mate</span>
            </h1>
            <p className="mt-4 text-lg text-white/50 max-w-2xl mx-auto">
              Set up your AI engine, choose your mode, and start using Mate in minutes.
            </p>
          </div>

          {/* Step 1 */}
          <section className="glow-card p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-mate-500 to-purple-600 text-white font-bold text-lg shrink-0">1</span>
              <div>
                <h2 className="text-2xl font-bold">Set Up Your AI Engine</h2>
                <p className="text-white/40 text-sm">
                  Mate ships with gemma4:e2b by default. Choose how you want to run it.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {/* Option A */}
              <div className="rounded-xl bg-white/[0.02] border border-white/5 p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 text-xs font-semibold rounded-md bg-mate-500/20 text-mate-300">Recommended</span>
                  <h3 className="text-lg font-semibold">Option A: Local Ollama</h3>
                </div>
                <p className="text-white/50 text-sm mb-4">
                  Ollama runs AI models directly on your PC. It&apos;s free, open-source, and takes about 5 minutes to set up.
                </p>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-white/70 mb-1">1. Install Ollama</p>
                    <p className="text-sm text-white/40">Download and install from <a href="https://ollama.com" className="text-mate-400 hover:underline">ollama.com</a></p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/70 mb-1">2. Pull a model</p>
                    <div className="bg-[#0a0a0f] rounded-lg p-3 font-mono text-sm text-white/70">
                      ollama pull gemma4:e2b
                    </div>
                    <p className="text-sm text-white/40 mt-1">Model files are 2–8 GB. This may take a few minutes.</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white/70 mb-1">3. Verify the model is ready</p>
                    <div className="bg-[#0a0a0f] rounded-lg p-3 font-mono text-sm text-white/70">
                      ollama list
                    </div>
                    <p className="text-sm text-white/40 mt-1">Once your model is listed, Ollama is ready and Mate will connect to it automatically.</p>
                  </div>
                </div>
              </div>

              {/* Option B */}
              <div className="rounded-xl bg-white/[0.02] border border-white/5 p-6">
                <h3 className="text-lg font-semibold mb-3">Option B: Docker Sandbox</h3>
                <p className="text-white/50 text-sm mb-4">
                  For the strongest possible isolation. Runs the model in a hardened container — no internet access, no filesystem writes, no trace when stopped.
                </p>
                <p className="text-sm text-white/40 mb-3">Prerequisite: <a href="https://www.docker.com/get-started" className="text-mate-400 hover:underline">Docker Desktop</a></p>
                <div className="bg-[#0a0a0f] rounded-lg p-3 font-mono text-sm text-white/70">
                  bun run sandbox:start
                </div>
                <p className="text-sm text-white/40 mt-1">To stop and wipe all model data: <span className="font-mono text-xs">bun run sandbox:stop</span></p>
              </div>

              {/* Option C */}
              <div className="rounded-xl bg-white/[0.02] border border-white/5 p-6">
                <h3 className="text-lg font-semibold mb-3">Option C: Online Models via OpenRouter</h3>
                <p className="text-white/50 text-sm mb-4">
                  No local install needed. Connect to GPT-4o, Claude Sonnet 4, Gemini 2.5, and more — bring your own API key.
                </p>
                <ol className="space-y-2 text-sm text-white/50 list-decimal list-inside">
                  <li>Create a free account at <a href="https://openrouter.ai" className="text-mate-400 hover:underline">openrouter.ai</a> and copy your API key</li>
                  <li>Launch Mate, open the model picker, and switch to <strong>Online</strong> mode</li>
                  <li>Paste your API key and pick a model</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Step 2 */}
          <section className="glow-card p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-mate-500 to-purple-600 text-white font-bold text-lg shrink-0">2</span>
              <div>
                <h2 className="text-2xl font-bold">Install Mate</h2>
                <p className="text-white/40 text-sm">
                  Choose the easiest way for you.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl bg-white/[0.02] border border-white/5 p-6">
                <h3 className="text-lg font-semibold mb-3">Download (Recommended)</h3>
                <p className="text-white/50 text-sm mb-4">
                  Download the installer from the latest release on GitHub.
                </p>
                <a
                  href="https://github.com/M31i55a/windowsMate-Thuki/releases/latest"
                  className="inline-flex px-6 py-3 rounded-xl bg-gradient-to-r from-mate-500 to-purple-600 hover:from-mate-400 hover:to-purple-500 text-white font-medium text-sm transition-all shadow-lg shadow-mate-500/25"
                >
                  Download Mate
                </a>
              </div>

              <div className="rounded-xl bg-white/[0.02] border border-white/5 p-6">
                <h3 className="text-lg font-semibold mb-3">Build from Source</h3>
                <p className="text-white/50 text-sm mb-3">
                  Prerequisites: <a href="https://bun.sh" className="text-mate-400 hover:underline">Bun</a>, <a href="https://rustup.rs" className="text-mate-400 hover:underline">Rust</a>, and optionally <a href="https://www.docker.com/get-started" className="text-mate-400 hover:underline">Docker</a>
                </p>
                <div className="space-y-2">
                  <div className="bg-[#0a0a0f] rounded-lg p-3 font-mono text-sm text-white/70">
                    git clone https://github.com/M31i55a/Mate2.0-Thuki.git<br />
                    cd Mate2.0-Thuki<br />
                    bun install<br />
                    bun run dev
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Step 3 (Optional) */}
          <section className="glow-card p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-mate-500 to-purple-600 text-white font-bold text-lg shrink-0 opacity-60">3</span>
              <div>
                <h2 className="text-2xl font-bold">Set Up Search (Optional)</h2>
                <p className="text-white/40 text-sm">
                  Required only if you want to use the /search command.
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-white/[0.02] border border-white/5 p-6">
              <p className="text-white/50 text-sm mb-3">Prerequisite: <a href="https://www.docker.com/get-started" className="text-mate-400 hover:underline">Docker Desktop</a> must be running.</p>
              <div className="bg-[#0a0a0f] rounded-lg p-3 font-mono text-sm text-white/70">
                bun run search-box:start
              </div>
              <p className="text-sm text-white/40 mt-1">Without this service, /search will be disabled but all other features remain available.</p>
            </div>
          </section>

          {/* Back link */}
          <div className="text-center mt-12">
            <a href="/" className="text-white/40 hover:text-white transition-colors text-sm">
              &larr; Back to home
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
