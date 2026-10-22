import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Logo from '../components/Logo.jsx'

export default function ClientLogin() {
  const [isChecking, setIsChecking] = useState(false)
  const [loginError, setLoginError] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoginError('')
    setIsChecking(true)

    await new Promise((resolve) => window.setTimeout(resolve, 900))

    setIsChecking(false)
    setLoginError('No client account was found for these details. Check your email and password, or contact us if you need access.')
  }

  return (
    <div className="grid min-h-[calc(100vh-76px)] place-items-center bg-panel px-6 py-16">
      <div className="w-full max-w-sm border border-ink/10 bg-white p-8">
        <Logo />
        <h1 className="mt-7 font-display text-2xl font-semibold text-ink">Client login</h1>
        <p className="mt-2 text-[14.5px] text-slate-soft">
          Access project boards, reports, and files shared with your account.
        </p>

        <form className="mt-7 space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="client-login-email" className="mb-1.5 block text-[13.5px] font-medium text-ink/70">Email</label>
            <input id="client-login-email" name="email" type="email" autoComplete="username" required className="w-full border border-ink/15 px-4 py-2.5 text-[15px] outline-none focus:border-violet" />
          </div>
          <div>
            <label htmlFor="client-login-password" className="mb-1.5 block text-[13.5px] font-medium text-ink/70">Password</label>
            <input id="client-login-password" name="password" type="password" autoComplete="current-password" required className="w-full border border-ink/15 px-4 py-2.5 text-[15px] outline-none focus:border-violet" />
          </div>
          {loginError && (
            <p className="rounded-lg bg-red-50 px-3 py-2.5 text-[13px] leading-relaxed text-red-700" role="alert">
              {loginError}{' '}
              <Link to="/contact" className="font-semibold underline underline-offset-2">
                Contact us
              </Link>
            </p>
          )}
          <button type="submit" disabled={isChecking} className="btn-gold w-full justify-center disabled:cursor-wait disabled:opacity-70">
            {isChecking ? 'Checking account...' : 'Log in'}
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
