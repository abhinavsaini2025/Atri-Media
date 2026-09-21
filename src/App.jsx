import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'

import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import Business from './pages/Business.jsx'
import Industries from './pages/Industries.jsx'
import Careers from './pages/Careers.jsx'
import Technology from './pages/Technology.jsx'
import AgileDevelopment from './pages/AgileDevelopment.jsx'
import Insights from './pages/Insights.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import IndustryInsights from './pages/IndustryInsights.jsx'
import Testimonials from './pages/Testimonials.jsx'
import KeyPeople from './pages/KeyPeople.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import BookTechnician from './pages/BookTechnician.jsx'
import ClientLogin from './pages/ClientLogin.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/business" element={<Business />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/agile-development" element={<AgileDevelopment />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/industry-insights" element={<IndustryInsights />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/key-people" element={<KeyPeople />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book-technician" element={<BookTechnician />} />
        <Route path="/client-login" element={<ClientLogin />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
