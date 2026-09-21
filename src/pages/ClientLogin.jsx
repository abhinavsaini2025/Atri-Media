import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Logo from '../components/Logo.jsx'

export default function ClientLogin() {
  return (
    <div className="grid min-h-[calc(100vh-76px)] place-items-center bg-panel px-6 py-16">
      <div className="w-full max-w-sm border border-ink/10 bg-white p-8">
        <Logo />
        <h1 className="mt-7 font-display text-2xl font-semibold text-ink">Client login</h1>
        <p className="mt-2 text-[14.5px] text-slate-soft">
          Access project boards, reports, and files shared with your account.
        </p>

        <form className="mt-7 space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="mb-1.5 block text-[13.5px] font-medium text-ink/70">Email</label>
            <input type="email" required className="w-full border border-ink/15 px-4 py-2.5 text-[15px] outline-none focus:border-violet" />
          </div>
          <div>
            <label className="mb-1.5 block text-[13.5px] font-medium text-ink/70">Password</label>
            <input type="password" required className="w-full border border-ink/15 px-4 py-2.5 text-[15px] outline-none focus:border-violet" />
          </div>
          <button type="submit" className="btn-gold w-full justify-center">
            Log in
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </form>

        <p className="mt-6 text-center text-[13.5px] text-slate-soft">
          Not a client yet?{' '}
          <Link to="/contact" className="font-medium text-violet">
            Get in touch
          </Link>
        </p>
      </div>
    </div>
  )
}
