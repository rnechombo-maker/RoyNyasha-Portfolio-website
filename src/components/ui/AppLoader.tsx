import { motion } from 'framer-motion';

export default function AppLoader() {
  return (
    <div className="fixed inset-0 z-[120] grid place-items-center bg-bgPrimary">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-muted">Loading portfolio</p>
        <h1 className="mt-4 font-display text-5xl font-semibold tracking-[0.08em] text-textPrimary sm:text-6xl">ROY NYASHA NECHOMBO</h1>
        <div className="mx-auto mt-6 h-1.5 w-40 overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-accent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.1, ease: 'easeInOut', repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}
