import { MapPin, Briefcase } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import { openRoles, perks } from '../data/careers.js'

export default function Careers() {
  return (
    <div>
      <PageHeader
        kicker="Careers"
        title="Work on the parts of a business that people actually see."
        description="Small pods, direct client contact, and enough variety that no two months look the same. We're always open to hearing from people who do strong work."
      />

      <section className="section">
        <div className="wrap">
          <p className="kicker">Why join</p>
          <h2 className="mt-3 max-w-lg font-display text-3xl font-semibold leading-tight md:text-4xl">
            What it's actually like here.
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p) => (
              <div key={p.title} className="card">
                <p className="font-display text-[16px] font-semibold text-ink">{p.title}</p>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-soft">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-panel !pt-0">
        <div className="wrap">
          <p className="kicker">Open roles</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
            Current openings.
          </h2>
          <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
            {openRoles.map((role) => (
              <div
                key={role.title}
                className="flex flex-col gap-3 bg-white px-2 py-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <p className="font-display text-[17px] font-semibold text-ink">{role.title}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-[13.5px] text-slate-soft">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5" /> {role.team}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" /> {role.location}
                    </span>
                    <span>{role.type}</span>
                  </div>
                </div>
                <a href="mailto:careers@klyzydigital.com" className="btn-line shrink-0">
                  Apply
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Don't see the right role?"
        description="We keep a running list of strong applicants for when a seat opens. Send your portfolio to careers@klyzydigital.com."
      />
    </div>
  )
}
