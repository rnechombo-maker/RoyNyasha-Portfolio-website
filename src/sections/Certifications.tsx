import { ShieldCheck } from 'lucide-react';
import { SectionWrapper } from '@components/ui/SectionWrapper';
import { certifications } from '@constants/siteData';

export default function Certifications() {
  return (
    <SectionWrapper
      id="certifications"
      eyebrow="Certifications"
      title="Proof of steady learning across software, security, and creative technology."
      description="I treat certifications as signals of curiosity and follow-through, not endpoints."
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {certifications.map((item) => (
          <article key={item.title} className="glass-card h-full p-5">
            <ShieldCheck className="text-accent" size={18} />
            <p className="mt-4 text-base font-semibold text-textPrimary">{item.title}</p>
            <p className="mt-2 text-sm text-accent">{item.issuer}</p>
            <p className="mt-4 text-sm leading-6 text-textPrimary/68">{item.takeaway}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
