import { Link } from 'react-router-dom'
import { Instagram, Linkedin, Twitter, Youtube, ArrowUpRight } from 'lucide-react'
import Logo from './Logo.jsx'
import { services } from '../data/services.js'

export default function Footer() {
  return (
    <footer className="bg-void text-white">
      <div className="wrap section !py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/60">
              A studio that builds websites, apps, and AI tools — then runs the marketing that makes
              them worth building.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Linkedin, Twitter, Youtube].map((I, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/15 text-white/70 hover:border-gold hover:text-gold"
                >
                  <I className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-[14px] font-semibold text-white">Services</p>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-[14.5px] text-white/60 hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-[14px] font-semibold text-white">Company</p>
            <ul className="mt-5 space-y-3">
              {[
                ['About Us', '/about'],
                ['Careers', '/careers'],
                ['Key People', '/key-people'],
                ['Case Studies', '/case-studies'],
                ['Insights', '/insights'],
                ['Testimonials', '/testimonials'],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-[14.5px] text-white/60 hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-[14px] font-semibold text-white">Get started</p>
            <p className="mt-5 text-[14.5px] leading-relaxed text-white/60">
              Tell us what you are building. We reply within one business day.
            </p>
            <Link to="/contact" className="btn-gold mt-5">
              Contact Now
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-[13.5px] text-white/80 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-white">© {new Date().getFullYear()} Klyzy Digital. All rights reserved.</p>
          <div className="flex gap-6 text-white/80">
            <Link to="/contact" className="hover:text-white">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white">Terms of Service</Link>
            <span className="text-white/80">Dehradun, Uttarakhand, India</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
