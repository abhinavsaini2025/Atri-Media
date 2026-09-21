import PageHeader from '../components/PageHeader.jsx'
import CTASection from '../components/CTASection.jsx'
import { insights } from '../data/insights.js'

export default function Insights() {
  return (
    <div>
      <PageHeader
        kicker="Insights"
        title="Notes from inside our client work."
        description="Short, practical write-ups on what's working and what isn't — across web, AI, marketing, and design."
      />

      <section className="section">
        <div className="wrap grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((post) => (
            <article key={post.title} className="card flex flex-col">
              <p className="text-[13px] font-medium text-violet">{post.category}</p>
              <h2 className="mt-3 font-display text-[18px] font-semibold leading-snug text-ink">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 text-[14px] leading-relaxed text-slate-soft">{post.excerpt}</p>
              <p className="mt-5 text-[13px] text-slate-soft">{post.date}</p>
            </article>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  )
}
