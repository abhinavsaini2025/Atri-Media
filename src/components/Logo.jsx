import { Link } from 'react-router-dom'

export default function Logo({ light = false }) {
  return (
    <Link to="/" className="flex shrink-0 items-center">
      <img
        src="/logo.jpeg"
        alt="Klyzy Digital logo"
        className="h-10 w-auto max-w-[220px] object-contain"
      />
    </Link>
  )
}
