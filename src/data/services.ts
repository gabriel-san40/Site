import type { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'chatbots',
    title: 'Chatbots Inteligentes',
    shortDescription:
      'Atendimento automatizado por texto com IA avancada que entende e resolve.',
    fullDescription:
      'Nossos chatbots utilizam processamento de linguagem natural avancado para oferecer atendimento humanizado e eficiente. Eles aprendem com cada interacao, melhorando continuamente a qualidade das respostas e a satisfacao dos seus clientes.',
    features: [
      'Processamento de Linguagem Natural',
      'Aprendizado Continuo',
      'Multi-idioma',
      'Transferencia inteligente para humanos',
      'Respostas contextualizadas',
    ],
    icon: 'MessageSquare',
  },
  {
    id: 'voicebots',
    title: 'Voicebots',
    shortDescription:
      'Agentes de voz com IA que conversam naturalmente por telefone.',
    fullDescription:
      'Revolucione seu atendimento telefonico com voicebots que entendem fala natural, respondem com voz sintetizada de alta qualidade e resolvem demandas complexas sem intervencao humana.',
    features: [
      'Reconhecimento de Fala (STT)',
      'Sintese de Voz Natural (TTS)',
      'Detecção de Sentimento',
      'Dialogo contextual',
      'Integracao com telefonia',
    ],
    icon: 'Mic',
  },
  {
    id: 'integracoes',
    title: 'Integracao com Sistemas',
    shortDescription:
      'Conecte seus agentes a qualquer plataforma, CRM ou ERP existente.',
    fullDescription:
      'Integramos nossos agentes diretamente com seus sistemas existentes — CRM, ERP, e-commerce, helpdesk e muito mais. Seus agentes de IA acessam dados em tempo real para oferecer respostas precisas e executar acoes automaticamente.',
    features: [
      'APIs REST e Webhooks',
      'Conectores nativos para CRMs',
      'Integracao com e-commerce',
      'Sincronizacao em tempo real',
      'Seguranca e criptografia',
    ],
    icon: 'Link',
  },
  {
    id: 'automacao',
    title: 'Automacao de Processos',
    shortDescription:
      'Automatize fluxos de trabalho completos com inteligencia artificial.',
    fullDescription:
      'Va alem do atendimento. Automatize agendamentos, qualificacao de leads, cobrancas, pesquisas de satisfacao e qualquer fluxo repetitivo. Nossos agentes executam processos completos de ponta a ponta.',
    features: [
      'Automacao de agendamentos',
      'Qualificacao automatica de leads',
      'Fluxos de cobranca',
      'Pesquisas pos-atendimento',
      'Workflows customizados',
    ],
    icon: 'Workflow',
  },
  {
    id: 'analytics',
    title: 'Analise e Insights',
    shortDescription:
      'Dashboards e relatorios para tomar decisoes baseadas em dados.',
    fullDescription:
      'Transforme conversas em insights acionaveis. Nossos dashboards mostram metricas de atendimento, tendencias, sentimentos dos clientes e oportunidades de melhoria em tempo real.',
    features: [
      'Dashboard em tempo real',
      'Analise de sentimento',
      'Relatorios automatizados',
      'Identificacao de tendencias',
      'Exportacao de dados',
    ],
    icon: 'PieChart',
  },
];
