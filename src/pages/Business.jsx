import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import CTASection from '../components/CTASection.jsx'

const tracks = [
  {
    name: 'Startups & Founders',
    detail:
      'A launch-ready website or app, built fast, plus the early marketing to get your first hundred customers.',
  },
  {
    name: 'Growing Businesses',
    detail:
      'You have traction. We take over the parts slowing you down — a rebuild, a paid channel, a content engine.',
  },
  {
    name: 'Enterprise Teams',
    detail:
      'Multi-brand marketing, AI tooling, and product work run through a dedicated pod and a single account lead.',
  },
]

const engagements = [
  { name: 'Project-based', detail: 'A fixed scope, fixed price, and a fixed end date — for a single build or campaign.' },
  { name: 'Monthly retainer', detail: 'Ongoing marketing, content, or maintenance, billed and reported monthly.' },
  { name: 'Embedded pod', detail: 'A dedicated team of two to four people working inside your roadmap full-time.' },
]

export default function Business() {
  return (
    <div>
      <PageHeader
        kicker="For Business"
        title="Built to work with how your business actually operates."
        description="Whether you're pre-launch or running a marketing team of your own, we shape the engagement — not a fixed package — around your stage and budget."
      />

      <section className="section">
        <div className="wrap">
          <p className="kicker">Who we work with</p>
          <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold leading-tight md:text-4xl">
            Three stages, three ways of working.
          </h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {tracks.map((t) => (
              <div key={t.name} className="card">
                <p className="font-display text-[18px] font-semibold text-ink">{t.name}</p>
                <p className="mt-3 text-[14.5px] leading-relaxed text-slate-soft">{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-panel">
        <div className="wrap grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="kicker">How you can hire us</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
              Three ways to engage.
            </h2>
            <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-slate-soft">
              Most clients start project-based and move to a retainer once the first build is live.
              There's no pressure to commit to more than the current phase needs.
            </p>
          </div>
          <div className="space-y-0">
            {engagements.map((e, i) => (
              <div key={e.name} className="flex gap-5 border-t border-ink/10 bg-white p-6 first:border-t-0">
                <p className="font-display text-sm text-slate-soft">0{i + 1}</p>
                <div>
                  <p className="font-display text-[16px] font-semibold text-ink">{e.name}</p>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-slate-soft">{e.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap flex flex-col items-start justify-between gap-6 border border-ink/10 p-10 lg:flex-row lg:items-center">
          <div>
            <p className="font-display text-2xl font-semibold text-ink">See the full service list</p>
            <p className="mt-2 text-[15px] text-slate-soft">Twelve services, each with a clear process and deliverables.</p>
          </div>
          <Link to="/services" className="btn-line shrink-0">
            View services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
