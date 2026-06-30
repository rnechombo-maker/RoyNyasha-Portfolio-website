import { motion } from 'framer-motion';
import { pageVariants } from '@animations/variants';
import Contact from '@sections/Contact';

export default function ContactPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Contact />
    </motion.div>
  );
}
