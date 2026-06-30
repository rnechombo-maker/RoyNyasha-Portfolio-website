import { Link } from 'react-router-dom';
import { cn } from '@utils/cn';
import type { ReactNode } from 'react';

const baseClassName =
  'group inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight/60 active:scale-[0.98]';

export function ButtonLink({
  to,
  children,
  variant = 'primary',
  className
}: {
  to: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}) {
  return (
    <Link to={to} className={cn(baseClassName, variantClasses[variant], className)} data-cursor="interactive">
      {children}
    </Link>
  );
}

export function ButtonAnchor({
  href,
  children,
  variant = 'primary',
  className,
  download,
  target,
  rel
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  download?: boolean;
  target?: string;
  rel?: string;
}) {
  return (
    <a
      href={href}
      download={download}
      target={target}
      rel={rel}
      className={cn(baseClassName, variantClasses[variant], className)}
      data-cursor="interactive"
    >
      {children}
    </a>
  );
}

const variantClasses = {
  primary: 'border-accent bg-accent text-bgPrimary hover:-translate-y-0.5 hover:border-highlightSoft hover:shadow-lift',
  secondary:
    'border-accent/25 bg-transparent text-textPrimary hover:-translate-y-0.5 hover:border-highlight/50 hover:bg-highlight/10',
  ghost: 'border-transparent bg-transparent text-textPrimary/80 hover:-translate-y-0.5 hover:bg-white/[0.04] hover:text-textPrimary'
};
