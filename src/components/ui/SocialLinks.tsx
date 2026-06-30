import { socialLinks } from '@constants/siteData';
import { cn } from '@utils/cn';

const ariaLabels: Record<string, string> = {
  GitHub: 'View GitHub profile',
  LinkedIn: 'Connect on LinkedIn',
  Instagram: 'Follow Street Art Gallery on Instagram',
  WhatsApp: 'Message Roy Nyasha Nechombo on WhatsApp',
  Email: 'Send email to Roy Nyasha Nechombo'
};

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-wrap gap-3', className)}>
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
            className="social-button"
            aria-label={ariaLabels[link.label] ?? link.label}
            data-cursor="interactive"
          >
            <Icon size={18} />
          </a>
        );
      })}
    </div>
  );
}
