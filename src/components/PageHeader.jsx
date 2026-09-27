import { useLocation } from 'react-router-dom'

const heroImages = {
  '/': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
  '/services': 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
  '/business': 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1600&q=80',
  '/industries': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
  '/careers': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
  '/technology': 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80',
  '/agile-development': 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
  '/insights': 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80',
  '/case-studies': 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
  '/industry-insights': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
  '/testimonials': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
  '/key-people': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80',
  '/about': 'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1600&q=80',
  '/contact': 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80',
  '/book-technician': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1600&q=80',
  '/client-login': 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1600&q=80',
}

function resolveHeroImage(pathname) {
  if (!pathname) return heroImages['/']

  if (pathname.startsWith('/services/')) return heroImages['/services']
  if (pathname.startsWith('/industry-insights')) return heroImages['/industry-insights']

  return heroImages[pathname] || heroImages['/']
}

export default function PageHeader({ kicker, title, description }) {
  const location = useLocation()
  const heroImage = resolveHeroImage(location.pathname)

  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-void text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(246,168,58,0.22), transparent 28%), linear-gradient(90deg, rgba(11,14,23,0.88) 0%, rgba(11,14,23,0.82) 42%, rgba(11,14,23,0.72) 100%)',
        }}
      />

      <div className="wrap relative z-10 py-16 md:py-20">
        {kicker && <p className="kicker text-gold">{kicker}</p>}
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.04em] text-white md:text-5xl xl:text-[64px]">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-[16px] leading-relaxed text-white/75">{description}</p>
        )}
      </div>
    </section>
  )
}
