import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '@hooks/usePrefersReducedMotion';

export default function AnimatedCursor() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { damping: 30, stiffness: 240, mass: 0.3 });
  const smoothY = useSpring(y, { damping: 30, stiffness: 240, mass: 0.3 });

  useEffect(() => {
    if (prefersReducedMotion || window.innerWidth < 1024) {
      return;
    }

    const move = (event: MouseEvent) => {
      x.set(event.clientX - 18);
      y.set(event.clientY - 18);
    };

    const updateHoverState = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setHovered(Boolean(target?.closest('[data-cursor="interactive"]')));
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', updateHoverState);

    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', updateHoverState);
    };
  }, [prefersReducedMotion, smoothX, smoothY, x, y]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[110] hidden rounded-full lg:block"
      style={{ x: smoothX, y: smoothY }}
      animate={{
        width: hovered ? 72 : 36,
        height: hovered ? 72 : 36,
        opacity: hovered ? 0.95 : 0.65
      }}
      transition={{ type: 'spring', damping: 24, stiffness: 220 }}
    >
      <div className="h-full w-full rounded-full border border-accent/35 bg-accent/10 blur-sm" />
    </motion.div>
  );
}
