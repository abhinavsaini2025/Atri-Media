import { Link } from 'react-router-dom'
import { ArrowUpRight, Check } from 'lucide-react'
import { services } from '../data/services.js'
import { testimonials } from '../data/testimonials.js'
import { industries } from '../data/industries.js'
import { caseStudies } from '../data/caseStudies.js'
import { insights } from '../data/insights.js'
import ServiceCard from '../components/ServiceCard.jsx'
import CTASection from '../components/CTASection.jsx'
import Icon from '../components/Icon.jsx'

const stats = [
  { value: '120+', label: 'projects delivered' },
  { value: '40+', label: 'clients served' },
  { value: '3.8x', label: 'avg. return on ad spend' },
  { value: '5', label: 'years in business' },
]

const process = [
  { step: 'Discover', detail: 'We start with your goals and constraints, not a template.' },
  { step: 'Plan', detail: 'A scoped plan with timeline, deliverables, and one point of contact.' },
  { step: 'Build', detail: 'Sprint-based work with something to review every week.' },
  { step: 'Grow', detail: 'Launch, then the ongoing marketing and support that keeps it working.' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-void text-white">
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          src="/herobanner.mp4"
        />
        <div className="pointer-events-none absolute inset-0 bg-void/50" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.15]"
          style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #F2B84B 1px, transparent 0)', backgroundSize: '26px 26px' }}
        />
        {/* <div className="pointer-events-none absolute -right-24 top-16 hidden h-[420px] w-[420px] animate-spinSlow rounded-full border border-gold/20 md:block" />
        <div className="pointer-events-none absolute -right-6 top-40 hidden h-[220px] w-[220px] rounded-full border border-violet/25 md:block" />
        <div className="pointer-events-none absolute right-24 top-28 hidden h-3 w-3 animate-drift rounded-full bg-gold md:block" />
        <div className="pointer-events-none absolute right-64 top-72 hidden h-2 w-2 animate-drift rounded-full bg-violet [animation-delay:1.5s] md:block" /> */}

        <div className="wrap relative z-10 grid gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.8fr]">
          <div>
            <p className="kicker text-gold">Websites · Apps · AI · Marketing</p>
            <h1 className="mt-4 max-w-xl font-display text-[42px] font-semibold leading-[1.08] text-white md:text-[58px]">
              Your Goals Are Closer Than You Think.
            </h1>
            <p className="mt-6 max-w-md text-[17px] leading-relaxed text-white/65">
              Klyzy Digital designs and builds your website, app, and AI tools — then runs the
              performance marketing, social, and content that put them in front of people.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">
                Contact Now
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/services" className="btn-line-light">
                See our services
              </Link>
            </div>

          </div>

          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="wrap">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="kicker">What we do</p>
              <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold leading-tight md:text-4xl">
                Twelve services. One team to coordinate them.
              </h2>
            </div>
            <Link to="/services" className="flex items-center gap-1.5 text-[15px] font-medium text-ink/70 hover:text-ink">
              View all services
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact snapshot */}
      <section className="section overflow-hidden bg-panel">
        <div className="wrap">
          <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="relative overflow-hidden bg-ink p-8 text-white md:p-10">
              <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full border-[28px] border-gold/20" />
              <div className="pointer-events-none absolute -bottom-10 -right-6 h-40 w-40 rounded-full border border-violet/30" />
              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <p className="text-sm font-medium text-gold">The work speaks for itself</p>
                  <h2 className="mt-5 max-w-xs font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
                    Small team. Serious momentum.
                  </h2>
                </div>
                <div className="mt-16">
                  <span className="block h-px w-16 bg-gold" />
                  <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/60">
                    Every number reflects a business that moved forward with a clearer digital
                    presence and one team behind it.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group relative overflow-hidden border border-ink/10 bg-white p-7 transition-transform duration-200 hover:-translate-y-1 md:p-8"
                >
                  <span className="font-display text-xs font-semibold tracking-[0.2em] text-violet">
                    0{index + 1}
                  </span>
                  <p className="mt-8 font-display text-4xl font-semibold text-ink md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 max-w-[10rem] text-[13px] leading-snug text-slate-soft">{stat.label}</p>
                  <span className="absolute -bottom-5 -right-5 h-20 w-20 rounded-full bg-gold/15 transition-transform duration-200 group-hover:scale-150" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="section bg-void text-white">
        <div className="wrap">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="kicker text-gold">Selected work</p>
              <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
                Real Results Real Impact
              </h2>
            </div>
            <Link to="/case-studies" className="flex items-center gap-1.5 text-[15px] font-medium text-white/70 hover:text-white">
              See all case studies
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.client} className="border border-white/15 bg-white/[0.06] p-7">
                <p className="text-[13px] font-medium text-gold">{study.industry} · {study.client}</p>
                <h3 className="mt-4 font-display text-xl font-semibold leading-snug text-white">{study.title}</h3>
                <p className="mt-4 text-[14px] leading-relaxed text-white/60">{study.summary}</p>
                <div className="mt-7 grid grid-cols-3 gap-4 border-t border-white/10 pt-5">
                  {study.results.map((result) => (
                    <div key={result.label}>
                      <p className="font-display text-xl font-semibold text-white">{result.value}</p>
                      <p className="mt-1 text-[11.5px] leading-snug text-white/50">{result.label}</p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="section">
        <div className="wrap">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="kicker">From the studio</p>
              <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold leading-tight md:text-4xl">
                Klyzy News
              </h2>
            </div>
            <Link to="/insights" className="flex items-center gap-1.5 text-[15px] font-medium text-ink/70 hover:text-ink">
              Read all insights
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {insights.slice(0, 3).map((post) => (
              <article key={post.title} className="card flex flex-col">
                <p className="text-[13px] font-medium text-violet">{post.category}</p>
                <h3 className="mt-3 font-display text-[18px] font-semibold leading-snug text-ink">{post.title}</h3>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-slate-soft">{post.excerpt}</p>
                <p className="mt-5 text-[13px] text-slate-soft">{post.date}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Klyzy Digital */}
      <section className="section bg-panel">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="kicker">Why Klyzy Digital</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
              One studio instead of five vendors.
            </h2>
            <p className="mt-5 max-w-md text-[16px] leading-relaxed text-slate-soft">
              Most businesses end up stitching together a web agency, an app developer, a
              marketing freelancer, and a video editor — none of whom talk to each other. Klyzy
              Digital runs all of it under one roof, one calendar, and one point of contact.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'A single point of contact across every discipline',
                'Design, build, and marketing teams that share one brand brief',
                'Work reported against numbers you actually care about',
                'Retainers built around your stage, not a fixed package',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold/20 text-gold-dim">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[15px] text-ink/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {process.map((p, i) => (
              <div key={p.step} className="border border-ink/10 bg-white p-6">
                <p className="font-display text-sm text-slate-soft">0{i + 1}</p>
                <p className="mt-3 font-display text-[17px] font-semibold text-ink">{p.step}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-slate-soft">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="wrap">
          <p className="kicker">Industries</p>
          <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold leading-tight md:text-4xl">
            Built for the businesses that keep us busiest.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((ind) => (
              <div key={ind.name} className="bg-white p-6">
                <Icon name={ind.icon} className="h-5 w-5 text-violet" />
                <p className="mt-4 font-display text-[15.5px] font-semibold text-ink">{ind.name}</p>
                <p className="mt-2 text-[13.5px] leading-relaxed text-slate-soft">{ind.detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/industries" className="flex items-center gap-1.5 text-[15px] font-medium text-ink/70 hover:text-ink">
              View all industries
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-panel">
        <div className="wrap">
          <p className="kicker">Client feedback</p>
          <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold leading-tight md:text-4xl">
            What it is like to work with us.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.slice(0, 3).map((t) => (
              <div key={t.name} className="flex flex-col justify-between border border-ink/10 bg-white p-7">
                <p className="text-[15px] leading-relaxed text-ink/80">"{t.quote}"</p>
                <div className="mt-6">
                  <p className="font-display text-[14.5px] font-semibold text-ink">{t.name}</p>
                  <p className="text-[13px] text-slate-soft">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Your Goals Are Closer Than You Think."
        description="Tell us what you are trying to achieve, and we will map the clearest path from where you are now to what comes next."
      />
    </div>
  )
}
