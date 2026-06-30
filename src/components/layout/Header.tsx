import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import SocialLinks from '@components/ui/SocialLinks';
import { navItems } from '@constants/siteData';
import { cn } from '@utils/cn';

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    setOpen(false);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname, location.hash, closeMenu]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeMenu();
        toggleRef.current?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, closeMenu]);

  useEffect(() => {
    if (!open) return;

    const drawer = drawerRef.current;
    if (!drawer) return;

    const focusable = drawer.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handleTab = (event: KeyboardEvent) => {
      if (event.key !== 'Tab' || focusable.length === 0) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    first?.focus();
    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [open]);

  const isNavActive = (href: string, isActive: boolean) => {
    if (href === '/') return isActive;
    if (href.includes('#')) return false;
    return isActive;
  };

  return (
    <header className="sticky top-0 z-50 border-b border-accent/10 bg-bgPrimary/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8 lg:px-10">
        <Link to="/" className="group flex items-center gap-3" data-cursor="interactive" aria-label="Go to home page">
          <span className="grid h-11 w-11 place-items-center rounded-2xl border border-accent/15 bg-white/[0.03] text-sm font-semibold tracking-[0.24em] text-textPrimary transition group-hover:border-highlight/40">
            RN
          </span>
          <div>
            <p className="text-sm font-medium text-textPrimary">Roy Nechombo</p>
            <p className="text-xs text-muted">Engineer • Creative</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-accent/12 bg-white/[0.03] px-3 py-2 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              className={({ isActive }) =>
                cn('nav-link', isNavActive(item.href, isActive) && 'nav-link-active')
              }
              data-cursor="interactive"
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="grid h-11 w-11 place-items-center rounded-full border border-accent/15 bg-white/[0.03] text-textPrimary transition hover:border-highlight/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight/60 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls={menuId}
          data-cursor="interactive"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            ref={drawerRef}
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-accent/10 bg-bgPrimary/95 px-4 py-5 backdrop-blur-xl md:hidden"
          >
            <nav className="grid gap-2" aria-label="Mobile navigation links">
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    cn(
                      'rounded-2xl border px-4 py-3 text-sm text-textPrimary/85 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-highlight/60',
                      isNavActive(item.href, isActive)
                        ? 'border-highlight/45 bg-highlight/10 text-textPrimary'
                        : 'border-accent/12 bg-white/[0.03] hover:border-highlight/35 hover:text-textPrimary'
                    )
                  }
                  data-cursor="interactive"
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="mt-6 border-t border-accent/10 pt-5">
              <p className="mb-3 text-xs uppercase tracking-[0.22em] text-muted">Connect</p>
              <SocialLinks />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
