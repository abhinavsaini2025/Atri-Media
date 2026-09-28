import PageHeader from '../components/PageHeader.jsx'
import CTASection from '../components/CTASection.jsx'

const timeline = [
  { year: '2021', event: 'Klyzy Digital started as a two-person web design shop in Dehradun.' },
  { year: '2022', event: 'Added performance marketing after clients kept asking who could run their ads too.' },
  { year: '2023', event: 'Built our first mobile app and grew the creative team to handle video in-house.' },
  { year: '2024', event: 'Shipped our first AI-powered client tool — a support copilot for a fintech client.' },
  { year: '2026', event: 'Now a 20-person studio running full-stack digital work for 40+ active clients.' },
]

const values = [
  { title: 'Direct communication', detail: 'You talk to the person doing the work, not an account manager relaying messages.' },
  { title: 'Numbers over opinions', detail: 'We report against the metric that actually matters to your business, every time.' },
  { title: 'Built to last', detail: 'No throwaway code or campaigns. Everything we ship is meant to still work next year.' },
]

export default function About() {
  return (
    <div>
      <PageHeader
        kicker="About Us"
        title="A studio built by people who got tired of hiring five vendors."
        description="Klyzy Digital is an Indian multinational IT company specializing in digital business transformation, AI, and internet-related products and services. We bring web, app, marketing, and creative work together in one team."
      />

      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-2">
          <div>
            <p className="kicker">Our story</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink">How we got here</h2>
            <div className="mt-6 space-y-0">
              {timeline.map((t, i) => (
                <div key={t.year} className="flex gap-5 border-t border-ink/10 py-5 first:border-t-0">
                  <p className="font-display text-[15px] font-semibold text-gold-dim">{t.year}</p>
                  <p className="text-[14.5px] leading-relaxed text-ink/80">{t.event}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="kicker">What we believe</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink">Our values</h2>
            <div className="mt-6 space-y-5">
              {values.map((v) => (
                <div key={v.title} className="border border-ink/10 bg-white p-6">
                  <p className="font-display text-[16px] font-semibold text-ink">{v.title}</p>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-slate-soft">{v.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
