import { motion } from 'framer-motion'
import { Check, Star, Zap } from 'lucide-react'

const plans = [
  {
    name: 'Plano FIT',
    subtitle: 'Personal compartilhado',
    price: '109',
    cents: ',90',
    frequency: '/mês',
    features: ['3x na Semana', 'Aeróbicos, HIIT, Funcional e Musculação', 'Treino do personal', 'Acesso à área de cardio'],
    whatsapp: 'Olá, queria adquirir o Plano FIT',
    popular: false,
    gradient: 'from-gray-500/20 to-gray-600/20',
  },
  {
    name: 'Plano MAIS',
    subtitle: 'Personal compartilhado',
    price: '129',
    cents: ',90',
    frequency: '/mês',
    features: ['Horário Livre', 'Aeróbicos, HIIT, Funcional e Musculação', 'Treino do personal', 'Acesso total à academia'],
    whatsapp: 'Olá, queria adquirir o Plano MAIS',
    popular: false,
    gradient: 'from-blue-500/20 to-blue-600/20',
  },
  {
    name: 'Fitmais Nutri',
    subtitle: 'Musculação + Nutrição',
    price: '199',
    cents: ',90',
    frequency: '/mês',
    features: ['Horário Livre', 'Musculação livre', 'Avaliação física e nutricional', 'Plano alimentar personalizado', 'Suporte online'],
    whatsapp: 'Olá, queria adquirir o Plano Fitmais Nutri',
    popular: true,
    gradient: 'from-gold/30 to-orange/30',
  },
  {
    name: 'Plano Orange',
    subtitle: 'Personal Privado 2x',
    price: '340',
    cents: '',
    frequency: '/mês',
    features: ['Hora Marcada', '8 Treinos de 45min exclusivos', 'Sala de funcional liberada', 'Cardio e musculação liberados'],
    whatsapp: 'Olá, queria adquirir o Plano Orange',
    popular: false,
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    name: 'Plano Black',
    subtitle: 'Personal Privado 3x',
    price: '400',
    cents: '',
    frequency: '/mês',
    features: ['Hora Marcada', '12 Treinos de 45min exclusivos', 'Sala de funcional liberada', 'Cardio e musculação liberados', 'Prioridade em horários'],
    whatsapp: 'Olá, queria adquirir o Plano Black',
    popular: false,
    gradient: 'from-purple-500/20 to-purple-600/20',
  },
]

export default function Plans() {
  return (
    <section id="planos" className="py-16 sm:py-20 md:py-32 bg-dark-light relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Investimento</span>
          <h2 className="section-title mt-2">Escolha seu plano</h2>
          <p className="section-subtitle mt-4">
            Invista em você! Todos os planos incluem acesso à nossa estrutura completa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`card relative overflow-hidden ${plan.popular ? 'border-gold shadow-xl shadow-gold/20 lg:scale-105' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-gold to-orange text-dark text-xs font-bold py-2 text-center flex items-center justify-center gap-1">
                  <Star className="w-3 h-3 fill-dark" /> Mais Popular <Star className="w-3 h-3 fill-dark" />
                </div>
              )}

              <div className={plan.popular ? 'pt-10' : ''}>
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
                  <p className="text-xs text-muted-foreground mb-4">{plan.subtitle}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-sm text-muted-foreground">R$</span>
                    <span className="text-4xl font-bold text-gold">{plan.price}</span>
                    <span className="text-lg text-gold">{plan.cents}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{plan.frequency}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://api.whatsapp.com/send?phone=5553991343791&text=${encodeURIComponent(plan.whatsapp)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 px-4 rounded-xl text-sm font-semibold transition-all flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gold text-dark hover:bg-gold-light shadow-lg shadow-gold/20'
                      : 'bg-dark-lighter text-gold border border-gold/30 hover:bg-gold hover:text-dark'
                  }`}
                >
                  <Zap className="w-4 h-4" /> Assinar agora
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 grid sm:grid-cols-3 gap-6"
        >
          {[
            { discount: '10%', period: 'Trimestral', saving: 'Economize R$ 35' },
            { discount: '20%', period: 'Semestral', saving: 'Economize R$ 140' },
            { discount: '30%', period: 'Anual', saving: 'Economize R$ 420' },
          ].map((item) => (
            <div key={item.period} className="card text-center border-gold/20">
              <div className="text-3xl font-bold text-gold mb-1">{item.discount}</div>
              <div className="text-sm font-semibold mb-1">Plano {item.period}</div>
              <div className="text-xs text-muted-foreground">{item.saving}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
