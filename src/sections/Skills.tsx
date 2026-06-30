import { SectionWrapper } from '@components/ui/SectionWrapper';
import { skillCategories } from '@constants/siteData';

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      eyebrow="Skills"
      title="A toolkit built for engineering, support, and polished digital delivery."
      description="My range lets me move from debugging infrastructure and APIs to shaping UI detail, brand presentation, and content execution."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <article key={category.title} className="glass-card h-full p-6 transition duration-300 hover:border-highlight/30">
              <Icon className="mb-5 text-highlight" size={24} aria-hidden />
              <h3 className="font-display text-3xl font-semibold text-textPrimary">{category.title}</h3>
              <p className="mt-3 text-sm leading-6 text-textPrimary/68">{category.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-accent/12 bg-white/[0.03] px-3 py-1 text-sm text-textPrimary/72">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
