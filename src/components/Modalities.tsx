import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight, Dumbbell, Activity, Users, Zap } from 'lucide-react'

const modalities = [
  {
    title: 'Musculação',
    description: 'Melhora o condicionamento cardiorrespiratório, diminui a gordura corporal, auxilia no emagrecimento, reduz o risco de diabetes e garante mais disposição física.',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80',
    icon: Dumbbell,
    features: ['Equipamentos modernos', 'Acompanhamento profissional', 'Treinos personalizados'],
  },
  {
    title: 'Funcional',
    description: 'Aumenta a força muscular, melhora o sistema cardiorrespiratório, promove alívio de dores nas costas, grande gasto calórico e tonificação muscular.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
    icon: Activity,
    features: ['Alto gasto calórico', 'Melhora mobilidade', 'Treinos dinâmicos'],
  },
  {
    title: 'HIIT',
    description: 'Treino intervalado de alta intensidade que maximiza a queima de gordura e melhora o condicionamento físico em menos tempo.',
    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&q=80',
    icon: Zap,
    features: ['Queima acelerada', 'Treinos curtos', 'Resultados rápidos'],
  },
  {
    title: 'Aulas em Grupo',
    description: 'Aulas coletivas com energia contagiante, perfect para quem gosta de treinar em comunidade e se motivar com o grupo.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    icon: Users,
    features: ['Ambiente motivador', 'Variedade de aulas', 'Horários diversificados'],
  },
]

export default function Modalities() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="modalidades" className="py-16 sm:py-20 md:py-32 bg-dark-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(45deg, rgba(212, 175, 55, 0.3) 25%, transparent 25%), linear-gradient(-45deg, rgba(212, 175, 55, 0.3) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, rgba(212, 175, 55, 0.3) 75%), linear-gradient(-45deg, transparent 75%, rgba(212, 175, 55, 0.3) 75%)',
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Nossas</span>
          <h2 className="section-title mt-2">Modalidades</h2>
          <p className="section-subtitle mt-4">
            Escolha a modalidade que mais combina com seus objetivos
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex overflow-x-auto gap-3 mb-8 md:mb-12 pb-2 md:justify-center scrollbar-hide">
          {modalities.map((mod, index) => (
            <button
              key={mod.title}
              onClick={() => setActiveIndex(index)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                activeIndex === index
                  ? 'bg-gold text-dark shadow-lg shadow-gold/20'
                  : 'bg-dark-lighter text-muted-foreground hover:text-gold border border-dark-lighter hover:border-gold/30'
              }`}
            >
              <mod.icon className="w-4 h-4" />
              {mod.title}
            </button>
          ))}
        </div>

        {/* Active Modality Content */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-6 md:gap-8 items-center"
        >
          {(() => {
            const mod = modalities[activeIndex]
            const Icon = mod.icon
            return (
              <>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-orange/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative rounded-2xl overflow-hidden border border-dark-lighter">
                    <img
                      src={mod.image}
                      alt={mod.title}
                      className="w-full h-48 sm:h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
                    <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
                        <h3 className="text-xl sm:text-2xl font-bold">{mod.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                    {mod.description}
                  </p>

                  <div className="space-y-3">
                    {mod.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-gold rounded-full flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="https://api.whatsapp.com/send?phone=5553991343791&text=Oi%2C%20quero%20saber%20mais%20sobre%20as%20modalidades!"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center gap-2 group text-sm sm:text-base"
                  >
                    Quero saber mais <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </>
            )
          })()}
        </motion.div>
      </div>
    </section>
  )
}
