import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, end, duration])

  return (
    <div ref={ref} className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold mb-2">
      {count}{suffix}
    </div>
  )
}

export default function About() {
  const stats = [
    { value: 365, suffix: '', label: 'Dias abertos por ano' },
    { value: 500, suffix: '+', label: 'Alunos satisfeitos' },
    { value: 10, suffix: '+', label: 'Professores qualificados' },
    { value: 5, suffix: '', label: 'Anos de experiência' },
  ]

  return (
    <section id="sobre" className="py-16 sm:py-20 md:py-32 bg-dark-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212, 175, 55, 0.5) 1px, transparent 0)',
          backgroundSize: '40px 40px'
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
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Quem somos</span>
          <h2 className="section-title mt-2">Fitmais+ Centro Fitness</h2>
          <p className="section-subtitle mt-4">
            Nascida da necessidade da população em conquistar uma vida mais saudável e dinâmica
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-orange/20 rounded-3xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80"
                alt="Interior da academia"
                className="relative z-10 rounded-2xl shadow-2xl w-full h-48 sm:h-64 md:h-80 object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              Mais que uma academia, uma <span className="text-gold">família</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Nós da Fitmais Centro Fitness proporcionamos um ambiente agradável, que transmita alegria, motivação e energia, para motivar você a desenvolver o melhor das suas capacidades e consequentemente ter os melhores resultados!
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Com equipamentos de última geração, profissionais altamente qualificados e um ambiente acolhedor, estamos prontos para te ajudar a alcançar seus objetivos.
            </p>
            <a
              href="https://api.whatsapp.com/send?phone=5553991343791&text=Oi%2C%20quero%20saber%20mais%20sobre%20a%20Fitmais!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Fale conosco
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card text-center group hover:border-gold/50"
            >
              <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
