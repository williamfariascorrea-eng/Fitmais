import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, Navigation } from 'lucide-react'

export default function Location() {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-dark-light relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Onde estamos</span>
          <h2 className="section-title mt-2">Localização</h2>
          <p className="section-subtitle mt-4">
            Venha nos conhecer! Estamos no coração de São Lourenço do Sul
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden border border-dark-lighter h-64 sm:h-80 md:h-96"
          >
            <iframe
              src="https://maps.google.com/maps?q=R.+Sen.+Pinheiro+Machado,+600,+São+Lourenço+do+Sul,+RS,+96170-000&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent pointer-events-none" />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Endereço</h3>
                  <p className="text-muted-foreground text-sm">R. Sen. Pinheiro Machado, 600</p>
                  <p className="text-muted-foreground text-sm">Centro, São Lourenço do Sul - RS</p>
                  <p className="text-muted-foreground text-sm">CEP: 96170-000</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Horários</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">Seg - Sex</span>
                      <span className="font-medium">06:00 - 22:00</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">Sábado</span>
                      <span className="font-medium">08:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span className="text-muted-foreground">Domingo</span>
                      <span className="font-medium text-red-400">Fechado</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Contato</h3>
                  <a
                    href="https://api.whatsapp.com/send?phone=5553991343791"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-sm hover:text-gold transition-colors"
                  >
                    (53) 99134-3791
                  </a>
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=R.+Sen.+Pinheiro+Machado,+600,+São+Lourenço+do+Sul,+RS,+96170-000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              <Navigation className="w-5 h-5" /> Como chegar
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
