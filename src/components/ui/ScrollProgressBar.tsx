import { motion } from 'framer-motion';
import { useScrollProgress } from '@hooks/useScrollProgress';

export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[100] h-1 origin-left bg-accent"
      style={{ scaleX: Math.max(progress, 0.02) }}
    />
  );
}
