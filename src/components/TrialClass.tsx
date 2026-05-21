import { motion } from 'framer-motion'
import { useState } from 'react'
import { Gift, Check, Send, Loader2 } from 'lucide-react'

export default function TrialClass() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simula envio
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)

      // Abre WhatsApp com dados preenchidos
      const message = `Olá! Quero agendar uma aula experimental grátis!%0A%0ANome: ${formData.name}%0ATelefone: ${formData.phone}%0AObjetivo: ${formData.goal}`
      window.open(`https://api.whatsapp.com/send?phone=5553991343791&text=${message}`, '_blank')
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (submitted) {
    return (
      <section className="py-20 md:py-32 bg-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <Check className="w-10 h-10 text-gold" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Aula agendada com <span className="text-gold">sucesso!</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-muted-foreground text-lg mb-8"
          >
            Em breve nossa equipe entrará em contato pelo WhatsApp para confirmar seu horário.
          </motion.p>
          <motion.a
            href="https://api.whatsapp.com/send?phone=5553991343791&text=Oi%2C%20quero%20confirmar%20minha%20aula%20experimental!"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="btn-primary inline-flex items-center gap-2"
          >
            Falar no WhatsApp agora
          </motion.a>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 md:py-32 bg-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange/5 via-transparent to-transparent" />

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 rounded-full px-4 py-2 mb-6">
              <Gift className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-semibold">100% Gratuito</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Aula Experimental <br />
              <span className="text-gold">Grátis</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Venha conhecer nossa estrutura, equipamentos e equipe sem compromisso. 
              É a sua chance de experimentar e sentir a energia da Fitmais!
            </p>

            <div className="space-y-4">
              {[
                'Conheça toda a estrutura da academia',
                'Faça um treino completo com orientação',
                'Receba uma avaliação física gratuita',
                'Tire todas as suas dúvidas com a equipe',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-gold" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card p-8 border-gold/20">
              <h3 className="text-xl font-bold mb-2">Agende sua aula</h3>
              <p className="text-muted-foreground text-sm mb-6">Preencha abaixo e entraremos em contato</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Seu nome</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Digite seu nome completo"
                    className="w-full px-4 py-3 bg-dark-lighter border border-dark-lighter rounded-xl text-white placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">WhatsApp</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(53) 99999-9999"
                    className="w-full px-4 py-3 bg-dark-lighter border border-dark-lighter rounded-xl text-white placeholder:text-muted-foreground focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Qual seu objetivo?</label>
                  <select
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-dark-lighter border border-dark-lighter rounded-xl text-white focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="emagrecer">Emagrecer</option>
                    <option value="ganhar-massa">Ganhar massa muscular</option>
                    <option value="condicionamento">Melhorar condicionamento</option>
                    <option value="saude">Saúde e bem-estar</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full flex items-center justify-center gap-2 mt-6 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" /> Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" /> Agendar aula grátis
                    </>
                  )}
                </button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Ao enviar, você será redirecionado para o WhatsApp
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
