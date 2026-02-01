'use client';

import { Container } from '@/components/ui/container';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { GridPattern } from '@/components/shared/grid-pattern';

export function ServicesHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-[100px]" />
      </div>
      <GridPattern className="opacity-30" />

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl">
              <span className="text-foreground">Nossas </span>
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Solucoes
              </span>
            </h1>
            <p className="mt-6 text-lg text-foreground-muted md:text-xl">
              Solucoes completas de IA conversacional para automatizar, escalar e
              transformar o atendimento da sua empresa.
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
