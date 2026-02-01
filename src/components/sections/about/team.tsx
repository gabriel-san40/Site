'use client';

import { User } from 'lucide-react';
import { team } from '@/data/team';
import { Container } from '@/components/ui/container';
import { GlowCard } from '@/components/ui/glow-card';
import { SectionHeading } from '@/components/ui/section-heading';
import { ScrollReveal } from '@/components/shared/scroll-reveal';

const glowColors = ['cyan', 'purple', 'blue', 'cyan'] as const;

export function Team() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <ScrollReveal>
          <SectionHeading
            title="Nossa Equipe"
            subtitle="Profissionais apaixonados por tecnologia e inovacao."
            gradient
          />
        </ScrollReveal>

        <div className="flex justify-center">
          {team.map((member, index) => (
            <ScrollReveal key={member.name} delay={index * 0.1} className="w-full max-w-sm">
              <GlowCard glowColor={glowColors[index % 4]} className="h-full text-center">
                <div className="flex flex-col items-center gap-4">
                  <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-border">
                    <User size={32} className="text-foreground-muted" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary font-medium">{member.role}</p>
                  </div>
                  <p className="text-sm text-foreground-muted leading-relaxed">
                    {member.bio}
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
