import { useState } from 'react'
import { Check, Clock, Video, ArrowUpRight } from 'lucide-react'
import PageHeader from '../components/PageHeader.jsx'
import { services } from '../data/services.js'

const slots = ['10:00 AM', '11:30 AM', '2:00 PM', '3:30 PM', '5:00 PM']

export default function BookTechnician() {
  const [day, setDay] = useState(0)
  const [slot, setSlot] = useState(null)
  const [booked, setBooked] = useState(false)

  const days = Array.from({ length: 5 }, (_, i) => {
    const d = new Date()
    d.setDate(d.getDate() + i + 1)
    return d
  })

  return (
    <div>
      <PageHeader
        kicker="Book My Technician"
        title="Get a specialist on a call, not a chatbot."
        description="Pick a slot and talk directly to the team member who covers what you need — technical, marketing, or creative."
      />

      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-dim">
                <Video className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-[16px] font-semibold text-ink">20-minute video call</p>
                <p className="mt-1 text-[14px] text-slate-soft">We'll match you with the right specialist based on what you tell us below.</p>
              </div>
            </div>
            <div className="mt-5 flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-violet/10 text-violet">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-[16px] font-semibold text-ink">Free, no commitment</p>
                <p className="mt-1 text-[14px] text-slate-soft">This call is for scoping — you decide afterward if you want a proposal.</p>
              </div>
            </div>

            <div className="mt-8 border border-ink/10 bg-panel p-6">
              <label className="mb-1.5 block text-[13.5px] font-medium text-ink/70">What do you need help with?</label>
              <select className="w-full border border-ink/15 bg-white px-4 py-2.5 text-[15px] outline-none focus:border-violet">
                <option value="">Select a topic</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>{s.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="border border-ink/10 bg-white p-7">
            {booked ? (
              <div className="flex h-full flex-col items-center justify-center py-16 text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-gold/15 text-gold-dim">
                  <Check className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold text-ink">You're booked.</h3>
                <p className="mt-3 max-w-sm text-[15px] text-slate-soft">
                  A calendar invite and video link will land in your inbox shortly.
                </p>
              </div>
            ) : (
              <>
                <p className="font-display text-[15px] font-semibold text-ink">Pick a day</p>
                <div className="mt-4 grid grid-cols-5 gap-2">
                  {days.map((d, i) => (
                    <button
                      key={i}
                      onClick={() => { setDay(i); setSlot(null) }}
                      className={`flex flex-col items-center rounded-lg border py-3 text-[13px] ${
                        day === i ? 'border-ink bg-ink text-white' : 'border-ink/15 text-ink/70 hover:border-ink/40'
                      }`}
                    >
                      <span>{d.toLocaleDateString('en-US', { weekday: 'short' })}</span>
                      <span className="mt-1 font-display font-semibold">{d.getDate()}</span>
                    </button>
                  ))}
                </div>

                <p className="mt-7 font-display text-[15px] font-semibold text-ink">Pick a time</p>
                <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-5">
                  {slots.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSlot(s)}
                      className={`rounded-lg border py-2.5 text-[13.5px] ${
                        slot === s ? 'border-violet bg-violet/10 text-violet' : 'border-ink/15 text-ink/70 hover:border-ink/40'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <input placeholder="Full name" className="border border-ink/15 px-4 py-2.5 text-[15px] outline-none focus:border-violet" />
                  <input placeholder="Email" type="email" className="border border-ink/15 px-4 py-2.5 text-[15px] outline-none focus:border-violet" />
                </div>

                <button
                  disabled={!slot}
                  onClick={() => setBooked(true)}
                  className="btn-gold mt-6 w-full justify-center disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Confirm booking
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
