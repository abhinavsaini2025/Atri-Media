import PageHeader from '../components/PageHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import { team } from '../data/team.js'

export default function KeyPeople() {
  return (
    <div>
      <PageHeader
        kicker="Leadership"
        title="Leadership with a clear point of view."
        description="Meet the people guiding Klyzy Digital and shaping how we work with our clients."
      />

      <section className="section bg-paper">
        <div className="wrap">
          {/* Section intro */}
          <div className="mx-auto max-w-2xl text-center">
            <p className="kicker">Three pillars of leadership</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              The people behind the direction
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-slate-soft md:text-base">
              Each leader owns a pillar of Klyzy Digital, so every client engagement is guided by
              clear responsibility and a shared vision.
            </p>
            <div className="mx-auto mt-6 h-px w-16 bg-gold" />
          </div>

          {/* Leader rows */}
          <div className="mt-14 space-y-8 md:space-y-10">
            {team.map((leader, index) => {
              const reversed = index % 2 === 1
              return (
                <article
                  key={leader.name}
                  className="group grid overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition-all duration-300 hover:border-violet/30 hover:shadow-xl hover:shadow-ink/[0.06] md:grid-cols-5"
                >
                  {/* Portrait */}
                  <div
                    className={`relative min-h-[320px] overflow-hidden bg-void md:col-span-2 md:min-h-[440px] ${reversed ? 'md:order-2' : ''
                      }`}
                  >
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void/85 via-void/10 to-transparent" />

                    <span
                      aria-hidden="true"
                      className="absolute right-5 top-3 font-display text-7xl font-bold leading-none text-white/20 md:text-8xl"
                    >
                      0{index + 1}
                    </span>

                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block rounded-full bg-gold px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-void">
                        {leader.role}
                      </span>
                      <h3 className="mt-3 font-display text-2xl font-semibold leading-snug text-white md:text-3xl">
                        {leader.name}
                      </h3>
                    </div>
                  </div>

                  {/* Details */}
                  <div
                    className={`flex flex-col justify-center gap-8 p-7 md:col-span-3 md:p-10 ${reversed ? 'md:order-1' : ''
                      }`}
                  >
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-violet">
                        Pillar
                      </p>
                      <h4 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                        {leader.pillar}
                      </h4>
                      <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-soft md:text-base">
                        {leader.focus}
                      </p>
                    </div>

                    <blockquote className="relative rounded-xl border-l-4 border-gold bg-paper p-6">
                      <span
                        aria-hidden="true"
                        className="absolute right-5 top-2 font-display text-6xl leading-none text-gold/30"
                      >
                        &rdquo;
                      </span>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink md:text-base">
                        {leader.vision}
                      </p>
                    </blockquote>

                    <div className="flex items-center gap-3">
                      <span className="h-px flex-1 bg-ink/10" />
                      <span className="h-2 w-2 rounded-full bg-violet" />
                      <span className="h-2 w-2 rounded-full bg-gold" />
                      <span className="h-2 w-2 rounded-full bg-ink/20" />
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}