import { useForm, ValidationError } from '@formspree/react'
import {
  ArrowRight,
  CheckCircle2,
  Gamepad2,
  Globe,
  Plane,
  Play,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Wallet,
} from 'lucide-react'

const featureCards = [
  {
    title: 'Swipe Store',
    description: 'Tinder mantigiyla urunleri saga-sola kaydir, saniyeler icinde en dogru urunu kesfet.',
    Icon: Smartphone,
  },
  {
    title: 'Mirror Video',
    description: 'Cloudflare Stream altyapili dikey UGC akisinda kesintisiz izle, aninda urune gec.',
    Icon: Play,
  },
  {
    title: 'Aninda Kazanc',
    description: 'Fintech motoru ile kazancini canli takip et. Cekim alt limiti yalnizca 200 TL.',
    Icon: Wallet,
  },
]

const badgeItems = [
  { label: 'Evrensel Ag', Icon: Globe },
  { label: 'Steam & Oyun', Icon: Gamepad2 },
  { label: 'Booking.com', Icon: Plane },
  { label: 'Yasal Odeme', Icon: ShieldCheck },
]

function App() {
  const [state, handleSubmit] = useForm('xzdkwaqy')

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-slate-950 text-violet-50">
      <div className="ambient-grid" />
      <div className="ambient-orb ambient-orb-left blur-3xl" />
      <div className="ambient-orb ambient-orb-right blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-500/20 blur-3xl" />

      <section className="mx-auto flex w-full max-w-7xl items-center px-5 py-10 md:px-10 lg:min-h-screen">
        <div className="glass-card relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/40 p-6 shadow-[0_28px_90px_-40px_rgba(236,72,153,0.75)] backdrop-blur-xl md:p-10">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-300/80 to-transparent" />

          <header className="mb-10 flex flex-col gap-4 border-b border-violet-300/20 pb-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <img src="/weetis-logo.png" alt="Weetis logo" className="h-11 w-11 rounded-xl border border-white/10" />
              <div>
                <p className="font-display text-lg font-bold text-white">Weetis</p>
                <p className="text-xs uppercase tracking-[0.24em] text-violet-200/70">Discovery-Commerce / UGC 2.0</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 rounded-full border border-violet-300/30 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-fuchsia-100/95">
              <Sparkles size={14} className="text-fuchsia-300" />
              Private Beta 2026
            </div>
          </header>

          <div className="grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr]">
            <div className="space-y-8">
              <div className="space-y-5">
                <h1 className="bg-gradient-to-r from-fuchsia-100 via-violet-100 to-pink-300 bg-clip-text text-4xl font-bold leading-[1.05] text-transparent sm:text-5xl lg:text-6xl">
                  Kesfet, Izle, Kazan:
                  <br />
                  Weetis Discovery-Commerce Ekosistemi
                </h1>
                <p className="max-w-2xl text-base leading-relaxed text-violet-100/80 sm:text-lg">
                  Weetis; Swipe Store, Mirror Navigasyon ve Herkes Icin Kazanc modelini tek akisda birlestirir.
                  Cloudflare Stream tabanli UGC 2.0 deneyimiyle urunu kesfet, videodan satin al, Fintech motoru ile
                  kazancini yasal ve seffaf sekilde takip et.
                </p>
                <p className="max-w-2xl text-sm leading-relaxed text-violet-200/70">
                  Moda ile sinirli degil: Steam oyunlari, Booking seyahat paketleri, Hepsiburada ve Amazon TR dahil
                  evrensel afiliye kategorilerinden gelir firsati.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-2xl">
                <div className="glass-pill flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/50 p-3 sm:flex-row sm:items-center">
                  <label className="sr-only" htmlFor="waitlist-email">
                    E-posta adresi
                  </label>
                  <input
                    id="waitlist-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="Erken erisim icin e-posta adresiniz"
                    className="h-12 w-full rounded-xl border border-transparent bg-slate-950/50 px-4 text-sm text-violet-50 placeholder:text-violet-200/45 outline-none transition focus:border-fuchsia-400/70"
                  />
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="cta-btn group inline-flex h-12 items-center justify-center gap-2 rounded-xl px-5 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    Erken Erisim Al
                    <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>

                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="mt-2 text-xs text-rose-300"
                />
                <ValidationError
                  errors={state.errors}
                  className="mt-2 text-xs text-rose-300"
                />

                <p className="mt-3 inline-flex items-center gap-2 text-xs text-violet-100/75">
                  <CheckCircle2 size={14} className={state.succeeded ? 'text-emerald-300' : 'text-violet-300'} />
                  {state.succeeded
                    ? 'Kaydin alindi. Beta davetini e-posta ile paylasacagiz.'
                    : 'Sinirli kontenjan: onaylanan kullanicilar sirayla davet edilir.'}
                </p>
              </form>

              <div className="grid gap-3 sm:grid-cols-3">
                {featureCards.map((card) => {
                  const IconComponent = card.Icon

                  return (
                    <article key={card.title} className="metric-card border border-white/10 bg-slate-900/40 backdrop-blur-sm">
                      <p className="metric-title">
                        <IconComponent size={14} />
                        {card.title}
                      </p>
                      <p>{card.description}</p>
                    </article>
                  )
                })}
              </div>

              <div className="flex flex-wrap gap-3 text-xs text-violet-100/80">
                {badgeItems.map((badge) => {
                  const BadgeIcon = badge.Icon

                  return (
                    <span
                      key={badge.label}
                      className="inline-flex items-center gap-1 rounded-full border border-violet-300/30 bg-slate-900/60 px-3 py-1.5"
                    >
                      <BadgeIcon size={13} className="text-fuchsia-300" />
                      {badge.label}
                    </span>
                  )
                })}
              </div>
            </div>

            <div className="relative flex items-center justify-center pt-4 lg:pt-0">
              <div className="phone-float-card -left-4 top-6 hidden border-emerald-300/35 bg-emerald-500/10 text-emerald-100 xl:block">
                <p className="mb-1 text-[11px] uppercase tracking-[0.17em] text-emerald-200/90">Canli Cuzdan</p>
                <p className="text-xl font-bold">Cuzdan Bakiyesi: ₺ 450.00</p>
                <p className="text-xs text-emerald-100/85">200 TL baraji gecildi</p>
              </div>

              <div className="phone-float-card -right-4 top-72 hidden xl:block">
                <p className="mb-1 text-[11px] uppercase tracking-[0.17em] text-violet-200/80">Kampanya Etkisi</p>
                <p className="text-2xl font-bold text-white">4.2x</p>
                <p className="text-xs text-violet-100/75">Donusum Orani: 4.2x Artis</p>
              </div>

              <div className="phone-glow relative w-[300px] rounded-[2.3rem] border border-fuchsia-200/25 bg-[#070510]/95 p-3.5 sm:w-[325px]">
                <div className="absolute left-1/2 top-1.5 h-1.5 w-20 -translate-x-1/2 rounded-full bg-violet-100/25" />
                <div className="overflow-hidden rounded-[1.9rem] border border-violet-200/20 bg-[#0f0b1f]">
                  <div className="relative h-[560px]">
                    <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-400/28 via-violet-500/20 to-[#0c0818]" />
                    <div className="absolute inset-0 p-4">
                      <div className="mb-3 flex items-center justify-between text-[11px] text-violet-100/85">
                        <span className="inline-flex items-center gap-1 rounded-full bg-black/35 px-2 py-1">
                          <Play size={12} className="fill-violet-200 text-violet-200" />
                          MIRROR LIVE
                        </span>
                        <span className="rounded-full border border-violet-200/20 bg-black/35 px-2 py-1">Cloudflare Stream</span>
                      </div>

                      <div className="h-[360px] rounded-2xl border border-violet-100/20 bg-gradient-to-br from-violet-300/25 via-fuchsia-300/20 to-pink-300/20 p-3">
                        <div className="h-full rounded-xl border border-violet-50/20 bg-black/25 p-3">
                          <div className="mb-3 flex items-center gap-2 text-xs text-violet-100/85">
                            <span className="h-8 w-8 rounded-full bg-gradient-to-tr from-fuchsia-400 to-violet-500" />
                            @mirror.creator
                          </div>
                          <p className="text-sm text-white/90">
                            Swipe Store ile urun kesfet. Mirror Navigasyon ile videodan cikmadan satin al.
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="cta-btn mt-4 flex w-full items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white"
                      >
                        <ShoppingBag size={16} />
                        Simdi Satin Al
                      </button>

                      <div className="mt-4 flex items-center justify-between rounded-xl border border-violet-100/20 bg-black/40 px-3 py-2 text-xs text-violet-100/80">
                        <span className="inline-flex items-center gap-1">
                          <ShieldCheck size={14} className="text-emerald-300" />
                          Fenomio odeme modeli / yasal
                        </span>
                        <span>Anlik kazanc takibi</span>
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
