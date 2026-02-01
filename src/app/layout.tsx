import type { Metadata } from 'next';
import { inter, spaceGrotesk } from '@/lib/fonts';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://sanautomation.com.br'),
  title: {
    default: 'San Automation | Agentes de IA Conversacional',
    template: '%s | San Automation',
  },
  description:
    'Transforme o atendimento da sua empresa com agentes de IA conversacional inteligentes. Chatbots, voicebots e automacao com inteligencia artificial.',
  keywords: [
    'IA conversacional',
    'chatbot',
    'voicebot',
    'automacao',
    'inteligencia artificial',
    'atendimento automatizado',
    'San Automation',
  ],
  openGraph: {
    locale: 'pt_BR',
    type: 'website',
    siteName: 'San Automation',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
