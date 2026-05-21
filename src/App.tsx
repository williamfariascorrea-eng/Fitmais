import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronUp, MessageCircle } from 'lucide-react'
import fitmaisLogo from './assets/fitmais-logo.png'
import Hero from './components/Hero'
import About from './components/About'
import Benefits from './components/Benefits'
import Modalities from './components/Modalities'
import Team from './components/Team'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import TrialClass from './components/TrialClass'
import Plans from './components/Plans'
import InstagramFeed from './components/InstagramFeed'
import FAQ from './components/FAQ'
import Location from './components/Location'
import Footer from './components/Footer'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#modalidades', label: 'Modalidades' },
    { href: '#equipe', label: 'Equipe' },
    { href: '#planos', label: 'Planos' },
    { href: '#aula-gratis', label: 'Aula Grátis' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contato', label: 'Contato' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-dark/95 backdrop-blur-xl shadow-lg shadow-dark/20 py-0' : 'bg-transparent py-2'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="flex items-center gap-2 group">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={fitmaisLogo}
                alt="Fitmais+ Centro Fitness"
                className="h-10 w-auto"
              />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-gold transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold group-hover:w-full transition-all duration-300" />
                </a>
              ))}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://api.whatsapp.com/send?phone=5553991343791&text=Oi%2C%20quero%20começar%20minha%20transformação!"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> Chama no Whats!
              </motion.a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-muted-foreground hover:text-gold transition-colors"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobileMenuOpen ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden bg-dark-lighter/95 backdrop-blur-xl border-t border-dark-lighter"
            >
              <nav className="flex flex-col p-4 gap-2">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="text-left text-sm font-medium text-muted-foreground hover:text-gold transition-colors py-3 px-4 rounded-lg hover:bg-dark-light"
                  >
                    {link.label}
                  </motion.button>
                ))}
                <motion.a
                  href="https://api.whatsapp.com/send?phone=5553991343791&text=Oi%2C%20quero%20começar%20minha%20transformação!"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="btn-primary text-center text-sm mt-4 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" /> Chama no Whats!
                </motion.a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Benefits />
        <Modalities />
        <Team />
        <Gallery />
        <Testimonials />
        <TrialClass />
        <Plans />
        <InstagramFeed />
        <FAQ />
        <Location />
      </main>

      <Footer />

      {/* WhatsApp Float Button */}
      <motion.a
        href="https://api.whatsapp.com/send?phone=5553991343791&text=Oi%2C%20quero%20saber%20mais%20sobre%20a%20Fitmais!"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 left-6 z-50 p-4 bg-green-500 text-white rounded-full shadow-lg shadow-green-500/20 hover:bg-green-600 transition-colors"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 bg-gold text-dark rounded-full shadow-lg shadow-gold/20 hover:bg-gold-light transition-colors"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
