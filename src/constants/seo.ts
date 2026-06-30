import type { SeoMeta } from '@/types/site';
import { siteUrl } from './siteData';

export const defaultImage = `${siteUrl}/og-image.svg`;

export const seoByRoute: Record<string, SeoMeta> = {
  '/': {
    title: 'Roy Nyasha Nechombo | Software Engineer & Digital Creative',
    description:
      'Software engineer, IT support specialist, photographer, and digital creative building useful products and polished digital experiences in Harare, Zimbabwe.',
    path: '/',
    image: defaultImage
  },
  '/projects': {
    title: 'Projects | Roy Nyasha Nechombo',
    description:
      'Explore software projects by Roy Nyasha Nechombo, from AI-powered retail tools to student platforms and educational interactive experiences.',
    path: '/projects',
    image: defaultImage
  },
  '/beyond-code': {
    title: 'Beyond Code | Roy Nyasha Nechombo',
    description:
      'A creative showcase of photography, visual storytelling, and digital media work by Roy Nyasha Nechombo.',
    path: '/beyond-code',
    image: defaultImage
  },
  '/contact': {
    title: 'Contact | Roy Nyasha Nechombo',
    description:
      'Get in touch with Roy Nyasha Nechombo for software engineering, IT support, and creative collaborations.',
    path: '/contact',
    image: defaultImage
  }
};
