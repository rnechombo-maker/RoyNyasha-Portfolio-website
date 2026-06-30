import { SectionWrapper } from '@components/ui/SectionWrapper';
import { education } from '@constants/siteData';

export default function Education() {
  return (
    <SectionWrapper
      id="education"
      eyebrow="Education"
      title="Academic discipline backed by practical execution."
      description="My education has given me the technical foundation to think rigorously while staying grounded in real-world application."
    >
      <div className="space-y-6">
        {education.map((item) => (
          <article key={item.title} className="relative border-l border-highlight/25 pl-6">
            <span className="timeline-dot absolute -left-[7px] top-2" />
            <div className="glass-card p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-highlightSoft">{item.period}</p>
                  <h3 className="mt-3 font-display text-3xl font-semibold text-textPrimary">{item.organisation}</h3>
                  <p className="mt-1 text-base text-textPrimary/68">{item.title}</p>
                </div>
                <span className="rounded-full border border-accent/12 bg-white/[0.03] px-4 py-2 text-sm text-textPrimary/68">{item.meta}</span>
              </div>
              <ul className="mt-6 grid gap-3 text-sm leading-7 text-textPrimary/68">
                {item.details.map((detail) => (
                  <li key={detail} className="rounded-2xl border border-accent/10 bg-white/[0.03] px-4 py-4">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
