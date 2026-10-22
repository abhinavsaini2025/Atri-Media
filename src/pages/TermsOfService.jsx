import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'

const sections = [
  {
    title: 'Using this website',
    body: 'You may use this website to learn about Klyzy Digital and contact us about our services. You agree not to misuse the site, interfere with its operation, or use it in a way that violates applicable law.',
  },
  {
    title: 'Website information',
    body: 'We make reasonable efforts to keep website information current, but descriptions, service details, availability, and other content may change. Website content is general information and is not a project proposal, guarantee, or commitment to provide services.',
  },
  {
    title: 'Projects and results',
    body: 'Any services we provide will be subject to a separate written agreement that sets out the agreed scope, fees, timelines, and responsibilities. Examples, case studies, and results on this website are illustrative of particular work and do not guarantee the same outcome for another project.',
  },
  {
    title: 'Intellectual property',
    body: 'Unless otherwise stated, website text, design, branding, and other content belong to Klyzy Digital or are used with permission. You may not reproduce or commercially use website content without prior authorization. Rights in deliverables for a client are governed by that client’s separate agreement.',
  },
  {
    title: 'Third-party services',
    body: 'This website may link to third-party websites and services. Those services are provided independently, and we are not responsible for their content, availability, or terms. Your use of them is subject to their own terms and policies.',
  },
  {
    title: 'Changes and contact',
    body: (
      <>
        We may update these terms as the website or our services change. Continued use of the site
        after an update means you are using the current version. Questions about these terms can be
        sent through our <Link to="/contact" className="font-medium text-violet hover:underline">contact page</Link>.
      </>
    ),
  },
]

export default function TermsOfService() {
  return (
    <div>
      <PageHeader
        kicker="Terms"
        title="Terms of Service"
        description="The terms for using the Klyzy Digital website."
      />
      <section className="section">
        <div className="wrap max-w-3xl">
          <p className="text-sm leading-relaxed text-slate-soft">
            By accessing or using this website, you agree to the terms below. If you do not agree,
            please do not use the site.
          </p>
          <div className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
            {sections.map((section) => (
              <section key={section.title} className="py-6">
                <h2 className="font-display text-lg font-semibold text-ink">{section.title}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-soft">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
