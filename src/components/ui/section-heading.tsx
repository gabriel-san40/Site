import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  gradient?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  gradient = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(centered && 'text-center', 'mb-12 md:mb-16', className)}>
      <h2
        className={cn(
          'font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl',
          gradient
            ? 'bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent'
            : 'text-foreground'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-foreground-muted md:text-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
