import { motion } from 'framer-motion'

const images = [
  { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80', alt: 'Área de musculação', span: 'col-span-2 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&q=80', alt: 'Área de treino funcional', span: '' },
  { src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&q=80', alt: 'Equipamentos modernos', span: '' },
  { src: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=400&q=80', alt: 'Sala de aulas', span: '' },
  { src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80', alt: 'Treino em grupo', span: '' },
]

export default function Gallery() {
  return (
    <section className="py-16 sm:py-20 md:py-32 bg-dark-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Nosso espaço</span>
          <h2 className="section-title mt-2">Conheça a Fitmais</h2>
          <p className="section-subtitle mt-4">
            Um ambiente pensado para você treinar com conforto e motivação
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[150px] sm:auto-rows-[200px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`${img.span} relative rounded-2xl overflow-hidden group cursor-pointer`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-sm font-medium">{img.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
