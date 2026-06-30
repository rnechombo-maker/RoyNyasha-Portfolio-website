import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { pageVariants } from '@animations/variants';
import { ButtonLink } from '@components/ui/Buttons';
import { SectionWrapper } from '@components/ui/SectionWrapper';

export default function NotFoundPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <SectionWrapper
        eyebrow="404"
        title="The page you were looking for has drifted out of frame."
        description="The route does not exist, but the portfolio does. Let’s get you back to the work that matters."
        className="min-h-[70vh] pt-20"
      >
        <ButtonLink to="/" variant="secondary">
          <ArrowLeft size={18} /> Back to Home
        </ButtonLink>
      </SectionWrapper>
    </motion.div>
  );
}
