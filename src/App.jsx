import { useState } from 'react'
import {
  ArrowRight,
  BadgeDollarSign,
  CheckCircle2,
  Play,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  TrendingUp,
  Users,
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
    <main className="relative isolate overflow-hidden">
      <div className="ambient-orb ambient-orb-left" />
      <div className="ambient-orb ambient-orb-right" />
      <div className="ambient-grid" />

      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-5 py-10 md:px-10">
        <div className="glass-card relative w-full overflow-hidden rounded-[2rem] p-6 shadow-neon md:p-10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-300/80 to-transparent" />

          <header className="mb-10 flex flex-col items-start justify-between gap-4 border-b border-violet-300/15 pb-6 md:flex-row md:items-center">
            <div className="flex items-center gap-3">
              <img src="/weetis-logo.png" alt="Weetis logo" className="h-11 w-11 rounded-xl" />
              <div>
                <p className="font-display text-lg font-bold text-white">Weetis</p>
                <p className="text-xs uppercase tracking-[0.22em] text-violet-200/70">Discovery-Commerce</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/25 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-100/95">
              <Sparkles size={14} className="text-fuchsia-300" />
              Private Beta 2026
            </div>
          </header>

          <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="space-y-8">
              <div className="space-y-5">
                <h1 className="font-display text-4xl font-bold leading-[1.06] text-transparent sm:text-5xl lg:text-6xl bg-gradient-to-r from-fuchsia-100 via-violet-100 to-pink-300 bg-clip-text">
                  Yeni Nesil Discovery-Commerce Ekosistemi
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-violet-100/78 sm:text-lg">
                  Weetis ile videolar izle, trendleri kesfet, aninda satin al ve UGC 2.0 ekonomisinde ureterek gelir elde et.
                  Icerik, topluluk ve ticaret tek bir super-app akisinda birlesiyor.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-2xl">
                <div className="glass-pill flex flex-col gap-3 rounded-2xl p-3 sm:flex-row sm:items-center">
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
                    className="h-12 w-full rounded-xl border border-transparent bg-slate-950/80 px-4 text-sm text-violet-50 placeholder:text-violet-200/45 outline-none transition focus:border-fuchsia-300/65"
                  />
                  <button type="submit" className="cta-btn group inline-flex h-12 items-center justify-center gap-2 rounded-xl px-5 font-semibold text-white">
                    Erken Erisim (Early Access)
                    <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>

                <p className="mt-3 inline-flex items-center gap-2 text-xs text-violet-100/70">
                  <CheckCircle2 size={14} className={joined ? 'text-emerald-300' : 'text-violet-300'} />
                  {joined
                    ? 'Kaydiniz alindi. Erken erisim davetini e-posta ile paylasacagiz.'
                    : 'Sinirli kontenjanli beta davetleri sirayla gonderilecektir.'}
                </p>
              </form>

              <div className="grid gap-3 sm:grid-cols-3">
                <div className="metric-card">
                  <div className="metric-title">
                    <Play size={14} />
                    Video First
                  </div>
                  Kesfetme odakli dikey reels akisi
                </div>
                <div className="metric-card">
                  <div className="metric-title">
                    <ShoppingBag size={14} />
                    Instant Buy
                  </div>
                  Videodan tek dokunusla satin alma
                </div>
                <div className="metric-card">
                  <div className="metric-title">
                    <BadgeDollarSign size={14} />
                    UGC Gelir
                  </div>
                  Ureticiler icin yeni gelir kanallari
                </div>
              </div>

              <div className="flex flex-wrap gap-3 text-xs text-violet-100/75">
                <span className="inline-flex items-center gap-1 rounded-full border border-violet-300/20 bg-slate-900/50 px-3 py-1.5">
                  <Users size={13} className="text-fuchsia-300" /> 100K+ creator hedefi
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-violet-300/20 bg-slate-900/50 px-3 py-1.5">
                  <TrendingUp size={13} className="text-fuchsia-300" /> +4.2x conversion odagi
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-violet-300/20 bg-slate-900/50 px-3 py-1.5">
                  <ShieldCheck size={13} className="text-emerald-300" /> trusted checkout
                </span>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="phone-float-card left-0 top-14 hidden xl:block">
                <p className="mb-1 text-[11px] uppercase tracking-[0.17em] text-violet-200/70">Campaign Lift</p>
                <p className="text-2xl font-bold text-white">+218%</p>
                <p className="text-xs text-violet-100/70">Creator commerce revenue</p>
              </div>

              <div className="phone-float-card right-0 top-80 hidden xl:block">
                <p className="mb-1 inline-flex items-center gap-1 text-xs text-amber-300">
                  <Star size={12} className="fill-amber-300" /> 4.9 Product Rating
                </p>
                <p className="text-xs text-violet-100/70">Top category in social shopping</p>
              </div>

              <div className="phone-glow relative w-[300px] rounded-[2.3rem] border border-fuchsia-200/25 bg-[#070510]/95 p-3.5">
                <div className="absolute left-1/2 top-1.5 h-1.5 w-20 -translate-x-1/2 rounded-full bg-violet-100/25" />
                <div className="overflow-hidden rounded-[1.9rem] border border-violet-200/20 bg-[#0f0b1f]">
                  <div className="relative h-[540px]">
                    <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-400/28 via-violet-500/20 to-[#0c0818]" />
                    <div className="absolute inset-0 p-4">
                      <div className="mb-3 flex items-center justify-between text-[11px] text-violet-100/85">
                        <span className="inline-flex items-center gap-1 rounded-full bg-black/35 px-2 py-1">
                          <Play size={12} className="fill-violet-200 text-violet-200" />
                          LIVE FEED
                        </span>
                        <span className="rounded-full border border-violet-200/20 bg-black/35 px-2 py-1">For You</span>
                      </div>

                      <div className="h-[350px] rounded-2xl border border-violet-100/20 bg-gradient-to-br from-violet-300/25 via-fuchsia-300/20 to-pink-300/20 p-3">
                        <div className="h-full rounded-xl border border-violet-50/20 bg-black/25 p-3">
                          <div className="mb-3 flex items-center gap-2 text-xs text-violet-100/85">
                            <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-fuchsia-400 to-violet-500" />
                            @trend.lab
                          </div>
                          <p className="text-sm text-white/90">Yeni drop acildi. Reels icinden tek tikla satin al, yarin kapinda olsun.</p>
                        </div>
                      </div>

                      <button type="button" className="cta-btn mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white">
                        <ShoppingBag size={16} /> Buy Now
                      </button>

                      <div className="mt-4 flex items-center justify-between rounded-xl border border-violet-100/20 bg-black/40 px-3 py-2 text-xs text-violet-100/80">
                        <span className="inline-flex items-center gap-1">
                          <ShieldCheck size={14} className="text-emerald-300" /> Trusted Checkout
                        </span>
                        <span>3 sec payment</span>
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
