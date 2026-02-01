import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { GlowCard } from '@/components/ui/glow-card';
import { Button } from '@/components/ui/button';

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone.replace(/\D/g, '')}`,
  },
  {
    icon: MapPin,
    label: 'Endereco',
    value: SITE_CONFIG.address,
  },
  {
    icon: Clock,
    label: 'Horario',
    value: 'Seg - Sex: 9h as 18h',
  },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <GlowCard glowColor="purple">
        <h3 className="font-heading text-lg font-semibold text-foreground mb-6">
          Informacoes de Contato
        </h3>
        <ul className="space-y-5">
          {contactDetails.map((item) => (
            <li key={item.label} className="flex items-start gap-3">
              <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <item.icon size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-foreground-muted uppercase tracking-wider">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm text-foreground hover:text-primary transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-foreground">{item.value}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </GlowCard>

      {/* WhatsApp Button */}
      <Button
        href={SITE_CONFIG.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        variant="primary"
        size="lg"
        className="w-full bg-[#25D366] hover:shadow-[0_0_25px_rgba(37,211,102,0.4)] from-[#25D366] to-[#128C7E]"
      >
        <MessageCircle size={20} />
        Falar pelo WhatsApp
      </Button>
    </div>
  );
}
