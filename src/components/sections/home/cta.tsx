'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { ScrollReveal } from '@/components/shared/scroll-reveal';

export function CTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-primary/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-secondary/15 rounded-full blur-[100px]" />
      </div>

      <Container className="relative z-10">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl text-foreground">
              Pronto para{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                Revolucionar
              </span>{' '}
              seu Atendimento?
            </h2>
            <p className="mt-6 text-lg text-foreground-muted md:text-xl">
              Entre em contato e descubra como nossos agentes de IA podem transformar
              a experiencia dos seus clientes e impulsionar seus resultados.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contato" variant="primary" size="lg">
                Comece Agora
                <ArrowRight size={20} />
              </Button>
              <Button href="/servicos" variant="outline" size="lg">
                Ver Solucoes
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
