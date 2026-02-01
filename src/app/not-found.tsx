import { Bot } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <Container className="text-center">
        <Bot size={64} className="text-primary mx-auto mb-6 opacity-50" />
        <h1 className="font-heading text-6xl font-bold md:text-8xl bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="mt-4 font-heading text-xl md:text-2xl text-foreground">
          Pagina nao encontrada
        </h2>
        <p className="mt-2 text-foreground-muted max-w-md mx-auto">
          A pagina que voce esta procurando nao existe ou foi movida.
        </p>
        <div className="mt-8">
          <Button href="/" variant="primary" size="lg">
            Voltar para a Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
