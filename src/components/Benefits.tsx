import { motion } from 'framer-motion'
import { Heart, Clock, Wind, MapPin, Wallet, Dumbbell, Sparkles, Shield } from 'lucide-react'

const benefits = [
  { icon: Heart, title: 'Foco no Bem-Estar', description: 'Cuidamos da sua saúde de forma completa e personalizada', color: 'from-pink-500/20 to-rose-500/20' },
  { icon: Clock, title: 'Horários Flexíveis', description: 'Treine no horário que melhor se encaixa na sua rotina', color: 'from-blue-500/20 to-cyan-500/20' },
  { icon: Wind, title: 'Ambiente Climatizado', description: 'Conforto térmico em todos os espaços da academia', color: 'from-green-500/20 to-emerald-500/20' },
  { icon: MapPin, title: 'Localização Central', description: 'Fácil acesso no coração de São Lourenço do Sul', color: 'from-purple-500/20 to-violet-500/20' },
  { icon: Wallet, title: 'Planos Acessíveis', description: 'Opções que cabem no seu bolso sem perder qualidade', color: 'from-yellow-500/20 to-amber-500/20' },
  { icon: Dumbbell, title: 'Equipamentos Premium', description: 'Máquinas modernas e bem mantidas para seu treino', color: 'from-orange-500/20 to-red-500/20' },
  { icon: Sparkles, title: 'Aulas em Grupo', description: 'Funcional, HIIT e muito mais para variar seu treino', color: 'from-indigo-500/20 to-blue-500/20' },
  { icon: Shield, title: 'Profissionais Qualificados', description: 'Equipe certificada para te orientar com segurança', color: 'from-teal-500/20 to-green-500/20' },
]

export default function Benefits() {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-dark relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Diferenciais</span>
          <h2 className="section-title mt-2">Porque treinar na Fitmais?</h2>
          <p className="section-subtitle mt-4">
            Tudo que você precisa para alcançar seus objetivos em um só lugar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="card group cursor-pointer"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-gold transition-colors">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
