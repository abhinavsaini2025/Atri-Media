import { useState } from 'react'
import { Mail, Phone, MapPin, ArrowUpRight, MessageCircle, Clock3, CheckCircle2 } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import { services } from '../data/services.js'
import { whatsappDisplayNumber, whatsappLink } from '../data/contact.js'

const branches = [
  { label: 'Karimnagar', city: 'Telangana, India' },
]

const fieldClassName =
  'w-full rounded-xl border border-ink/10 bg-white px-4 py-3 text-[15px] text-ink outline-none transition placeholder:text-ink/35 hover:border-violet/40 focus:border-violet focus:ring-4 focus:ring-violet/10'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError('')

    const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } =
      import.meta.env

    if (!VITE_EMAILJS_SERVICE_ID || !VITE_EMAILJS_TEMPLATE_ID || !VITE_EMAILJS_PUBLIC_KEY) {
      setSubmitError('The contact form is not configured yet. Please email hello@klyzydigital.com directly.')
      return
    }

    const formData = new FormData(e.currentTarget)
    const templateParams = {
      from_name: formData.get('name'),
      reply_to: formData.get('email'),
      company: formData.get('company') || 'Not provided',
      service: formData.get('service') || 'Not specified',
      project_details: formData.get('project_details'),
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: VITE_EMAILJS_SERVICE_ID,
          template_id: VITE_EMAILJS_TEMPLATE_ID,
          user_id: VITE_EMAILJS_PUBLIC_KEY,
          template_params: templateParams,
        }),
      })

      if (!response.ok) {
        throw new Error(`EmailJS request failed (${response.status})`)
      }

      setSubmitted(true)
    } catch (error) {
      console.error('Contact form submission failed:', error)
      setSubmitError('We could not send your message. Please try again or email hello@klyzydigital.com directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <PageHeader
        kicker="Contact Us"
        title="Tell us what you're building."
        description="Share a few details below and we'll reply within one business day with next steps."
      />

      <section className="relative overflow-hidden bg-[#FAF9F6] py-14 md:py-20">
        <div className="pointer-events-none absolute -right-24 top-12 h-80 w-80 rounded-full bg-gold/[0.10] blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-violet/[0.07] blur-3xl" />
        <div className="wrap relative">
          <div className="mb-10 max-w-2xl md:mb-12">
            <p className="kicker">Get in touch <span className="ml-2 text-ink/30">/ We’re listening</span></p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
              Good things start with <span className="text-violet">a conversation.</span>
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-soft">
              Tell us what you have in mind. We’ll help you figure out the next step, no pressure.
            </p>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
            <div className="lg:pt-2">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink/45">Reach us directly</p>
              <div className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
                <a href="mailto:hello@klyzydigital.com" className="group flex items-center gap-4 py-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-violet/[0.09] text-violet transition-colors group-hover:bg-violet group-hover:text-white">
                    <Mail className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-slate-soft">Email</span>
                    <span className="mt-1 block truncate text-[15px] font-semibold text-ink">hello@klyzydigital.com</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-ink/35 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet" />
                </a>
                <a href="tel:+918106974731" className="group flex items-center gap-4 py-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gold/[0.14] text-gold-dim transition-colors group-hover:bg-gold group-hover:text-white">
                    <Phone className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-slate-soft">Phone</span>
                    <span className="mt-1 block text-[15px] font-semibold text-ink">+91 8106974731</span>
                    <span className="block text-[13px] text-slate-soft">+91 9084662858</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-ink/35 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet" />
                </a>
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="group flex items-center gap-4 py-5">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#25D366]/10 text-[#128C7E] transition-colors group-hover:bg-[#25D366] group-hover:text-white">
                    <MessageCircle className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs text-slate-soft">WhatsApp</span>
                    <span className="mt-1 block text-[15px] font-semibold text-ink">{whatsappDisplayNumber}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-ink/35 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-violet" />
                </a>
              </div>

              <div className="mt-7 flex items-start gap-3">
                <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-violet" />
                <p className="text-[13px] leading-relaxed text-slate-soft">
                  <span className="font-semibold text-ink">We usually reply within one business day.</span>
                  <br />Prefer a call? <a href="/book-technician" className="font-semibold text-violet hover:underline">Book a 20-minute slot.</a>
                </p>
              </div>

              <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {branches.map((branch) => (
                  <div key={branch.label} className="flex items-center gap-3 rounded-2xl border border-ink/[0.07] bg-white/70 p-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-ink/[0.04] text-ink/60">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-[13px] font-semibold text-ink">{branch.label}</span>
                      <span className="block text-xs text-slate-soft">{branch.city}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] border border-ink/[0.06] bg-white p-6 shadow-[0_20px_70px_-35px_rgba(18,20,28,0.22)] sm:p-9 lg:p-10">
              {submitted ? (
                <div className="flex min-h-[440px] flex-col items-center justify-center py-12 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-ink">Message sent!</h3>
                  <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-slate-soft">
                    Thanks for reaching out — someone from our team will reply within one business day.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-violet">Project enquiry</p>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink md:text-[28px]">Let’s hear your idea.</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-soft">Fields marked <span className="font-semibold text-violet">*</span> are required.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="grid gap-x-5 gap-y-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="mb-2 block text-[13px] font-semibold text-ink">Full name <span className="text-violet">*</span></label>
                      <input id="contact-name" name="name" required type="text" autoComplete="name" placeholder="Jane Smith" className={fieldClassName} />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="mb-2 block text-[13px] font-semibold text-ink">Email address <span className="text-violet">*</span></label>
                      <input id="contact-email" name="email" required type="email" autoComplete="email" placeholder="jane@company.com" className={fieldClassName} />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="contact-company" className="mb-2 block text-[13px] font-semibold text-ink">Company <span className="font-normal text-ink/40">(optional)</span></label>
                      <input id="contact-company" name="company" type="text" autoComplete="organization" placeholder="Your company name" className={fieldClassName} />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="contact-service" className="mb-2 block text-[13px] font-semibold text-ink">What can we help with?</label>
                      <select id="contact-service" name="service" defaultValue="" className={`${fieldClassName} appearance-none`}>
                        <option value="">Choose a service</option>
                        {services.map((service) => (
                          <option key={service.slug} value={service.slug}>{service.name}</option>
                        ))}
                        <option value="other">Something else</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="contact-project-details" className="mb-2 block text-[13px] font-semibold text-ink">Tell us a little about your project <span className="text-violet">*</span></label>
                      <textarea id="contact-project-details" name="project_details" required rows={4} placeholder="What are you looking to create, and what would success look like?" className={`${fieldClassName} resize-y leading-relaxed`} />
                    </div>
                    {submitError && (
                      <p className="sm:col-span-2 rounded-xl bg-red-50 px-4 py-3 text-sm leading-relaxed text-red-700" role="alert">
                        {submitError}
                      </p>
                    )}
                    <button type="submit" disabled={isSubmitting} className="group btn-gold mt-1 min-h-12 rounded-xl sm:col-span-2 justify-center shadow-lg shadow-gold/20 transition-all hover:-translate-y-0.5 hover:shadow-gold/30 disabled:cursor-not-allowed disabled:opacity-60">
                      {isSubmitting ? 'Sending...' : 'Send your enquiry'}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
