import type { IconType } from 'react-icons';

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface SkillGroup {
  title: string;
  icon: IconType;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  status: string;
  imageTone: string;
  github: string;
  demo: string;
}

export interface TimelineItem {
  title: string;
  organisation: string;
  meta: string;
  details: string[];
}

export interface Certification {
  title: string;
  issuer: string;
}

export interface GalleryItem {
  title: string;
  category: string;
  tone: string;
}
