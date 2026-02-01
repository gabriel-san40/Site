'use client';

import { Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { SectionHeading } from '@/components/ui/section-heading';
import { GlowCard } from '@/components/ui/glow-card';
import { Container } from '@/components/ui/container';
import { ScrollReveal } from '@/components/shared/scroll-reveal';

const glowColors = ['cyan', 'purple', 'blue', 'cyan'] as const;

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-background-secondary">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="O que Nossos Clientes Dizem"
            subtitle="Empresas que ja transformaram seu atendimento com nossos agentes de IA."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.1}>
              <GlowCard glowColor={glowColors[index % 4]} className="h-full">
                <div className="flex flex-col gap-4">
                  <Quote size={24} className="text-primary/40" />
                  <p className="text-foreground leading-relaxed italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-auto pt-4 border-t border-border">
                    <p className="font-heading font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-foreground-muted">
                      {testimonial.role} — {testimonial.company}
                    </p>
                  </div>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
