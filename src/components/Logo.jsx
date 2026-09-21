import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-2.5 shrink-0">
      <svg width="30" height="30" viewBox="0 0 64 64" className="shrink-0">
        <circle cx="32" cy="32" r="19" fill="none" stroke="#F2B84B" strokeWidth="2.5" />
        <circle cx="32" cy="13" r="4.5" fill="#F2B84B" />
        <circle cx="32" cy="32" r="4" fill="#6C63FF" />
      </svg>
      <span
        className={`font-display text-[21px] font-bold tracking-tight ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        ATRI <span className="font-normal text-slate-soft">Media</span>
      </span>
    </Link>
  )
}
