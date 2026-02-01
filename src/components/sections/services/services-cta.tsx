'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { ScrollReveal } from '@/components/shared/scroll-reveal';

export function ServicesCTA() {
  return (
    <section className="py-20 md:py-28 bg-background-secondary">
      <Container>
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-2xl font-bold md:text-3xl text-foreground">
              Nao encontrou o que procura?
            </h2>
            <p className="mt-4 text-foreground-muted text-lg">
              Criamos solucoes personalizadas para cada necessidade. Fale com nossa equipe
              e vamos construir juntos o agente de IA ideal para o seu negocio.
            </p>
            <div className="mt-8">
              <Button href="/contato" variant="primary" size="lg">
                Fale Conosco
                <ArrowRight size={20} />
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
