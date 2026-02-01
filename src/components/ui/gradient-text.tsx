import { cn } from '@/lib/utils';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'p';
}

export function GradientText({
  children,
  className,
  as: Component = 'span',
}: GradientTextProps) {
  return (
    <Component
      className={cn(
        'bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </Component>
  );
}
