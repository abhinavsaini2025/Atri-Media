import PageHeader from '../components/PageHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import Icon from '../components/Icon.jsx'

const stack = [
  { group: 'Front end', items: ['React', 'Next.js', 'Tailwind CSS', 'React Native'], icon: 'Code2' },
  { group: 'Back end', items: ['Node.js', 'Python', 'PostgreSQL', 'Supabase'], icon: 'Server' },
  { group: 'AI & data', items: ['OpenAI / Claude APIs', 'Vector databases', 'LangChain', 'Custom fine-tuning'], icon: 'BrainCircuit' },
  { group: 'Infrastructure', items: ['AWS', 'Vercel', 'Docker', 'GitHub Actions'], icon: 'Cloud' },
]

export default function Technology() {
  return (
    <div>
      <PageHeader
        kicker="Technology"
        title="A stack chosen for reliability, not resume-building."
        description="We pick tools based on what will still be maintainable in three years — boring where it should be boring, modern where it earns its place."
      />

      <section className="section">
        <div className="wrap grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((s) => (
            <div key={s.group} className="card">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/15 text-gold-dim">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <p className="mt-5 font-display text-[16px] font-semibold text-ink">{s.group}</p>
              <ul className="mt-3 space-y-1.5">
                {s.items.map((i) => (
                  <li key={i} className="text-[14px] text-slate-soft">{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-panel">
        <div className="wrap grid gap-10 lg:grid-cols-2">
          <div>
            <p className="kicker">Engineering standards</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink">How we build</h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-slate-soft">
              Code reviews on every pull request, staging environments before anything touches
              production, and documentation written for the next developer — even if that's you,
              a year from now.
            </p>
          </div>
          <div>
            <p className="kicker">Security</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink">How we protect it</h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-slate-soft">
              Access control by default, encrypted secrets, and dependency scanning on every
              build. AI tools we ship include logging and guardrails, not just a raw API call.
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
