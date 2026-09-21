export default function PageHeader({ kicker, title, description }) {
  return (
    <section className="border-b border-ink/10 bg-void text-white">
      <div className="wrap py-16 md:py-20">
        {kicker && <p className="kicker text-gold">{kicker}</p>}
        <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-[1.1] md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-white/65">{description}</p>
        )}
      </div>
    </section>
  )
}
