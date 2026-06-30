import { motion } from 'framer-motion';
import { pageVariants } from '@animations/variants';
import About from '@sections/About';
import BeyondCode from '@sections/BeyondCode';
import Certifications from '@sections/Certifications';
import Contact from '@sections/Contact';
import Education from '@sections/Education';
import Experience from '@sections/Experience';
import GithubSection from '@sections/GithubSection';
import Hero from '@sections/Hero';
import Projects from '@sections/Projects';
import Skills from '@sections/Skills';
import Stats from '@sections/Stats';

export default function HomePage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <BeyondCode />
      <GithubSection />
      <Contact />
    </motion.div>
  );
}
