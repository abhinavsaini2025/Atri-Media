import PageHeader from '../components/PageHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import Icon from '../components/Icon.jsx'
import { industries } from '../data/industries.js'

export default function Industries() {
  return (
    <div>
      <PageHeader
        kicker="Industries"
        title="Sector context, applied to your project from day one."
        description="We don't reinvent our process for every client, but we do bring what we've learned from your industry's buyers, compliance needs, and content habits."
      />

      <section className="section">
        <div className="wrap grid gap-px overflow-hidden border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <div key={ind.name} className="bg-white p-7">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-violet/10 text-violet">
                <Icon name={ind.icon} className="h-5 w-5" />
              </span>
              <p className="mt-5 font-display text-[16px] font-semibold text-ink">{ind.name}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-soft">{ind.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Don't see your industry?"
        description="That's fine — most of what we do transfers. Tell us about your business and we'll tell you honestly if we're a fit."
      />
    </div>
  )
}
