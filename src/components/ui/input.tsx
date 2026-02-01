import { forwardRef, InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-foreground">
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={cn(
            'w-full rounded-xl border border-border bg-surface px-4 py-3 text-foreground placeholder:text-foreground-muted',
            'focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 focus:shadow-[0_0_10px_rgba(0,229,255,0.1)]',
            'transition-all duration-200',
            error && 'border-error focus:border-error focus:ring-error/30',
            className
          )}
          {...props}
        />
        {error && <p className="text-sm text-error">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
