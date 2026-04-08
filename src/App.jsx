import { useState } from 'react'
import {
  ArrowRight,
  BadgeDollarSign,
  Play,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
} from 'lucide-react'

function App() {
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!email.trim()) {
      return
    }

    setJoined(true)
    setEmail('')
  }

  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-20 top-28 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-16 h-80 w-80 rounded-full bg-violet-400/20 blur-3xl" />

      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-12 md:px-10">
        <div className="glass-card relative w-full overflow-hidden rounded-3xl p-7 shadow-neon md:p-10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-300/70 to-transparent" />

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/25 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-100/90">
                <Sparkles size={14} className="text-fuchsia-300" />
                Weetis Coming Soon
              </div>

              <div className="space-y-4">
                <h1 className="font-display text-4xl font-bold leading-tight text-transparent sm:text-5xl lg:text-6xl bg-gradient-to-r from-fuchsia-200 via-violet-200 to-pink-300 bg-clip-text">
                  Yeni Nesil Discovery-Commerce Ekosistemi
                </h1>
                <p className="max-w-xl font-body text-base leading-relaxed text-violet-100/75 sm:text-lg">
                  Weetis ile videolar izle, trendleri kesfet, aninda satin al ve UGC 2.0 ekonomisinde
                  ureterek gelir elde et. Kesintisiz feed deneyimi ile icerik ve ticaret tek bir akista bulusuyor.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-xl">
                <div className="flex flex-col gap-3 sm:flex-row">
                  <label className="sr-only" htmlFor="waitlist-email">
                    E-posta adresi
                  </label>
                  <input
                    id="waitlist-email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="E-posta adresiniz"
                    className="h-14 w-full rounded-xl border border-violet-300/30 bg-slate-950/70 px-5 text-sm text-violet-100 placeholder:text-violet-200/40 outline-none transition focus:border-fuchsia-300/70 focus:ring-2 focus:ring-fuchsia-300/30"
                  />
                  <button
                    type="submit"
                    className="group inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-purple-500 to-pink-500 px-6 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:scale-[1.01] hover:shadow-[0_18px_35px_-16px_rgba(236,72,153,0.7)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300"
                  >
                    Erken Erisim (Early Access)
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
                <p className="mt-3 text-xs text-violet-200/65">
                  {joined
                    ? 'Kaydiniz alindi. Erken erisim daveti yayina yaklasirken e-posta ile gonderilecek.'
                    : 'Beta davetleri sinirli kontenjanla sirayla gonderilecektir.'}
                </p>
              </form>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-violet-300/20 bg-slate-950/40 px-4 py-3 text-sm text-violet-100/85">
                  <div className="mb-1 flex items-center gap-2 text-fuchsia-300">
                    <Play size={15} />
                    Video First
                  </div>
                  Kesfetme odakli dikey reels akisi
                </div>
                <div className="rounded-xl border border-violet-300/20 bg-slate-950/40 px-4 py-3 text-sm text-violet-100/85">
                  <div className="mb-1 flex items-center gap-2 text-fuchsia-300">
                    <ShoppingBag size={15} />
                    Instant Buy
                  </div>
                  Videodan tek dokunusla satin alma
                </div>
                <div className="rounded-xl border border-violet-300/20 bg-slate-950/40 px-4 py-3 text-sm text-violet-100/85">
                  <div className="mb-1 flex items-center gap-2 text-fuchsia-300">
                    <BadgeDollarSign size={15} />
                    UGC Gelir
                  </div>
                  Ureticiler icin yeni gelir kanallari
                </div>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="absolute h-60 w-60 rounded-full bg-pink-400/25 blur-3xl" />
              <div className="phone-glow relative w-[290px] rounded-[2.2rem] border border-fuchsia-200/25 bg-[#090712]/95 p-3">
                <div className="absolute left-1/2 top-1.5 h-1.5 w-20 -translate-x-1/2 rounded-full bg-violet-200/25" />
                <div className="overflow-hidden rounded-[1.8rem] border border-violet-200/15 bg-[#0f0b1f]">
                  <div className="relative h-[520px]">
                    <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-400/25 via-violet-500/20 to-[#0d0a1c]" />
                    <div className="absolute inset-0 p-4">
                      <div className="mb-3 flex items-center justify-between text-[11px] text-violet-100/80">
                        <span className="inline-flex items-center gap-1 rounded-full bg-black/35 px-2 py-1">
                          <Play size={12} className="fill-violet-200 text-violet-200" />
                          LIVE FEED
                        </span>
                        <span className="rounded-full border border-violet-200/20 bg-black/35 px-2 py-1">For You</span>
                      </div>

                      <div className="h-[330px] rounded-2xl border border-violet-200/20 bg-gradient-to-br from-violet-300/20 via-fuchsia-300/15 to-pink-300/20 p-3">
                        <div className="h-full rounded-xl border border-violet-50/20 bg-black/20 p-3">
                          <div className="mb-2 flex items-center gap-2 text-xs text-violet-100/75">
                            <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-fuchsia-400 to-violet-500" />
                            @creator_trendlab
                          </div>
                          <p className="text-sm text-violet-50/90">Yeni drop acildi. Simdi dene, reels icinde aninda satin al.</p>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 to-pink-500 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30"
                      >
                        <ShoppingBag size={16} />
                        Buy Now
                      </button>

                      <div className="mt-4 flex items-center justify-between rounded-xl border border-violet-200/20 bg-black/35 px-3 py-2 text-xs text-violet-100/75">
                        <span className="inline-flex items-center gap-1">
                          <ShieldCheck size={14} className="text-emerald-300" />
                          Trusted Checkout
                        </span>
                        <span>+4.2x CVR</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
