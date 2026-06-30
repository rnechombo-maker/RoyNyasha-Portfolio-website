import { motion } from 'framer-motion';
import { lightPageVariants } from '@animations/variants';
import BeyondCode from '@sections/BeyondCode';

export default function BeyondCodePage() {
  return (
    <motion.div variants={lightPageVariants} initial="initial" animate="animate" exit="exit">
      <BeyondCode expanded />
    </motion.div>
  );
}
