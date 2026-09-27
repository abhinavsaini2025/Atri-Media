import { useState } from 'react'
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import { services } from '../data/services.js'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <PageHeader
        kicker="Contact Us"
        title="Tell us what you're building."
        description="Share a few details below and we'll reply within one business day with next steps."
      />

      <section className="section">
        <div className="wrap grid gap-14 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="kicker">Get in touch</p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink">Contact details</h2>

            <div className="mt-7 space-y-5">
              <a href="mailto:hello@klyzydigital.com" className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-violet/10 text-violet">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[13px] text-slate-soft">Email</span>
                  <span className="block text-[15px] font-medium text-ink">hello@klyzydigital.com</span>
                </span>
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-violet/10 text-violet">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[13px] text-slate-soft">Phone</span>
                  <span className="block text-[15px] font-medium text-ink">+91 12345 67890</span>
                </span>
              </a>
              <div className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-violet/10 text-violet">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[13px] text-slate-soft">Studio</span>
                  <span className="block text-[15px] font-medium text-ink">Dehradun, Uttarakhand, India</span>
                </span>
              </div>
            </div>

            <div className="mt-10 border border-ink/10 bg-panel p-6">
              <p className="font-display text-[15px] font-semibold text-ink">Prefer a call?</p>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-soft">
                Book a 20-minute slot with our team directly.
              </p>
              <a href="/book-technician" className="mt-4 flex items-center gap-1.5 text-[14.5px] font-medium text-violet">
                Book a call
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="border border-ink/10 bg-white p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <h3 className="font-display text-2xl font-semibold text-ink">Message sent.</h3>
                <p className="mt-3 max-w-sm text-[15px] text-slate-soft">
                  Thanks for reaching out — someone from our team will reply within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="mb-1.5 block text-[13.5px] font-medium text-ink/70">Full name</label>
                  <input required type="text" className="w-full border border-ink/15 bg-transparent px-4 py-2.5 text-[15px] outline-none focus:border-violet" />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-1.5 block text-[13.5px] font-medium text-ink/70">Email</label>
                  <input required type="email" className="w-full border border-ink/15 bg-transparent px-4 py-2.5 text-[15px] outline-none focus:border-violet" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-[13.5px] font-medium text-ink/70">Company</label>
                  <input type="text" className="w-full border border-ink/15 bg-transparent px-4 py-2.5 text-[15px] outline-none focus:border-violet" />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-[13.5px] font-medium text-ink/70">Service you're interested in</label>
                  <select className="w-full border border-ink/15 bg-transparent px-4 py-2.5 text-[15px] outline-none focus:border-violet">
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>{s.name}</option>
                    ))}
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1.5 block text-[13.5px] font-medium text-ink/70">Project details</label>
                  <textarea required rows={5} className="w-full border border-ink/15 bg-transparent px-4 py-2.5 text-[15px] outline-none focus:border-violet" />
                </div>
                <button type="submit" className="btn-gold sm:col-span-2 justify-center">
                  Send message
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
