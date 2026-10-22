import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import VaidikChat from './VaidikChat.jsx'
import WhatsAppFloat from './WhatsAppFloat.jsx'
import ExitIntentTestimonials from './ExitIntentTestimonials.jsx'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
      <VaidikChat />
      <ExitIntentTestimonials />
    </div>
  )
}
