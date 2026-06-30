import SocialLinks from '@components/ui/SocialLinks';

export default function Footer() {
  return (
    <footer className="border-t border-accent/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <p className="text-sm text-muted">Designed &amp; Developed by Roy Nyasha Nechombo.</p>
        <SocialLinks />
      </div>
    </footer>
  );
}
