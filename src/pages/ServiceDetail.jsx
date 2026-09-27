import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowUpRight, ArrowLeft, Check } from 'lucide-react'
import { services, getServiceBySlug } from '../data/services.js'
import Icon from '../components/Icon.jsx'
import CTASection from '../components/CTASection.jsx'

const serviceHeroBackgrounds = {
  'website-development': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80',
  'app-development': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1600&q=80',
  'ai-tool-development': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80',
  'performance-marketing': 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
  'social-media-management': 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1600&q=80',
  'video-photo-editing': 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80',
  'ui-ux-design': 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=80',
  'seo-content-strategy': 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1600&q=80',
  'creative-branding': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
  'retainer-support': 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1600&q=80',
  'launch-strategy': 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
  'automation-systems': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) return <Navigate to="/services" replace />

  const related = services.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 3)
  const heroImage = serviceHeroBackgrounds[service.slug] || serviceHeroBackgrounds['website-development']

  return (
    <div>
      <section className="relative isolate overflow-hidden bg-void text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,14,23,0.9)_0%,rgba(11,14,23,0.8)_40%,rgba(11,14,23,0.74)_100%)]" />

        <div className="wrap relative z-10 py-16 md:py-20">
          <Link to="/services" className="flex items-center gap-1.5 text-[14px] text-white/75 hover:text-white">
            <ArrowLeft className="h-3.5 w-3.5" />
            All services
          </Link>

          <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="grid h-12 w-12 place-items-center rounded-full bg-gold/15 text-gold">
                <Icon name={service.icon} className="h-6 w-6" />
              </span>
              <p className="kicker mt-5 text-gold">{service.category}</p>
              <h1 className="mt-2 max-w-xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-white md:text-5xl xl:text-[64px]">
                {service.name}
              </h1>
              <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-white/75">
                {service.description}
              </p>
              <Link to="/contact" className="btn-gold mt-8 inline-flex">
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="shrink-0 border border-white/15 bg-black/20 p-6 backdrop-blur-sm">
              <p className="font-display text-4xl font-semibold text-gold">{service.stat.value}</p>
              <p className="mt-1 text-[13.5px] text-white/70">{service.stat.label}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="kicker">What's included</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink">Deliverables</h2>
            <ul className="mt-6 space-y-4">
              {service.deliverables.map((d) => (
                <li key={d} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-violet/15 text-violet">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-ink/80">{d}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="kicker">How we run it</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink">Our process</h2>
            <div className="mt-6 space-y-0">
              {service.process.map((p, i) => (
                <div key={p.step} className="flex gap-5 border-t border-ink/10 py-5 first:border-t-0">
                  <p className="font-display text-sm text-slate-soft">0{i + 1}</p>
                  <div>
                    <p className="font-display text-[16px] font-semibold text-ink">{p.step}</p>
                    <p className="mt-1.5 text-[14.5px] leading-relaxed text-slate-soft">{p.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section bg-panel !pt-0">
          <div className="wrap">
            <p className="kicker">Pairs well with</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink">Related services</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {related.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="card">
                  <Icon name={s.icon} className="h-5 w-5 text-violet" />
                  <p className="mt-4 font-display text-[16px] font-semibold text-ink">{s.name}</p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate-soft">{s.short}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Ready to start with ${service.name.toLowerCase()}?`}
        description="Send us a few lines about the project. We'll come back with a scoped plan and a straight answer on timeline and cost."
      />
    </div>
  )
}
