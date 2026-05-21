import { Phone, MapPin, Clock } from 'lucide-react'
import fitmaisLogo from '../assets/fitmais-logo.png'

export default function Footer() {
  return (
    <footer id="contato" className="bg-dark-lighter border-t border-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="lg:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <img src={fitmaisLogo} alt="Fitmais+ Centro Fitness" className="h-12 w-auto" />
          </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-md">
              Proporcionando um ambiente agradável, que transmita alegria, motivação e energia para você alcançar seus objetivos!
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="https://api.whatsapp.com/send?phone=5553991343791" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-gold transition-colors">
                <Phone className="w-5 h-5 text-gold" />
                (53) 99134-3791
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0" />
                <span>São Lourenço do Sul, RS</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Navegação</h4>
            <ul className="space-y-3">
              {[
                { href: '#sobre', label: 'Sobre nós' },
                { href: '#modalidades', label: 'Modalidades' },
                { href: '#equipe', label: 'Equipe' },
                { href: '#planos', label: 'Planos' },
                { href: '#depoimentos', label: 'Depoimentos' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4 text-gold">Horários</h4>
            <ul className="space-y-3">
              <li className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Seg - Sex</span>
                <span className="font-medium">06:00 - 22:00</span>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Sábado</span>
                <span className="font-medium">08:00 - 14:00</span>
              </li>
              <li className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Domingo</span>
                <span className="font-medium text-red-400">Fechado</span>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-dark-light rounded-xl border border-dark-lighter">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-gold" />
                <span className="text-sm font-semibold">365 dias</span>
              </div>
              <p className="text-xs text-muted-foreground">Abertos o ano inteiro para você!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-lighter">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2021-{new Date().getFullYear()} Fitmais Centro Fitness. Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Desenvolvido por <span className="text-gold font-semibold">William Corrêa</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
