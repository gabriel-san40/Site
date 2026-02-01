'use client';

import { X } from 'lucide-react';
import { NAV_ITEMS } from '@/lib/constants';
import { NavLink } from './nav-link';
import { Button } from '@/components/ui/button';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-72 bg-background-secondary border-l border-border p-6">
        <div className="flex justify-end mb-8">
          <button
            onClick={onClose}
            className="text-foreground-muted hover:text-foreground transition-colors"
            aria-label="Fechar menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col gap-6">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              onClick={onClose}
              className="text-lg"
            />
          ))}
          <Button href="/contato" variant="primary" size="md" className="mt-4">
            Fale Conosco
          </Button>
        </nav>
      </div>
    </div>
  );
}
