import type { Metadata } from 'next';
import { CompanyInfo } from '@/components/sections/about/company-info';
import { MissionValues } from '@/components/sections/about/mission-values';
import { Team } from '@/components/sections/about/team';

export const metadata: Metadata = {
  title: 'Sobre Nos',
  description:
    'Conheca a San Automation: nossa missao, valores e a equipe por tras dos agentes de IA conversacional mais avancados do mercado.',
};

export default function SobrePage() {
  return (
    <>
      <CompanyInfo />
      <MissionValues />
      <Team />
    </>
  );
}
