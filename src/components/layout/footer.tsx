import Link from 'next/link';
import { Bot, Mail, Phone, MapPin } from 'lucide-react';
import { SITE_CONFIG, NAV_ITEMS } from '@/lib/constants';
import { Container } from '@/components/ui/container';

const serviceLinks = [
  { label: 'Chatbots Inteligentes', href: '/servicos' },
  { label: 'Voicebots', href: '/servicos' },
  { label: 'Integracao com Sistemas', href: '/servicos' },
  { label: 'Automacao de Processos', href: '/servicos' },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-secondary">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Bot className="h-7 w-7 text-primary" />
              <span className="font-heading text-lg font-bold text-foreground">
                San<span className="text-primary">Automation</span>
              </span>
            </Link>
            <p className="text-sm text-foreground-muted leading-relaxed">
              Transformando o atendimento ao cliente com agentes de IA conversacional
              inteligentes e personalizados.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Navegacao
            </h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground-muted hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Solucoes
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-foreground-muted hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-foreground-muted">
                <Mail size={16} className="text-primary shrink-0" />
                {SITE_CONFIG.email}
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground-muted">
                <Phone size={16} className="text-primary shrink-0" />
                {SITE_CONFIG.phone}
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground-muted">
                <MapPin size={16} className="text-primary shrink-0" />
                {SITE_CONFIG.address}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground-muted">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/politica-de-privacidade"
              className="text-sm text-foreground-muted hover:text-primary transition-colors"
            >
              Politica de Privacidade
            </Link>
            <span className="text-border">|</span>
            <Link
              href="/termos-de-servico"
              className="text-sm text-foreground-muted hover:text-primary transition-colors"
            >
              Termos de Servico
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
