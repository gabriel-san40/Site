import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';
import { Container } from '@/components/ui/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Post nao encontrado' };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <Container className="max-w-3xl">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Voltar ao Blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl text-foreground">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-foreground-muted">
            <span className="flex items-center gap-1">
              <User size={16} />
              {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={16} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={16} />
              {post.readTime}
            </span>
          </div>
        </header>

        {/* Content */}
        <article className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-foreground-muted prose-strong:text-foreground prose-li:text-foreground-muted prose-a:text-primary prose-h2:text-2xl prose-h3:text-xl">
          {post.content.split('\n').map((line, i) => {
            const trimmed = line.trim();
            if (!trimmed) return <br key={i} />;
            if (trimmed.startsWith('## '))
              return (
                <h2 key={i} className="mt-10 mb-4 font-heading text-2xl font-bold text-foreground">
                  {trimmed.slice(3)}
                </h2>
              );
            if (trimmed.startsWith('### '))
              return (
                <h3 key={i} className="mt-8 mb-3 font-heading text-xl font-semibold text-foreground">
                  {trimmed.slice(4)}
                </h3>
              );
            if (trimmed.startsWith('- **'))
              return (
                <li key={i} className="ml-4 text-foreground-muted list-disc">
                  <strong className="text-foreground">
                    {trimmed.match(/\*\*(.*?)\*\*/)?.[1]}
                  </strong>
                  : {trimmed.replace(/- \*\*.*?\*\*:?\s?/, '')}
                </li>
              );
            if (trimmed.startsWith('- '))
              return (
                <li key={i} className="ml-4 text-foreground-muted list-disc">
                  {trimmed.slice(2)}
                </li>
              );
            if (trimmed.match(/^\d+\. /))
              return (
                <li key={i} className="ml-4 text-foreground-muted list-decimal">
                  <strong className="text-foreground">
                    {trimmed.match(/\*\*(.*?)\*\*/)?.[1]}
                  </strong>
                  {trimmed.match(/\*\*(.*?)\*\*/)
                    ? ': ' + trimmed.replace(/^\d+\. \*\*.*?\*\*:?\s?/, '')
                    : trimmed.replace(/^\d+\. /, '')}
                </li>
              );
            return (
              <p key={i} className="text-foreground-muted leading-relaxed mb-4">
                {trimmed}
              </p>
            );
          })}
        </article>

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-border bg-surface p-8 text-center">
          <h3 className="font-heading text-xl font-semibold text-foreground">
            Quer implementar essas solucoes na sua empresa?
          </h3>
          <p className="mt-2 text-foreground-muted">
            Fale com nossos especialistas e descubra como a IA pode transformar seu negocio.
          </p>
          <div className="mt-6">
            <Button href="/contato" variant="primary" size="md">
              Fale Conosco
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
