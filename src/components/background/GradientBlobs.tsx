import { motion } from 'framer-motion';

export default function GradientBlobs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute left-[-14%] top-[6%] h-72 w-72 rounded-full bg-accent/8 blur-3xl sm:h-[26rem] sm:w-[26rem]"
        animate={{ x: [0, 12, -8, 0], y: [0, 10, -12, 0], scale: [1, 1.02, 0.98, 1] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[-8%] top-[14%] h-80 w-80 rounded-full bg-white/6 blur-3xl sm:h-[30rem] sm:w-[30rem]"
        animate={{ x: [0, -10, 6, 0], y: [0, -8, 12, 0], scale: [1, 0.99, 1.03, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-15%] left-1/3 h-80 w-80 rounded-full bg-bgSecondary/15 blur-3xl sm:h-[28rem] sm:w-[28rem]"
        animate={{ x: [0, 8, -8, 0], y: [0, -10, 6, 0], scale: [1, 1.03, 1, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
