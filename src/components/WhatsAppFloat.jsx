import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '../data/contact.js'

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 sm:bottom-7 sm:right-7"
    >
      <span className="pointer-events-none rounded-full bg-void px-3 py-2 text-xs font-semibold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        Chat with us
      </span>
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-transform duration-200 group-hover:scale-105">
        <span className="absolute inset-0 rounded-full border-4 border-[#25D366]/30 animate-ping" />
        <MessageCircle className="relative h-6 w-6" />
      </span>
    </a>
  )
}
