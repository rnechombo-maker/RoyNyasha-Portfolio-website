import { Sparkles } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter';
import { SectionWrapper } from '@components/ui/SectionWrapper';
import { stats } from '@constants/siteData';

export default function Stats() {
  return (
    <SectionWrapper
      eyebrow="Statistics"
      title="Built on momentum, curiosity, and a practical drive to ship."
      description="These numbers reflect a learning journey grounded in consistency, experimentation, and real-world application."
      className="pt-8 lg:pt-12"
    >
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="glass-card p-5 sm:p-6">
            <Sparkles className="text-highlight" size={18} aria-hidden />
            <p className="mt-5 font-display text-5xl font-semibold text-textPrimary">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted">{stat.label}</p>
            <p className="mt-4 text-sm leading-6 text-textPrimary/68">{stat.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
