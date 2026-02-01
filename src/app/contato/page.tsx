import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { ContactForm } from '@/components/sections/contact/contact-form';
import { ContactInfo } from '@/components/sections/contact/contact-info';

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'Entre em contato com a San Automation. Estamos prontos para ajudar sua empresa com solucoes de IA conversacional.',
};

export default function ContatoPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <Container>
        <SectionHeading
          title="Fale Conosco"
          subtitle="Estamos prontos para ajudar sua empresa a dar o proximo passo com IA conversacional."
          gradient
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </Container>
    </section>
  );
}
