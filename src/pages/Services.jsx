import { useState, useMemo } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import CTASection from '../components/CTASection.jsx'
import { services } from '../data/services.js'

const categories = ['All', 'Build', 'Grow', 'Design', 'Support']

export default function Services() {
  const [active, setActive] = useState('All')

  const filtered = useMemo(
    () => (active === 'All' ? services : services.filter((s) => s.category === active)),
    [active],
  )

  return (
    <div>
      <PageHeader
        kicker="Products & Services"
        title="Everything it takes to launch, and everything it takes to grow."
        description="From the first line of code to the ad campaign that brings people in. Pick a service to see how we run it, or get in touch and we'll scope what you actually need."
      />

      <section className="section !pb-10">
        <div className="wrap">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-[14px] font-medium transition-colors ${
                  active === c
                    ? 'border-ink bg-ink text-white'
                    : 'border-ink/15 text-ink/70 hover:border-ink/40'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap pb-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <CTASection
        title="Not sure which service you need?"
        description="Tell us the problem, not the service name. We'll scope the right mix and send a plan within two business days."
      />
    </div>
  )
}
