import { useEffect } from 'react';
import { defaultImage } from '@constants/seo';
import { siteUrl } from '@constants/siteData';
import type { SeoMeta } from '@/types/site';

const metaSelectors = [
  'meta[name="description"]',
  'meta[property="og:title"]',
  'meta[property="og:description"]',
  'meta[property="og:type"]',
  'meta[property="og:url"]',
  'meta[property="og:image"]',
  'meta[name="twitter:card"]',
  'meta[name="twitter:title"]',
  'meta[name="twitter:description"]',
  'meta[name="twitter:image"]'
];

export default function SeoHead({ meta }: { meta: SeoMeta }) {
  useEffect(() => {
    document.title = meta.title;

    upsertMeta('name', 'description', meta.description);
    upsertMeta('property', 'og:title', meta.title);
    upsertMeta('property', 'og:description', meta.description);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:url', `${siteUrl}${meta.path}`);
    upsertMeta('property', 'og:image', meta.image ?? defaultImage);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', meta.title);
    upsertMeta('name', 'twitter:description', meta.description);
    upsertMeta('name', 'twitter:image', meta.image ?? defaultImage);

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]') ?? document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', `${siteUrl}${meta.path}`);
    document.head.appendChild(canonical);

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Roy Nyasha Nechombo',
      jobTitle: 'Software Engineer and Digital Creative',
      url: siteUrl,
      email: 'mailto:rnechombo@gmail.com',
      telephone: '+263788477915',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Harare',
        addressCountry: 'Zimbabwe'
      },
      alumniOf: {
        '@type': 'CollegeOrUniversity',
        name: 'Harare Institute of Technology'
      },
      knowsAbout: ['Software Engineering', 'IT Support', 'React', 'Python', 'Photography', 'Digital Storytelling']
    };

    const scriptId = 'roy-portfolio-jsonld';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = scriptId;
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(jsonLd);

    return () => {
      metaSelectors.forEach((selector) => {
        const element = document.querySelector(selector);
        if (element && element.getAttribute('data-dynamic-head') === 'true') {
          element.removeAttribute('data-dynamic-head');
        }
      });
    };
  }, [meta]);

  return null;
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attribute}="${key}"]`;
  const element = document.querySelector<HTMLMetaElement>(selector) ?? document.createElement('meta');
  element.setAttribute(attribute, key);
  element.setAttribute('content', content);
  element.setAttribute('data-dynamic-head', 'true');
  document.head.appendChild(element);
}
