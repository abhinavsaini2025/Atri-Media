import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function CTASection({
  title = 'Have a project in mind?',
  description = 'Tell us what you are building — website, app, AI tool, or a campaign — and we will reply within one business day.',
}) {
  return (
    <section className="section bg-void text-white">
      <div className="wrap relative overflow-hidden">
        <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border border-gold/20" />
        <div className="pointer-events-none absolute -right-4 -top-8 h-40 w-40 rounded-full border border-violet/25" />
        <div className="relative max-w-xl">
          <h2 className="font-display text-3xl font-semibold leading-tight md:text-4xl">{title}</h2>
          <p className="mt-4 text-[16px] leading-relaxed text-white/65">{description}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="btn-gold">
              Contact Now
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link to="/book-technician" className="btn-line-light">
              Book a call
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
