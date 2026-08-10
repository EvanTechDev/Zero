import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ShowcaseSectionProps {
  id: string;
  title: string;
  description: string;
  children: ReactNode;
}

export function ShowcaseSection({ id, title, description, children }: ShowcaseSectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <div className="mb-5 flex flex-col gap-1 border-b border-border pb-4">
        <h2 className="text-lg font-semibold tracking-tight text-foreground">{title}</h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="flex flex-wrap gap-4">{children}</div>
    </section>
  );
}

interface ShowcaseTileProps {
  label: string;
  className?: string;
  children: ReactNode;
}

export function ShowcaseTile({ label, className, children }: ShowcaseTileProps) {
  return (
    <div
      className={cn(
        'flex min-w-[220px] flex-1 flex-col gap-3 rounded-lg border border-border bg-card p-4',
        className,
      )}
    >
      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      <div className="flex flex-1 flex-wrap items-center gap-3">{children}</div>
    </div>
  );
}
