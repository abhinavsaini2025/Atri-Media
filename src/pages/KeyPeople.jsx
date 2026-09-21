import PageHeader from '../components/PageHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import { team } from '../data/team.js'

export default function KeyPeople() {
  return (
    <div>
      <PageHeader
        kicker="Key People"
        title="The people you'll actually work with."
        description="Small enough that you'll know every lead on your project by name."
      />

      <section className="section">
        <div className="wrap grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((p) => (
            <div key={p.name} className="card">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-void font-display text-[15px] font-semibold text-gold">
                {p.initials}
              </span>
              <p className="mt-5 font-display text-[17px] font-semibold text-ink">{p.name}</p>
              <p className="mt-0.5 text-[13.5px] font-medium text-violet">{p.role}</p>
              <p className="mt-3 text-[14px] leading-relaxed text-slate-soft">{p.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  )
}
