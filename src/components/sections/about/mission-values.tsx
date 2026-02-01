'use client';

import { Target, Eye, Heart } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { GlowCard } from '@/components/ui/glow-card';
import { SectionHeading } from '@/components/ui/section-heading';
import { ScrollReveal } from '@/components/shared/scroll-reveal';

const values = [
  {
    icon: Target,
    title: 'Missao',
    description:
      'Transformar o atendimento ao cliente atraves de agentes de IA humanizados, inteligentes, acessiveis e eficazes para empresas de todos os portes.',
    glow: 'cyan' as const,
  },
  {
    icon: Eye,
    title: 'Visao',
    description:
      'Ser referencia em IA humanizada no Brasil, impulsionando a revolucao do atendimento automatizado com tecnologia de classe mundial.',
    glow: 'purple' as const,
  },
  {
    icon: Heart,
    title: 'Valores',
    description:
      'Inovacao continua, transparencia com nossos clientes, excelencia tecnica, compromisso com resultados e respeito a privacidade de dados.',
    glow: 'blue' as const,
  },
];

export function MissionValues() {
  return (
    <section className="py-20 md:py-28 bg-background-secondary">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Missao, Visao e Valores"
            subtitle="Os pilares que guiam tudo que fazemos."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {values.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.15}>
              <GlowCard glowColor={item.glow} className="h-full text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                    <item.icon size={28} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-foreground-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
