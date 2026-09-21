import PageHeader from '../components/PageHeader.jsx'
import CTASection from '../components/CTASection.jsx'

const cycle = [
  { title: 'Weekly sprints', detail: 'Work is broken into one-week sprints with a clear goal for each.' },
  { title: 'Monday planning', detail: 'A short call to confirm priorities and flag anything blocking progress.' },
  { title: 'Friday demo', detail: 'You see working software or finished creative every single week.' },
  { title: 'Continuous backlog', detail: 'Requests get triaged and slotted in, not lost in an inbox.' },
]

export default function AgileDevelopment() {
  return (
    <div>
      <PageHeader
        kicker="Agile Development"
        title="A stripped-down agile process, built for small teams."
        description="Full Scrum ceremonies don't fit a four-person build pod. We keep the parts that matter — visibility, short cycles, working demos — and skip the rest."
      />

      <section className="section">
        <div className="wrap grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cycle.map((c, i) => (
            <div key={c.title} className="card">
              <p className="font-display text-sm text-slate-soft">0{i + 1}</p>
              <p className="mt-3 font-display text-[16px] font-semibold text-ink">{c.title}</p>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-soft">{c.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-panel">
        <div className="wrap max-w-2xl">
          <p className="kicker">Why it works</p>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight">
            You always know what's happening and when it ships.
          </h2>
          <p className="mt-5 text-[15.5px] leading-relaxed text-slate-soft">
            Every project gets a shared board you can view anytime, a named lead you can reach
            directly, and a demo at the end of every sprint — so "is this on track" is never a
            question you have to ask.
          </p>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
