import type { Metadata } from 'next';
import { blogPosts } from '@/data/blog-posts';
import { Container } from '@/components/ui/container';
import { SectionHeading } from '@/components/ui/section-heading';
import { BlogCard } from '@/components/sections/blog/blog-card';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Artigos, novidades e insights sobre IA humanizada, chatbots, automacao e tendencias em tecnologia.',
};

export default function BlogPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <Container>
        <SectionHeading
          title="Blog"
          subtitle="Artigos, insights e novidades sobre IA humanizada e automacao."
          gradient
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
