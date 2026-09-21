import PageHeader from '../components/PageHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import { testimonials } from '../data/testimonials.js'

export default function TestimonialsPage() {
  return (
    <div>
      <PageHeader
        kicker="Testimonials"
        title="Told by the people who hired us."
        description="No stock quotes — every line here is from a client we've delivered work for."
      />

      <section className="section">
        <div className="wrap grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="flex flex-col justify-between border border-ink/10 bg-white p-8">
              <p className="text-[16px] leading-relaxed text-ink/80">"{t.quote}"</p>
              <div className="mt-6 border-t border-ink/10 pt-5">
                <p className="font-display text-[15px] font-semibold text-ink">{t.name}</p>
                <p className="text-[13.5px] text-slate-soft">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  )
}
