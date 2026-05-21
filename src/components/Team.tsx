import { motion } from 'framer-motion'
import { Star, MessageCircle } from 'lucide-react'

export default function Team() {
  return (
    <section id="equipe" className="py-16 sm:py-20 md:py-32 bg-dark relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold text-sm font-semibold uppercase tracking-widest">Nossa equipe</span>
            <h2 className="section-title mt-2 text-left">Sempre pronta pra atender</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Precisa de ajuda nos treinos? Não tem ideia de como começar? Não tem um treino pré definido? Avaliação física? Periodização dos seus treinos?
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nós da Fitmais estamos a inteira disposição para te auxiliar, desde a entrada na academia até o final do seu treino. Nossos instrutores são orientados a nunca deixar nenhum aluno esperando, treinos dinâmicos voltados ao objetivo particular de cada aluno são nossa especialidade.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {[
                'Avaliação física gratuita',
                'Periodização personalizada',
                'Acompanhamento contínuo',
                'Treinos dinâmicos e variados',
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-3 h-3 text-gold" />
                  </div>
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="https://api.whatsapp.com/send?phone=5553991343791&text=Oi%2C%20quero%20saber%20mais%20sobre%20a%20equipe!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" /> Fale com a gente
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80',
              'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&q=80',
              'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&q=80',
              'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=400&q=80',
            ].map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                className={`rounded-2xl overflow-hidden shadow-lg ${index === 0 ? 'col-span-2' : ''}`}
              >
                <img
                  src={img}
                  alt="Academia Fitmais"
                  className={`w-full ${index === 0 ? 'h-32 sm:h-48' : 'h-32 sm:h-40'} object-cover`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
