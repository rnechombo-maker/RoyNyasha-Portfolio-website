import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { pageVariants } from '@animations/variants';
import { ButtonLink } from '@components/ui/Buttons';
import { SectionWrapper } from '@components/ui/SectionWrapper';
import { projects } from '@constants/siteData';
import { cn } from '@utils/cn';

export default function ProjectsPage() {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <SectionWrapper
        eyebrow="Projects"
        title="Software projects shaped by business problems, user needs, and product ambition."
        description="From AI-powered retail systems to student platforms and educational experiences, these projects show how I approach solution design with both technical depth and user empathy."
        className="pt-16"
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.id} className="group glass-card overflow-hidden">
              <div className={cn('project-visual', project.imageSrc && 'project-visual--image')}>
                {project.imageSrc ? (
                  <img
                    src={project.imageSrc}
                    alt={project.name}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    fetchPriority={index === 0 ? 'high' : 'auto'}
                    sizes="(min-width: 1024px) 50vw, calc(100vw - 2rem)"
                    className={cn(
                      'absolute inset-0 h-full w-full max-w-full',
                      project.imageFit === 'contain' ? 'object-contain p-6 sm:p-8' : 'object-cover'
                    )}
                  />
                ) : null}
              </div>
              <div className="p-5 sm:p-7">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="font-display text-2xl font-semibold text-textPrimary sm:text-3xl">{project.name}</h2>
                  <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                    {project.status}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-textPrimary/72 sm:mt-5 sm:text-base">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-accent/12 bg-white/[0.03] px-3 py-1 text-sm text-textPrimary/75">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a className="icon-link" href={project.githubUrl} target="_blank" rel="noreferrer" data-cursor="interactive">
                    <Github size={18} /> GitHub
                  </a>
                  {project.liveUrl ? (
                    <a className="icon-link" href={project.liveUrl} data-cursor="interactive">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 glass-card flex flex-col gap-5 p-5 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-accent">Need more detail?</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-textPrimary sm:text-3xl">I can turn ideas into shipping products with clean execution.</h3>
            <p className="mt-3 max-w-3xl text-textPrimary/72">
              These are examples of the kinds of systems I enjoy building: practical, scalable, user-aware, and aligned with real operational goals.
            </p>
          </div>
          <ButtonLink to="/contact" variant="secondary">
            Start a Conversation <ArrowUpRight size={18} />
          </ButtonLink>
        </div>
      </SectionWrapper>
    </motion.div>
  );
}
