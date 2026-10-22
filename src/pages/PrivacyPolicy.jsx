import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

const sections = [
  {
    title: 'Information you provide',
    body: (
      <>
        When you use our contact form, we collect the information you enter: your name, email address,
        project details, and, if provided, your company and the service you are interested in. Please
        do not include passwords, payment information, or other sensitive personal information in
        your message.
      </>
    ),
  },
  {
    title: 'How we use it',
    body: (
      <>
        We use enquiry details to understand your request, respond to you, and discuss potential
        work. The contact form sends this information through EmailJS to our business email so our
        team can follow up.
      </>
    ),
  },
  {
    title: 'Service providers and external links',
    body: (
      <>
        EmailJS processes contact-form submissions on our behalf. The site also loads some fonts and
        images from third-party services. If you follow links to services such as WhatsApp or our
        social profiles, those services handle your information under their own privacy policies.
        We do not control the practices of external providers.
      </>
    ),
  },
  {
    title: 'Retention and your choices',
    body: (
      <>
        We keep enquiry information only for as long as it is reasonably needed to respond to and
        manage the enquiry, or to meet applicable legal requirements. To request access to, correction
        of, or deletion of information you sent us, email{' '}
        <a className="font-medium text-violet hover:underline" href="mailto:hello@klyzydigital.com">
          hello@klyzydigital.com
        </a>
        . We may need to retain some information where the law requires it.
      </>
    ),
  },
  {
    title: 'Updates and contact',
    body: (
      <>
        We may update this policy when our site or data practices change. The current version will
        be published on this page. For questions about this policy, contact{' '}
        <a className="font-medium text-violet hover:underline" href="mailto:hello@klyzydigital.com">
          hello@klyzydigital.com
        </a>
        .
      </>
    ),
  },
]

export default function PrivacyPolicy() {
  return (
    <div>
      <PageHeader
        kicker="Privacy"
        title="Privacy Policy"
        description="How Klyzy Digital handles information you share through this website."
      />
      <section className="section">
        <div className="wrap max-w-3xl">
          <p className="text-sm leading-relaxed text-slate-soft">
            This policy applies to information collected through the Klyzy Digital website. It
            describes the contact form and third-party services currently used by the site.
          </p>
          <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
            {sections.map((section) => (
              <section key={section.title} className="py-6">
                <h2 className="font-display text-lg font-semibold text-ink">{section.title}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-soft">{section.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-8 text-sm text-slate-soft">
            Want to contact us? Visit our <Link to="/contact" className="font-medium text-violet hover:underline">contact page</Link>.
          </p>
        </div>
      </section>
    </div>
  )
}
