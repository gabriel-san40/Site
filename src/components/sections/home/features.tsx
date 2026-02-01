'use client';

import { Brain, Plug, Clock, Settings, BarChart3, TrendingUp } from 'lucide-react';
import { features } from '@/data/features';
import { SectionHeading } from '@/components/ui/section-heading';
import { GlowCard } from '@/components/ui/glow-card';
import { Container } from '@/components/ui/container';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import type { ComponentType } from 'react';

const iconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  Brain,
  Plug,
  Clock,
  Settings,
  BarChart3,
  TrendingUp,
};

const glowColors = ['cyan', 'purple', 'blue'] as const;

export function Features() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Por que Escolher a San Automation?"
            subtitle="Tecnologia de ponta aliada a expertise em IA para entregar resultados reais ao seu negocio."
            gradient
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <GlowCard glowColor={glowColors[index % 3]} className="h-full">
                  <div className="flex flex-col gap-4">
                    {Icon && (
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <Icon size={24} className="text-primary" />
                      </div>
                    )}
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-foreground-muted leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </GlowCard>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
