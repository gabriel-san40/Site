import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { GlowCard } from '@/components/ui/glow-card';
import { formatDate } from '@/lib/utils';
import type { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
}

const glowColors = ['cyan', 'purple', 'blue'] as const;

export function BlogCard({ post }: BlogCardProps) {
  const colorIndex = post.slug.length % 3;

  return (
    <Link href={`/blog/${post.slug}`}>
      <GlowCard
        glowColor={glowColors[colorIndex]}
        className="h-full cursor-pointer group"
      >
        <div className="flex flex-col gap-4 h-full">
          <Badge variant={(['primary', 'secondary', 'accent'] as const)[colorIndex]}>
            {post.category}
          </Badge>

          <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-foreground-muted leading-relaxed line-clamp-3 flex-1">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4 text-xs text-foreground-muted pt-4 border-t border-border">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>
        </div>
      </GlowCard>
    </Link>
  );
}
