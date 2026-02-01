import type { Metadata } from 'next';
import { Container } from '@/components/ui/container';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Politica de Privacidade',
  description:
    'Politica de privacidade da San Automation. Saiba como coletamos, usamos e protegemos seus dados pessoais.',
};

export default function PoliticaDePrivacidadePage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <Container className="max-w-3xl">
        <h1 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl text-foreground">
          Politica de{' '}
          <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Privacidade
          </span>
        </h1>
        <p className="mt-4 text-foreground-muted">
          Ultima atualizacao: {new Date().toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <article className="mt-12 space-y-10 text-foreground-muted leading-relaxed">
          {/* 1 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              1. Introducao
            </h2>
            <p>
              A {SITE_CONFIG.name} (&quot;nos&quot;, &quot;nosso&quot; ou &quot;empresa&quot;) esta comprometida em
              proteger a privacidade dos usuarios de nosso site e servicos. Esta Politica de
              Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas
              informacoes pessoais, em conformidade com a Lei Geral de Protecao de Dados
              (LGPD — Lei n.º 13.709/2018).
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              2. Dados que Coletamos
            </h2>
            <p className="mb-3">Podemos coletar os seguintes tipos de dados pessoais:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-foreground">Dados de identificacao:</strong> nome, email,
                telefone e nome da empresa, fornecidos voluntariamente atraves de nosso formulario
                de contato.
              </li>
              <li>
                <strong className="text-foreground">Dados de uso:</strong> informacoes sobre como
                voce navega em nosso site, incluindo paginas visitadas, tempo de permanencia e
                dispositivo utilizado.
              </li>
              <li>
                <strong className="text-foreground">Cookies e tecnologias similares:</strong> dados
                coletados automaticamente para melhorar sua experiencia de navegacao.
              </li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              3. Como Usamos seus Dados
            </h2>
            <p className="mb-3">Utilizamos seus dados pessoais para as seguintes finalidades:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder a solicitacoes e mensagens enviadas pelo formulario de contato.</li>
              <li>Enviar informacoes sobre nossos servicos, quando solicitado.</li>
              <li>Melhorar nosso site e a experiencia do usuario.</li>
              <li>Cumprir obrigacoes legais e regulatorias.</li>
              <li>Proteger nossos direitos e prevenir fraudes.</li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              4. Base Legal para o Tratamento
            </h2>
            <p>
              O tratamento de seus dados pessoais e realizado com base nas seguintes hipoteses
              legais previstas na LGPD: consentimento do titular, execucao de contrato ou de
              procedimentos preliminares, cumprimento de obrigacao legal e interesse legitimo da
              empresa, sempre respeitando seus direitos e liberdades fundamentais.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              5. Compartilhamento de Dados
            </h2>
            <p>
              Nao vendemos, alugamos ou compartilhamos seus dados pessoais com terceiros para
              fins de marketing. Podemos compartilhar dados apenas com prestadores de servicos
              essenciais (como hospedagem e envio de emails) que atuam em nosso nome e sob nossas
              instrucoes, ou quando exigido por lei.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              6. Armazenamento e Seguranca
            </h2>
            <p>
              Adotamos medidas tecnicas e organizacionais adequadas para proteger seus dados
              pessoais contra acesso nao autorizado, perda, alteracao ou destruicao. Seus dados
              sao armazenados em servidores seguros e retidos apenas pelo tempo necessario para
              cumprir as finalidades descritas nesta politica.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              7. Seus Direitos
            </h2>
            <p className="mb-3">
              De acordo com a LGPD, voce tem os seguintes direitos em relacao aos seus dados
              pessoais:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirmar a existencia de tratamento de dados.</li>
              <li>Acessar seus dados pessoais.</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
              <li>Solicitar a anonimizacao, bloqueio ou eliminacao de dados desnecessarios.</li>
              <li>Solicitar a portabilidade dos dados.</li>
              <li>Revogar o consentimento a qualquer momento.</li>
            </ul>
            <p className="mt-3">
              Para exercer qualquer desses direitos, entre em contato conosco atraves do
              email{' '}
              <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline">
                {SITE_CONFIG.email}
              </a>
              .
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              8. Cookies
            </h2>
            <p>
              Nosso site pode utilizar cookies para melhorar a experiencia de navegacao. Cookies
              sao pequenos arquivos de texto armazenados em seu dispositivo. Voce pode configurar
              seu navegador para recusar cookies, mas isso pode afetar algumas funcionalidades do
              site.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              9. Alteracoes nesta Politica
            </h2>
            <p>
              Podemos atualizar esta Politica de Privacidade periodicamente. Quaisquer alteracoes
              serao publicadas nesta pagina com a data de atualizacao revisada. Recomendamos que
              voce revise esta pagina regularmente.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="font-heading text-xl font-semibold text-foreground mb-3">
              10. Contato
            </h2>
            <p>
              Se voce tiver duvidas sobre esta Politica de Privacidade ou sobre o tratamento de
              seus dados pessoais, entre em contato conosco:
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
