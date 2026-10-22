import dotenv from 'dotenv'
import express from 'express'
import { createServer as createViteServer } from 'vite'
import { services } from './src/data/services.js'
import { whatsappDisplayNumber } from './src/data/contact.js'

dotenv.config({ path: '.env.local' })
dotenv.config()

const app = express()
const isProduction = process.env.NODE_ENV === 'production'
const port = Number(process.env.PORT) || (isProduction ? 3000 : 5173)

app.disable('x-powered-by')
app.use(express.json({ limit: '20kb' }))

app.post('/api/chat', async (req, res) => {
  const { messages } = req.body ?? {}

  if (
    !Array.isArray(messages) ||
    messages.length < 1 ||
    messages.length > 12 ||
    messages.some(
      (message) =>
        !message ||
        !['user', 'assistant'].includes(message.role) ||
        typeof message.content !== 'string' ||
        !message.content.trim() ||
        message.content.length > 1500,
    ) ||
    !messages.some((message) => message.role === 'user')
  ) {
    return res.status(400).json({ error: 'Please send a valid chat message and try again.' })
  }

  if (!process.env.GEMINI_API_KEY) {
    return res.status(503).json({
      error: `Vaidik is not configured yet. Please contact our team on WhatsApp at ${whatsappDisplayNumber}.`,
    })
  }

  const serviceContext = services
    .map((service) => `- ${service.name}: ${service.short} ${service.description}`)
    .join('\n')

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${process.env.GEMINI_MODEL || 'gemini-2.5-flash'}:generateContent`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': process.env.GEMINI_API_KEY,
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [
              {
                text: `You are Vaidik, the friendly customer-support assistant for Klyzy Digital, an Indian digital agency. Help website visitors understand the company's services and take the next step.

Company services:
${serviceContext}

Guidelines:
- Reply in the language the visitor uses; comfortably understand English and Hindi/Hinglish.
- Be warm, professional, concise, and helpful. Ask one short follow-up question if it helps clarify what they need.
- Use only the company information above. Do not invent prices, project timelines, guarantees, or capabilities. If asked, say the team can provide a tailored answer.
- For project enquiries, guide visitors to https://wa.me/918801686251 or the website's Contact page.
- Never request passwords, payment card details, API keys, or other sensitive information.`,
              },
            ],
          },
          contents: messages.map(({ role, content }) => ({
            role: role === 'assistant' ? 'model' : 'user',
            parts: [{ text: content.trim() }],
          })),
          generationConfig: { maxOutputTokens: 500 },
        }),
      },
    )

    if (!response.ok) {
      if (response.status === 401 || response.status === 403) {
        console.error('Vaidik chat authentication failed. Check the server-side GEMINI_API_KEY.')
        return res.status(503).json({
          error: `Vaidik is being set up. Please contact our team on WhatsApp at ${whatsappDisplayNumber}.`,
        })
      }

      if (response.status === 429) {
        console.error('Vaidik chat hit a Gemini API rate or quota limit.')
        return res.status(429).json({ error: 'Vaidik is receiving too many requests. Please try again in a moment.' })
      }

      console.error('Vaidik Gemini request failed:', { status: response.status })
      return res.status(response.status >= 500 ? 503 : 502).json({
        error: 'Vaidik is temporarily unavailable. Please try again shortly.',
      })
    }

    const result = await response.json()
    const reply = result.candidates?.[0]?.content?.parts
      ?.map((part) => part.text || '')
      .join('')
      .trim()

    if (!reply) {
      console.error('Vaidik chat received an empty reply from Gemini.')
      return res.status(502).json({ error: 'Vaidik could not prepare a reply. Please try again.' })
    }

    return res.json({ reply })
  } catch (error) {
    console.error('Vaidik chat request failed:', error instanceof Error ? error.message : 'Unknown error')
    return res.status(502).json({ error: 'Vaidik is temporarily unavailable. Please try again shortly.' })
  }
})

if (isProduction) {
  const { join } = await import('node:path')
  const { fileURLToPath } = await import('node:url')
  const rootDirectory = fileURLToPath(new URL('.', import.meta.url))
  const buildDirectory = join(rootDirectory, 'dist')

  app.use(express.static(buildDirectory))
  app.use((req, res, next) => {
    if (req.method !== 'GET' || req.path.startsWith('/api/')) return next()
    return res.sendFile(join(buildDirectory, 'index.html'))
  })
} else {
  const { createServer } = await import('node:http')
  const httpServer = createServer(app)
  const vite = await createViteServer({
    appType: 'spa',
    server: { middlewareMode: true, hmr: { server: httpServer } },
  })

  app.use(vite.middlewares)
  httpServer.listen(port, () => {
    console.log(`Vaidik website and API running at http://localhost:${port}`)
  })
}

if (isProduction) {
  app.listen(port, () => {
    console.log(`Vaidik website and API running on port ${port}`)
  })
}
