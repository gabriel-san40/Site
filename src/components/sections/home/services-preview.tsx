'use client';

import { MessageSquare, Mic, Link, ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { SectionHeading } from '@/components/ui/section-heading';
import { GlowCard } from '@/components/ui/glow-card';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import type { ComponentType } from 'react';

const iconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  MessageSquare,
  Mic,
  Link,
};

const glowColors = ['cyan', 'purple', 'blue'] as const;

export function ServicesPreview() {
  const previewServices = services.slice(0, 3);

  return (
    <section className="py-20 md:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Nossas Solucoes"
            subtitle="Solucoes completas de IA humanizada para cada necessidade do seu negocio."
            gradient
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {previewServices.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <ScrollReveal key={service.id} delay={index * 0.15}>
                <GlowCard glowColor={glowColors[index % 3]} className="h-full flex flex-col">
                  <div className="flex flex-col gap-4 flex-1">
                    {Icon && (
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10">
                        <Icon size={28} className="text-primary" />
                      </div>
                    )}
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-foreground-muted leading-relaxed flex-1">
                      {service.shortDescription}
                    </p>
                    <Button
                      href="/servicos"
                      variant="ghost"
                      size="sm"
                      className="self-start mt-2 text-primary hover:text-primary-dark"
                    >
                      Saiba Mais
                      <ArrowRight size={16} />
                    </Button>
                  </div>
                </GlowCard>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <Button href="/servicos" variant="outline" size="lg">
              Ver Todas as Solucoes
              <ArrowRight size={20} />
            </Button>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
