import { Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import SocialLinks from '@components/ui/SocialLinks';
import { SectionWrapper } from '@components/ui/SectionWrapper';
import { sendContactEmail } from '@utils/email';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    const form = new FormData(event.currentTarget);

    try {
      await sendContactEmail({
        name: String(form.get('name')),
        email: String(form.get('email')),
        message: String(form.get('message'))
      });
      setStatus('sent');
      event.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <SectionWrapper
      id="contact"
      eyebrow="Contact"
      title="Let’s build something useful, polished, and real."
      description="Whether you need software engineering, dependable IT support, or a creative collaborator who understands digital presentation, I would love to hear about it."
    >
      <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="glass-card h-full p-6 sm:p-7">
          <h3 className="font-display text-3xl font-semibold text-textPrimary">Reach Roy</h3>
          <p className="mt-4 max-w-md text-base leading-7 text-textPrimary/72">
            I am open to internships, graduate opportunities, freelance collaborations, and ambitious product conversations.
          </p>
          <div className="mt-8 space-y-4 text-textPrimary/72">
            <p className="flex items-center gap-3">
              <MapPin className="text-highlight" size={20} aria-hidden /> Harare, Zimbabwe
            </p>
            <a className="flex items-center gap-3 transition hover:text-textPrimary" href="mailto:rnechombo@gmail.com" data-cursor="interactive">
              <Mail className="text-highlight" size={20} aria-hidden /> rnechombo@gmail.com
            </a>
            <a className="flex items-center gap-3 transition hover:text-textPrimary" href="tel:+263788477915" data-cursor="interactive">
              <Phone className="text-highlight" size={20} aria-hidden /> +263 788 477 915
            </a>
          </div>
          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>

        <form onSubmit={onSubmit} className="glass-card p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="field">
              <span>Name</span>
              <input name="name" autoComplete="name" required />
            </label>
            <label className="field">
              <span>Email</span>
              <input name="email" type="email" autoComplete="email" required />
            </label>
          </div>
          <label className="field mt-4">
            <span>Message</span>
            <textarea name="message" rows={7} required />
          </label>
          <div className="mt-5 flex flex-wrap gap-3">
            <button className="btn-primary" type="submit" disabled={status === 'sending'} data-cursor="interactive">
              {status === 'sending' ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
              Send Message
            </button>
            <a className="btn-secondary" href="mailto:rnechombo@gmail.com" data-cursor="interactive">
              <Mail size={18} />
              Email Directly
            </a>
          </div>
          {status === 'sent' ? (
            <p className="mt-4 text-sm text-accent" role="status">
              Message captured successfully. EmailJS will send directly when environment keys are configured, and the form already supports that production flow.
            </p>
          ) : null}
          {status === 'error' ? (
            <p className="mt-4 text-sm text-textPrimary/72" role="status">
              Something interrupted the send. Please email Roy directly.
            </p>
          ) : null}
        </form>
      </div>
    </SectionWrapper>
  );
}
