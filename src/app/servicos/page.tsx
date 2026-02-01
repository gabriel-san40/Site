import type { Metadata } from 'next';
import { services } from '@/data/services';
import { Container } from '@/components/ui/container';
import { ServicesHero } from '@/components/sections/services/services-hero';
import { ServiceDetailCard } from '@/components/sections/services/service-detail-card';
import { ServicesCTA } from '@/components/sections/services/services-cta';

export const metadata: Metadata = {
  title: 'Servicos',
  description:
    'Chatbots inteligentes, voicebots, integracoes e automacao com IA conversacional para transformar o atendimento da sua empresa.',
};

export default function ServicosPage() {
  return (
    <>
      <ServicesHero />
      <section className="pb-20 md:pb-28">
        <Container>
          <div className="space-y-8">
            {services.map((service, index) => (
              <ServiceDetailCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>
      <ServicesCTA />
    </>
  );
}
