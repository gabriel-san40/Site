'use client';

import { MessageSquare, Mic, Link, Workflow, PieChart, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/shared/scroll-reveal';
import { cn } from '@/lib/utils';
import type { Service } from '@/types';
import type { ComponentType } from 'react';

const iconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  MessageSquare,
  Mic,
  Link,
  Workflow,
  PieChart,
};

interface ServiceDetailCardProps {
  service: Service;
  index: number;
}

export function ServiceDetailCard({ service, index }: ServiceDetailCardProps) {
  const Icon = iconMap[service.icon];
  const isReversed = index % 2 !== 0;

  return (
    <ScrollReveal>
      <div
        className={cn(
          'flex flex-col gap-8 rounded-2xl border border-border bg-surface p-8 md:p-10 lg:flex-row lg:items-center lg:gap-12',
          isReversed && 'lg:flex-row-reverse'
        )}
      >
        {/* Icon area */}
        <div className="flex shrink-0 items-center justify-center lg:w-48">
          <div className="inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 border border-primary/20">
            {Icon && <Icon size={48} className="text-primary" />}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="font-heading text-2xl font-bold text-foreground">
            {service.title}
          </h3>
          <p className="mt-4 text-foreground-muted leading-relaxed">
            {service.fullDescription}
          </p>
          <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-sm text-foreground-muted">
                <Check size={16} className="text-primary shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/contato" variant="primary" size="md">
              Solicitar Demo
            </Button>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
