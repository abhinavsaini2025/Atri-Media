import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="grid min-h-[calc(100vh-76px)] place-items-center bg-void px-6 text-center text-white">
      <div>
        <p className="font-display text-6xl font-bold text-gold">404</p>
        <h1 className="mt-4 font-display text-2xl font-semibold">This page doesn't exist.</h1>
        <p className="mt-3 text-white/60">The link may be broken, or the page may have moved.</p>
        <Link to="/" className="btn-gold mt-8 inline-flex">
          Back to home
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
