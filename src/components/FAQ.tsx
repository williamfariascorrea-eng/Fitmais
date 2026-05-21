import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    question: 'Quais são os horários de funcionamento?',
    answer: 'Funcionamos de segunda a sexta das 06:00 às 22:00 e aos sábados das 08:00 às 14:00. Estamos abertos 365 dias por ano!',
  },
  {
    question: 'Preciso ter experiência para treinar?',
    answer: 'Não! Recebemos alunos de todos os níveis. Nossa equipe está sempre disponível para te orientar e ajudar você a começar da melhor forma possível.',
  },
  {
    question: 'Vocês oferecem avaliação física?',
    answer: 'Sim! Oferecemos avaliação física gratuita para todos os alunos. A avaliação inclui medidas corporais, teste de condicionamento e orientação personalizada.',
  },
  {
    question: 'Posso cancelar meu plano a qualquer momento?',
    answer: 'Sim, você pode cancelar seu plano a qualquer momento. Basta comunicar nossa recepção com 30 dias de antecedência.',
  },
  {
    question: 'Vocês têm estacionamento?',
    answer: 'Sim, dispomos de estacionamento gratuito para nossos alunos durante o horário de funcionamento.',
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer: 'Aceitamos PIX, dinheiro, cartão de crédito e débito, e boleto bancário. Consulte condições especiais para planos trimestrais, semestrais e anuais.',
  },
  {
    question: 'A academia oferece aulas em grupo?',
    answer: 'Sim! Oferecemos aulas de funcional, HIIT e outras modalidades em grupo. Consulte nossa grade de horários na recepção.',
  },
  {
    question: 'Posso levar um amigo para conhecer?',
    answer: 'Claro! Você pode trazer um amigo para conhecer a academia. Entre em contato pelo WhatsApp para agendar uma visita.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-32 bg-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Tire suas dúvidas</span>
          <h2 className="section-title mt-2">Perguntas Frequentes</h2>
          <p className="section-subtitle mt-4">
            Encontre respostas para as dúvidas mais comuns sobre a Fitmais
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 text-left"
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="font-semibold text-sm md:text-base">{faq.question}</span>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gold flex-shrink-0" />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{ height: openIndex === index ? 'auto' : 0, opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="pt-4 pb-2 text-muted-foreground text-sm leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm mb-4">Ainda tem dúvidas?</p>
          <a
            href="https://api.whatsapp.com/send?phone=5553991343791&text=Oi%2C%20tenho%20uma%20dúvida!"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Fale conosco no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
