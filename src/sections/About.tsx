import { motion } from 'framer-motion';
import { childVariants } from '@animations/variants';
import { SectionWrapper } from '@components/ui/SectionWrapper';

const focusAreas = [
  'Building software and AI-driven systems that solve practical business problems with clarity and purpose.',
  'Growing as a Computer Scientist through continuous learning, experimentation, and disciplined execution.',
  'Blending engineering, photography, and digital creativity to create experiences that are useful, memorable, and well crafted.'
];

export default function About() {
  return (
    <SectionWrapper
      id="about"
      eyebrow="About"
      title="A broader professional identity shaped by engineering, systems thinking, and creative craft."
      description="I want my work to be measured not only by how well it functions, but by how clearly it solves problems and how thoughtfully it is experienced."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div variants={childVariants} className="glass-card p-6 sm:p-8">
          <p className="text-body-lg leading-8 text-textPrimary/72">
            I am a Computer Science student at Harare Institute of Technology, a Software Engineer, an emerging Computer Scientist, and an IT Professional who enjoys turning complexity into clear, useful systems. My work is rooted in building software that improves how people operate, decide, and grow.
          </p>
          <p className="text-body-lg mt-6 leading-8 text-textPrimary/72">
            I am especially drawn to business-focused products, AI-powered tools, and digital experiences that feel refined without losing practical value. As a Hackathon Winner and AI Builder, I care about ideas that move quickly from concept to meaningful execution.
          </p>
          <p className="text-body-lg mt-6 leading-8 text-textPrimary/72">
            Photography and digital creativity sharpen how I approach product presentation, visual rhythm, and storytelling. That means I do not just think about code and infrastructure. I think about the full experience, from the first interaction to the final impression.
          </p>
        </motion.div>
        <motion.div variants={childVariants} className="space-y-6">
          <div className="glass-card p-6 sm:p-7">
            <p className="text-sm uppercase tracking-[0.24em] text-highlightSoft">What I&apos;m focused on now</p>
            <ul className="mt-5 space-y-4 text-textPrimary/72">
              {focusAreas.map((item) => (
                <li key={item} className="rounded-2xl border border-accent/10 bg-white/[0.03] px-4 py-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-6 sm:p-7">
            <p className="text-sm uppercase tracking-[0.24em] text-highlightSoft">What I bring to teams</p>
            <p className="text-body-lg mt-4 leading-7 text-textPrimary/72">
              Strong technical thinking, modern product instincts, dependable professional judgment, and a creative eye that helps software feel considered rather than generic.
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
