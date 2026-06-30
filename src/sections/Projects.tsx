import { ExternalLink, Github } from 'lucide-react';
import { ButtonLink } from '@components/ui/Buttons';
import { SectionWrapper } from '@components/ui/SectionWrapper';
import { projects } from '@constants/siteData';
import { cn } from '@utils/cn';

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.highlight);

  return (
    <SectionWrapper
      id="projects"
      eyebrow="Featured Projects"
      title="Business-aware products with engineering depth."
      description="These projects reflect how I like to build: practical systems, clear user value, and enough craft to make the experience feel considered."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {featuredProjects.map((project) => (
          <article key={project.id} className="group glass-card overflow-hidden">
            <div className={cn('project-visual', project.imageSrc && 'project-visual--image')}>
              {project.imageSrc ? (
                <img
                  src={project.imageSrc}
                  alt={project.name}
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    'absolute inset-0 h-full w-full max-w-full',
                    project.imageFit === 'contain' ? 'object-contain p-6 sm:p-8' : 'object-cover'
                  )}
                />
              ) : null}
            </div>
            <div className="p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <h3 className="font-display text-3xl font-semibold text-textPrimary">{project.name}</h3>
                <span className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  {project.status}
                </span>
              </div>
              <p className="mt-4 leading-7 text-textPrimary/72">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded-full border border-accent/12 bg-white/[0.03] px-3 py-1 text-sm text-textPrimary/75">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
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
      <div className="mt-10">
        <ButtonLink to="/projects" variant="secondary">
          View All Projects
        </ButtonLink>
      </div>
    </SectionWrapper>
  );
}
