import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react'
import Logo from './Logo.jsx'
import Icon from './Icon.jsx'
import { services } from '../data/services.js'

const moreLinks = [
  { label: 'Technology', to: '/technology' },
  { label: 'Agile Development', to: '/agile-development' },
  { label: 'Insights', to: '/insights' },
  { label: 'Client Case Studies', to: '/case-studies' },
  { label: 'Industry Insights', to: '/industry-insights' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Key People', to: '/key-people' },
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'Book My Technician', to: '/book-technician' },
  { label: 'Client Login', to: '/client-login' },
]

const navLinkClass = ({ isActive }) =>
  `text-[15px] font-medium transition-colors ${
    isActive ? 'text-ink' : 'text-ink/70 hover:text-ink'
  }`

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState(null)
  const location = useLocation()

  useEffect(() => {
    setOpenMenu(null)
    setMobileOpen(false)
    setMobileSection(null)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="wrap flex h-[76px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu('services')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="flex items-center gap-1 text-[15px] font-medium text-ink/70 hover:text-ink">
              Services
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {openMenu === 'services' && (
              <div className="absolute left-1/2 top-full w-[620px] -translate-x-1/2 pt-4">
                <div className="grid grid-cols-2 gap-1 border border-ink/10 bg-white p-4 shadow-[0_20px_50px_-20px_rgba(11,14,23,0.25)]">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="flex items-start gap-3 rounded-lg p-3 hover:bg-panel"
                    >
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet/10 text-violet">
                        <Icon name={s.icon} className="h-4.5 w-4.5" />
                      </span>
                      <span>
                        <span className="block text-[14.5px] font-medium text-ink">{s.name}</span>
                        <span className="block text-[13px] text-slate-soft">{s.short}</span>
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="border border-t-0 border-ink/10 bg-void p-4">
                  <Link to="/services" className="flex items-center justify-between text-[14px] font-medium text-white">
                    View all services
                    <ArrowUpRight className="h-4 w-4 text-gold" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          <NavLink to="/business" className={navLinkClass}>
            Business
          </NavLink>
          <NavLink to="/industries" className={navLinkClass}>
            Industries
          </NavLink>
          <NavLink to="/careers" className={navLinkClass}>
            Careers
          </NavLink>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu('more')}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button className="flex items-center gap-1 text-[15px] font-medium text-ink/70 hover:text-ink">
              More
              <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {openMenu === 'more' && (
              <div className="absolute right-0 top-full w-64 pt-4">
                <div className="border border-ink/10 bg-white py-2 shadow-[0_20px_50px_-20px_rgba(11,14,23,0.25)]">
                  {moreLinks.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      className="block px-5 py-2.5 text-[14.5px] text-ink/80 hover:bg-panel hover:text-ink"
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/client-login" className="text-[14.5px] font-medium text-ink/70 hover:text-ink">
            Client Login
          </Link>
          <Link to="/contact" className="btn-gold">
            Contact Now
          </Link>
        </div>

        <button
          className="grid h-10 w-10 place-items-center text-ink lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-ink/10 bg-white lg:hidden">
          <div className="wrap flex flex-col py-4">
            <Link to="/" className="py-3 text-[15px] font-medium text-ink">
              Home
            </Link>

            <button
              className="flex items-center justify-between py-3 text-left text-[15px] font-medium text-ink"
              onClick={() => setMobileSection(mobileSection === 'services' ? null : 'services')}
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform ${mobileSection === 'services' ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileSection === 'services' && (
              <div className="flex flex-col border-l border-ink/10 pl-4">
                {services.map((s) => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="py-2.5 text-[14.5px] text-ink/70">
                    {s.name}
                  </Link>
                ))}
                <Link to="/services" className="py-2.5 text-[14.5px] font-medium text-violet">
                  View all services
                </Link>
              </div>
            )}

            <Link to="/business" className="py-3 text-[15px] font-medium text-ink">
              Business
            </Link>
            <Link to="/industries" className="py-3 text-[15px] font-medium text-ink">
              Industries
            </Link>
            <Link to="/careers" className="py-3 text-[15px] font-medium text-ink">
              Careers
            </Link>

            <button
              className="flex items-center justify-between py-3 text-left text-[15px] font-medium text-ink"
              onClick={() => setMobileSection(mobileSection === 'more' ? null : 'more')}
            >
              More
              <ChevronDown
                className={`h-4 w-4 transition-transform ${mobileSection === 'more' ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileSection === 'more' && (
              <div className="flex flex-col border-l border-ink/10 pl-4">
                {moreLinks.map((l) => (
                  <Link key={l.to} to={l.to} className="py-2.5 text-[14.5px] text-ink/70">
                    {l.label}
                  </Link>
                ))}
              </div>
            )}

            <Link to="/contact" className="btn-gold mt-4 justify-center">
              Contact Now
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
