import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { childVariants, sectionVariants } from '@animations/variants';
import { useSectionInView } from '@hooks/useSectionInView';
import { cn } from '@utils/cn';

export function SectionWrapper({
  id,
  eyebrow,
  title,
  description,
  children,
  className
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  const { ref, isInView } = useSectionInView<HTMLElement>();

  return (
    <motion.section
      id={id}
      ref={ref}
      className={cn('relative mx-auto max-w-7xl px-4 py-14 sm:px-8 sm:py-20 lg:px-10 lg:py-28', className)}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <motion.div variants={childVariants} className="mb-10 max-w-3xl sm:mb-12">
        {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
        <h2 className="font-display text-section-title font-semibold leading-[0.96] tracking-tight text-textPrimary">{title}</h2>
        {description ? <p className="text-body-lg mt-5 leading-8 text-textPrimary/72">{description}</p> : null}
      </motion.div>
      <motion.div variants={childVariants}>{children}</motion.div>
    </motion.section>
  );
}
