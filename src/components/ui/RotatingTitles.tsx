import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { HERO_TITLES } from '@constants/brand';
import { usePrefersReducedMotion } from '@hooks/usePrefersReducedMotion';

export default function RotatingTitles() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % HERO_TITLES.length);
    }, 2200);

    return () => window.clearInterval(timer);
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) {
    return <span>{HERO_TITLES[0]}</span>;
  }

  return (
    <span className="relative inline-flex min-h-[1.5em] min-w-[16ch] overflow-hidden text-accent">
      <AnimatePresence mode="wait">
        <motion.span
          key={HERO_TITLES[index]}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-x-0 top-0 text-center lg:left-0 lg:right-auto lg:text-left"
        >
          {HERO_TITLES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
