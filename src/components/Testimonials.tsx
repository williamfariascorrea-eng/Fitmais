import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Livia Peglow',
    role: 'Aluna',
    image: 'https://fitmaisacademias.com.br/wp-content/uploads/2022/06/livia-150x150.jpg',
    text: 'O que podemos fazer por nós mesmos é dar o primeiro passo. A Fitmais e equipe desde o início me orientaram e me auxiliaram da melhor forma possível. Com disciplina e foco alcançamos nossos objetivos!',
    rating: 5,
  },
  {
    name: 'Cacio Gomes',
    role: 'Aluno Musculação',
    image: 'https://fitmaisacademias.com.br/wp-content/uploads/2022/06/caciogomez-150x150.jpg',
    text: 'Gosto de treinar na Fitmais porque é um ambiente acolhedor, tem uma vibe boa e os professores estão sempre atualizando nossos treinos.',
    rating: 5,
  },
  {
    name: 'Cristopher Klug',
    role: 'Aluno Musculação',
    image: 'https://fitmaisacademias.com.br/wp-content/uploads/2022/06/cristopher-150x150.jpg',
    text: 'Academia completa com todos equipamentos necessários, dispondo de excelentes profissionais oferecendo suporte e orientação para os alunos.',
    rating: 5,
  },
  {
    name: 'Gabriel Wiatrowski',
    role: 'Aluno Musculação',
    image: 'https://fitmaisacademias.com.br/wp-content/uploads/2022/06/gabriel-150x150.jpg',
    text: 'Escolhi a Fitmais pelo custo-benefício, tenho descontos exclusivos em lojas parceiras e uma equipe que acolhe a todos como uma família.',
    rating: 5,
  },
  {
    name: 'Ricardo',
    role: 'Aluno Musculação',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    text: 'É um local onde me sinto bem, tenho uma ótima convivência com todos, tanto os professores como os alunos.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-dark relative overflow-hidden">
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
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Depoimentos</span>
          <h2 className="section-title mt-2">O que nossos alunos dizem</h2>
          <p className="section-subtitle mt-4">
            Histórias reais de transformação e superação
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card group"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <Quote className="w-8 h-8 text-gold/20 mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-dark-lighter">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gold/20"
                />
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
