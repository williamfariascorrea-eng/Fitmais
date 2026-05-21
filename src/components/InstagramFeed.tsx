import { motion } from 'framer-motion'
import { Heart, MessageCircle, ExternalLink } from 'lucide-react'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

const posts = [
  {
    image: 'https://fitmaisacademias.com.br/wp-content/uploads/elementor/thumbs/academia-fitmais-q0srlx7tu859wy9qcpwtqfolqsdoio6gymdw0ggl80.jpeg',
    likes: 127,
    comments: 12,
    caption: 'Treino pesado hoje! 💪🔥',
  },
  {
    image: 'https://fitmaisacademias.com.br/wp-content/uploads/elementor/thumbs/academia-fitmais-treino-q0sroy93v0ajbpvco11jro62nhg9bk7c1m27ojyx68.jpeg',
    likes: 89,
    comments: 8,
    caption: 'Funcional em dia! ️',
  },
  {
    image: 'https://fitmaisacademias.com.br/wp-content/uploads/elementor/thumbs/academia-fitmais-6-q0srx2kwwhepmg2q91eit4efebfetffutsy7xlxhf4.jpeg',
    likes: 156,
    comments: 15,
    caption: 'Estrutura de primeira! ✨',
  },
  {
    image: 'https://fitmaisacademias.com.br/wp-content/uploads/elementor/thumbs/academia-fitmais-5-q0srx0p8itc4z85gk0l9o4vi7jooe18e5jn8z209rk.jpeg',
    likes: 203,
    comments: 21,
    caption: 'Equipe sempre pronta! 🙌',
  },
  {
    image: 'https://fitmaisacademias.com.br/wp-content/uploads/elementor/thumbs/funciona-ppqhrdrf2e7bedd3hj5gtqb5n63tnjzgeu3br3f8nc.jpg',
    likes: 94,
    comments: 7,
    caption: 'Aula de funcional! 🔥',
  },
  {
    image: 'https://fitmaisacademias.com.br/wp-content/uploads/elementor/thumbs/musculacao-ppqhqpbm4p9v0iclg8l60wh675ga3fafnh4p9wfh54.jpg',
    likes: 178,
    comments: 19,
    caption: 'Musculação é vida! 💪',
  },
]

export default function InstagramFeed() {
  return (
    <section className="py-20 md:py-32 bg-dark-light relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-orange-500/20 border border-pink-500/20 rounded-full px-4 py-2 mb-6">
            <InstagramIcon className="w-4 h-4 text-pink-400" />
            <span className="text-pink-400 text-sm font-semibold">@fitmaisacademias</span>
          </div>
          <h2 className="section-title mt-2">Siga no Instagram</h2>
          <p className="section-subtitle mt-4">
            Acompanhe o dia a dia da Fitmais, dicas de treino e muita motivação!
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {posts.map((post, index) => (
            <motion.a
              key={index}
              href="https://www.instagram.com/fitmaisacademias/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group aspect-square rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="flex items-center gap-1 text-white">
                      <Heart className="w-4 h-4 fill-white" />
                      <span className="text-sm font-semibold">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-white">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm font-semibold">{post.comments}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground px-2 line-clamp-2">{post.caption}</p>
                </div>
              </div>

              {/* Instagram Icon */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="https://www.instagram.com/fitmaisacademias/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-pink-500/20 hover:scale-105 transition-all duration-300"
          >
            <InstagramIcon className="w-5 h-5" />
            Seguir @fitmaisacademias
          </a>
        </motion.div>
      </div>
    </section>
  )
}
