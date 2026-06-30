import type { IconType } from 'react-icons';

export type ProjectStatus = 'Currently Building' | 'Prototype' | 'Product Concept' | 'Hackathon Winner';

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  description: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: IconType;
  skills: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  status: ProjectStatus;
  githubUrl: string;
  liveUrl?: string;
  imageLabel: string;
  imageSrc?: string;
  highlight?: boolean;
}

export interface TimelineItem {
  title: string;
  organisation: string;
  meta: string;
  period: string;
  details: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  takeaway: string;
}

export interface GalleryItem {
  title: string;
  category: string;
  description: string;
  imageSrc?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export interface GitHubRepo {
  name: string;
  description: string;
  language: string;
  stars?: number;
  url: string;
  pinned?: boolean;
}

export interface GitLanguageStat {
  name: string;
  percentage: number;
}

export interface ContributionDay {
  level: 0 | 1 | 2 | 3 | 4;
}

export interface SeoMeta {
  title: string;
  description: string;
  path: string;
  image?: string;
}
