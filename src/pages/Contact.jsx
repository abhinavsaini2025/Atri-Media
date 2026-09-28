import { useState } from 'react'
import { Mail, Phone, MapPin, ArrowUpRight, MessageCircle } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import { services } from '../data/services.js'
import { whatsappDisplayNumber, whatsappLink } from '../data/contact.js'

const branches = [
  { label: 'Main Branch', city: 'Hyderabad, Telangana, India' },
  { label: 'Sub Branch', city: 'Dehradun, Uttarakhand, India' },
]

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
                  <span className="block text-[15px] font-medium text-ink">+91 8106974731 | +91 9084662858</span>
                </span>
              </a>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#25D366]/10 text-[#128C7E]">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[13px] text-slate-soft">WhatsApp</span>
                  <span className="block text-[15px] font-medium text-ink">{whatsappDisplayNumber}</span>
                </span>
              </a>
              <div className="grid gap-4 sm:grid-cols-2">
                {branches.map((branch) => (
                  <div key={branch.label} className="flex items-start gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-violet/10 text-violet">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[13px] text-slate-soft">{branch.label}</span>
                      <span className="block text-[15px] font-medium leading-relaxed text-ink">
                        {branch.city}
                      </span>
                    </span>
                  </div>
                ))}
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
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn mt-4 w-full justify-center bg-[#25D366] text-white hover:bg-[#20bd5a]"
            >
              <MessageCircle className="h-4 w-4" />
              Chat with us on WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
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
                  <label htmlFor="contact-name" className="mb-1.5 block text-[13.5px] font-medium text-ink/70">Full name</label>
                  <input id="contact-name" name="name" required type="text" autoComplete="name" className="w-full border border-ink/15 bg-transparent px-4 py-2.5 text-[15px] outline-none focus:border-violet" />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="contact-email" className="mb-1.5 block text-[13.5px] font-medium text-ink/70">Email</label>
                  <input id="contact-email" name="email" required type="email" autoComplete="email" className="w-full border border-ink/15 bg-transparent px-4 py-2.5 text-[15px] outline-none focus:border-violet" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="contact-company" className="mb-1.5 block text-[13.5px] font-medium text-ink/70">Company</label>
                  <input id="contact-company" name="company" type="text" autoComplete="organization" className="w-full border border-ink/15 bg-transparent px-4 py-2.5 text-[15px] outline-none focus:border-violet" />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="contact-service" className="mb-1.5 block text-[13.5px] font-medium text-ink/70">Service you're interested in</label>
                  <select id="contact-service" name="service" className="w-full border border-ink/15 bg-transparent px-4 py-2.5 text-[15px] outline-none focus:border-violet">
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.slug}>{s.name}</option>
                    ))}
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="contact-project-details" className="mb-1.5 block text-[13.5px] font-medium text-ink/70">Project details</label>
                  <textarea id="contact-project-details" name="project_details" required rows={5} className="w-full border border-ink/15 bg-transparent px-4 py-2.5 text-[15px] outline-none focus:border-violet" />
                </div>
                {submitError && (
                  <p className="sm:col-span-2 text-sm text-red-700" role="alert">
                    {submitError}
                  </p>
                )}
                <button type="submit" disabled={isSubmitting} className="btn-gold sm:col-span-2 justify-center disabled:cursor-not-allowed disabled:opacity-60">
                  {isSubmitting ? 'Sending...' : 'Send message'}
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
