import { motion } from 'framer-motion';
import { ArrowDownToLine, ArrowRight, Github, MessageCircle } from 'lucide-react';
import { ButtonAnchor, ButtonLink } from '@components/ui/Buttons';
import { childVariants } from '@animations/variants';
import RotatingTitles from '@components/ui/RotatingTitles';
import { GITHUB_PROFILE } from '@constants/brand';
import { assetRegistry } from '@constants/assets';
import { credentials, heroTechStrip } from '@constants/siteData';

export default function Hero() {
  return (
    <section className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-10 px-4 pb-14 pt-12 sm:gap-14 sm:px-8 sm:pb-20 sm:pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-10 lg:pb-28 lg:pt-24">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.06 } }
        }}
        className="order-2 lg:order-1"
      >
        <motion.p variants={childVariants} className="eyebrow">
          Software engineer with a cinematic design sensibility
        </motion.p>
        <motion.h1
          variants={childVariants}
          className="mt-6 text-center font-display text-hero font-semibold leading-[0.88] tracking-tight text-textPrimary lg:text-left"
        >
          ROY NYASHA <span className="gradient-text">NECHOMBO</span>
        </motion.h1>
        <motion.div variants={childVariants} className="mt-6 text-center text-body-lg font-medium tracking-[0.04em] text-textPrimary/82 sm:mt-8 sm:text-xl lg:text-left lg:text-2xl">
          <RotatingTitles />
        </motion.div>
        <motion.p variants={childVariants} className="text-body-lg mt-6 max-w-2xl leading-8 text-textPrimary/72 sm:mt-8">
          I design and build software that solves real business problems, explore AI-powered systems that make work more intuitive, and craft digital experiences with the same attention to detail I bring to photography and visual storytelling.
        </motion.p>
        <motion.div variants={childVariants} className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap">
          <ButtonAnchor href="/Roy_Nyasha_Nechombo_Resume.txt" download>
            <ArrowDownToLine size={18} /> Download Resume
          </ButtonAnchor>
          <ButtonLink to="/projects" variant="secondary">
            <ArrowRight size={18} className="transition group-hover:translate-x-0.5" /> View Projects
          </ButtonLink>
          <ButtonLink to="/contact" variant="ghost">
            <MessageCircle size={18} /> Let&apos;s Talk
          </ButtonLink>
          <ButtonAnchor href={GITHUB_PROFILE} target="_blank" rel="noreferrer" variant="secondary">
            <Github size={18} /> GitHub
          </ButtonAnchor>
        </motion.div>
        <motion.div variants={childVariants} className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {credentials.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="glass-card p-5">
                <Icon className="text-highlight" size={20} aria-hidden />
                <h3 className="mt-4 font-display text-2xl font-semibold text-textPrimary">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-textPrimary/68">{item.description}</p>
              </div>
            );
          })}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.18 }}
        className="relative order-1 mx-auto w-full max-w-xl lg:order-2"
      >
        <div className="absolute -inset-8 rounded-[3rem] bg-highlight/8 blur-3xl" />
        <div className="relative overflow-hidden rounded-[2rem] border border-accent/15 bg-white/[0.04] p-4 shadow-card backdrop-blur-md sm:p-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-accent/10 bg-bgSecondary/20">
            <img
              src={assetRegistry.royPortrait}
              alt="Roy Nyasha Nechombo portrait"
              className="h-full w-full max-w-full object-cover object-center"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-[1.75rem] border border-accent/12 bg-bgPrimary/55 p-4 backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-5">
              <p className="text-sm uppercase tracking-[0.22em] text-highlightSoft">Currently focused on</p>
              <p className="mt-2 font-display text-2xl font-semibold leading-tight text-textPrimary sm:text-3xl">
                Software, AI systems, and digital experiences with lasting impact.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
          {heroTechStrip.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="inline-flex items-center gap-2 rounded-full border border-accent/15 bg-white/[0.03] px-3 py-2 text-sm text-textPrimary/74 sm:px-4"
              >
                <Icon size={16} aria-hidden />
                {item.label}
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
