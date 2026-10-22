import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  MapPin,
  MessageCircle,
  Quote,
  X,
} from 'lucide-react'
import { exitIntentTestimonials } from '../data/exitIntentTestimonials.js'
import { whatsappLink } from '../data/contact.js'

const popupStageKey = 'klyzy-exit-popup-stage-v2'

export default function ExitIntentTestimonials() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isCarouselPaused, setIsCarouselPaused] = useState(false)
  const [popupStage, setPopupStage] = useState(
    () => sessionStorage.getItem(popupStageKey) || 'testimonials',
  )
  const location = useLocation()
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const previouslyFocusedRef = useRef(null)
  const inertElementsRef = useRef([])

  useEffect(() => {
    function handleMouseOut(event) {
      const isLeavingViewport =
        event.clientX <= 0 ||
        event.clientY <= 0 ||
        event.clientX >= window.innerWidth ||
        event.clientY >= window.innerHeight

      if (isLeavingViewport && !event.relatedTarget) setIsOpen(true)
    }

    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      document.removeEventListener('mouseout', handleMouseOut)
    }
  }, [location.pathname])

  useEffect(() => {
    if (!isOpen || isCarouselPaused || popupStage !== 'testimonials') return undefined

    const slideTimer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % exitIntentTestimonials.length)
    }, 5000)

    return () => window.clearInterval(slideTimer)
  }, [isOpen, isCarouselPaused, popupStage])

  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    previouslyFocusedRef.current = document.activeElement
    document.body.style.overflow = 'hidden'
    const overlay = dialogRef.current?.parentElement
    const layout = overlay?.parentElement
    inertElementsRef.current = Array.from(layout?.children || [])
      .filter((element) => element !== overlay)
      .map((element) => {
        const wasInert = element.inert
        element.inert = true
        return { element, wasInert }
      })
    closeButtonRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closePopup()
        return
      }

      if (event.key !== 'Tab') return

      const focusableElements = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (!focusableElements?.length) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      inertElementsRef.current.forEach(({ element, wasInert }) => {
        element.inert = wasInert
      })
      inertElementsRef.current = []

      if (previouslyFocusedRef.current?.isConnected) {
        previouslyFocusedRef.current.focus()
      } else {
        const main = document.querySelector('main')
        main?.setAttribute('tabindex', '-1')
        main?.focus()
      }
    }
  }, [isOpen])

  function closePopup() {
    if (popupStage === 'testimonials') {
      sessionStorage.setItem(popupStageKey, 'growth')
      setPopupStage('growth')
    }
    setIsOpen(false)
  }

  const testimonial = exitIntentTestimonials[activeIndex]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-void/75 p-4 backdrop-blur-sm sm:p-6 ${
            popupStage === 'testimonials' ? 'overflow-y-auto' : 'overflow-hidden'
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closePopup()
          }}
        >
          <motion.section
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-testimonial-title"
            tabIndex={-1}
            className={`relative my-auto w-full overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.4)] ${
              popupStage === 'testimonials'
                ? 'max-w-4xl rounded-3xl border border-white/15 bg-white'
                : 'max-h-[calc(100dvh-2rem)] max-w-5xl rounded-[1.5rem] border border-gold/30 bg-[#fffaf4] text-ink sm:rounded-[2rem]'
            }`}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
          >
            <button
              type="button"
              ref={closeButtonRef}
              onClick={closePopup}
              aria-label="Close popup"
              className={`absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full transition-colors ${
                popupStage === 'testimonials'
                  ? 'border border-ink/10 bg-white/90 text-ink hover:bg-panel'
                  : 'border border-ink/10 bg-white/80 text-ink hover:bg-white'
              }`}
            >
              <X className="h-5 w-5" />
            </button>

            {popupStage === 'testimonials' ? (
            <div className="grid md:grid-cols-[0.9fr_1.1fr]">
                  <div
                    className="relative flex min-h-[330px] flex-col justify-between overflow-hidden bg-void p-7 text-white sm:p-9 md:min-h-[470px]"
                    onMouseEnter={() => setIsCarouselPaused(true)}
                    onMouseLeave={() => setIsCarouselPaused(false)}
                    onFocusCapture={() => setIsCarouselPaused(true)}
                    onBlurCapture={(event) => {
                      if (!event.currentTarget.contains(event.relatedTarget)) setIsCarouselPaused(false)
                    }}
                  >
                    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-gold/20" />
                    <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-gold/15" />
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={testimonial.name}
                        className="relative flex flex-1 flex-col"
                        initial={{ opacity: 0, x: 18 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -18 }}
                        transition={{ duration: 0.22 }}
                      >
                        <div className="flex items-center gap-4">
                          <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-gold bg-white/10">
                            <span className="absolute inset-0 grid place-items-center font-display font-semibold text-gold">
                              {testimonial.name.split(' ').map((part) => part[0]).join('')}
                            </span>
                            <img
                              src={testimonial.imageUrl}
                              alt={`Illustrative portrait for ${testimonial.name}`}
                              className="relative h-full w-full object-cover"
                              onError={(event) => {
                                event.currentTarget.style.display = 'none'
                              }}
                            />
                          </span>
                          <div>
                            <p className="font-display text-base font-semibold">{testimonial.name}</p>
                            <p className="mt-1 text-xs leading-relaxed text-white/55">{testimonial.role}</p>
                          </div>
                        </div>
                        <div className="mt-6 flex items-center justify-between gap-3">
                          <div
                            role="img"
                            className="text-lg leading-none tracking-[0.16em] text-gold"
                            aria-label={`${testimonial.rating} out of 5 stars`}
                          >
                            {'★'.repeat(testimonial.rating)}
                          </div>
                          <p className="flex items-center gap-1.5 text-xs text-white/60">
                            <MapPin className="h-3.5 w-3.5 text-gold" />
                            {testimonial.country}
                          </p>
                        </div>
                        <span className="mt-6 grid h-10 w-10 place-items-center rounded-xl bg-gold text-void">
                          <Quote className="h-5 w-5" />
                        </span>
                        <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-white/75 sm:text-base">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="mt-6 flex items-center justify-between border-t border-white/15 pt-4">
                          <p className="text-xs font-medium text-white/45">
                            {String(activeIndex + 1).padStart(2, '0')} / {String(exitIntentTestimonials.length).padStart(2, '0')}
                          </p>
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={() => setActiveIndex((index) => (index - 1 + exitIntentTestimonials.length) % exitIntentTestimonials.length)}
                              aria-label="Previous testimonial"
                              className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:text-gold"
                            >
                              <ArrowLeft className="h-4 w-4" />
                            </button>
                            <button
                              type="button"
                              onClick={() => setActiveIndex((index) => (index + 1) % exitIntentTestimonials.length)}
                              aria-label="Next testimonial"
                              className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-gold hover:text-gold"
                            >
                              <ArrowRight className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                    <div className="relative mt-5 border-t border-gold/20 pt-4">
                      <p className="text-[10px] font-medium leading-relaxed text-gold-soft/80">
                        Demo content for preview only. Replace with verified client details before publishing.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center p-7 sm:p-10 md:p-12">
                    <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-gold-dim">
                      <MessageCircle className="h-4 w-4" />
                      Client stories
                    </p>
                    <h2
                      id="exit-testimonial-title"
                      className="mt-5 max-w-md font-display text-3xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-4xl"
                    >
                      Before you go, hear it from our clients.
                    </h2>
                    <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-soft sm:text-base">
                      See how we help teams turn ambitious ideas into dependable digital products and growth.
                    </p>
                    <div className="mt-8 flex flex-col gap-3">
                      <Link
                        to="/testimonials"
                        onClick={closePopup}
                        className="btn-gold w-full justify-center"
                      >
                        Read client stories
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                      <button
                        type="button"
                        onClick={closePopup}
                        className="w-full rounded-full border border-ink/10 px-6 py-3 text-sm font-semibold text-ink/70 transition-colors hover:border-ink/25 hover:bg-paper"
                      >
                        Maybe later
                      </button>
                    </div>
                    <p className="mt-6 text-center text-xs text-slate-soft">
                      Sample profile portraits and testimonial content.
                    </p>
                  </div>
            </div>
            ) : (
              <div className="relative isolate overflow-hidden px-6 pb-5 pt-6 sm:px-10 sm:pb-8 sm:pt-8 md:px-12">
                <div className="pointer-events-none absolute -right-20 -top-28 -z-10 h-64 w-64 rounded-full bg-gold/15 blur-[75px]" />

                <div className="flex items-center gap-2 border-b border-ink/10 pb-4 pr-12">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-ink">
                    Klyzy <span className="text-gold-dim">Digital</span>
                  </p>
                  <span className="ml-auto hidden text-[10px] font-semibold uppercase tracking-[0.15em] text-ink/40 sm:block">
                    A fresh start for growth
                  </span>
                </div>

                <div className="grid items-center gap-5 pt-5 sm:pt-7 md:grid-cols-[1.2fr_0.8fr] md:gap-8 md:pt-8">
                  <div>
                    <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-gold-dim sm:text-xs">
                      <BarChart3 className="h-4 w-4" />
                      Your next move starts here
                    </p>
                    <h2
                      id="exit-testimonial-title"
                      className="mt-3 max-w-xl font-display text-3xl font-semibold leading-[1.04] tracking-[-0.045em] text-ink sm:mt-4 sm:text-4xl md:text-[2.8rem]"
                    >
                      Ready to grow your business
                      <span className="text-gold-dim"> further?</span>
                    </h2>
                    <p className="mt-3 max-w-lg text-xs leading-relaxed text-ink/65 sm:mt-4 sm:text-sm">
                      You bring the ambition. We’ll bring the technology, strategy, and partnership to help move your business forward.
                    </p>
                    <div className="mt-5 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:items-center">
                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        onClick={closePopup}
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-xs font-bold text-void shadow-[0_10px_25px_rgba(242,140,40,0.22)] transition-all hover:-translate-y-0.5 hover:bg-gold-soft sm:text-sm"
                      >
                        Let’s talk about your growth
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                      <button
                        type="button"
                        onClick={closePopup}
                        className="min-h-10 px-4 text-xs font-medium text-ink/50 transition-colors hover:text-ink sm:text-sm"
                      >
                        Maybe later
                      </button>
                    </div>
                  </div>

                  <div className="relative hidden md:block">
                    <div className="absolute -inset-3 rotate-3 rounded-[1.75rem] border border-gold/30" />
                    <div className="relative rounded-[1.5rem] bg-void p-6 text-white shadow-xl">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold text-void">
                        <BarChart3 className="h-5 w-5" />
                      </span>
                      <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50">
                        Your ambition
                      </p>
                      <p className="mt-1 font-display text-xl font-semibold">
                        deserves a plan.
                      </p>
                      <div className="mt-5 space-y-2">
                        <div className="h-1.5 w-full rounded-full bg-white/10">
                          <div className="h-full w-[42%] rounded-full bg-gold/60" />
                        </div>
                        <div className="h-1.5 w-4/5 rounded-full bg-white/10">
                          <div className="h-full w-[68%] rounded-full bg-gold/80" />
                        </div>
                        <div className="h-1.5 w-3/5 rounded-full bg-white/10">
                          <div className="h-full w-full rounded-full bg-gold" />
                        </div>
                      </div>
                      <div className="mt-5 flex items-center gap-2 border-t border-white/10 pt-4">
                        <MessageCircle className="h-4 w-4 text-gold" />
                        <p className="text-[10px] leading-relaxed text-white/60">
                          One conversation. A clearer path forward.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
