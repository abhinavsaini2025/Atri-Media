import { Mail, ArrowUpRight, Briefcase, CalendarDays } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import { openRoles as closedRoles, perks } from '../data/careers.js'

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
          <p className="kicker">Now hiring</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
            Join our business development team.
          </h2>
          <div className="mt-8 max-w-3xl border border-ink/10 bg-white p-7 md:p-9">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-display text-xl font-semibold text-ink">Business Development Executive (BDE)</p>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-slate-soft">
    
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-4 w-4 text-violet" />
                    Posted: 8 October 2026
                  </span>
                </div>
              </div>
              <span className="w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                Open
              </span>
            </div>
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-soft">
              Interested in joining us? Send your resume to our careers team to apply.
            </p>
            <a href="mailto:career@klyzydigital.com?subject=Application%20-%20Business%20Development%20Executive" className="btn-gold mt-6">
              <Mail className="h-4 w-4" />
              Apply now
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-12">
            <p className="kicker">Other roles</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-ink">Currently closed</h3>
            <div className="mt-6 divide-y divide-ink/10 border-y border-ink/10 bg-white">
              {closedRoles.map((role) => (
                <div key={role.title} className="flex flex-col gap-3 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="font-display text-[16px] font-semibold text-ink">{role.title}</p>
                    <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-slate-soft">
                      <span>{role.team}</span>
                      <span>{role.location}</span>
                      <span>{role.type}</span>
                    </div>
                  </div>
                  <span className="w-fit rounded-full bg-ink/[0.06] px-3 py-1 text-xs font-semibold text-ink/55">
                    Closed
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Not applying for this role?"
        description="You can still share your resume at career@klyzydigital.com. We’ll contact you when another suitable opening becomes available."
      />
    </div>
  )
}
