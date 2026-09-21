import PageHeader from '../components/PageHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import { caseStudies } from '../data/caseStudies.js'

export default function CaseStudiesPage() {
  return (
    <div>
      <PageHeader
        kicker="Client Case Studies"
        title="What the work actually produced."
        description="A few of the projects we can talk about publicly — with the numbers, not just the before-and-after screenshots."
      />

      <section className="section space-y-6">
        <div className="wrap space-y-6">
          {caseStudies.map((c) => (
            <div key={c.client} className="border border-ink/10 bg-white p-8 md:p-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-xl">
                  <p className="text-[13px] font-medium text-violet">{c.industry} · {c.client}</p>
                  <h2 className="mt-3 font-display text-2xl font-semibold leading-snug text-ink">
                    {c.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-relaxed text-slate-soft">{c.summary}</p>
                </div>
                <div className="flex shrink-0 gap-6 border-t border-ink/10 pt-6 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
                  {c.results.map((r) => (
                    <div key={r.label}>
                      <p className="font-display text-2xl font-semibold text-ink">{r.value}</p>
                      <p className="mt-1 max-w-[8rem] text-[12.5px] leading-snug text-slate-soft">{r.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Want to be the next result on this page?"
        description="Tell us what you're trying to move — traffic, leads, revenue, or retention — and we'll show you how we'd approach it."
      />
    </div>
  )
}
