import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp, Bot, RotateCcw, X } from 'lucide-react'

const welcomeMessage = {
  role: 'assistant',
  content: "Hi! I'm Vaidik, your Klyzy Digital assistant. What can I help you with today?",
}

const suggestions = [
  'What services do you offer?',
  'I need a new website',
  'How can I contact your team?',
]

export default function VaidikChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([welcomeMessage])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const endOfMessagesRef = useRef(null)

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading, isOpen])

  async function sendMessage(value = input) {
    const content = value.trim()
    if (!content || isLoading) return

    const conversation = [...messages, { role: 'user', content }].slice(-12)
    setMessages(conversation)
    setInput('')
    setError('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: conversation }),
      })
      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Vaidik could not reply. Please try again.')
      }

      if (typeof result.reply !== 'string' || !result.reply.trim()) {
        throw new Error('Vaidik could not prepare a reply. Please try again.')
      }

      setMessages((current) => [...current, { role: 'assistant', content: result.reply }])
    } catch (requestError) {
      setError(
        requestError instanceof TypeError && requestError.message === 'Failed to fetch'
          ? "Can't reach Vaidik's server. Please try again shortly or contact our team."
          : requestError.message || 'Vaidik could not connect. Please try again.',
      )
    } finally {
      setIsLoading(false)
    }
  }

  function startNewChat() {
    setMessages([welcomeMessage])
    setInput('')
    setError('')
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.section
            aria-label="Chat with Vaidik"
            aria-modal="false"
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed bottom-24 right-4 z-[60] flex h-[min(640px,calc(100dvh-7.5rem))] w-[min(400px,calc(100vw-2rem))] origin-bottom-right flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-[0_24px_80px_rgba(11,14,23,0.24)] sm:bottom-24 sm:right-7"
          >
            <header className="relative overflow-hidden bg-void px-5 pb-5 pt-5 text-white">
              <div className="pointer-events-none absolute -right-8 -top-12 h-36 w-36 rounded-full border border-gold/20" />
              <div className="pointer-events-none absolute -right-2 -top-6 h-24 w-24 rounded-full border border-violet/25" />
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="relative grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-gold to-orange-500 text-void shadow-lg shadow-gold/20">
                    <Bot className="h-5 w-5" />
                    <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-void bg-emerald-400" />
                  </span>
                  <div>
                    <h2 className="font-display text-base font-semibold text-white">Vaidik</h2>
                    <p className="mt-0.5 flex items-center gap-1.5 text-[11px] text-white/65">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Klyzy Digital AI assistant
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={startNewChat}
                    disabled={isLoading}
                    aria-label="Start a new chat"
                    title="New chat"
                    className="grid h-9 w-9 place-items-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close chat"
                    className="grid h-9 w-9 place-items-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <p className="relative mt-4 text-xs text-white/50">Ask us about websites, apps, AI, and digital growth.</p>
            </header>

            <div
              className="flex-1 space-y-4 overflow-y-auto bg-paper/70 px-4 py-5"
              aria-live="polite"
              aria-relevant="additions text"
            >
              {messages.map((message, index) => {
                const isAssistant = message.role === 'assistant'

                return (
                  <div
                    key={`${index}-${message.role}`}
                    className={`flex items-end gap-2 ${isAssistant ? '' : 'justify-end'}`}
                  >
                    {isAssistant && (
                      <span className="mb-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-xl bg-void text-gold">
                        <Bot className="h-4 w-4" />
                      </span>
                    )}
                    <p
                      className={`max-w-[84%] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-3 text-[13px] leading-relaxed ${
                        isAssistant
                          ? 'rounded-bl-md border border-ink/[0.06] bg-white text-ink shadow-sm'
                          : 'rounded-br-md bg-void text-white'
                      }`}
                    >
                      {message.content}
                    </p>
                  </div>
                )
              })}

              {messages.length === 1 && (
                <div className="ml-9 flex flex-wrap gap-2">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => sendMessage(suggestion)}
                      disabled={isLoading}
                      className="rounded-full border border-violet/20 bg-white px-3 py-2 text-left text-[11px] font-medium text-violet transition-colors hover:border-violet/50 hover:bg-violet/[0.04] disabled:opacity-50"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}

              {isLoading && (
                <div className="flex items-end gap-2" role="status" aria-label="Vaidik is typing">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-xl bg-void text-gold">
                    <Bot className="h-4 w-4" />
                  </span>
                  <span className="flex gap-1 rounded-2xl rounded-bl-md border border-ink/[0.06] bg-white px-4 py-3.5 shadow-sm">
                    {[0, 1, 2].map((dot) => (
                      <span key={dot} className="vaidik-typing-dot h-1.5 w-1.5 rounded-full bg-violet/70" />
                    ))}
                  </span>
                </div>
              )}

              {error && (
                <p role="alert" className="ml-9 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-xs leading-relaxed text-red-700">
                  {error}
                </p>
              )}
              <div ref={endOfMessagesRef} />
            </div>

            <form
              className="border-t border-ink/[0.07] bg-white p-3"
              onSubmit={(event) => {
                event.preventDefault()
                sendMessage()
              }}
            >
              <div className="flex items-center gap-2 rounded-2xl border border-ink/10 bg-paper/70 p-1.5 pl-4 transition-colors focus-within:border-violet/50">
                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Type your message..."
                  aria-label="Your message"
                  maxLength={1500}
                  disabled={isLoading}
                  className="min-w-0 flex-1 bg-transparent py-2 text-[13px] text-ink outline-none placeholder:text-ink/40 disabled:opacity-60"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  aria-label="Send message"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-void text-white transition-colors hover:bg-violet disabled:cursor-not-allowed disabled:opacity-35"
                >
                  <ArrowUp className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-2 text-center text-[10px] text-ink/40">Vaidik can make mistakes. For anything urgent, contact our team.</p>
            </form>
          </motion.section>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Close Vaidik chat' : 'Chat with Vaidik'}
        aria-expanded={isOpen}
        className="group fixed bottom-24 right-5 z-[60] flex items-center gap-2 rounded-full bg-gold px-4 py-3 text-void shadow-[0_10px_30px_rgba(242,140,40,0.3)] transition-colors hover:bg-gold-soft sm:bottom-24 sm:right-7"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.96 }}
      >
        <span className="grid h-6 w-6 place-items-center">
          {isOpen ? <X className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
        </span>
        <span className="text-sm font-semibold">
          {isOpen ? 'Close chat' : 'Ask Vaidik'}
        </span>
      </motion.button>
    </>
  )
}
