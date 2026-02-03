import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Termos de Servico',
  description:
    'Termos de servico da San Automation. Leia os termos e condicoes de uso dos nossos servicos de IA humanizada.',
};

export default function TermosDeServicoPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <Container className="max-w-3xl">
        <h1 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl text-foreground">
          Termos de{' '}
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Servico
          </span>
        </h1>
        <p className="mt-4 text-foreground-muted">
          Ultima atualizacao: {new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <article className="mt-12 space-y-10 text-foreground-muted leading-relaxed">
          {/* 1 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              1. Aceitacao dos Termos
            </h2>
            <p>
              Ao acessar ou utilizar os servicos da {SITE_CONFIG.name} (&quot;empresa&quot;,
              &quot;nos&quot; ou &quot;nosso&quot;), voce concorda em cumprir e estar vinculado a
              estes Termos de Servico. Caso nao concorde com algum dos termos aqui descritos,
              por favor, nao utilize nossos servicos.
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              2. Descricao dos Servicos
            </h2>
            <p>
              A {SITE_CONFIG.name} oferece servicos de desenvolvimento, implementacao e
              manutencao de agentes de inteligencia artificial humanizados, incluindo, mas
              nao se limitando a:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Agentes de IA inteligentes para atendimento ao cliente.</li>
              <li>Voicebots com reconhecimento e sintese de voz.</li>
              <li>Integracao de agentes de IA com sistemas existentes (CRM, ERP, e-commerce).</li>
              <li>Automacao de processos por meio de IA humanizada.</li>
              <li>Dashboards de analise e insights de atendimento.</li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              3. Cadastro e Conta
            </h2>
            <p>
              Para contratar nossos servicos, podera ser necessario fornecer informacoes
              verdadeiras, completas e atualizadas. Voce e responsavel por manter a
              confidencialidade das credenciais de acesso fornecidas e por todas as atividades
              realizadas em sua conta.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              4. Obrigacoes do Cliente
            </h2>
            <p className="mb-3">Ao utilizar nossos servicos, voce se compromete a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Fornecer informacoes precisas e atualizadas para a configuracao dos agentes de IA.</li>
              <li>Nao utilizar os servicos para finalidades ilicitas, fraudulentas ou que violem direitos de terceiros.</li>
              <li>Nao tentar acessar, modificar ou interferir nos sistemas, servidores ou redes da empresa de forma nao autorizada.</li>
              <li>Cumprir com todas as leis e regulamentacoes aplicaveis, incluindo a LGPD.</li>
            </ul>
          </div>

          {/* 5 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              5. Propriedade Intelectual
            </h2>
            <p>
              Todo o conteudo, tecnologia, software, design, marcas e materiais disponibilizados
              pela {SITE_CONFIG.name} sao de propriedade exclusiva da empresa ou de seus
              licenciadores e estao protegidos pelas leis brasileiras de propriedade intelectual.
              E proibida a reproducao, distribuicao ou uso nao autorizado desses materiais.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              6. Pagamento e Condicoes Comerciais
            </h2>
            <p>
              Os valores, formas de pagamento e condicoes comerciais serao definidos em
              proposta comercial ou contrato especifico firmado entre as partes. O nao
              pagamento dentro dos prazos acordados podera resultar na suspensao dos servicos
              ate a regularizacao financeira.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              7. Nivel de Servico (SLA)
            </h2>
            <p>
              A {SITE_CONFIG.name} se compromete a manter seus servicos disponiveis e
              funcionando de acordo com os niveis de servico acordados em contrato. Eventuais
              interrupcoes programadas para manutencao serao comunicadas com antecedencia.
              Nao nos responsabilizamos por indisponibilidades causadas por fatores fora de
              nosso controle, incluindo falhas de terceiros, desastres naturais ou interrupcoes
              de infraestrutura de internet.
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              8. Confidencialidade
            </h2>
            <p>
              Ambas as partes se comprometem a manter em sigilo todas as informacoes
              confidenciais compartilhadas durante a prestacao dos servicos. Esta obrigacao
              permanece vigente mesmo apos o termino da relacao contratual.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              9. Limitacao de Responsabilidade
            </h2>
            <p>
              A {SITE_CONFIG.name} nao sera responsavel por danos indiretos, incidentais,
              especiais ou consequentes decorrentes do uso ou da impossibilidade de uso dos
              servicos, incluindo perda de lucros, dados ou oportunidades de negocio. Nossa
              responsabilidade total estara limitada ao valor pago pelo cliente nos ultimos
              12 meses de contrato.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              10. Protecao de Dados
            </h2>
            <p>
              O tratamento de dados pessoais realizados no ambito dos servicos sera conduzido
              em conformidade com a Lei Geral de Protecao de Dados (LGPD). Para mais detalhes,
              consulte nossa{' '}
              <Link
                href="/politica-de-privacidade"
                className="text-primary hover:underline"
              >
                Politica de Privacidade
              </Link>
              .
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              11. Rescisao
            </h2>
            <p>
              Qualquer uma das partes podera rescindir a prestacao de servicos mediante aviso
              previo por escrito, conforme os prazos estabelecidos em contrato. A{' '}
              {SITE_CONFIG.name} reserva-se o direito de suspender ou encerrar o acesso aos
              servicos imediatamente em caso de violacao destes termos pelo cliente.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              12. Alteracoes nos Termos
            </h2>
            <p>
              A {SITE_CONFIG.name} podera modificar estes Termos de Servico a qualquer
              momento. As alteracoes serao publicadas nesta pagina com a data de atualizacao
              revisada. O uso continuado dos servicos apos a publicacao das alteracoes
              constitui aceitacao dos novos termos.
            </p>
          </div>

          {/* 13 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              13. Legislacao Aplicavel e Foro
            </h2>
            <p>
              Estes Termos de Servico sao regidos pelas leis da Republica Federativa do Brasil.
              Fica eleito o foro da comarca de Sao Paulo/SP para dirimir quaisquer controversias
              decorrentes destes termos, com renúncia expressa a qualquer outro, por mais
              privilegiado que seja.
            </p>
          </div>

          {/* 14 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              14. Contato
            </h2>
            <p>
              Em caso de duvidas sobre estes Termos de Servico, entre em contato conosco:
            </p>
            <ul className="mt-3 space-y-1">
              <li>
                <strong className="text-foreground">Empresa:</strong> {SITE_CONFIG.name}
              </li>
              <li>
                <strong className="text-foreground">Email:</strong>{' '}
                <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline">
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <strong className="text-foreground">Telefone:</strong> {SITE_CONFIG.phone}
              </li>
              <li>
                <strong className="text-foreground">Endereco:</strong> {SITE_CONFIG.address}
              </li>
            </ul>
          </div>
        </article>
      </Container>
    </section>
  );
}
