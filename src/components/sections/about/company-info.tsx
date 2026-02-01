'use client';

import { Bot, Zap, Shield } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { ScrollReveal } from '@/components/shared/scroll-reveal';

export function CompanyInfo() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
          <ScrollReveal>
            <div>
              <h1 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl text-foreground">
                Sobre a{' '}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                  San Automation
                </span>
              </h1>
              <p className="mt-6 text-lg text-foreground-muted leading-relaxed">
                Nascemos com a missao de democratizar o acesso a inteligencia artificial
                conversacional. Acreditamos que toda empresa, independente do tamanho,
                merece ter um atendimento de excelencia — e a IA e o caminho para isso.
              </p>
              <p className="mt-4 text-lg text-foreground-muted leading-relaxed">
                Nossa equipe combina expertise em inteligencia artificial, engenharia de
                software e experiencia do cliente para criar agentes que realmente entendem
                e resolvem as necessidades dos seus clientes.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="grid grid-cols-1 gap-4">
              {[
                {
                  icon: Bot,
                  title: 'IA de Ponta',
                  desc: 'Utilizamos os modelos de linguagem mais avancados do mercado.',
                },
                {
                  icon: Zap,
                  title: 'Resultados Rapidos',
                  desc: 'Implementacao agil com resultados visiveis desde o primeiro dia.',
                },
                {
                  icon: Shield,
                  title: 'Seguranca Total',
                  desc: 'Seus dados protegidos com criptografia e conformidade LGPD.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 rounded-xl border border-border bg-surface p-5 hover:border-primary/30 transition-colors"
                >
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-foreground-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
