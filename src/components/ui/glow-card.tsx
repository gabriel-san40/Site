import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'blue';
}

const glowClasses = {
  cyan: 'hover:border-primary/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.15)]',
  purple: 'hover:border-secondary/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]',
  blue: 'hover:border-accent/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]',
};

export function GlowCard({
  children,
  className,
  glowColor = 'cyan',
}: GlowCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-border bg-surface p-6 md:p-8 transition-all duration-300',
        glowClasses[glowColor],
        className
      )}
    >
      {children}
    </div>
  );
}
