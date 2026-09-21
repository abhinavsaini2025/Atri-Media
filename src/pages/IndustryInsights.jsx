import PageHeader from '../components/PageHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import Icon from '../components/Icon.jsx'
import { industries } from '../data/industries.js'

const notes = {
  'D2C & E-commerce': 'Retention marketing now outperforms pure acquisition spend for most stores we work with — a rebuilt post-purchase flow often beats a new ad channel.',
  'SaaS & Tech': 'Buyers expect a working demo before a sales call. Product marketing sites are doing more of the selling than the sales team.',
  'Hospitality & Travel': 'Short-form video of the actual property outperforms professional photography for direct bookings by a wide margin.',
  'Healthcare & Wellness': 'Trust signals — real staff photos, clear credentials, plain-language copy — move conversion more than design polish.',
  'Real Estate': 'Listings with a virtual tour get meaningfully more qualified inquiries than photo-only listings in the same area.',
  'Education & EdTech': 'Enrollment funnels that show real outcomes data convert better than ones that lead with campus photos.',
  'Finance & Fintech': 'Security and compliance messaging placed early in the funnel reduces drop-off at the sign-up step.',
  'Food & Beverage': 'A fast, simple ordering flow beats a beautifully designed one that adds extra taps to checkout.',
}

export default function IndustryInsights() {
  return (
    <div>
      <PageHeader
        kicker="Industry Insights"
        title="What's actually moving the needle, sector by sector."
        description="Patterns we're seeing across current client work — updated as campaigns and builds run their course."
      />

      <section className="section">
        <div className="wrap space-y-5">
          {industries.map((ind) => (
            <div key={ind.name} className="flex flex-col gap-5 border border-ink/10 bg-white p-7 sm:flex-row sm:items-start">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-dim">
                <Icon name={ind.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-[16.5px] font-semibold text-ink">{ind.name}</p>
                <p className="mt-2 text-[14.5px] leading-relaxed text-slate-soft">{notes[ind.name]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  )
}
