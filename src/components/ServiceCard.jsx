import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Icon from './Icon.jsx'

export default function ServiceCard({ service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="card group flex flex-col justify-between border-t-2 border-t-transparent hover:border-t-gold"
    >
      <div>
        <span className="grid h-11 w-11 place-items-center rounded-full bg-violet/10 text-violet">
          <Icon name={service.icon} className="h-5 w-5" />
        </span>
        <h3 className="mt-5 font-display text-[19px] font-semibold text-ink">{service.name}</h3>
        <p className="mt-2 text-[14.5px] leading-relaxed text-slate-soft">{service.short}</p>
      </div>
      <div className="mt-6 flex items-center gap-1.5 text-[14px] font-medium text-ink/70 group-hover:text-violet">
        Learn more
        <ArrowUpRight className="h-4 w-4" />
      </div>
    </Link>
  )
}
