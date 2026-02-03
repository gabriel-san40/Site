'use client';

import { useActionState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { submitContact, type ContactState } from '@/actions/contact';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { GlowCard } from '@/components/ui/glow-card';

const initialState: ContactState = {
  success: false,
  message: '',
};

const subjects = [
  { value: '', label: 'Selecione um assunto' },
  { value: 'agente-ia', label: 'Agente de IA' },
  { value: 'voicebot', label: 'Voicebot' },
  { value: 'integracao', label: 'Integracao com Sistemas' },
  { value: 'automacao', label: 'Automacao de Processos' },
  { value: 'outro', label: 'Outro' },
];

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);

  if (state.success) {
    return (
      <GlowCard glowColor="cyan" className="text-center py-12">
        <CheckCircle size={48} className="text-success mx-auto mb-4" />
        <h3 className="font-heading text-xl font-semibold text-foreground">
          Mensagem Enviada!
        </h3>
        <p className="mt-2 text-foreground-muted">{state.message}</p>
      </GlowCard>
    );
  }

  return (
    <GlowCard glowColor="cyan">
      <form action={formAction} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Input
            name="name"
            id="name"
            label="Nome *"
            placeholder="Seu nome"
            required
            error={state.errors?.name?.[0]}
          />
          <Input
            name="email"
            id="email"
            type="email"
            label="Email *"
            placeholder="seu@email.com"
            required
            error={state.errors?.email?.[0]}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Input
            name="phone"
            id="phone"
            type="tel"
            label="Telefone"
            placeholder="(11) 99999-9999"
          />
          <Input
            name="company"
            id="company"
            label="Empresa"
            placeholder="Nome da sua empresa"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="subject" className="block text-sm font-medium text-foreground">
            Assunto *
          </label>
          <select
            name="subject"
            id="subject"
            required
            className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 transition-all duration-200"
          >
            {subjects.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
          {state.errors?.subject && (
            <p className="text-sm text-error">{state.errors.subject[0]}</p>
          )}
        </div>

        <Textarea
          name="message"
          id="message"
          label="Mensagem *"
          placeholder="Conte-nos sobre sua necessidade..."
          rows={5}
          required
          error={state.errors?.message?.[0]}
        />

        <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isPending}>
          {isPending ? 'Enviando...' : 'Enviar Mensagem'}
          <Send size={18} />
        </Button>

        {state.message && !state.success && (
          <p className="text-sm text-error text-center">{state.message}</p>
        )}
      </form>
    </GlowCard>
  );
}
